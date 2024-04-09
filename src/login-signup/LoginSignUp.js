import React, { useState } from 'react'
import 'C:/Users/User/Desktop/menu-app/src/login-signup/LoginSignUp.css'
import user_icon from 'C:/Users/User/Desktop/menu-app/src/assets/user.png'
import email_icon from 'C:/Users/User/Desktop/menu-app/src/assets/email.jpg'
import password_icon from  'C:/Users/User/Desktop/menu-app/src/assets/passowrd.png'
import Box from '@mui/material/Box';
import axios from 'axios'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {  useNavigate } from 'react-router-dom';

 const LoginSignUp = () => {

    const navigate = useNavigate();
    const[action, setAction]= useState("Login");

    const [formData, setFormData] = useState({
        // username: "",
        email: "",
        password: "",
        // roles: [
        //     {
        //         roleName: "ROLE_MANAGER"
        //     }
        // ]
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
        
            const response = await axios.post('http://localhost:8080/api/auth/login', formData);
            console.log(response.data); 
            navigate("/findall");
          
        } catch (error) {
            console.error('Error:', error);
            // Optionally, handle errors or display error messages to the user
        }
    };


  return (
    <Box sx={{ background: 'linear-gradient(#FEFDFF, #D6B1E3)', minHeight: '100vh', padding: '20px' }}>
    <div className='container'>
        <div className='header'>
        {/* <div className='text'>{action}</div> */}
        <div className='submit-container'>
           <div className={action === "Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
           <div className={action === "Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
        <div className='underline'></div>

        </div>
        <div className='inputs'>
                    {action === "Login" ? null : (
                        <div className='input' style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={user_icon} alt='' />
                        <TextField
                            type='text'
                            placeholder='User Name'
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                            style={{
                                flex: 1,
                                height: '100%',
                                background: 'transparent',
                                border: 'none',
                                outline: 'none',
                                color: '#797979'
                            }}
                        />
                    </div>
)}
           
           <div className='input'>
                        <img src={email_icon} alt='' />
                        <TextField

                            type='email'
                            placeholder='Email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            style={{
                                height: '100%',
                                width: '400px',
                                background: 'transparent',
                                border: 'none',
                                outline: 'none',
                                color: '#797979'
                            }}
                        />
                    </div>
                    <div className='input'>
                        <img src={password_icon} alt='' />
                        <TextField
                     
                            type='password'
                            placeholder='Password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            style={{
                                height: '100%',
                                width: '400px',
                                background: 'transparent',
                                border: 'none',
                                outline: 'none',
                                color: '#797979'
                            }}
                        />
                    </div>
        </div>
        {action === "Sign Up"?<div></div>: <div className='forgot-password'>Forgot Password?
        <span>Click Here!</span>
        </div>
        }
        
       

        <Button onClick={handleSubmit} variant="contained" style={{ borderRadius: '50px', backgroundColor: '#4c00b4',
    width: '150px', 
    display: 'block',
    fontSize: '20px',
    margin: '20px auto 0', }}>
        {action}
                    </Button>
    </div>

    </Box>
  )
}
export default LoginSignUp
