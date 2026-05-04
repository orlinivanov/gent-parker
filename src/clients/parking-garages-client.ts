import { parkingGaragesResponseDataSchema } from "@/types/schemas";
import axios from "axios";

async function getAllParkingGarages() {
  const response = await axios.get("/api/parking-garages");

  return parkingGaragesResponseDataSchema.parse(response.data).records;
}

const parkingGaragesClient = {
  getAllParkingGarages,
};

export default parkingGaragesClient;