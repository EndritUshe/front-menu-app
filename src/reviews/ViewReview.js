import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Box from '@mui/material/Box';
import {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";


export default function ViewReview() {


     const { id } = useParams();
    //  const navigate = useNavigate();
      const [reviews, setReviews] = useState([]);

      useEffect(()=>{
        loadReviews();
      },[]);
      
      const loadReviews=async ()=>{
      const result = await axios.get(`http://localhost:8080/api/review/findByProductId/${id}`)
      setReviews(result.data);
      };
  
    return (
        <Box sx={{ backgroundColor: '#D6B1E3', minHeight: '100vh', padding: '20px' }}>
        <div className='container'>
           
            <TableContainer component={Paper} sx={{ margin: '15px' }} >
          <Table 
          
          sx={{ minWidth: 300, background: 'linear-gradient(#FEFDFF, #D6B1E3)' }} aria-label="simple table" >
            <TableHead >
              <TableRow>
              <TableCell component="th" scope="row" align="center">#</TableCell>
              <TableCell component="th" scope="row" align="center">Reviewer</TableCell>
                <TableCell component="th" scope="row" align='center'>Email</TableCell>
                <TableCell component="th" scope="row" align="center">Description</TableCell>
            
              </TableRow>
            </TableHead>
            <TableBody>
              {reviews.map((review,index) => (
                <TableRow key={index}>
                    <TableCell  scope="row" align="center" 
                  
                  >  {index + 1}</TableCell>
              
                  
                  <TableCell component="th" scope="row" align="center">{review.name}</TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {review.email}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">{review.description}</TableCell>
                 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Link to="/findall" style={{
                        display: 'inline-block',
                        marginLeft: '10px',
                        borderRadius: '5px',
                        backgroundColor: 'hotpink',
                        padding: '6px 16px',
                        fontSize: '20px',
                        textDecoration: 'none',
                        color: 'white',
                    }}>
                        Back
                    </Link>
    
            </div>
    
        </Box>
    );
};