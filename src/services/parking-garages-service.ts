import axios from "axios";

const instance = axios.create({
  baseURL: "https://gent.opendatasoft.com/api/records/1.0",
  timeout: 5000,
});

async function getAllParkingGarages() {
  const { data } = await instance.get(
    "/search/?dataset=bezetting-parkeergarages-real-time&rows=200",
  );
  return data;
}

const parkingGaragesService = {
  getAllParkingGarages,
};

export default parkingGaragesService;
