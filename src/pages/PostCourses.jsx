import { Formik, Form, Field } from "formik";
import React from "react";
import * as yup from "yup";
import { Link } from "react-router-dom";

export const PostCourses = () => {
  const validationSchema = yup.object({
    title: yup
      .string()
      .required("Title Is Required")
      .min(10, "Title Must Be Greater Than 5 Characters"),
    author: yup.string().required().min(10),
    category: yup.string().required().min(10),
    linkTOCourse: yup.string().required().min(10),
    language: yup.string().required().min(10),
    userType: yup.string().required().min(10),
    platform: yup.string().required().min(10),
    price: yup.string().required().min(10),
    description: yup.string().required().min(10),
    pros: yup.string().required().min(10),
    cons: yup.string().required().min(10),
  });
  return <></>;
};
