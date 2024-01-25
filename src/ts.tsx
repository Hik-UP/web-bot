interface IUser {
  token: string;
  payload: {
    id: string;
    roles: string[];
  };
  email: string;
}

interface IUserPublicProfile {
  username: string;
  picture: string;
}

interface ITrailComment {
  id: string;
  author: {
    username: string;
    picture: string;
  };
  body: string;
  pictures: string[];
  date: string;
}

interface ITrail {
  id: string;
  name: string;
  address: string;
  description: string;
  pictures: string[];
  latitude: number;
  longitude: number;
  difficulty: number;
  duration: number;
  distance: number;
  uphill: number;
  downhill: number;
  tools: string[];
  relatedArticles: string[];
  labels: string[];
  geoJSON: string;
  comments: ITrailComment[];
}

interface IHikeCoins {
  id: string;
  latitude: number;
  longitude: number;
}

interface IHikeStats {
  user: IUserPublicProfile;
  steps: number;
  distance: number;
  completed: boolean;
}

interface IHike {
  id: string;
  name: string;
  description: string;
  coins: IHikeCoins[];
  trail: ITrail;
  organizers: IUserPublicProfile[];
  attendees: IUserPublicProfile[];
  guests: IUserPublicProfile[];
  stats: IHikeStats[];
  status: 'SCHEDULED' | 'IN_PROGRESS' | 'DONE';
  schedule: string;
  createdAt: string;
}

interface IHikes {
  organized: IHike[] | null;
  attendee: IHike[] | null;
}

export {
  IUser,
  IUserPublicProfile,
  ITrailComment,
  ITrail,
  IHikeCoins,
  IHikeStats,
  IHike,
  IHikes
};
