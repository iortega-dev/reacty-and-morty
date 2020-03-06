import React from 'react';
import { CardContent, Typography } from '@material-ui/core';
import { Episode, EpisodesContent } from '~Styles/Tiles/Styles';

// TODO -> links to episode using route

const EpisodeInformation = (props: { episodes: Array<string> }) => {
  const { episodes } = props;
  return (
    <CardContent>
      <Typography gutterBottom variant={'h5'} component={'h2'}>
        Episodes
      </Typography>
      <hr/>
      <EpisodesContent>
        {episodes.map((element: string, index: number) => {
          return <Episode>{index}</Episode>;
        })}
      </EpisodesContent>
    </CardContent>
  );
};

export default EpisodeInformation;
