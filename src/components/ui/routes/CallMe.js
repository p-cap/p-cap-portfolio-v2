import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%"
  },
  titleText: {
    ...theme.titleText
  },
  textfieldStyle: {
    width: 300
  }
}))

export default function CallMe() {
  const classes = useStyles();

  return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={4}
        >
          <Grid item>
              <Typography variant="h2" className={classes.titleText}>Call me</Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={5}>
              <Grid item>
                <TextField id="first-name-field"  variant="outlined" placeholder="First Name" className={classes.textfieldStyle}/>
              </Grid>
              <Grid item>
                <TextField id="last-name-field"  variant="outlined" placeholder="Last Name" style={{width: 300}}/>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={5} > 
              <Grid item>
                <TextField id="email-field"  variant="outlined" placeholder="Email"style={{width: 300}}/>
              </Grid>
              <Grid item>
                <TextField id="confirm-email-field"  variant="outlined" placeholder="Confirm Email" style={{width: 300}}/>
              </Grid>
            </Grid>            
          </Grid>
          <Grid item>
            <Grid 
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
              spacing={5}
              style={{width: 680}}
              >
              <Grid item>
                <TextField id="subject-field"  variant="outlined" placeholder="Subject" style={{width: 300}}/>
              </Grid>
              <Grid item>
                <TextField 
                      id="message-field" 
                      placeholder="Message"
                      variant="outlined" 
                      multiline
                      rows={8}
                      rowsMax={12}
                      style={{width: 650}}
                      />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
  )
}