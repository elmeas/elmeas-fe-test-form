import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters"),

  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters"),

  email: yup
    .string()
    .required("Email is required")
    .email("Must be a valid email"),

  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^\+?[\d\s-]{10,}$/, "Invalid phone number format"),

  dateOfBirth: yup
    .date()
    .required("Date of birth is required")
    .max(new Date(), "Date cannot be in the future"),

  occupation: yup.string().required("Occupation is required"),

  address: yup
    .string()
    .required("Address is required")
    .min(10, "Please enter complete address"),

  city: yup.string().required("City is required"),

  country: yup.string().required("Country is required"),

  interests: yup.string().required("Please share your interests"),
});

export const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>User Profile Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name</label>
          <input {...register("firstName")} placeholder="John" />
          {errors.firstName && <span>{errors.firstName.message}</span>}
        </div>

        <div>
          <label>Last Name</label>
          <input {...register("lastName")} placeholder="Doe" />
          {errors.lastName && <span>{errors.lastName.message}</span>}
        </div>

        <div>
          <label>Email</label>
          <input
            {...register("email")}
            type="email"
            placeholder="john.doe@example.com"
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label>Phone Number</label>
          <input {...register("phoneNumber")} placeholder="+1 234 567 8900" />
          {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
        </div>

        <div>
          <label>Date of Birth</label>
          <input {...register("dateOfBirth")} type="date" />
          {errors.dateOfBirth && <span>{errors.dateOfBirth.message}</span>}
        </div>

        <div>
          <label>Occupation</label>
          <input {...register("occupation")} placeholder="Software Developer" />
          {errors.occupation && <span>{errors.occupation.message}</span>}
        </div>

        <div>
          <label>Address</label>
          <input
            {...register("address")}
            placeholder="123 Main Street, Apt 4B"
          />
          {errors.address && <span>{errors.address.message}</span>}
        </div>

        <div>
          <label>City</label>
          <input {...register("city")} placeholder="New York" />
          {errors.city && <span>{errors.city.message}</span>}
        </div>

        <div>
          <label>Country</label>
          <input {...register("country")} placeholder="United States" />
          {errors.country && <span>{errors.country.message}</span>}
        </div>

        <div>
          <label>Interests</label>
          <textarea
            {...register("interests")}
            placeholder="Tell us about your hobbies and interests..."
          />
          {errors.interests && <span>{errors.interests.message}</span>}
        </div>

        <button type="submit">Submit Profile</button>
      </form>
    </div>
  );
};
