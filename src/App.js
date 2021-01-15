import { Grid, ThemeProvider } from '@material-ui/core';
import React from 'react'
import Pcap from './components/ui/Pcap'
import Bar from './components/ui/Bar'
import theme from './Theme/Theme'
import Einstein from './components/ui/Einstein';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={4}
        >
          <Grid item>
                  <Pcap/>
          </Grid>
          <Grid item>
                  <Einstein />
          </Grid>
          <Grid item>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
              <Bar/>
            </Grid>
          </Grid>
      </Grid>
    </div>
    </ThemeProvider>
  );
}

export default App;


// The grid containter is the same as my div 