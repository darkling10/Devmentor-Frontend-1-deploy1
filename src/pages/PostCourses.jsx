import { Formik, Form, Field } from "formik";
import React from "react";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { ROOT_URL } from "../context/Actions";
import { useAuthState } from "../context/AuthContext";

export const PostCourses = () => {
  const { token } = useAuthState();
  const navigate = useNavigate();

  const validationSchema = yup.object({
    title: yup
      .string()
      .min(10, "Title Must Be Greater Than 5 Characters")
      .required("This Field Cannot Be Empty"),
    author: yup.string().required("This Field Cannot Be Empty"),
    category: yup.string().required("This Field Cannot Be Empty"),
    linkToCourse: yup.string().required("This Field Cannot Be Empty"),
    language: yup.string().required("This Field Cannot Be Empty"),
    platform: yup.string().required("This Field Cannot Be Empty"),
    price: yup.number().required("This Field Cannot Be Empty"),
    description: yup.string().required("This Field Cannot Be Empty"),
    pros: yup.string().required("This Field Cannot Be Empty"),
    cons: yup.string().required("This Field Cannot Be Empty"),
  });

  const initialValues = {
    title: "",
    author: "",
    category: "Web",
    linkToCourse: "",
    language: "C++",
    platform: "",
    price: "",
    description: "",
    pros: "",
    cons: "",
  };

  return (
    <div className=" w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
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
          // console.log(res);
          if (res.errors) {
            alert("Invalid Credentials");
            console.log(res.errors);
          } else {
            navigate("/dashboard");
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col justify-evenly h-full mx-20 sm:mx-10 text-white  items-center">
            <p className="text-[3rem] font-semibold my-2 mt-10  ">
              Display New Course
            </p>
            <div className="w-full my-3">
              <p className="text-2xl font-semibold my-2 ">Title</p>
              <Field
                name="title"
                type="text"
                className="border rounded px-3 py-3 bg-blue-50 text-lg w-full text-black"
                as="input"
              />
              {errors.company && touched.company ? (
                <div className="text-error text-center text-xl font-semibold">
                  {errors.company}
                </div>
              ) : null}
            </div>
            <div className="w-full my-3">
              <p className="text-2xl font-semibold my-2 ">Author</p>
              <Field
                name="author"
                type="text"
                className="border rounded px-3 py-3 bg-blue-50 text-lg w-full text-black"
                as="input"
              />
              {errors.company && touched.company ? (
                <div className="text-error text-center text-xl font-semibold">
                  {errors.company}
                </div>
              ) : null}
            </div>
            <div className="w-full my-3">
              <p className="text-2xl font-semibold my-2 ">Domain</p>
              <Field
                name="category"
                type="text"
                className="border rounded px-3 py-3 bg-blue-50 text-lg w-full text-black"
                as="select"
              >
                <option value="Web">Web</option>
                <option value="Android">Android</option>
                <option value="AI">AI</option>
                <option value="Data">Data</option>
                <option value="Language">Language</option>
              </Field>
            </div>
            <div className="w-full my-3">
              <p className="text-2xl font-semibold my-2 ">Link to Course </p>
              <Field
                name="linkToCourse"
                type="text"
                className="border rounded px-3 py-3 bg-blue-50 text-lg w-full text-black"
                as="input"
              />
              {errors.company && touched.company ? (
                <div className="text-error text-center text-xl font-semibold">
                  {errors.company}
                </div>
              ) : null}
            </div>
            <div className="w-full my-3">
              <p className="text-2xl font-semibold my-2 ">Language </p>
              <Field
                name="language"
                type="text"
                className="border rounded px-3 py-3 bg-blue-50 text-lg w-full text-black"
                as="select"
              >
                <option value="cplusplus">C++</option>
                <option value="java">Java</option>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="go">Go</option>
              </Field>
            </div>
            <div className="w-full my-3">
              <p className="text-2xl font-semibold my-2 ">Platform</p>
              <Field
                name="platform"
                type="text"
                className="border rounded px-3 py-3 bg-blue-50 text-lg w-full text-black"
                as="input"
              />
              {errors.company && touched.company ? (
                <div className="text-error text-center text-xl font-semibold">
                  {errors.company}
                </div>
              ) : null}
            </div>
            <div className="w-full my-3">
              <p className="text-2xl font-semibold my-2 ">Price</p>
              <Field
                name="price"
                type="text"
                className="border rounded px-3 py-3 bg-blue-50 text-lg w-full text-black"
                as="input"
              />
              {errors.company && touched.company ? (
                <div className="text-error text-center text-xl font-semibold">
                  {errors.company}
                </div>
              ) : null}
            </div>
            <div className="w-full my-3">
              <p className="text-2xl font-semibold my-2 ">Description</p>
              <Field
                name="description"
                type="text"
                className="border rounded px-3 py-3 bg-blue-50 text-lg w-full text-black"
                as="textarea"
              />
              {errors.company && touched.company ? (
                <div className="text-error text-center text-xl font-semibold">
                  {errors.company}
                </div>
              ) : null}
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
                className="border rounded px-3 py-3 bg-blue-50 text-lg w-full text-black"
                as="textarea"
              />
              {errors.company && touched.company ? (
                <div className="text-error text-center text-xl font-semibold">
                  {errors.company}
                </div>
              ) : null}
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
                className="border rounded px-3 py-3 bg-blue-50 text-lg w-full text-black"
                as="textarea"
              />
              {errors.company && touched.company ? (
                <div className="text-error text-center text-xl font-semibold">
                  {errors.company}
                </div>
              ) : null}
            </div>
            <button
              type="submit"
              className=" px-5 bg-blue-600 text-xl py-2  rounded-xl text-white font-semibold w-96"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
