import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Character } from '~Types/Character';
import GridContent from '~Components/Tiles/Tiles/GridContent';

// TODO -> getting the characters list from props.
const Tiles = () => {
  // Mocked Data
  const characters: Array<Character> = [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Unknown',
      species: 'Human',
      gender: 'Male',
      episode: [
        'https://rickandmortyapi.com/api/episode/1',
        'https://rickandmortyapi.com/api/episode/2',
        'https://rickandmortyapi.com/api/episode/3',
        'https://rickandmortyapi.com/api/episode/4',
        'https://rickandmortyapi.com/api/episode/5',
        'https://rickandmortyapi.com/api/episode/6',
        'https://rickandmortyapi.com/api/episode/7',
        'https://rickandmortyapi.com/api/episode/8',
        'https://rickandmortyapi.com/api/episode/9',
        'https://rickandmortyapi.com/api/episode/10',
        'https://rickandmortyapi.com/api/episode/11',
        'https://rickandmortyapi.com/api/episode/12',
        'https://rickandmortyapi.com/api/episode/13',
        'https://rickandmortyapi.com/api/episode/14',
        'https://rickandmortyapi.com/api/episode/15',
        'https://rickandmortyapi.com/api/episode/16',
        'https://rickandmortyapi.com/api/episode/17',
        'https://rickandmortyapi.com/api/episode/18',
        'https://rickandmortyapi.com/api/episode/19',
        'https://rickandmortyapi.com/api/episode/20',
        'https://rickandmortyapi.com/api/episode/21',
        'https://rickandmortyapi.com/api/episode/22',
        'https://rickandmortyapi.com/api/episode/23',
      ],
      location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    },
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Dead',
      species: 'Human',
      gender: 'Male',
      episode: [
        'https://rickandmortyapi.com/api/episode/1',
        'https://rickandmortyapi.com/api/episode/2',
        'https://rickandmortyapi.com/api/episode/3',
        'https://rickandmortyapi.com/api/episode/4',
        'https://rickandmortyapi.com/api/episode/5',
        'https://rickandmortyapi.com/api/episode/6',
        'https://rickandmortyapi.com/api/episode/7',
        'https://rickandmortyapi.com/api/episode/8',
        'https://rickandmortyapi.com/api/episode/9',
        'https://rickandmortyapi.com/api/episode/10',
      ],
      location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    },
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      episode: [
        'https://rickandmortyapi.com/api/episode/1',
        'https://rickandmortyapi.com/api/episode/2',
        'https://rickandmortyapi.com/api/episode/3',
        'https://rickandmortyapi.com/api/episode/4',
        'https://rickandmortyapi.com/api/episode/5',
        'https://rickandmortyapi.com/api/episode/6',
        'https://rickandmortyapi.com/api/episode/7',
        'https://rickandmortyapi.com/api/episode/8',
      ],
      location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    },
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      episode: [
        'https://rickandmortyapi.com/api/episode/1',
        'https://rickandmortyapi.com/api/episode/2',
        'https://rickandmortyapi.com/api/episode/3',
        'https://rickandmortyapi.com/api/episode/4',
        'https://rickandmortyapi.com/api/episode/5',
        'https://rickandmortyapi.com/api/episode/6',
        'https://rickandmortyapi.com/api/episode/7',
        'https://rickandmortyapi.com/api/episode/8',
        'https://rickandmortyapi.com/api/episode/9',
        'https://rickandmortyapi.com/api/episode/10',
        'https://rickandmortyapi.com/api/episode/11',
        'https://rickandmortyapi.com/api/episode/12',
        'https://rickandmortyapi.com/api/episode/13',
        'https://rickandmortyapi.com/api/episode/14',
        'https://rickandmortyapi.com/api/episode/15',
        'https://rickandmortyapi.com/api/episode/16',
        'https://rickandmortyapi.com/api/episode/17',
        'https://rickandmortyapi.com/api/episode/18',
        'https://rickandmortyapi.com/api/episode/19',
        'https://rickandmortyapi.com/api/episode/20',
        'https://rickandmortyapi.com/api/episode/21',
        'https://rickandmortyapi.com/api/episode/22',
        'https://rickandmortyapi.com/api/episode/23',
        'https://rickandmortyapi.com/api/episode/24',
        'https://rickandmortyapi.com/api/episode/25',
        'https://rickandmortyapi.com/api/episode/26',
        'https://rickandmortyapi.com/api/episode/27',
        'https://rickandmortyapi.com/api/episode/28',
        'https://rickandmortyapi.com/api/episode/29',
        'https://rickandmortyapi.com/api/episode/30',
        'https://rickandmortyapi.com/api/episode/31',
      ],
      location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    },
  ];

  return (
    <Grid container spacing={4}>
      {characters.map((element: Character) => (
        <GridContent element={element} key={element.id} />
      ))}
    </Grid>
  );
};

export default Tiles;
