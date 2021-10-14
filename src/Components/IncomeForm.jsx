import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import incomeservice from '../Services/incomeservice';
import { useHistory } from 'react-router';

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

const accountList = [
    { value: 'Cash' },
    { value: 'personal account' },
    { value: 'Business account' },
]

const IncomeForm = () => {

    const classes = useStyles();
    const history = useHistory();

    const [sourceName, setSourceName] = React.useState('');
    const [selectedAccount, setAccount] = React.useState();
    const [amount, setAmount] = React.useState();
    const [createDate, setCreateDate] = React.useState(new Date());
    
    const handleDateChange = (date) => {
        setCreateDate(date);
    };
    const handleChangeAccount = (event) => {
        setAccount(event.target.value);
    };

    const discardData = (e) =>{      
        setSourceName('');
        setCreateDate(new Date());
        setAmount('');
    }

    const saveIncome = (e) =>{
        e.preventDefault();

        const bankname = selectedAccount;
        const createdate = createDate;
        const incomerecord = { sourceName, bankname, amount, createdate };
        console.log(incomerecord);

        incomeservice.addIncomes(incomerecord)
        .then(response => {
            console.log('Transaction data added', response.data);
            history.push('/');
        })
        .catch(error => {
            console.log('Something went wrong!', error);
        });

        discardData();
    }


    return (
        <Paper className={classes.root}>
            <Typography>
                Fill out the form for the adding new earning record.
            </Typography>
            <br />

            <form className={classes.form} noValidate autoComplete="off">
            <Grid container spacing={3} >
                    <Grid item md={6} sm={12} className={classes.formlist}>
                    
                        <TextField 
                            id="outlined-basic" 
                            className={classes.formitem} 
                            label="Source Name" 
                            variant="outlined"
                            value={sourceName}
                            onChange={(e) => setSourceName(e.target.value)} />

                        <TextField
                            id="outlined-select-currency-native"
                            select
                            label="Account"
                            value={selectedAccount}
                            onChange={handleChangeAccount}
                            SelectProps={{
                                native: true,
                            }}
                            helperText="Please select the right account"
                            variant="outlined"
                            className={classes.formitem}
                            >
                            {accountList.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.value}
                                </option>
                            ))}
                            </TextField>

                        <TextField 
                            id="outlined-basic" 
                            className={classes.formitem} 
                            label="$ Balance" 
                            variant="outlined" 
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
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
                                    value={createDate}
                                    InputAdornmentProps={{ position: "start" }}
                                    onChange={date => handleDateChange(date)}
                                    className={classes.formitem}
                                />
                            </MuiPickersUtilsProvider>               
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
                    <Button variant="contained" color="primary" 
                        className={classes.formBtn} onClick={(e) => discardData(e)}>
                        Discard Changes
                    </Button>
                    <Button variant="contained" className={classes.formSubmitBtn}
                        onClick={(e) => saveIncome(e)}>
                        Create account
                    </Button>
                </Grid>
            </form>
        </Paper>
    )
}

export default IncomeForm
