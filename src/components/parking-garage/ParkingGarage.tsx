"use client";

import { Button, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { StyledContainer } from "../styled";
import useParkingGarage from "./useParkingGarage";

export default function ParkingGarage() {
  const { garageItem, loading, error } = useParkingGarage();

  return (
    <StyledContainer>
      {loading && <Typography>Loading data...</Typography>}
      {error && <Typography>Error: {error}</Typography>}
      {garageItem && (
        <Card variant="outlined">
          <CardHeader title={garageItem.fields.name} />
          <CardContent>
            <Typography variant="body2">
              {garageItem.fields.description}
            </Typography>
            <Typography variant="body2">
              Opening Hours: {garageItem.fields.openingtimesdescription}
            </Typography>
            <Typography variant="body2">
              Website: {garageItem.fields.urllinkaddress}
            </Typography>
            <Typography variant="body2">
              Operator: {garageItem.fields.operatorinformation}
            </Typography>
            <Typography variant="body2">
              Category: {garageItem.fields.categorie}
            </Typography>
            <Typography variant="body2">
              Type: {garageItem.fields.type}
            </Typography>
          </CardContent>
        </Card>
      )}
      <Button href="/">Back to list</Button>
    </StyledContainer>
  );
}
