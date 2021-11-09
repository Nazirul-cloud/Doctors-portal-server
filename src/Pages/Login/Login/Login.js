import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser,  signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleLoginSubmit = e =>{
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = e =>{
        signInWithGoogle(location, history);
    }


    return (
        <Container>
            <Grid container spacing={2}>

                <Grid item sx={{mt: 8}} xs={12} md={6}>
                     <Typography variant="body1" gutterBottom>Login</Typography>
                     <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1}}
                            id="standard-basic" 
                            label="Your Email" 
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" 
                        />
                        <TextField 
                            sx={{ width: '75%', m: 1}}
                            id="standard-basic" 
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            label="Your Password" 
                            variant="standard" 
                        />
                        <Button
                            type="submit"   
                            sx={{ width: '75%', m: 1}} 
                            variant="contained">Login
                        </Button>
                        <NavLink 
                            style={{textDecoration: 'none'}} 
                            to='/register'>
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        {isLoading &&  <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created successfully </Alert>}
                        { authError && <Alert severity="error">{ authError}</Alert> }
                     </form>
                    
                    <Button onClick={handleGoogleSignIn}   
                        style={{backgroundColor:'#E65100'}} 
                        sx={{ width: '75%', m: 1}} 
                        variant="contained"
                    >Google Sign In</Button>

                </Grid>
                <Grid item xs={12} md={6}>
                     <img style={{width:'100%'}} src={login} alt="login img" />
                </Grid>
               
            </Grid>
        </Container>
    );
};


export default Login;