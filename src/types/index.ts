import { z } from "zod";
import { parkingGarageRecordSchema, userSchema } from "./schemas";

export type User = z.infer<typeof userSchema>;
export type ParkingGarageRecord = z.infer<typeof parkingGarageRecordSchema>;
