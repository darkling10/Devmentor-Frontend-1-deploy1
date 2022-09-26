import { Formik, Form, Field } from "formik";
import React from "react";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { ROOT_URL } from "../context/Actions";
import { useAuthState } from "../context/AuthContext";

export const PostCourses = () => {
  const { token } = useAuthState();
  console.log(token);

  const validationSchema = yup.object({
    company: yup.string().min(10, "Title Must Be Greater Than 5 Characters"),
    role: yup.string(),
    companyLogo: yup.string(),
    date: yup.string(),
    onCampus: yup.string(),
    location: yup.string(),
    ctc: yup.number(),
    selected: yup.string(),
    description: yup.string(),
    process: yup.string(),
  });

  const initialValues = {
    company: "",
    role: "",
    companyLogo: "Web",
    date: "",
    onCampus: "C++",
    location: "",
    ctc: "",
    selected: "",
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
            title: values.title,
            author: values.author,
            category: values.category,
            linkToCourse: values.linkToCourse,
            language: values.language,
            userType: "admin",
            platform: values.platform,
            price: values.price,
            description: values.description,
            pros: values.pros.split(","),
            cons: values.cons.split(","),
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

          const res = await fetch(`${ROOT_URL}/admin/course`, requestOptions);
          console.log(res);
        }}
      >
        <Form className="flex flex-col justify-evenly h-full mx-20 sm:mx-5  items-center">
          <p className="text-2xl font-semibold my-2 ">Display New Course</p>
          <div className="w-full my-3">
            <p className="text-2xl font-semibold my-2 ">Title</p>
            <Field
              name="title"
              type="text"
              className="border rounded px-3 py-2 w-full"
              as="input"
            />
          </div>
          <div className="w-full my-3">
            <p className="text-2xl font-semibold my-2 ">Author</p>
            <Field
              name="author"
              type="text"
              className="border rounded px-3 py-2 w-full"
              as="input"
            />
          </div>
          <div className="w-full my-3">
            <p className="text-2xl font-semibold my-2 ">Category</p>
            <Field
              name="category"
              type="text"
              className="border rounded px-3 py-2 w-full"
              as="select"
            >
            <option value="Web" >Web</option>
              <option value="Android" >Android</option>
              <option value="AI" >AI</option>
              <option value="Data" >Data</option>
              <option value="Language" >Language</option>
            </Field>
          </div>
          <div className="w-full my-3">
            <p className="text-2xl font-semibold my-2 ">Link to Course </p>
            <Field
              name="linkToCourse"
              type="text"
              className="border rounded px-3 py-2 w-full"
              as="input"
            />
          </div>
          <div className="w-full my-3">
            <p className="text-2xl font-semibold my-2 ">Language </p>
            <Field
              name="language"
              type="text"
              className="border rounded px-3 py-2 w-full"
              as="select"
            >
              <option value="C++">C++</option>
              <option value="Java">Java</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Go">Go</option>
            </Field>
          </div>
          <div className="w-full my-3">
            <p className="text-2xl font-semibold my-2 ">Platform</p>
            <Field
              name="platform"
              type="text"
              className="border rounded px-3 py-2 w-full"
              as="input"
            />
          </div>
          <div className="w-full my-3">
            <p className="text-2xl font-semibold my-2 ">Price</p>
            <Field
              name="price"
              type="text"
              className="border rounded px-3 py-2 w-full"
              as="input"
            />
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
            <p className="text-2xl font-semibold my-2 ">
              Pros{" "}
              <span className="text-sm text-slate-400 ">
                (Enter Comma , Seperated Values)
              </span>{" "}
            </p>
            <Field
              name="pros"
              type="text"
              className="border rounded px-3 py-2 w-full"
              as="textarea"
            />
          </div>
          <div className="w-full my-3">
            <p className="text-2xl font-semibold my-2 ">
              Cons{" "}
              <span className="text-sm text-slate-400 ">
                (Enter Comma , Seperated Values)
              </span>{" "}
            </p>
            <Field
              name="cons"
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
