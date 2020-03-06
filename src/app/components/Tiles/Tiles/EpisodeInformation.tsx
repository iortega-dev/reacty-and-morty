import React from 'react';
import { CardContent } from '@material-ui/core';

const EpisodeInformation = (props: { episodes: Array<string> }) => {
  const { episodes } = props;
  return <CardContent>{episodes}</CardContent>;
};

export default EpisodeInformation;
