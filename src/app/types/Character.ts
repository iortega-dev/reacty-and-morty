export type Location = {
  name: string;
  url: string;
};

export type Character = {
  id: number;
  gender: string;
  name: string;
  species: string;
  status: string;
  image: string;
  episode: Array<string>;
  location: Location;
};
