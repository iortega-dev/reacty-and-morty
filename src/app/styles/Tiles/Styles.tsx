import styled from 'styled-components';
import { PlaceOutlined, Movie } from '@material-ui/icons';

export const ImageContainer = styled.div`
  margin: auto;
  display: block;
  max-width: 100%;
  max-height: 100%;
  padding-right: 10px;
  padding-left: 10px;
`;

export const GridImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: fill;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-left: 15px;
  height: 100%;
`;

export const InformationList = styled.ul`
  padding-left: 15px;
  margin: 0;
`;

export const InformationListElement = styled.li`
  padding-bottom: 5px;
`;

export const Characteristic = styled.span`
  font-weight: bold;
`;

export const CustomPlaceOutlinedIcon = styled(PlaceOutlined)`
  color: #1f98a9;
`;

export const CustomMovieIcon = styled(Movie)`
  color: #1f98a9;
  margin-bottom: 10px;
`;

export const CustomStatus = styled.span`
  color: ${props =>
    props.children?.toString() === 'Alive'
      ? '#33ac3a'
      : props.children?.toString() === 'Dead'
      ? '#d71a3d'
      : 'black'};
`;
