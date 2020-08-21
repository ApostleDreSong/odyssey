import React, { useState, useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function CustomSnackbar(props) {
    const classes = useStyles();
    const snackbarOpen = props.snackbarOpen;
    const [open, setOpen] = useState(false);
    const msgSeverity = props.msgSeverity;

    useEffect(() => {
        setOpen(snackbarOpen);
    }, [snackbarOpen])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={msgSeverity?msgSeverity:"success"}>
                    {props.message}
                </Alert>
            </Snackbar>
        </div>
    );
}
