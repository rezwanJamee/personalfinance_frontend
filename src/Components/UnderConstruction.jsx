import { Grid, Typography } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import construction from '../Assets/construction.png';

const useStyles = makeStyles((theme) => ({
    root: {
      paddingTop: '15rem',  
    },
    imageStyle:{
        width: '25rem',
    },
}));

export const UnderConstruction = () => {

    const classes = useStyles();
    return (
        <div>
            <Grid 
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                className={classes.root}
                >
                <Grid item>
                    <img src={construction} className={classes.imageStyle}/>
                    <br />
                    <Typography variant="body1">
                        Page under construction
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}
