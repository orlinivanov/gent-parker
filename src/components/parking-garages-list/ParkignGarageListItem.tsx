import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

import { locationAndDimensionSchema } from "../../types/schemas";

interface Props {
  garageId: string;
  name: string;
  availableCapacity: number;
  isOpenNow: boolean;
  locationAndDimension: string;
}

export const ParkingGarageListItem = ({
  garageId,
  name,
  availableCapacity,
  isOpenNow,
  locationAndDimension = "{}",
}: Props) => {
  const { roadName: address = "" } = locationAndDimensionSchema.parse(
    JSON.parse(locationAndDimension),
  );

  return (
    <Card variant="outlined">
      <CardHeader title={name} />
      <CardContent>
        <Typography variant="body2">{isOpenNow ? "Open" : "Closed"}</Typography>
        <Typography variant="body2">
          Available Capacity: {availableCapacity}
        </Typography>
        <Typography variant="body2">Address: {address}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={`/garage/${garageId}`}>
          More Info
        </Button>
      </CardActions>
    </Card>
  );
};
