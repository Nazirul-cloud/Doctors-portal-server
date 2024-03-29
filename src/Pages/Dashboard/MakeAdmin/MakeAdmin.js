import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';


 
const MakeAdmin = () => {
    const [email,  setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();
    const handleAdminSubmit = e =>{
        const user = { email }
        fetch('https://obscure-oasis-72645.herokuapp.com/users/admin',{
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
        },
            body:JSON.stringify(user)
        
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.modifiedCount){
                setEmail('')
                setSuccess(true);
            }
           
        })
        e.preventDefault();
    }
        
    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }
    return (
        <div>
            <h2>Make an Admin </h2>
            <form onSubmit={handleAdminSubmit}>
                 <TextField  
                 sx={{width : "50%"}}
                 label="Email" 
                 variant="standard"
                 type="email"
                 onBlur={handleOnBlur}
                  />
                <Button type='submit'  variant='contained'>Make Admin</Button>
            </form>
            {success && <Alert severity="success">Make Admin successfully </Alert>}

        </div>
    );
};

export default MakeAdmin;