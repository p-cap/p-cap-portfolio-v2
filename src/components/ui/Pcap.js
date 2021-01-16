import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    title: { //h1 is 6 rem
        [theme.breakpoints.down('md')]: {
            fontSize: "5rem"
        }, 
        [theme.breakpoints.down('sm')]: {
            fontSize: "4rem"
        }, 
        [theme.breakpoints.down('xs')]: {
            fontSize: "1.5rem"
        },   
        textShadow: '2px 2px #000000',
        ...theme.otherFont
    }, 

   
}))

export default function Pcap() {
    const classes = useStyles()
    return (
        <div>
            <Typography className={classes.title} variant="h1" color="primary" >Paul "@P-cap" Capili</Typography>
        </div>
    )
}