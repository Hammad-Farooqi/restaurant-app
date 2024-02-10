'use client'

import React from 'react';
import { Grid, Paper, Box, Button, Typography } from '@mui/material';

const Cart = () => {
  const handleButtonClick = () => {
    alert('Order placed successfully!');
    window.location.href = '../waiter/table';
  }; 
  return (
    <><Grid sx={{ margin: "2px" }} container spacing={2}>
      <Typography align="center" gutterBottom>
        Cart List
      </Typography>
      <Grid item xs={12} sm={6} md={4} lg={12}>
        <Paper elevation={3}>
          <Typography
            variant="h6"
            Textalign="center"
            color="primary"
            height={50}
            marginTop={2}
            style={{ padding: '10px' }}>
            Drink
            2x Rs.80-/
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={12}>
        <Paper elevation={3}>
          <Typography
            variant="h6"
            Textalign="center"
            color="primary"
            height={50}
            style={{ padding: '10px' }}>
            Roti
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={12}>
        <Paper elevation={3}>
          <Typography variant="h6"
            Textalign="center"
            color="primary"
            height={50}
            style={{ padding: '10px' }}>
            Tea
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={12}>
        <Paper elevation={3}>
          <Typography variant="h6"
            Textalign="center"
            color="primary"
            height={50}
            style={{ padding: '10px' }}>
            Burger
          </Typography>
        </Paper>
      </Grid>
    </Grid><Box variant="h6" margin={2}>
        <Button variant="contained" color="primary" onClick={handleButtonClick}>
          Place Order
        </Button>
      </Box></>
    
  );
};

export default Cart;
