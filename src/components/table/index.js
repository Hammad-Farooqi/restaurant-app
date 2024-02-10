import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { ReactComponent as TableIcon } from "@/components/table/chair";

const tableStatus = {
  vacant: "green",
  occupied: "red",
  reserved: "yellow",
};
export function Table({ tableNo, status, index }) {
  return (
    <Grid item key={index} xs={12} sm={4} md={4} lg={2}>
      <Box borderRadius={2} style={{ height: "50%" }}>
        <img src={TableIcon} alt="Your SVG" />
        <Typography variant="h6" gutterBottom>
          {tableNo}
        </Typography>
        <Box
          position="absolute"
          top={0}
          right={0}
          bgcolor={tableStatus[status]}
          color="white"
          p={1}
          borderRadius="0 0 0 10px"
          fontSize="0.8rem"
        >
          {tableStatus[status]}
        </Box>
      </Box>
    </Grid>
  );
}
