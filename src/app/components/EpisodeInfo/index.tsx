import React from 'react';
import { CardContent, Typography } from '@material-ui/core';
import { EpisodeInitialState } from '~Types/Episode';
import { StyledCard } from './styled-components';

export const EpisodeInfo = props => {
  const { selectedEpisode } = props;
  return (
    <StyledCard className="scrolled">
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {`${selectedEpisode.episode} - ${selectedEpisode.name}`}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {selectedEpisode.air_date}
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          {selectedEpisode.characters.map((character, index) => {
            return <p key={character}>{character}</p>;
          })}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

EpisodeInfo.defaultProps = {
  selectedEpisode: EpisodeInitialState,
};
