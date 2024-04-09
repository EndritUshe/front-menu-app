import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function AddVendor() {
    const { id } = useParams();
     const navigate = useNavigate();
     const [vendor, setVendor] = useState({
         companyName: "",
         address: "",
         phone: "",
        
     });


     const onInputChange = (e) => {
         setVendor({ ...vendor, [e.target.name]: e.target.value });
     };

     const onSubmit = async (e) => {
         e.preventDefault();
         await axios.post(`http://localhost:8080/api/vendor/save/${id}`, vendor);
         navigate(`/view/${id}`);
     };

    return (
        <Box sx={{ background: 'linear-gradient(#FEFDFF, #B281C8)', minHeight: '100vh', padding: '20px' }}>
            <Typography variant="h4" align="center" gutterBottom color="mediumpurple" marginTop="10px">Vendor Form</Typography>
        <form onSubmit={(e) => onSubmit(e)}>
            <div style={{ alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ marginBottom: '10px' }}>
                    <TextField
                        label="Company Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="companyName"
                        type="text"
                        value={vendor.companyName}
                        onChange={(e) => onInputChange(e)}
                        sx={{ width: '300px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <TextField
                        label="Address"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="address"
                        type="text"
                        value={vendor.address}
                        onChange={(e) => onInputChange(e)}
                        sx={{ width: '300px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <TextField
                        label="Phone"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="phone"
                        type="text"
                        value={vendor.phone}
                        onChange={(e) => onInputChange(e)}
                        sx={{ width: '300px' }}
                    />
                </div>
                
                <div style={{ marginBottom: '10px' }} >
                    <Button type="submit" variant="contained" style={{ borderRadius: '5px', backgroundColor: 'blueviolet' }}>
                        Add Vendor
                    </Button>
                    <Link to={`/view/${id}`} style={{
                        display: 'inline-block',
                        marginLeft: '10px',
                        borderRadius: '5px',
                        backgroundColor: 'hotpink',
                        padding: '6px 16px',
                        fontSize: '18px',
                        textDecoration: 'none',
                        color: 'white',
                    }}>
                        Cancel
                    </Link>
                </div>
            </div>
        </form>
        </Box>
    );
    };