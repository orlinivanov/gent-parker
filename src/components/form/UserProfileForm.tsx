"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { User } from "@/types";
import { userSchema } from "@/types/schemas";
import { Button, TextField } from "@mui/material";
import { StyledContainer } from "../styled";
import { createEmptyUser, userHasValues } from "@/lib/user";
import { setUserCookie, deleteUserCookie } from "@/lib/actions";

interface Props {
  user?: User;
}

export default function UserProfileForm({ user = {} as User }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(userSchema),
    values: userHasValues(user) ? user : createEmptyUser(),
  });

  return (
    <StyledContainer>
      <Controller
        name={`firstName`}
        control={control}
        render={({ field }) => (
          <TextField
            label={!errors.firstName ? "First Name" : errors.firstName?.message}
            error={!!errors.firstName}
            {...field}
          />
        )}
      />
      <Controller
        name={`lastName`}
        control={control}
        render={({ field }) => (
          <TextField
            label={!errors.lastName ? "Last Name" : errors.lastName?.message}
            error={!!errors.lastName}
            {...field}
          />
        )}
      />
      <Controller
        name={`licensePlate`}
        control={control}
        render={({ field }) => (
          <TextField
            label={
              !errors.licensePlate
                ? "License Plate"
                : errors.licensePlate?.message
            }
            error={!!errors.licensePlate}
            {...field}
          />
        )}
      />
      <Controller
        name={`carMake`}
        control={control}
        render={({ field }) => (
          <TextField
            label={!errors.carMake ? "Car Make" : errors.carMake?.message}
            error={!!errors.carMake}
            {...field}
          />
        )}
      />
      <Controller
        name={`carModel`}
        control={control}
        render={({ field }) => (
          <TextField
            label={!errors.carModel ? "Car Model" : errors.carModel?.message}
            error={!!errors.carModel}
            {...field}
          />
        )}
      />
      <Button variant="contained" onClick={handleSubmit(setUserCookie)}>
        Save
      </Button>
      <Button variant="contained" onClick={() => deleteUserCookie()}>
        Delete
      </Button>
      <Button href="/" disabled={!userHasValues(user)}>
        Back to List
      </Button>
    </StyledContainer>
  );
}
