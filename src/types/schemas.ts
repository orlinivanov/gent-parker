import z, { number } from "zod";

export const userSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  licensePlate: z.string().min(1, "License Plate is required"),
  carMake: z.string().min(1, "Car Make is required"),
  carModel: z.string().min(1, "Car Model is required"),
});

export const locationAndDimensionSchema = z.object({
  roadNumber: z.string(),
  roadName: z.string(),
});

const fieldsSchema = z.object({
  urllinkaddress: z.string(),
  name: z.string(),
  description: z.string(),
  categorie: z.string(),
  type: z.string(),
  openingtimesdescription: z.string(),
  availablecapacity: z.number(),
  operatorinformation: z.string(),
  isopennow: number(),
  location: z.array(z.number()).length(2),
  locationanddimension: z.string(),
});

export const parkingGarageRecordSchema = z.object({
  recordid: z.string(),
  fields: fieldsSchema,
});

export const parkingGaragesResponseDataSchema = z.object({
  records: z.array(parkingGarageRecordSchema),
});
