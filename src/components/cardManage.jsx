import { validateFormikUsingJoi } from "../utils/validateFormikUsingJoi";
import Input from "./common/input";
import PageHeader from "./common/pageHeader";

import { Navigate, useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import Joi from "joi";
import { useState } from "react";
// import { useAuth } from "../contexts/auth.context";

const CardManager = ({ redirect }) => {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  // const { signUp, user } = useAuth();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      title:"",
      subtitle:"",
      description:"",
      phone: "",
      email: "",
      web: "",
      imageUrl: "",
      imageAlt: "",
      state: "",
      country: "",
      city: "",
      street: "",
      houseNumber: "",
      zip: "",
    },
    validate: validateFormikUsingJoi({
      email: Joi.string()
        .min(5)
        .max(255)
        .required()
        .email({ tlds: { allow: false } }),
      title: Joi.string().min(2).max(256).required(),
      subtitle: Joi.string().min(3).max(256).required(),
      description: Joi.string().min(3).max(1024).required(),
      phone: Joi.string().min(9).max(22).required(),
      web: Joi.string().min(5),
      imageUrl: Joi.string().min(14).required(),
      imageAlt: Joi.string().min(2).max(256).required(),
      state: Joi.string(),
      country: Joi.string().min(2).max(1024).required(),
      city: Joi.string().min(2).max(1024).required(),
      street: Joi.string().min(2).max(1024).required(),
      houseNumber: Joi.number().min(1).max(1024).required(),
      zip: Joi.number().min(2).max(50),
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
        title="CARD MANAGE"
      />

      <form onSubmit={form.handleSubmit}>
        {serverError && <div className="alert alert-danger">{serverError}</div>}
        
        <div className="row">
        <Input
          {...form.getFieldProps("title")}
          type="text"
          label="Title"
          required
          error={form.touched.title && form.errors.title}
          />
        <Input
          {...form.getFieldProps("subtitle")}
          type="text"
          label="Subtitle"
          required
          error={form.touched.subtitle && form.errors.subtitle}
          />
        <Input
          {...form.getFieldProps("description")}
          type="text"
          label="Description"
          required
          error={form.touched.description && form.errors.description}
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
          type="text"
          label="Web"
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
          
          <div className="col-sm-6 my-2">
          <button className="btn btn-outline-danger form-control">
            Cancel
          </button>
          </div>
          <div className="ms-auto col-sm-6 my-2">
          <button className="btn btn-outline-info form-control">
          <i className="bi bi-arrow-repeat"></i>
          </button>
          </div>
          <div className="mx-auto col-sm-12 col-md-8 col-lg-6 my-2 mb-4">
          <button disabled={!form.isValid}
          className={form.isValid? (
            "btn btn-success form-control"
          ):(
            "btn btn-secondary form-control"
          )}
          >
            SUBMIT
          </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CardManager;
