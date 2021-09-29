import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { PieChart, Pie, Legend } from 'recharts';

import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles((theme) => ({
    rootbox: {
        width: '100%', 
        height: '35rem',
        padding: '1.5rem',
    },
    centerContent:{
        paddingLeft: '3.5rem',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }
}));

const data = [ 
    { name: 'Utility', spending: 1000, fill: '#014f86', },
    { name: 'Grocery', spending: 450.5, fill: '#ff7900', },
    { name: 'Transport', spending: 45.24, fill: '#f9c74f', },
    { name: 'Food outside', spending: 210.53, fill: '#2d6a4f', },
    { name: 'Entertainment', spending: 78.35, fill: '#9d4edd',},
    { name: 'Education', spending: 258.35, fill: '#98c1d9',},
    { name: 'Others', spending: 378.35, fill: '#e5383b',},
];

export default function DashCategory() {
    
    const classes = useStyles();
    return (
        <Box className={classes.rootbox}>
            <Typography variant="h6">
                Expense by catergory
            </Typography>
            <Typography variant="body2">
                Last 30 days
            </Typography>

            
            <Box className={classes.centerContent}>
                <PieChart width={400} height={400}>
                <Pie
                    dataKey="spending"
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    fill={data.fill}
                    label
                />
                <Legend />
            </PieChart>
            </Box>
            
        </Box>
    )
}
