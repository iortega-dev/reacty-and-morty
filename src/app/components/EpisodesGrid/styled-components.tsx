import styled from 'styled-components';
import { Grid, CircularProgress } from '@material-ui/core';

export const AbsoluteLoading = styled(CircularProgress)`
  position: absolute;
  top: 100px;
`;

export const RowCentered = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const EpisodesGridContainer = styled(Grid)``;

export const EpisodeGridCell = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  font-family: 'Futurama Alien';
  font-size: 45pt;
  color: black;
  text-shadow: 2px 5px 1px #8bcf21;
  transition: all 0.9s ease-in-out;
  span:hover {
    cursor: pointer;
    color: #0ae12f;
    text-shadow: 2px 5px 1px #4e8b10;
  }
`;
