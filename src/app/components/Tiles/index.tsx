import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import image from '~Assets/img/rickandmortyimage.jpg';
import {
  ImageContainer,
  GridImage,
  IconsContainer,
  InformationList,
  InformationListElement,
  Characteristic,
  CustomPlaceOutlinedIcon,
  CustomMovieIcon,
} from '~Styles/Tiles/Styles';

const Tiles = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        <Card>
          <CardContent>
            <Grid item xs={12} sm container direction={'row'}>
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <ImageContainer>
                  <GridImage src={image} />
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
                    <InformationListElement>
                      <Characteristic>Name: </Characteristic>
                      Esto es una prueba con un nombre largo
                    </InformationListElement>
                    <InformationListElement>
                      <Characteristic>Status: </Characteristic>
                      Alive
                    </InformationListElement>
                    <InformationListElement>
                      <Characteristic>Gender: </Characteristic>
                      Male
                    </InformationListElement>
                    <InformationListElement>
                      <Characteristic>Specie: </Characteristic>
                      Esto es un nombre de especie algo más largo de lo esperado
                    </InformationListElement>
                  </InformationList>
                </Grid>
              </Grid>
              <Grid xs={1} sm={1} md={1} lg={1} xl={1} item>
                <IconsContainer>
                  <CustomPlaceOutlinedIcon
                    fontSize={'large'}
                    onClick={() => {
                      console.log('Se ha clickado en el icono de place');
                    }}
                  />
                  <CustomMovieIcon
                    fontSize={'large'}
                    onClick={() => {
                      console.log('Se ha clickado en el icono de movie');
                    }}
                  />
                </IconsContainer>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        <Card>
          <CardContent>
            <Grid item xs={12} sm container direction={'row'}>
              <Grid item xs={3}>
                Imagen
              </Grid>
              <Grid item xs={7} container direction={'column'} spacing={2}>
                <Grid item xs>
                  <Typography>Name: Prueba</Typography>
                  <Typography>Status: Prueba</Typography>
                  <Typography>Gender: Prueba</Typography>
                  <Typography>Specie: Prueba</Typography>
                </Grid>
              </Grid>
              <Grid xs={1} item>
                <Typography>Icono 1</Typography>
                <Typography>Icono 2</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        <Card>
          <CardContent>
            <Grid item xs={12} sm container direction={'row'}>
              <Grid item xs={3}>
                Imagen
              </Grid>
              <Grid item xs={7} container direction={'column'} spacing={2}>
                <Grid item xs>
                  <Typography>Name: Prueba</Typography>
                  <Typography>Status: Prueba</Typography>
                  <Typography>Gender: Prueba</Typography>
                  <Typography>Specie: Prueba</Typography>
                </Grid>
              </Grid>
              <Grid xs={1} item>
                <Typography>Icono 1</Typography>
                <Typography>Icono 2</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        <Card>
          <CardContent>
            <Grid item xs={12} sm container direction={'row'}>
              <Grid item xs={4}>
                Imagen
              </Grid>
              <Grid item xs={7} container direction={'column'} spacing={2}>
                <Grid item xs>
                  <Typography>Name: Prueba</Typography>
                  <Typography>Status: Prueba</Typography>
                  <Typography>Gender: Prueba</Typography>
                  <Typography>Specie: Prueba</Typography>
                </Grid>
              </Grid>
              <Grid xs={1} item>
                <Typography>Icono 1</Typography>
                <Typography>Icono 2</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Tiles;
