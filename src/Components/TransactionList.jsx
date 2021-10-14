import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import transactionservice from '../Services/transactionservice';

const useStyles = makeStyles((theme) => ({
    table: {
        Width: '100%',
    },
    tableHead:{
        backgroundColor: '#d4d4d4',
        color: '#fff',
    },
    tableHeading:{
        fontSize: '1.1rem',
        fontWeight: '600',
    },
}));




export const TransactionList = () => {

    const [ transactions, setTransactions ] = useState([]); 

    useEffect(() => {
        fetchdata();
    }, [])

    const fetchdata = () => {
        transactionservice.getAllTransactions()
            .then(response => {
                console.log(response.data);
                setTransactions(response.data);
            })
            .catch(error => {
                console.log('Something went wrong!', error)
            });
    }

    const classes = useStyles();

    return (
        <Paper>
            <Box>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tableHead}>
                    <TableRow>
                        <TableCell align="right" className={classes.tableHeading}>Transaction Id</TableCell>
                        <TableCell align="center" className={classes.tableHeading}>Title</TableCell>
                        <TableCell align="center" className={classes.tableHeading}>Account</TableCell>
                        <TableCell align="center" className={classes.tableHeading}>Category</TableCell>
                        <TableCell align="center" className={classes.tableHeading}>Amount</TableCell>
                        <TableCell align="center" className={classes.tableHeading}>Date</TableCell>
                        <TableCell align="center" className={classes.tableHeading}>Details</TableCell>
                        <TableCell align="center" className={classes.tableHeading}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                
                <TableBody>
                {
                    transactions.map(record => (
                        <TableRow key={record.transactionId}>
                            <TableCell align="center">{record.transactionId}</TableCell>
                            <TableCell align="center">{record.transactionName}</TableCell>
                            <TableCell align="center">{record.accountName}</TableCell>
                            <TableCell align="center">{record.category}</TableCell>
                            <TableCell align="center">{record.amount}</TableCell>
                            <TableCell align="center">{record.date}</TableCell>
                            <TableCell align="center">{record.details}</TableCell>
                            <TableCell>
                                <Button variant="outlined" color="primary">Edit</Button>
                                <Button variant="outlined" color="secondary">Delete</Button>
                            </TableCell>
                
                        </TableRow>
                    ))
                }
                </TableBody>
                
                </Table>
            </TableContainer>
            </Box>
        </Paper>
    )
}
