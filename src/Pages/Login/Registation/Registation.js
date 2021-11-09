import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Registation = () => {

    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();
  

    
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleLoginSubmit = e =>{
        
        if(loginData.password !== loginData.password2){
            alert("Your password did not match");
            return
        }
        
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <Container>
        <Grid container spacing={2}>

            <Grid item sx={{mt: 8}} xs={12} md={6}>
                 <Typography variant="body1" gutterBottom>Register</Typography>
                 {!isLoading && <form onSubmit={handleLoginSubmit}>
                    <TextField
                        sx={{ width: '75%', m: 1}}
                        id="standard-basic" 
                        label="Your Name" 
                        name="name"
                        onBlur={handleOnBlur}
                        variant="standard" 
                    />
                    <TextField
                        sx={{ width: '75%', m: 1}}
                        id="standard-basic" 
                        label="Your Email" 
                        name="email"
                        type='email'
                        onBlur={handleOnBlur}
                        variant="standard" 
                    />
                    <TextField 
                        sx={{ width: '75%', m: 1}}
                        id="standard-basic" 
                        type="password"
                        name="password"
                        onBlur={handleOnBlur}
                        label="Your Password" 
                        variant="standard" 
                    />
                    <TextField 
                        sx={{ width: '75%', m: 1}}
                        id="standard-basic" 
                        type="password"
                        name="password2"
                        onBlur={handleOnBlur}
                        label="Retype Your Password" 
                        variant="standard" 
                    />
                    <Button
                        type="submit"   
                        sx={{ width: '75%', m: 1}} 
                        variant="contained">Register
                    </Button>
                    <NavLink 
                        style={{textDecoration: 'none'}} 
                        to='/login'>
                        <Button variant="text">Already Registered? Please Login</Button>
                    </NavLink>
                 </form>}
                    {isLoading &&  <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created successfully </Alert>}
                    { authError && <Alert severity="error">{ authError}</Alert> }
            
            </Grid>
            <Grid item xs={12} md={6}>
                 <img style={{width:'100%'}} src={login} alt="login img" />
            </Grid>
           
        </Grid>
    </Container>
    );
};

export default Registation;