import React from 'react';
import { Grid, Box, Button } from '@mui/material';

const Order = () => {
  return (
    <Box m={2}>
      <Box display="flex" justifyContent="flex-end" alignItems="flex-start" mb={2}>
        <Button variant="contained" color="primary">
          Order Now
        </Button>
      </Box>
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ].map((index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
            <Box
              bgcolor="primary.main"
              color="primary.contrastText"
              p={2}
              textAlign="center"
              height={150} // Adjust the height as needed
              borderRadius={2}
            >
            {index}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Order;
