import { User } from "@/types";

export function createEmptyUser(): User {
  return {
    firstName: "",
    lastName: "",
    licensePlate: "",
    carMake: "",
    carModel: "",
  };
}

export function userHasValues(user: User) {
  return Boolean(
    user.firstName ||
    user.lastName ||
    user.licensePlate ||
    user.carMake ||
    user.carModel,
  );
}


