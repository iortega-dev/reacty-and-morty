import React from 'react';
import { CardContent } from '@material-ui/core';
import { Location } from '~Types/Character';

const LocationInformation = (props: { location: Location }) => {
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
