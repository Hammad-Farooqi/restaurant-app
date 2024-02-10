'use client'

import React, { useState } from 'react';
import { Grid, Box, Typography, Button, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Item = () => {
  const [boxValues, setBoxValues] = useState(Array(12).fill(0));

  const handleIncrement = (index) => {
    const newValues = [...boxValues];
    newValues[index]++;
    setBoxValues(newValues);
  };

  const handleDecrement = (index) => {
    const newValues = [...boxValues];
    newValues[index] = Math.max(0, newValues[index] - 1);
    setBoxValues(newValues);
  };

  return (
    <Box m={2}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <IconButton color="primary" aria-label="shopping cart" sx={{ marginLeft: 'auto'}}>
          <ShoppingCartIcon />
        </IconButton>
      </Box>
      <Grid container spacing={2}>
        {boxValues.map((value, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
            <Box
              bgcolor="primary.main"
              color="secondary.contrastText"
              p={2}
              textAlign="center"
              height={150} // Adjust the height as needed
              position="relative"
              borderRadius={2}
            >
              <Typography variant="h6" gutterBottom>
                {"Tea"}
              </Typography>
              <Box display="flex"  justifyContent="center" alignItems="center">
                <Button variant="outlined" color="secondary" onClick={() => handleDecrement(index)}>
                  -
                </Button>
                <Typography variant="body1" style={{ margin: '0 10px' }}>
                  {value}
                </Typography>
                <Button variant="outlined" color="secondary" onClick={() => handleIncrement(index)}>
                  +
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Item;
