import React from 'react'
//import { makeStyles } from '@material-ui/core/styles';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}



const DashSnackbar = () => {

    const [open, setOpen] = React.useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };
    
    return (
        <div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="info">
                    The graph showcase based on some dummy data!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default DashSnackbar;