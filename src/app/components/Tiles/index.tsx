import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { Character } from '~Types/Character';
import GridContent from '~Components/Tiles/Tiles/GridContent';

// TODO -> getting the characters list from props.
const Tiles = () => {
  const [apiResponse, setApiResponse] = useState([] as any);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/?page=1')
      .then(res => setApiResponse(res.data.results));
  }, []);

  return (
    <Grid container spacing={4}>
      {apiResponse.map((element: Character, index: number) => (
        <GridContent element={element} />
      ))}
    </Grid>
  );
};

export default Tiles;
