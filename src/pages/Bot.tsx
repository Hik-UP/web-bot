import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { FormControlLabel, Slider, Switch, TextField } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import LoadingButton from '@mui/lab/LoadingButton';

import { IUser, IHike } from '../ts';
import {
  getInvites,
  acceptInvite,
  refuseInvite,
  getHikes,
  deleteHike,
  getProfile
} from '../api';
import { Hike } from '../socket';

import './Bot.scss';

function BotPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [inviteLoading, setInviteLoading] = useState<string[] | undefined>(
    undefined
  );
  const [deleteLoading, setDeleteLoading] = useState<string | undefined>(
    undefined
  );
  const [startHikeLoading, setStartHikeLoading] = useState(false);
  const [endHikeLoading, setEndHikeLoading] = useState(false);
  const [invites, setInvites] = useState<IHike[] | undefined>(undefined);
  const [hikes, setHikes] = useState<IHike[] | undefined>(undefined);
  const [selectedHike, setSelectedHike] = useState<IHike | undefined>(
    undefined
  );
  const [inHike, setInHike] = useState(false);

  const [botSpeed, setBotSpeed] = useState(500);
  const [botLaps, setBotLaps] = useState(1);
  const [botInfiniteLaps, setBotInfiniteLaps] = useState(false);

  const user: IUser = JSON.parse(localStorage.getItem('user') || '');

  const hike = useRef(new Hike(user));

  const refresh = () => {
    setInvites(undefined);
    setHikes(undefined);
    setSelectedHike(undefined);
    getInvites(user).then((value: IHike[] | null) => {
      if (value !== null) {
        setInvites(value);
      } else {
        localStorage.removeItem('user');
        navigate('/', { replace: true });
      }
    });
    getHikes(user).then((value: IHike[] | null) => {
      if (value !== null) {
        setHikes(value);
      } else {
        localStorage.removeItem('user');
        navigate('/', { replace: true });
      }
    });
  };

  useEffect(() => {
    getInvites(user).then((value: IHike[] | null) => {
      if (value !== null) {
        setInvites(value);
      } else {
        localStorage.removeItem('user');
        navigate('/', { replace: true });
      }
    });
    getHikes(user).then((value: IHike[] | null) => {
      if (value !== null) {
        setHikes(value);
      } else {
        localStorage.removeItem('user');
        navigate('/', { replace: true });
      }
    });
  }, [loading]);

  useEffect(() => {
    if (hikes !== undefined && invites !== undefined) {
      setLoading(false);
      setInviteLoading(undefined);
      setDeleteLoading(undefined);
    } else {
      setLoading(true);
    }
  }, [invites, hikes]);

  useEffect(() => {
    if (selectedHike) {
      hike.current.setHike(selectedHike);
    }
  }, [selectedHike]);

  useEffect(() => {
    hike.current.setBotSpeed(botSpeed);
  }, [botSpeed]);

  useEffect(() => {
    hike.current.setBotLaps(botLaps);
  }, [botLaps]);

  useEffect(() => {
    hike.current.setBotInfiniteLaps(botInfiniteLaps);
  }, [botInfiniteLaps]);

  if (loading === true) {
    return (
      <div className="bot-page">
        <CircularProgress />
      </div>
    );
  } else {
    return (
      <div className="bot-page">
        <Paper className="bot-page__infos" elevation={1}>
          <h2 className="bot-page__infos__title">Hik'BOT</h2>
          <p className="bot-page__infos__user">{`Utilisateur: ${user.email}`}</p>
        </Paper>
        <Paper className="bot-page__invites" elevation={1}>
          <h2 className="bot-page__invites__title">Invitation(s)</h2>
          {invites !== undefined && invites.length > 0 ? (
            <List component="nav" aria-label="main mailbox folders">
              {invites.map((invite: IHike) => (
                <ListItem className="bot-page__invites__invite">
                  <p className="bot-page__invites__invite__name">
                    {invite.trail.name}
                  </p>
                  <p className="bot-page__invites__invite__date">
                    {invite.schedule}
                  </p>
                  <div className="bot-page__invites__invite__buttons">
                    <LoadingButton
                      variant="contained"
                      className="bot-page__invites__invite__buttons__accept"
                      disableElevation
                      loading={
                        inviteLoading !== undefined &&
                        inviteLoading.length === 2 &&
                        inviteLoading[0] === 'accept' &&
                        inviteLoading[1] === invite.id
                      }
                      disabled={
                        inHike ||
                        (inviteLoading !== undefined &&
                          inviteLoading.length === 2 &&
                          inviteLoading[0] === 'refuse' &&
                          inviteLoading[1] === invite.id)
                      }
                      color="success"
                      sx={{
                        marginTop: '5px'
                      }}
                      onClick={async () => {
                        setInviteLoading(['accept', invite.id]);
                        await acceptInvite(user, invite.id);
                        refresh();
                      }}
                    >
                      Accepter
                    </LoadingButton>
                    <LoadingButton
                      variant="contained"
                      className="bot-page__invites__invite__buttons__refuse"
                      disableElevation
                      loading={
                        inviteLoading !== undefined &&
                        inviteLoading.length === 2 &&
                        inviteLoading[0] === 'refuse' &&
                        inviteLoading[1] === invite.id
                      }
                      disabled={
                        inHike ||
                        (inviteLoading !== undefined &&
                          inviteLoading.length === 2 &&
                          inviteLoading[0] === 'accept' &&
                          inviteLoading[1] === invite.id)
                      }
                      color="error"
                      sx={{
                        marginTop: '5px'
                      }}
                      onClick={async () => {
                        setInviteLoading(['refuse', invite.id]);
                        await refuseInvite(user, invite.id);
                        refresh();
                      }}
                    >
                      Refuser
                    </LoadingButton>
                  </div>
                </ListItem>
              ))}
            </List>
          ) : (
            <p className="bot-page__invites__empty">Aucune invitation</p>
          )}
        </Paper>
        <Paper className="bot-page__hikes" elevation={1}>
          <h2 className="bot-page__hikes__title">Randonnée(s)</h2>
          {hikes !== undefined && hikes.length > 0 ? (
            <List component="nav" aria-label="main mailbox folders">
              {hikes.map((hike: IHike) => (
                <ListItemButton
                  className="bot-page__hikes__hike"
                  disabled={inHike}
                  selected={selectedHike?.id === hike.id}
                >
                  <p className="bot-page__hikes__hike__name">
                    {hike.trail.name}
                  </p>
                  <p className="bot-page__hikes__hike__date">{hike.schedule}</p>
                  <div className="bot-page__hikes__hike__buttons">
                    <LoadingButton
                      variant="contained"
                      className="bot-page__hikes__hike__buttons__select"
                      disableElevation
                      disabled={inHike}
                      loading={deleteLoading === hike.id}
                      color="success"
                      sx={{
                        marginTop: '5px'
                      }}
                      onClick={async () => {
                        setSelectedHike(hike);
                      }}
                    >
                      Sélectionner
                    </LoadingButton>
                    <LoadingButton
                      variant="contained"
                      className="bot-page__hikes__hike__buttons__remove"
                      disableElevation
                      disabled={inHike}
                      loading={deleteLoading === hike.id}
                      color="error"
                      sx={{
                        marginTop: '5px'
                      }}
                      onClick={async () => {
                        setDeleteLoading(hike.id);
                        await deleteHike(user, hike.id);
                        refresh();
                      }}
                    >
                      Supprimer
                    </LoadingButton>
                  </div>
                </ListItemButton>
              ))}
            </List>
          ) : (
            <p className="bot-page__hikes__empty">Aucune randonnée</p>
          )}
        </Paper>
        <Paper className="bot-page__controls" elevation={1}>
          <h2 className="bot-page__controls__title">Contrôles</h2>
          <div className="bot-page__controls__buttons">
            {inHike === false ? (
              <LoadingButton
                variant="contained"
                className="bot-page__controls__buttons__start"
                disableElevation
                loading={startHikeLoading}
                disabled={
                  (botInfiniteLaps === false &&
                    (botLaps < 1 || botLaps > 9999)) ||
                  selectedHike === undefined
                }
                color="success"
                sx={{
                  marginTop: '10px'
                }}
                onClick={async () => {
                  if (selectedHike) {
                    setStartHikeLoading(true);
                    hike.current.join({
                      onJoined: () => {
                        setStartHikeLoading(false);
                        setInHike(true);
                      },
                      onLeaved: () => {
                        setInHike(false);
                        setEndHikeLoading(false);
                      }
                    });
                  }
                }}
              >
                Démarrer
              </LoadingButton>
            ) : (
              <LoadingButton
                variant="contained"
                className="bot-page__controls__buttons__end"
                disableElevation
                loading={endHikeLoading}
                disabled={selectedHike === undefined}
                color="error"
                sx={{
                  marginTop: '10px'
                }}
                onClick={async () => {
                  if (inHike) {
                    setEndHikeLoading(true);
                    hike.current.quit();
                  }
                }}
              >
                Arrêter
              </LoadingButton>
            )}
            <LoadingButton
              variant="contained"
              className="bot-page__controls__buttons__start"
              disableElevation
              disabled={inHike}
              color="primary"
              sx={{
                marginTop: '10px'
              }}
              onClick={async () => {
                refresh();
              }}
            >
              Rafraichir
            </LoadingButton>
          </div>
          <h3 className="bot-page__controls__speed-title">Vitesse</h3>
          <Slider
            className="bot-page__controls__slider"
            disabled={selectedHike === undefined}
            value={botSpeed}
            onChange={(event: any) => {
              setBotSpeed(event.target.value);
            }}
            valueLabelDisplay="auto"
            step={50}
            marks={[
              { value: 250, label: '250ms' },
              { value: 500, label: '500ms' },
              { value: 750, label: '750ms' },
              { value: 1000, label: '1000ms' }
            ]}
            min={250}
            max={1000}
          />
          <h3 className="bot-page__controls__laps-title">Tours</h3>
          <div className="bot-page__controls__laps">
            <TextField
              className="bot-page__controls__laps__input"
              id="laps-number"
              value={botLaps}
              disabled={botInfiniteLaps || inHike}
              label="Nombre"
              variant="outlined"
              error={
                botInfiniteLaps === false && (botLaps < 1 || botLaps > 9999)
              }
              helperText={
                botInfiniteLaps === false && (botLaps < 1 || botLaps > 9999)
                  ? 'Entre 1 et 9999'
                  : null
              }
              onChange={(event: any) => {
                const regex = /^[0-9\b]+$/;

                if (event.target.value === '') {
                  setBotLaps(0);
                } else if (
                  event.target.value.length > 1 &&
                  event.target.value.charAt(0) === '0' &&
                  regex.test(event.target.value)
                ) {
                  setBotLaps(parseInt(event.target.value.substring(1)));
                } else if (regex.test(event.target.value)) {
                  setBotLaps(parseInt(event.target.value));
                }
              }}
            />
            <FormControlLabel
              control={
                <Switch
                  value={botInfiniteLaps}
                  disabled={inHike}
                  onChange={(event: any) =>
                    setBotInfiniteLaps(event.target.checked)
                  }
                />
              }
              label="Infini"
            />
          </div>
        </Paper>
        <LoadingButton
          variant="contained"
          className="bot-page__logout"
          disableElevation
          disabled={inHike}
          color="error"
          onClick={() => {
            localStorage.removeItem('user');
            navigate('/', { replace: true });
          }}
        >
          Déconnexion
        </LoadingButton>
      </div>
    );
  }
}

export { BotPage };
