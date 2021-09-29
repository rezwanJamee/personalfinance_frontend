import React from 'react';
import { Grid, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { WiDirectionUpRight, WiDirectionDownRight } from 'react-icons/wi';

const useStyles = makeStyles((theme) => ({
    pageTitle: {
        color: "#000",
        marginBottom: theme.spacing(1),
        textTransform: "capitalize",
    },
}));

const Statuscard = ({title, subTitle, amount, icon}) => {
    
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12} sm={12}>
                <Typography variant="h5" className={classes.cardTitle}>
                    {title}
                </Typography>
                <Typography variant="h1" className={classes.cardAmount}>
                    {amount}
                </Typography>
                <Typography variant="body2" className={classes.cardSubTitle}>
                    {subTitle}
                </Typography>
                <IconButton>
                    {icon ? <WiDirectionUpRight/>: <WiDirectionDownRight/>}
                </IconButton>
            </Grid>
        </Grid>
    )
}
export default Statuscard;