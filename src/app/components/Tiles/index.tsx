import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';

const Tiles = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
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
      <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
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
      <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
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
      <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
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
