import {createMuiTheme } from '@material-ui/core/styles';
const neonGreen = "#39ff14"
const white = "#EDF5E1"
const cyan = "#33EAFF"


const Theme = createMuiTheme({
    typography: {
        fontFamily: "Montserrat",
        h1: {
            fontWeight: 900
        }
    },
    palette: {
        primary: {
            main: neonGreen
        },
        secondary: {
            main: white
        },
    },
    pcapImage: {
        position: 'relative',
        textAlign: 'center',
        color: 'white',
        width: '100%'
      },
    titleText: {
        color: white,    
        fontWeight: '650',
        fontSize: '5rem',
        textShadow: '1px 1px #EDF5E1',
      },
    overrides: {
        MuiInputBase: {
            input: {
                color: white
            }
        },
        MuiTab: {
            wrapper: {
                color: "#33eaff"
            }
        },
        MuiTabs: {
            indicator: {
                backgroundColor: "#33eaff"
            }
        }
    }
})


export default Theme;