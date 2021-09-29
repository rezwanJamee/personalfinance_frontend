import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme) => ({
    root:{
        padding: '2rem',
    }, 
    formlist:{
        display: 'flex',
        flexDirection: 'column',
    },
    formitem: {
        marginTop: '.5rem',
        marginBottom: '.5rem',
    },
    formBtn: {
        marginLeft: '.5rem',
        marginRight: '.5rem',
        background: '#001D3D',
        color: '#fff',
        "&:hover": {
            background: '#023E8A',
            color: '#FFC300',
        }
    },
    formSubmitBtn:{
        marginLeft: '.5rem',
        marginRight: '.5rem',
        background: '#d00000',
        color: '#fff',
        "&:hover": {
            background: '#dc2f02',
            color: '#000',
        }
    }
}));

const accounts = [
    { value: 'Cash' },
    { value: 'Primary Bank' },
]

const categories = [
    { value: 'Utility' },
    { value: 'Grocery' },
    { value: 'Transport' },
    { value: 'Education' },
    { value: 'Entertainment' },
    { value: 'Food Outside' },
    { value: 'Others' },
]

export default function TransactionForm() {

    const classes = useStyles();

    const [category, setCategory] = React.useState('Utility');
    const [account, setAccount] = React.useState('Cash');
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleChangeAccount = (event) => {
        setAccount(event.target.value);
    };
    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    };
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };

    return (
        <Paper className={classes.root}>
            <Typography>
                Fill out the form for the transaction.
            </Typography>
            <br />

            <form className={classes.form} noValidate autoComplete="off">
                <Grid container spacing={3} >
                    <Grid item md={6} sm={12} className={classes.formlist}>
                    
                        <TextField id="outlined-basic" className={classes.formitem} label="Transaction Name" variant="outlined" />
                                                
                        <TextField
                            id="outlined-select-currency-native"
                            select
                            label="Account"
                            value={account}
                            onChange={handleChangeAccount}
                            SelectProps={{
                                native: true,
                            }}
                            helperText="Please select the right account"
                            variant="outlined"
                            className={classes.formitem}
                        >
                            {accounts.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.value}
                                </option>
                            ))}
                        </TextField>

                        <TextField
                            id="outlined-select-currency-native"
                            select
                            label="Category"
                            value={category}
                            onChange={handleChangeCategory}
                            SelectProps={{
                                native: true,
                            }}
                            helperText="Please select your category"
                            variant="outlined"
                            className={classes.formitem}
                        >
                            {categories.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.value}
                                </option>
                            ))}
                        </TextField>

                        <TextField 
                            id="outlined-basic" 
                            className={classes.formitem} 
                            label="$ Amount" 
                            variant="outlined" 
                            type="number"
                        />
                    
                    </Grid>
                    <Grid item md={6} sm={12} className={classes.formlist}>
                               
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                    autoOk
                                    variant="inline"
                                    inputVariant="outlined"
                                    label="Pick date"
                                    format="dd/MM/yyyy"
                                    value={selectedDate}
                                    InputAdornmentProps={{ position: "start" }}
                                    onChange={date => handleDateChange(date)}
                                    className={classes.formitem}
                                />
                            </MuiPickersUtilsProvider>

                            <TextField
                                id="outlined-multiline-static"
                                label="Multiline"
                                multiline
                                rows={4}
                                defaultValue="..."
                                variant="outlined"
                                className={classes.formitem}
                            />
                    </Grid>
                </Grid>
                <br />              
                <Grid 
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                    spacing={3}
                >
                    <Button variant="contained" color="primary" className={classes.formBtn}>
                        Discard
                    </Button>
                    <Button variant="contained" className={classes.formSubmitBtn}>
                        Submit
                    </Button>
                </Grid>

            </form>
            
        </Paper>
    )
}
