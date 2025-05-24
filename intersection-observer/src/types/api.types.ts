export interface RandomUserApiResponse {
  results: UserResult[];
  info: Info;
}

export interface UserResult {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Registered;
  phone: string;
  cell: string;
  id: ID;
  picture: Picture;
  nat: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: Coordinates;
  timezone: Timezone;
}

export interface Street {
  number: number;
  name: string;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Timezone {
  offset: string;
  description: string;
}

export interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface Dob {
  date: string; // ISO 8601 date string, e.g., "1972-06-13T13:48:44.408Z"
  age: number;
}

export interface Registered {
  date: string; // ISO 8601 date string, e.g., "2014-06-02T20:20:37.945Z"
  age: number;
}

export interface ID {
  name: string;
  value: string | null; // 'null' because sometimes the value can be null
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}