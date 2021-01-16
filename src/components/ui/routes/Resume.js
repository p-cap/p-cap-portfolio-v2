import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import ResumeInfo, { Certifications, Volunteer } from '../../Info/ResumeInfo';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
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
//   paper: {
//     height: 225,
//     width: 700,
//   },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Resume() {
  const classes = useStyles();

  return (
    <div>
      <br/>
      <br/>
      <br/>
      <Grid 
        container 
        direction="column"
        justify="center"
        alignItems="center"
        spacing={4}>
          <Grid item>
            <Typography variant="h2" className={classes.titleText}>Resume</Typography>
          </Grid>
              {ResumeInfo.map(info => (
                   <Grid item key={info.jobTitle}> 
                        <Paper elevation={23}>
                        <Box p={3}>
                            <Typography variant="h3">{info.jobTitle}</Typography>
                            <Typography variant="body1">{info.location}</Typography>
                            <Typography>{info.timeFrame}
                            <Typography variant="subtitle1"><li><a href="https://airmencoders.us/sdi/#cohort-4-22-feb">{info.jobItem1}</a></li></Typography>
                                <Typography variant="subtitle1">{info.jobItem1}</Typography>
                                <li>{info.jobItem2}</li>
                                <li>{info.jobItem3}</li>
                            </Typography>             
                        </Box>
                        </Paper>
                    </Grid>
            ))}
            <Grid item>
                <Paper elevation={23}>
                    <Typography variant="h3"> Education / Cerifications </Typography>
                        {Certifications.map(info=> (
                        <Box>
                            <Typography><li>{info}</li></Typography>
                        </Box>
                    ))}
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={23}>
                    <Typography variant="h3"> Volunteer / Opportunities </Typography>
                        {Volunteer.map(info => (
                        <Box>
                            <Typography><li>{info}</li></Typography>
                        </Box>
                    ))}
                </Paper>
            </Grid>
            
        </Grid>
        </div>
    )
}