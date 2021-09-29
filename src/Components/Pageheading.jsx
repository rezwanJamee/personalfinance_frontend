import { Grid, Typography } from '@material-ui/core'
import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { blueGrey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    pageTitle: {
        color: blueGrey[800],
        marginBottom: theme.spacing(1),
        textTransform: "capitalize",
    },
    pageSubTitle: {
        color: blueGrey[500],
        textTransform: "Uppercase",
    },
}));

const Pageheading = ({subtitle, pageTitle}) => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12} sm={12}>
                <Typography variant="h5" className={classes.pageTitle}>
                    {pageTitle}
                </Typography>
                <Typography variant="body2" className={classes.pageSubTitle}>
                    {subtitle}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Pageheading
