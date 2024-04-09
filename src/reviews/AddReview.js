import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function AddReview() {

    const { id } = useParams();
     const navigate = useNavigate();
     const [review, setReview] = useState({
         name: "",
         email: "",
         description: "",
        
     });


     const onInputChange = (e) => {
         setReview({ ...review, [e.target.name]: e.target.value });
     };

     const onSubmit = async (e) => {
         e.preventDefault();
         await axios.post(`http://localhost:8080/api/review/save/${id}`, review);
         navigate(`/view/${id}`);
     };

    return (
        <Box sx={{ background: 'linear-gradient(#FEFDFF, #B281C8)', minHeight: '100vh', padding: '20px' }}>
             <Typography variant="h4" align="center" gutterBottom color="mediumpurple" marginTop="10px">Review Form</Typography>
        <form onSubmit={(e) => onSubmit(e)}>
            <div style={{ alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ marginBottom: '10px' }}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="name"
                        type="text"
                        value={review.name}
                        onChange={(e) => onInputChange(e)}
                        sx={{ width: '300px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="email"
                        type="email"
                        value={review.email}
                        onChange={(e) => onInputChange(e)}
                        sx={{ width: '300px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <TextField
                        label="Description"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="description"
                        type="text"
                        value={review.description}
                        onChange={(e) => onInputChange(e)}
                        sx={{ width: '300px' }}
                    />
                </div>
                
                <div style={{ marginBottom: '10px' }} >
                    <Button type="submit" variant="contained" style={{ borderRadius: '5px', backgroundColor: 'blueviolet' }}>
                        Add Review
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