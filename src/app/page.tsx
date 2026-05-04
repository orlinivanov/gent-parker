import ParkingGaragesList from "@/components/parking-garages-list/ParkingGaragesList";
import { cookies } from "next/headers";

export default async function Home() {
  return <ParkingGaragesList />;
}
