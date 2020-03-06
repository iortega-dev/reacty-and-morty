import React from 'react';
import { CardContent } from '@material-ui/core';
import { CharacterLocation } from '~Types/Character';

const LocationInformation = (props: { location: CharacterLocation }) => {
  const { location } = props;
  console.log(location);
  return (
    <CardContent>
      <p>
        {location.name},{location.url}
      </p>
    </CardContent>
  );
};

export default LocationInformation;
