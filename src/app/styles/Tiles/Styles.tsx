import styled from 'styled-components';
import { PlaceOutlined, Movie } from '@material-ui/icons';
import { Card } from '@material-ui/core';

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
  padding-top: 10px;
  padding-left: 15px;
  margin: 0;
  list-style: none;
`;

export const InformationListElement = styled.li`
  padding-bottom: 5px;

  &:before {
    background-image: url(${props => props.property});
    background-size: 25px 25px;
    display: inline-block;
    height: 25px;
    width: 25px;
    content: '';
  }
`;

export const Characteristic = styled.span`
  font-weight: bold;
`;

export const CustomPlaceOutlinedIcon = styled(PlaceOutlined)`
  color: #1b6470;
`;

export const CustomMovieIcon = styled(Movie)`
  color: #1b6470;
  margin-bottom: 10px;
`;

export const CustomStatus = styled.span`
  color: ${props =>
    props.children?.toString() === 'Alive'
      ? '#33ac3a'
      : props.children?.toString() === 'Dead'
      ? '#d71a3d'
      : 'grey'};
`;

export const CustomCard = styled(Card)`
  background-color: #fbf0dc;
  &.lower-card {
    background-color: white;
  }
  &.border-top-rect {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
  &.border-bottom-rect {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const CardContainer = styled.div`
  display: ${props => (props.property === 'true' ? 'block' : 'none')};
  -moz-transition: opacity 300ms ease-in-out;
  -o-transition: opacity 300ms ease-in-out;
  -webkit-transition: opacity 300ms ease-in-out;
  transition: opacity 300ms ease-in-out;
`;
