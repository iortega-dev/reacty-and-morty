import styled from 'styled-components';
import { Card } from '@material-ui/core';

export const StyledCard = styled(Card)`
  max-height: 90vh;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65%;
  &.scrolled {
    overflow: auto;
  }
  p {
    word-break: break-all;
  }
`;
