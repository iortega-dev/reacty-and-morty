import React from 'react';
import { CardContent, Typography } from '@material-ui/core';
import { CharacterLocation } from '~Types/Character';

// TODO -> links to location using route

const LocationInformation = (props: { location: CharacterLocation }) => {
  const { location } = props;
  return (
    <CardContent>
      <Typography gutterBottom variant={'h5'} component={'h2'}>
        Location
      </Typography>
      <hr/>
      <p>
        {location.name} -> {location.url}
      </p>
    </CardContent>
  );
};

export default LocationInformation;
