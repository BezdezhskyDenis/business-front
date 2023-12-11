import { validateFormikUsingJoi } from "../utils/validateFormikUsingJoi";
import Input from "./common/input";
import PageHeader from "./common/pageHeader";
import { Navigate, useNavigate} from "react-router-dom";
import { useFormik } from "formik";
import Joi from "joi";
import { useState } from "react";
import cardsService from "../services/cardsService"
import {createCardValidation} from "../utils/validationSchemas";
import { useAlert } from "../contexts/alert.context";

const CardCreate = ({ redirect, headTitle }) => {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();
  const { handleAlertChange } = useAlert();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      ...createCardValidation
    },
    validate: validateFormikUsingJoi({
      title: Joi.string().min(2).max(256).required(),
      subtitle: Joi.string().min(2).max(256).required(),
      description: Joi.string().min(2).max(1024).required(),
      phone: Joi.string().min(9).max(11).required(),
      email: Joi.string()
        .min(5)
        .required()
        .email({ tlds: { allow: false } }),
      web: Joi.string().min(14).allow(""),
      image: Joi.object({
        url: Joi.string().min(14).allow(""),
        alt: Joi.string().min(2).max(256).allow(""),
      }).required(),
      address: Joi.object({
        state: Joi.string().allow(""),
        country: Joi.string().required(),
        city: Joi.string().required(),
        street: Joi.string().required(),
        houseNumber: Joi.number().min(1).required(),
        zip: Joi.number().allow(""),
      }).required(),
    }),
    async onSubmit(values) {
      try {
        await cardsService.createCard({...values});
        handleAlertChange("new card was created", "success");
        navigate("/my-cards")
      } catch (err) {
        if (err.response?.status === 400) {
          handleAlertChange(err.response.data, "danger");
          setServerError(err.response.data);
        }
      }
    },
  });

  const cancelButton = () =>{
    resetForm()
    handleAlertChange("card create was canceled", "info")
    navigate(redirect);
  }

  const resetForm = () =>{
    form.resetForm();
  }

  return (
    <>
      <PageHeader
        title={headTitle}
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
        {...form.getFieldProps("web")}
          type="text"
          label="Web"
          error={form.touched.web && form.errors.web}
          />
        <Input
        {...form.getFieldProps("image.url")}
          type="text"
          label="Image url"
          error={form.touched.image?.url && form.errors.url}
          />
        <Input
        {...form.getFieldProps("image.alt")}
          type="text"
          label="Image alt"
          error={form.touched.image?.alt && form.errors.alt}
          />
        <Input
        {...form.getFieldProps("address.state")}
          type="state"
          label="State"
          error={form.touched.address?.state && form.errors.state}
          />
        <Input
          {...form.getFieldProps("address.country")}
          type="text"
          label="Country"
          required
          error={form.touched.address?.country && form.errors.country}
          />
        <Input
          {...form.getFieldProps("address.city")}
          type="text"
          label="City"
          required
          error={form.touched.address?.city && form.errors.city}
          />
        <Input
          {...form.getFieldProps("address.street")}
          type="text"
          label="Street"
          required
          error={form.touched.address?.street && form.errors.street}
          />
        <Input
          {...form.getFieldProps("address.houseNumber")}
          type="text"
          label="House Number"
          required
          error={form.touched.address?.houseNumber && form.errors.houseNumber}
          />
        <Input
        {...form.getFieldProps("address.zip")}
          type="number"
          label="Zip"
          error={form.touched.address?.zip && form.errors.zip}
          />

          <div className="col-sm-6 my-2">
          <button className="btn btn-outline-danger form-control"type="button" onClick={cancelButton}>
            Cancel
          </button>
          </div>
          <div className="ms-auto col-sm-6 my-2">
          <button className="btn btn-outline-info form-control" type="button" onClick={resetForm}>
          <i className="bi bi-arrow-repeat"></i>
          </button>
          </div>
          <div className="mx-auto col-sm-12 col-md-8 col-lg-6 my-2 mb-4" type="submit">
          <button type="submit" disabled={!form.isValid}
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

export default CardCreate;