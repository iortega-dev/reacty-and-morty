type Gender = 'Female' | 'Male' | 'Genderless' | 'unkwnown';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: Gender;
  origin: object;
  location: object;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
