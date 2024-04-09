import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function ProductView() {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    reviews: [],
    vendors: []
  });

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/product/findby/${id}`);
        const productData = response.data;

        setProduct({
          name: productData.name,
          description: productData.description,
          price: productData.price,
          reviews: productData.reviewDtoList.map(review => review.description),
          vendors: productData.vendorDtoList.map(vendor => vendor.companyName)
        });
      } catch (error) {
        console.error('Error loading product:', error);
      }
    };

    loadProduct();
  }, [id]);

  return (
    <Box sx={{ background: 'linear-gradient(#FEFDFF, #D6B1E3)', minHeight: '100vh', padding: '20px' }}>
    <Box sx={{ maxWidth: 400, margin: 'auto' }}>
      <Box sx={{ maxWidth: 400 }}>
      <Typography variant="h4" align="center" gutterBottom color="mediumpurple" marginTop="10px">Product View</Typography>
      <form>
        <div style={{ marginBottom: '10px' }}>
          <TextField
            fullWidth
            label="Product Name"
            name="name"
            value={product.name}
         
            margin="normal"
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <TextField
         
            fullWidth
            label="Description"
            name="description"
            value={product.description}
            margin="normal"
           
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <TextField
            fullWidth
            label="Price"
            name="price"
            value={product.price}
         
            margin="normal"
          />
        </div>
        </form>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: '20px', background: 'linear-gradient(#E3C4EE, #ECCBF8)', padding: '10px', borderRadius: '5px' }}>
        <div style={{ marginBottom: '10px', color: 'mediumpurple' }}>
          <h2>REVIEWS</h2>
          <ol>
            {product.reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ol>
        </div>
        <div style={{ marginBottom: '10px', color: 'mediumpurple' }}>
          <h2>VENDORS</h2> 
           <ol>
            {product.vendors.map((vendor, index) => (
              <li key={index}>{vendor}</li>
            ))}
          </ol>
          
        </div>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link to={`/addreview/${id}`} style={{
          display: 'flex',
          marginLeft: '10px',
          marginTop: '20px',
          borderRadius: '5px',
          backgroundColor: 'hotpink',
          padding: '6px 16px',
          fontSize: '17px',
          textDecoration: 'none',
          color: 'white',
        }}>
          Add Review
        </Link>
        <Link to={`/addvendor/${id}`} style={{
          display: 'flex',
          marginLeft: '10px',
          marginTop: '20px',
          borderRadius: '5px',
          backgroundColor: 'hotpink',
          padding: '6px 16px',
          fontSize: '17px',
          textDecoration: 'none',
          color: 'white',
        }}>
          Add Vendor
        </Link>
        </Box>
        </Box>

        <Link to="/findall" style={{
          display: 'inline-block',
          marginLeft: '10px',
          marginTop: '20px',
          borderRadius: '5px',
          backgroundColor: 'hotpink',
          padding: '6px 16px',
          fontSize: '17px',
          textDecoration: 'none',
          color: 'white',
        }}>
          Home
        </Link>
    </Box>
    </Box>
  );
}
