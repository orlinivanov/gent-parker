"use client";

import { StyledContainer } from "../styled";
import { ParkingGarageListItem } from "./ParkignGarageListItem";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import useParkingGaragesList from "./useParkingGaragesList";

export default function ParkingGaragesList() {
  const {
    records,
    loading,
    error,
    orderBy,
    setOrderBy,
    searchQuery,
    setSearchQuery,
  } = useParkingGaragesList();

  return (
    <StyledContainer>
      {loading && <Typography>Loading data...</Typography>}
      {error && <Typography>Error: {error}</Typography>}
      <FormControl disabled={loading || !!error}>
        <FormLabel>Order by</FormLabel>
        <RadioGroup
          row
          value={orderBy}
          onChange={(e) => setOrderBy(e.target.value)}
        >
          <FormControlLabel
            value="nameUp"
            control={<Radio />}
            label="Name Asc"
          />
          <FormControlLabel
            value="nameDown"
            control={<Radio />}
            label="Name Desc"
          />
          <FormControlLabel
            value="availableCapacityUp"
            control={<Radio />}
            label="Least Available Spots"
          />
          <FormControlLabel
            value="availableCapacityDown"
            control={<Radio />}
            label="Most Available Spots"
          />
        </RadioGroup>
        <TextField
          label="Search by name"
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </FormControl>
      {records.map((record) => (
        <ParkingGarageListItem
          key={record.recordid}
          garageId={record.recordid}
          name={record.fields.name}
          availableCapacity={record.fields.availablecapacity}
          isOpenNow={record.fields.isopennow === 1}
          locationAndDimension={record.fields.locationanddimension}
        />
      ))}
    </StyledContainer>
  );
}
