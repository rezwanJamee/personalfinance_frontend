import React from 'react'
import Pageheading from '../Components/Pageheading';
import { makeStyles } from '@material-ui/core/styles';
import { Fab, Grid, IconButton, Paper, Typography } from '@material-ui/core';
import { CgMathPlus } from 'react-icons/cg';
import { NavLink } from "react-router-dom";
import Status from '../Components/Status';
import { WiDirectionUpRight, WiDirectionDownRight } from 'react-icons/wi';
import DashChart from '../Components/DashChart';
import DashCategory from '../Components/DashCategry';
import DashSnackbar from '../Components/DashSnackbar';

const useStyles = makeStyles((theme) => ({
    welcomebox: {
      padding: '2rem',
      marginBottom: '2rem',
      backgroundColor: '#0093E9',
      backgroundImage: "linear-gradient(180deg, #0093E9 0%, #80D0C7 100% )",      
    },
    welcometext: {
        fontSize: '1.2rem',
        fontWeight: '550',
    },
    fabIcon:{
        color: '#fff',
        backgroundColor: '#001D3D',
        "&:hover": {
            color: '#fff',
            backgroundColor: '#023E8A',
        },
    },
    fabBtn:{
        position: 'fixed',
        bottom: '2.5rem',
        right: '2.5rem',
    },
    todayDate:{
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
        color: '#8c8c8c',
    },
    upFlag:{
        backgroundColor: '#8cc',
        marginLeft: '1rem',
        marginTop: '3.5rem',
        "&:hover": {
            color: '#020024',
            backgroundColor: '#8cc',
        },
    },
    downFlag:{
        backgroundColor: '#ed4545',
        marginLeft: '1rem',
        marginTop: '3.5rem',
        "&:hover": {
            color: '#020024',
            backgroundColor: '#ed4545',
        },
    },
}));


const incomeFlag = false;
const expenseFlag = true;

const Dashboard = () => {

    const classes = useStyles();
    return (
        <div>
            <DashSnackbar />
            {/* <Paper className={classes.welcomebox}>
                <Typography variant="h3" noWrap  className={classes.welcometext}>Welcome back,</Typography>
                <Typography className={classes.welcometext}>Rifat <GiHand size={25} style={{color: '#f5c242' }}/> </Typography>
            </Paper> */}

            <Pageheading subtitle="dashboard" pageTitle="Overview" />

            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={4}>
                    <Paper>
                        <Status title="Total balance" subTitle="Since last update" amount="2509.43" />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper>
                        <Grid container direction="row">
                            <Grid item >
                                <IconButton className={classes.upFlag}>
                                    { incomeFlag ? <WiDirectionDownRight/> : < WiDirectionUpRight /> }
                                </IconButton>
                            </Grid>
                            <Grid item >
                                <Status title="Income this month" subTitle="+ 2.6 %" amount="1500.00" up={false}/>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper>
                        <Grid container direction="row">
                            <Grid item >
                                <IconButton className={classes.downFlag}>
                                    { expenseFlag ? <WiDirectionDownRight/> :  < WiDirectionUpRight /> }
                                </IconButton>
                            </Grid>
                            <Grid item >
                                <Status title="Expense this month" subTitle="- 5 %" amount="1950.49"/>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper>
                        <DashChart />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper>
                        <DashCategory />
                    </Paper>
                </Grid>
            </Grid>


            {/* Fab Button */}
            <div className={classes.fabBtn}>
            <Fab aria-label="add" 
                className={classes.fabIcon}
                to={"/add"}
                component={NavLink}>
                <CgMathPlus size={ 30 }/>
            </Fab></div>
        </div>
    )
}

export default Dashboard
