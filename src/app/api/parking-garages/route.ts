import parkingGaragesService from "@/services/parking-garages-service";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  let garages;

  try {
    garages = await parkingGaragesService.getAllParkingGarages();
  } catch (error) {
    console.error("Error fetching parking garages:", error);
    return NextResponse.json({}, { status: 500 });
  }

  return NextResponse.json(garages);
}
