import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  titleText: {
   ...theme.titleText,
    [theme.breakpoints.down("md")]: {
      fontSize: "4.0rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.20rem"
    },
  },
  paper: {
    height: 400,
    width: 400,
    [theme.breakpoints.down("md")]: {
      height: 350,
      width: 350,
    },
  [theme.breakpoints.down("sm")]: {
     height: 300,
     width: 300,
    },
  [theme.breakpoints.down("xs")]: {
     height: 200,
     width: 200,
     padding: "1rem"
    }
  }
}));


export default function Projects() {
  const classes = useStyles();

  return (
    <Grid 
        container 
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}>
        <Grid item>
          <Typography variant="h2" className={classes.titleText}>Projects</Typography>
        </Grid>
        <Grid item>
          <Grid 
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}>
            <Grid item>
              <Paper className={classes.paper} />
            </Grid>
            <Grid item>
              <Paper className={classes.paper} />
            </Grid>
            <Grid item>
              <Paper className={classes.paper} />
            </Grid>
          </Grid>
        </Grid>
    </Grid>
    )
}