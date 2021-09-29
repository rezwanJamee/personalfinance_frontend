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

const currencylist = [
    { value: 'AUD' },
    { value: 'USD' },
    { value: 'EUR' },
    { value: 'JPY' },
]


export default function AccountForm() {

    const classes = useStyles();

    const [selectedCurrency, setCurrencylist] = React.useState('AUD');
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleChangeCurrency = (event) => {
        setCurrencylist(event.target.value);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <Paper className={classes.root}>
            <Typography>
                Fill out the form for the adding new account.
            </Typography>
            <br />

            <form className={classes.form} noValidate autoComplete="off">
                <Grid container spacing={3} >
                    <Grid item md={6} sm={12} className={classes.formlist}>
                    
                        <TextField 
                            id="outlined-basic" 
                            className={classes.formitem} 
                            label="Account Name" 
                            variant="outlined" />

                        <TextField 
                            id="outlined-basic" 
                            className={classes.formitem} 
                            label="Bank Name" 
                            variant="outlined" />

                        <TextField 
                            id="outlined-basic" 
                            className={classes.formitem} 
                            label="$ Balance" 
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
                                    label="Create date"
                                    format="dd/MM/yyyy"
                                    value={selectedDate}
                                    InputAdornmentProps={{ position: "start" }}
                                    onChange={date => handleDateChange(date)}
                                    className={classes.formitem}
                                />
                            </MuiPickersUtilsProvider>

                            <TextField
                                id="outlined-select-currency-native"
                                select
                                label="Currency"
                                value={selectedCurrency}
                                onChange={handleChangeCurrency}
                                SelectProps={{
                                    native: true,
                                }}
                                helperText="Please select the right currency"
                                variant="outlined"
                                className={classes.formitem}
                                >
                                {currencylist.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.value}
                                    </option>
                                ))}
                            </TextField>

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
                        Discard Changes
                    </Button>
                    <Button variant="contained" className={classes.formSubmitBtn}>
                        Create account
                    </Button>
                </Grid>

            </form>
        </Paper>
    )
}
