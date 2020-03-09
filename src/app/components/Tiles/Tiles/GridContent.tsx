import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { CardContent } from '@material-ui/core';
import { Character } from '~Types/Character';
import {
  CardContainer,
  Characteristic,
  CustomCard,
  CustomMovieIcon,
  CustomPlaceOutlinedIcon,
  CustomStatus,
  GridImage,
  IconsContainer,
  ImageContainer,
  InformationList,
  InformationListElement,
} from '~Styles/Tiles/Styles';
import mortyFace from '~Assets/img/morty-ul-v2.png';
import LocationInformation from '~Components/Tiles/Tiles/LocationInformation';
import EpisodeInformation from '~Components/Tiles/Tiles/EpisodeInformation';

const GridContent = (props: { element: Character }) => {
  const [showEpisodeList, setShowEpisodeList] = useState(false);
  const [showLocationList, setShowLocationList] = useState(false);
  const { element } = props;
  return (
    <Grid
      container
      item
      xs={12}
      sm={6}
      md={4}
      lg={4}
      xl={4}
      key={element.id}
      direction={'column'}
    >
      <CustomCard
        className={
          showEpisodeList || showLocationList ? 'border-bottom-rect' : ''
        }
      >
        <CardContent>
          <Grid item xs={12} sm container direction={'row'}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <ImageContainer>
                <GridImage src={element.image} />
              </ImageContainer>
            </Grid>
            <Grid
              item
              xs={11}
              sm={11}
              md={7}
              lg={7}
              xl={7}
              container
              direction={'column'}
              spacing={2}
            >
              <Grid item xs>
                <InformationList>
                  <InformationListElement property={mortyFace}>
                    <Characteristic>Name: </Characteristic>
                    {element.name}
                  </InformationListElement>
                  <InformationListElement property={mortyFace}>
                    <Characteristic>Status: </Characteristic>
                    <CustomStatus>{element.status}</CustomStatus>
                  </InformationListElement>
                  <InformationListElement property={mortyFace}>
                    <Characteristic>Gender: </Characteristic>
                    {element.gender}
                  </InformationListElement>
                  <InformationListElement property={mortyFace}>
                    <Characteristic>Specie: </Characteristic>
                    {element.species}
                  </InformationListElement>
                </InformationList>
              </Grid>
            </Grid>
            <Grid xs={1} sm={1} md={1} lg={1} xl={1} item>
              <IconsContainer>
                <CustomPlaceOutlinedIcon
                  fontSize={'large'}
                  onClick={() => {
                    setShowLocationList(!showLocationList);
                    showEpisodeList && setShowEpisodeList(false);
                  }}
                />
                <CustomMovieIcon
                  fontSize={'large'}
                  onClick={() => {
                    setShowEpisodeList(!showEpisodeList);
                    showLocationList && setShowLocationList(false);
                  }}
                />
              </IconsContainer>
            </Grid>
          </Grid>
        </CardContent>
      </CustomCard>
      <CardContainer property={showLocationList.toString()}>
        <CustomCard className="lower-card border-top-rect">
          <LocationInformation location={element.location} />
        </CustomCard>
      </CardContainer>
      <CardContainer property={showEpisodeList.toString()}>
        <CustomCard className="lower-card border-top-rect">
          <EpisodeInformation episodes={element.episode} />
        </CustomCard>
      </CardContainer>
    </Grid>
  );
};

export default GridContent;
