import { Socket, io } from 'socket.io-client';

import { IUser, IHike } from './ts';
import { useRef } from 'react';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function toRadians(degrees: number) {
  return (degrees * Math.PI) / 180;
}

function toDegrees(radians: number) {
  return (radians * 180) / Math.PI;
}

function bearing(
  startLat: number,
  startLng: number,
  destLat: number,
  destLng: number
) {
  startLat = toRadians(startLat);
  startLng = toRadians(startLng);
  destLat = toRadians(destLat);
  destLng = toRadians(destLng);

  const y = Math.sin(destLng - startLng) * Math.cos(destLat);
  const x =
    Math.cos(startLat) * Math.sin(destLat) -
    Math.sin(startLat) * Math.cos(destLat) * Math.cos(destLng - startLng);
  let brng = Math.atan2(y, x);

  brng = toDegrees(brng);
  return (brng + 360) % 360;
}

function createSocket(user: IUser) {
  const socket = io('https://pro-hikup.westeurope.cloudapp.azure.com', {
    autoConnect: false,
    transports: ['websocket'],
    auth: {
      token: user.token,
      id: user.payload.id,
      roles: user.payload.roles.join(',')
    }
  });

  return socket;
}

class Hike {
  readonly socket: Socket;
  readonly user: IUser;

  private hike: IHike | undefined;
  private botSpeed = useRef(500);
  private botLaps = useRef(1);
  private botInfiniteLaps = useRef(false);
  private isHikeRunning = useRef(false);

  constructor(user: IUser) {
    this.socket = createSocket(user);
    this.user = user;
  }

  private start() {
    this.socket.connect();
    this.isHikeRunning.current = true;
  }

  private stop() {
    this.socket.disconnect();
    this.isHikeRunning.current = false;
  }

  setHike(hike: IHike) {
    this.hike = hike;
  }

  setBotSpeed(speed: number) {
    if (speed >= 250 && speed <= 1000) {
      this.botSpeed.current = speed;
    }
  }

  setBotLaps(laps: number) {
    if (laps >= 1 && laps <= 9999) {
      this.botLaps.current = laps;
    }
  }

  setBotInfiniteLaps(isInfinite: boolean) {
    this.botInfiniteLaps.current = isInfinite;
  }

  async join(params: { onJoined: () => void; onLeaved: () => void }) {
    if (this.hike === undefined || this.isHikeRunning.current === true) {
      return;
    } else {
      this.start();
    }

    const hikeGeoJSON = JSON.parse(this.hike.trail.geoJSON);
    const data = {
      skinState: 0,
      steps: 0,
      distance: 0,
      completed: false
    };

    const response = await this.socket.emitWithAck('hike:hiker:join', {
      data: {
        hike: { id: this.hike.id },
        hiker: {
          latitude: this.hike.trail.latitude,
          longitude: this.hike.trail.longitude
        }
      }
    });

    if (response && params.onJoined) {
      params.onJoined();
    }

    this.socket.on('disconnect', () => {
      if (params.onLeaved) {
        params.onLeaved();
      }
    });

    for (
      let j = 0;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.isHikeRunning.current === true &&
      (j < this.botLaps.current || this.botInfiniteLaps.current === true);
      j += 1
    ) {
      for (
        let i = 0;
        i < hikeGeoJSON.features[0].geometry.coordinates.length &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.isHikeRunning.current === true;
        i += 1
      ) {
        if (i !== 0) {
          const newLat = hikeGeoJSON.features[0].geometry.coordinates[i][1];
          const newLon = hikeGeoJSON.features[0].geometry.coordinates[i][0];
          const oldLat = hikeGeoJSON.features[0].geometry.coordinates[i - 1][1];
          const oldLon = hikeGeoJSON.features[0].geometry.coordinates[i - 1][0];
          const direction = bearing(oldLat, oldLon, newLat, newLon);

          if ((direction >= 315 || direction < 45) && data.skinState != 6) {
            // UP
            data.skinState = 6;
            this.socket.emit('hike:hiker:animate', {
              data: {
                hiker: {
                  skinState: data.skinState
                }
              }
            });
          } else if (
            direction >= 45 &&
            direction < 135 &&
            data.skinState != 7
          ) {
            // RIGHT
            data.skinState = 7;
            this.socket.emit('hike:hiker:animate', {
              data: {
                hiker: {
                  skinState: data.skinState
                }
              }
            });
          } else if (
            direction >= 135 &&
            direction < 225 &&
            data.skinState != 4
          ) {
            // DOWN
            data.skinState = 4;
            this.socket.emit('hike:hiker:animate', {
              data: {
                hiker: {
                  skinState: data.skinState
                }
              }
            });
          } else if (
            direction >= 225 &&
            direction < 315 &&
            data.skinState != 5
          ) {
            // LEFT
            data.skinState = 5;
            this.socket.emit('hike:hiker:animate', {
              data: {
                hiker: {
                  skinState: data.skinState
                }
              }
            });
          }
        }
        data.steps = data.steps + 50;
        data.distance = data.distance + 10;
        this.socket.emit('hike:hiker:move', {
          data: {
            hiker: {
              latitude: hikeGeoJSON.features[0].geometry.coordinates[i][1],
              longitude: hikeGeoJSON.features[0].geometry.coordinates[i][0],
              stats: {
                steps: data.steps,
                distance: data.distance,
                completed: data.completed
              }
            }
          }
        });
        await sleep(this.botSpeed.current);
      }
    }
    this.stop();
  }

  quit() {
    this.isHikeRunning.current = false;
  }
}

export { createSocket, Hike };
