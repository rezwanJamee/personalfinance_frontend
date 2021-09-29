import { Grid, Typography } from '@material-ui/core'
import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { blueGrey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    cardRoot:{
        padding: '1rem',
    },    
    pageTitle: {
        color: blueGrey[800],
        textAlign: 'center',
        marginBottom: theme.spacing(1),
    },
    cardAmount: {
        color: '#020024',
        fontSize: '3rem',
        fontWeight: '500',
        textAlign: 'center',
        paddingBottom: '1rem',
        
    },
    pageSubTitle: {
        color: blueGrey[500],
        textTransform: "Uppercase",
        textAlign: 'center',
        fontSize: '1rem',
    },
}));

const Status = ({title, subTitle, amount }) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.cardRoot}>
            <Grid item xs={12} sm={12}>
                <Typography variant="h5" className={classes.pageTitle}>
                    {title}
                </Typography>
                <Typography variant="h3" className={classes.cardAmount}>
                    $ {amount}
                </Typography>
                <Typography variant="body2" className={classes.pageSubTitle}>
                    
                    {subTitle}
                </Typography>
                
            </Grid>
        </Grid>
    )
}

export default Status