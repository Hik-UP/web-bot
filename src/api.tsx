import { IUser, IHike } from './ts';

async function getInvites(user: IUser) {
  const response = await fetch(
    'https://pro-hikup.westeurope.cloudapp.azure.com/api/user/hike/retrieve',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`
      },
      body: JSON.stringify({
        user: user.payload,
        hike: {
          target: ['guest']
        }
      })
    }
  );
  const { hikes } = await response.json();

  return hikes.guest.sort(function (a: IHike, b: IHike) {
    return new Date(b.schedule).valueOf() - new Date(a.schedule).valueOf();
  });
}

async function acceptInvite(user: IUser, hikeId: string) {
  await fetch(
    'https://pro-hikup.westeurope.cloudapp.azure.com/api/user/hike/guest/accept',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`
      },
      body: JSON.stringify({
        user: user.payload,
        hike: {
          id: hikeId
        }
      })
    }
  );
}

async function refuseInvite(user: IUser, hikeId: string) {
  await fetch(
    'https://pro-hikup.westeurope.cloudapp.azure.com/api/user/hike/guest/refuse',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`
      },
      body: JSON.stringify({
        user: user.payload,
        hike: {
          id: hikeId
        }
      })
    }
  );
}

async function getHikes(user: IUser) {
  const hikes: IHike[] = [];
  const response = await fetch(
    'https://pro-hikup.westeurope.cloudapp.azure.com/api/user/hike/retrieve',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`
      },
      body: JSON.stringify({
        user: user.payload,
        hike: {
          target: ['organized', 'attendee']
        }
      })
    }
  );
  const data = await response.json();

  data.hikes.organized.forEach((hike: IHike) => {
    hikes.push(hike);
  });
  data.hikes.attendee.forEach((hike: IHike) => {
    hikes.push(hike);
  });

  return hikes
    .filter(
      (value, index, self) => index === self.findIndex((t) => t.id === value.id)
    )
    .sort(function (a: IHike, b: IHike) {
      return new Date(b.schedule).valueOf() - new Date(a.schedule).valueOf();
    });
}

async function deleteHike(user: IUser, hikeId: string) {
  await fetch(
    'https://pro-hikup.westeurope.cloudapp.azure.com/api/user/hike/attendee/leave',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`
      },
      body: JSON.stringify({
        user: user.payload,
        hike: {
          id: hikeId
        }
      })
    }
  );
  await fetch(
    'https://pro-hikup.westeurope.cloudapp.azure.com/api/user/hike/attendee/remove',
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`
      },
      body: JSON.stringify({
        user: user.payload,
        hike: {
          id: hikeId
        }
      })
    }
  );
  await fetch(
    'https://pro-hikup.westeurope.cloudapp.azure.com/api/user/hike/organizer/leave',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`
      },
      body: JSON.stringify({
        user: user.payload,
        hike: {
          id: hikeId
        }
      })
    }
  );
  await fetch(
    'https://pro-hikup.westeurope.cloudapp.azure.com/api/user/hike/organizer/remove',
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`
      },
      body: JSON.stringify({
        user: user.payload,
        hike: {
          id: hikeId
        }
      })
    }
  );
}

export { getInvites, acceptInvite, refuseInvite, getHikes, deleteHike };
