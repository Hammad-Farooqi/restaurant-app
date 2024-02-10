"use client";

import React, { useState } from "react";
import { Grid, Box, Typography, Tab } from "@mui/material";
import { Table } from "@/components/table";

const _tables = [
  {
    tableNo: 1,
    status: "free",
  },
  {
    tableNo: 2,
    status: "free",
  },
  ,
  {
    tableNo: 3,
    status: "free",
  },
  ,
  {
    tableNo: 1,
    status: "free",
  },
  ,
  {
    tableNo: 1,
    status: "free",
  },
  ,
  {
    tableNo: 1,
    status: "free",
  },
  ,
  {
    tableNo: 1,
    status: "free",
  },
  ,
  {
    tableNo: 1,
    status: "free",
  },
  ,
  {
    tableNo: 1,
    status: "free",
  },
];

const Tables = () => {
  const [tables, setBoxValues] = useState(_tables);

  const handleIncrement = (index) => {
    const newValues = [...boxValues];
    const newStatus = [...boxStatus];
    newValues[index]++;
    newStatus[index] = "Occupied";
    setBoxValues(newValues);
    <img
      src={status === "Occupied" ? TableSvg : ChairSvg}
      alt={status === "Occupied" ? "Table" : "Chair"}
      style={{ width: "80%", height: "auto", margin: "10px auto" }}
    />;
    setBoxStatus(newStatus);
  };

  const handleDecrement = (index) => {
    const newValues = [...boxValues];
    const newStatus = [...boxStatus];
    newValues[index] = Math.max(0, newValues[index] - 1);
    newStatus[index] = newValues[index] > 0 ? "Occupied" : "Free";
    setBoxValues(newValues);
    setBoxStatus(newStatus);
  };

  return (
    <Grid container spacing={2} margin={0} padding={0}>
      {tables.map(({ tableNo, status }, index) => (
        <Table key={index} tableNo={tableNo} status={status} />
      ))}
    </Grid>
  );
};

export default Tables;
