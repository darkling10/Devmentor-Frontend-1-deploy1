import { Formik, Form, Field } from "formik";
import React from "react";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { ROOT_URL } from "../context/Actions";
import { useAuthState } from "../context/AuthContext";

export const PostInterview = () => {
  const { token } = useAuthState();
  console.log(token);

  const validationSchema = yup.object({
    company: yup.string(),
    role: yup.string(),
    companyLogo: yup.string(),
    date: yup.string(),
    onCampus: yup.bool(),
    location: yup.string(),
    ctc: yup.number(),
    selected: yup.bool(),
    description: yup.string(),
    process: yup.string(),
  });

  const initialValues = {
    company: "",
    role: "",
    companyLogo: "",
    date: "",
    onCampus: true,
    location: "",
    ctc: 0,
    selected: true,
    description: "",
    process: "",
  };

  return (
    <div className=" w-screen">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          const payload = {
            company: values.company,
            role: values.role,
            companyLogo: values.companyLogo,
            date: values.date,
            onCampus: values.onCampus,
            location: values.location,
            ctc: values.ctc,
            selected: values.selected,
            description: values.description,
            process: values.process,
          };

          const requestOptions = {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "x-access-token": `Bearer ${token}`,
            },
            body: JSON.stringify(payload),
          };

          const res = await fetch(`${ROOT_URL}/user/interview`, requestOptions);
          console.log(res);
        }}
      >
        <Form className="flex flex-col justify-evenly h-full mx-20 sm:mx-5  items-center">
          <p className="text-2xl font-semibold my-2 mt-5 ">
            Post Interview Exprience
          </p>
          <div className="w-full my-3">
            <p className="text-2xl font-semibold my-2 ">Company</p>
            <Field
              name="company"
              type="text"
              className="border rounded px-3 py-2 w-full"
              as="input"
            />
          </div>
          <div className="w-full my-3">
            <p className="text-2xl font-semibold my-2 ">Role</p>
            <Field
              name="role"
              type="text"
              className="border rounded px-3 py-2 w-full"
              as="input"
            />
          </div>
          <div className="w-full my-3">
            <p className="text-2xl font-semibold my-2 ">
              Company Logo{" "}
              <span className="text-sm text-slate-400 ">(Enter Logo URL)</span>
            </p>
            <Field
              name="category"
              type="text"
              className="border rounded px-3 py-2 w-full"
              as="input"
            />
          </div>
          <div className="w-full my-3">
            <p className="text-2xl font-semibold my-2 ">
              Date{" "}
              <span className="text-sm text-slate-400 ">
                (Enter in DD/MM/YYYY Format)
              </span>{" "}
            </p>
            <Field
              name="date"
              type="text"
              className="border rounded px-3 py-2 w-full"
              as="input"
            />
          </div>
          <div className="w-full my-3">
            <p className="text-2xl font-semibold my-2 ">Job Location</p>
            <Field
              name="onCampus"
              type="text"
              className="border rounded px-3 py-2 w-full"
              as="select"
            >
              <option value={true}>On Campus</option>
              <option value={false}>Off Campus</option>
            </Field>
          </div>
          <div className="w-full my-3">
            <p className="text-2xl font-semibold my-2 ">Company Location</p>
            <Field
              name="location"
              type="text"
              className="border rounded px-3 py-2 w-full"
              as="input"
            />
          </div>
          <div className="w-full my-3">
            <p className="text-2xl font-semibold my-2 ">CTC</p>
            <Field
              name="ctc"
              type="number"
              className="border rounded px-3 py-2 w-full"
              as="input"
            />
          </div>
          <div className="w-full my-3">
            <p className="text-2xl font-semibold my-2 ">Were you Selected?</p>
            <Field
              name="selected"
              type="text"
              className="border rounded px-3 py-2 w-full"
              as="select"
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </Field>
          </div>
          <div className="w-full my-3">
            <p className="text-2xl font-semibold my-2 ">Description</p>
            <Field
              name="description"
              type="text"
              className="border rounded px-3 py-2 w-full"
              as="textarea"
            />
          </div>
          <div className="w-full my-3">
            <p className="text-2xl font-semibold my-2 ">Process</p>
            <Field
              name="process"
              type="text"
              className="border rounded px-3 py-2 w-full"
              as="textarea"
            />
          </div>
          <button
            type="submit"
            className=" px-5 bg-blue-600 text-xl py-2  rounded-xl text-white font-semibold w-96"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};
