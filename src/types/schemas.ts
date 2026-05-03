import z from "zod";

export const userSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  licensePlate: z.string().min(1, "License Plate is required"),
  carMake: z.string().min(1, "Car Make is required"),
  carModel: z.string().min(1, "Car Model is required"),
});
