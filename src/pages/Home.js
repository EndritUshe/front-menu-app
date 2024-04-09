// import React from 'react';
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
import  Button  from '@mui/material/Button';
import { Link, useParams } from "react-router-dom";


export default function Home() {
    const [products, setProducts] =useState([]);

    const {id}=useParams()
    
    useEffect(()=>{
      loadProducts();
    },[]);

    const loadProducts=async ()=>{
        const result = await axios.get("http://localhost:8080/api/product/findall")
        setProducts(result.data); 
    };
 
    const deleteProduct=async (id)=>{
      await axios.delete(`http://localhost:8080/api/product/delete/${id}`)
      loadProducts()
    }

  return (
    <Box sx={{ backgroundColor: '#D6B1E3', minHeight: '100vh', padding: '20px' }}>
    <div className='container'>
       
        <TableContainer component={Paper} sx={{ margin: '15px' }} >
      <Table 
      
      sx={{ minWidth: 300, background: 'linear-gradient(#FEFDFF, #D6B1E3)' }} aria-label="simple table" >
        <TableHead >
          <TableRow>
          <TableCell component="th" scope="row" align="center">#</TableCell>
          <TableCell component="th" scope="row" align="center">Name</TableCell>
            <TableCell component="th" scope="row" align='center'>Product Description</TableCell>
            
            <TableCell component="th" scope="row" align="center">Price</TableCell>
            <TableCell component="th" scope="row" align="center">Review</TableCell>
            <TableCell component="th" scope="row" align="center">Action</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product,index) => (
            <TableRow key={index}>
                <TableCell  scope="row" align="center" 
              
              >  {index + 1}</TableCell>
          
              
              <TableCell component="th" scope="row" align="center">{product.name}</TableCell>
              <TableCell component="th" scope="row" align="center">
                {product.description}
              </TableCell>
              <TableCell component="th" scope="row" align="center">{product.price}</TableCell>
              {/* <TableCell component="th" scope="row" align="center">{product.category}</TableCell> */}
              <TableCell component="th" scope="row" align="center">
              <Link to={`/reviews/${product.id}`} style={{
                        display: 'inline-block',
                        marginLeft: '5px',
                        marginRight: '5px',
                        borderRadius: '5px',
                        backgroundColor: 'violet',
                        padding: '6px 16px',
                        fontSize: '17px',
                        textDecoration: 'none',
                        color: 'black',
                        size: 'small'
                    }}>
                        REVIEWS
                    </Link>
                    <Link to={`/vendors/${product.id}`} style={{
                        display: 'inline-block',
                        marginLeft: '5px',
                        marginRight: '5px',
                        borderRadius: '5px',
                        backgroundColor: 'mediumpurple',
                        padding: '6px 16px',
                        fontSize: '15px',
                        textDecoration: 'none',
                        color: 'black',
                        size: 'small'
                    }}>
                        VENDORS
                    </Link>
                </TableCell>

              <TableCell component="th" scope="row" align="center">
              {/* <Button className="btm" style={{ backgroundColor: 'violet', color: 'black', marginRight:'5px'}} size='small'>View</Button> */}

              <Link to={`/view/${product.id}`} style={{
                        display: 'inline-block',
                        marginLeft: '5px',
                        marginRight: '5px',
                        borderRadius: '5px',
                        backgroundColor: 'violet',
                        padding: '6px 16px',
                        fontSize: '15px',
                        textDecoration: 'none',
                        color: 'black',
                        size: 'small'
                    }}>
                        VIEW
                    </Link>

                    <Link to={`/product/${product.id}`} style={{
                        display: 'inline-block',
                        marginLeft: '5px',
                        marginRight: '5px',
                        borderRadius: '5px',
                        backgroundColor: 'mediumpurple',
                        padding: '6px 16px',
                        fontSize: '17px',
                        textDecoration: 'none',
                        color: 'black',
                        size: 'small'
                    }}>
                        EDIT
                    </Link>
              {/* <Link className="btm" style={{ backgroundColor: 'mediumpurple', color: 'black', marginRight:'5px' }} size='small'>Edit</Link> */}
              <Button className="btm" style={{ backgroundColor: 'hotpink', color: 'black', marginRight:'5px', marginTop: '-4px' }} size='medium'
              onClick={()=>deleteProduct(product.id)}
              >Delete</Button>
              </TableCell>
              

             
    
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </div>

    </Box>

  )}