
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import './login.css';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Login() {
    let history = useHistory()

    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));

    // .........................Hooks Start......................

    const classes = useStyles();
    const [email, clearEmail] = useState('')
    const [username, clearUsername] = useState('')

    // .........................Hooks End.......................


    // .........................Enter values event handler start......................
    const usernameHandle = (e) => {
        let usernameValue = e.target.value
        clearEmail(usernameValue)

    }
    const emailHandle = (e) => {
        let emailValue = e.target.value
        clearUsername(emailValue)
    }

    // .........................Enter values event handler start......................


    // .........................Form submit event handler start......................

    const submit = (e) => {
        e.preventDefault()
        if(email && username ){
            if(email === 'himanshu@gmail.com' && username === 'himanshu'){
                const data = {
                    isLoggedIn: true,
                    username: username,
                    email: email
                }

                const loginData = JSON.stringify(data)

                localStorage.setItem("login",loginData)
                history.push("/home")
            }
        }

    };

    // .........................form submit event handler end......................


    return (


        // ...........................Using material UI form Develop UI........................

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                </Avatar>
                <Typography component="h1" variant="h5" >
                </Typography>
                <form className={classes.form} onSubmit={submit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        onChange={emailHandle}
                        type="text"
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="email"
                        label="Email"
                        type="email"
                        id="email"
                        autoComplete="email"
                        onChange={usernameHandle}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        LogIn
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
            <Box mt={8} >
            <p style={{textAlign:'center'}}>
                Username : himanshu  
                <br/>Email: himanshu@gmail.com
            </p>
            </Box>
        </Container>

    );
}