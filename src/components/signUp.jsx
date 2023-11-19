import { validateFormikUsingJoi } from "../utils/validateFormikUsingJoi";
import Input from "./common/input";
import PageHeader from "./common/pageHeader";

import { Navigate, useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import Joi from "joi";
import { useState } from "react";
// import { useAuth } from "../contexts/auth.context";

const SignUp = ({ redirect }) => {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  // const { signUp, user } = useAuth();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      firstName:"",
      lastName:"",
      phone:"",
      email: "",
      password: "",
      // confPassword:"",
      country: "",
      city: "",
      street: "",
      houseNumber: "",
    },
    validate: validateFormikUsingJoi({
      email: Joi.string()
        .min(2)
        .max(255)
        .required()
        .email({ tlds: { allow: false } }),
      firstName: Joi.string().min(3).max(255).required(),
      lastName: Joi.string().min(3).max(255).required(),
      password: Joi.string().min(6).max(1024).required(),
      // confPassword: Joi.string().min(6).max(1024).required(),
      phone: Joi.string().min(10).max(1024).required(),
      country: Joi.string().min(3).max(1024).required(),
      city: Joi.string().min(3).max(1024).required(),
      street: Joi.string().min(3).max(1024).required(),
      houseNumber: Joi.string().min(1).max(1024).required(),
    }),
    // async onSubmit(values) {
    //   try {
    //     await signUp({ ...values, biz: false });
    //     if (redirect) {
    //       navigate(redirect);
    //     }
    //   } catch (err) {
    //     if (err.response?.status === 400) {
    //       setServerError(err.response.data);
    //     }
    //   }
    // },
  });

  // if (user) {
  //   return <Navigate to="/" />;
  // }

  return (
    <>
      <PageHeader
        title="REGISTRATION"
      />

      <form onSubmit={form.handleSubmit}>
        {serverError && <div className="alert alert-danger">{serverError}</div>}
        
        <div className="row">
        <Input
          {...form.getFieldProps("firstName")}
          type="text"
          label="First Name"
          required
          error={form.touched.firstName && form.errors.firstName}
          />
        <Input
          type="text"
          label="Middle Name"
          />
        <Input
          {...form.getFieldProps("lastName")}
          type="text"
          label="Last Name"
          required
          error={form.touched.lastName && form.errors.lastName}
          />
        <Input
          {...form.getFieldProps("phone")}
          type="phone"
          label="Phone"
          required
          error={form.touched.phone && form.errors.phone}
          />
        <Input
          {...form.getFieldProps("email")}
          type="email"
          label="Email"
          required
          error={form.touched.email && form.errors.email}
          />
          <Input
            {...form.getFieldProps("password")}
            type="password"
            label="Password"
            required
            error={form.touched.password && form.errors.password}
            />
        <Input
          type="imageUrl"
          label="Image url"
          />
        <Input
          type="imageAlt"
          label="Image alt"
          />
        <Input
          type="state"
          label="State"
          />
        <Input
          {...form.getFieldProps("country")}
          type="text"
          label="Country"
          required
          error={form.touched.country && form.errors.country}
          />
        <Input
          {...form.getFieldProps("city")}
          type="text"
          label="City"
          required
          error={form.touched.city && form.errors.city}
          />
        <Input
          {...form.getFieldProps("street")}
          type="text"
          label="Street"
          required
          error={form.touched.street && form.errors.street}
          />
        <Input
          {...form.getFieldProps("houseNumber")}
          type="text"
          label="House Number"
          required
          error={form.touched.houseNumber && form.errors.houseNumber}
          />
        <Input
          type="number"
          label="Zip"
          />
          <div class="form-check col-12">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label text-start" for="flexCheckDefault">
              Default checkbox
            </label>
          </div>
          </div>
        <div className="my-2">
          <button disabled={!form.isValid} className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
