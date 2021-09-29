import { Box, Typography } from '@material-ui/core';
import React from 'react';
import {
    ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis,
    YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles((theme) => ({
    rootbox: {
        width: '100%', 
        height: '35rem',
        padding: '1.5rem',
    },
}));


const data = [
    { name: 'March', income: 2000, expense: 6800, planned: 2290, },
    { name: 'April', income: 2780, expense: 3908, planned: 2000, },
    { name: 'May', income: 1890, expense: 4800, planned: 2181, },
    { name: 'June', income: 2390, expense: 3800, planned: 2500, },
    { name: 'July', income: 3490, expense: 4300, planned: 2100, },
    { name: 'August', income: 3490, expense: 4300, planned: 2100, },
  ];

export default function DashChart() {

    const classes = useStyles();
    return (
        <Box className={classes.rootbox}>
            <Typography variant="h6">
                Income expense ratio
            </Typography>
            <Typography variant="body2">
                Last 6 months
            </Typography>

            <ResponsiveContainer>
                <ComposedChart
                width={500}
                height={300}
                data={data}
                margin={{
                top: 20,
                right: 20,
                bottom: 40,
                left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="planned" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="expense" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="income" stroke="#ff7300" />
            </ComposedChart>
            </ResponsiveContainer>
        </Box>
    )
}
