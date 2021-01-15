import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useMediaQuery } from "@material-ui/core";

// components 
import Me from './routes/Me';
import Projects from './routes/Projects';
import Resume from './routes/Resume';
import CallMe from './routes/CallMe';

// icons
import PhoneIcon from '@material-ui/icons/Phone';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import DesktopMacRoundedIcon from '@material-ui/icons/DesktopMacRounded';
import PictureAsPdfOutlinedIcon from '@material-ui/icons/PictureAsPdfOutlined';

// Routing
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 700,
  }
}));

export default function Bar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("xs"));

  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <BrowserRouter>
        <Paper square className={classes.root}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
              aria-label="icon tabs example"
            >
              <Tab icon={<PersonPinIcon />} component={Link} to="/me" aria-label="person" label={isSmallScreen ? null : "Me"}/>
              <Tab icon={<DesktopMacRoundedIcon />} component={Link} to="/projects" aria-label="mac" label={isSmallScreen ? null : "Projects"}/>
              <Tab icon={<PictureAsPdfOutlinedIcon />} component={Link} to="/resume" aria-label="pdf" label={isSmallScreen ? null : "Resume"}/>
              <Tab icon={<PhoneIcon />} component={Link} to="/callMe" aria-label="phone" label={isSmallScreen ? null : "Call Me"}/>
            </Tabs>
        </Paper>
        <Switch>
                <Route path="/me" component={Me}/>
                <Route exact path="/projects" component={Projects} />
                <Route path="/resume" component={Resume} />
                <Route path="/callMe" component={CallMe} />
       </Switch>

      </BrowserRouter>
    )
}