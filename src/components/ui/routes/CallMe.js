import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from "@material-ui/core";

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
  textfieldStyle: {
    width: 300,
    [theme.breakpoints.down("xs")]: {
      width: "15rem"
    },
  },
  messageTextFieldStyle: {
    width: 650,
    [theme.breakpoints.down("xs")]: {
      width: "15rem",
    },
  },
}))

export default function CallMe() {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("xs"));

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
        spacing={8}
        >
          <Grid item>
              <Typography variant="h2" className={classes.titleText}>Call me</Typography>
          </Grid>
          <Grid item>
            <Grid 
              container 
              spacing={5}
              direction={isSmallScreen ? 'column' : 'row'}
              >
              <Grid item>
                <TextField id="first-name-field"  variant="outlined" placeholder="First Name" className={classes.textfieldStyle}/>
              </Grid>
              <Grid item>
                <TextField id="last-name-field"  variant="outlined" placeholder="Last Name" className={classes.textfieldStyle} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid 
              container 
              spacing={5} 
              direction={isSmallScreen ? 'column' : 'row'}
              > 
              <Grid item>
                <TextField id="email-field"  variant="outlined" placeholder="Email" className={classes.textfieldStyle}/>
              </Grid>
              <Grid item>
                <TextField id="confirm-email-field"  variant="outlined" placeholder="Confirm Email" className={classes.textfieldStyle}/>
              </Grid>
            </Grid>            
          </Grid>
          <Grid item>
            <Grid 
              container
              direction="column"
              justify={isSmallScreen ? "center": "flex-start"}
              alignItems={isSmallScreen ? "center": "flex-start"}
              spacing={5}
              // style={{width: 680}}
              >
              <Grid item>
                <TextField id="subject-field"  variant="outlined" placeholder="Subject" className={classes.textfieldStyle}/>
              </Grid>
              <Grid item>
                <TextField 
                      id="message-field" 
                      placeholder="Message"
                      variant="outlined" 
                      multiline
                      rows={isSmallScreen ? 14 : 8}
                      rowsMax={isSmallScreen ? 18 : 12}
                      className={classes.messageTextFieldStyle}
                      />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </div>
  )
}