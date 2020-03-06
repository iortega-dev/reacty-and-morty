export type CharacterLocation = {
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
  location: CharacterLocation;
};
