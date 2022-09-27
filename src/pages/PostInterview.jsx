
import { Formik, Form, Field } from "formik";
import React from "react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import { ROOT_URL } from "../context/Actions";
import { useAuthState } from "../context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const PostInterview = () => {
  const { token } = useAuthState();
  const navigate = useNavigate();

  const showToastMessage = (msg) => {
    
    toast.success(msg, {
        position: toast.POSITION.BOTTOM_RIGHT
    });
   };



  const validationSchema = yup.object({
    name: yup.string().required("This Field Cannot Be Empty"),
    college: yup.string().required("This Field Cannot Be Empty"),
    resume: yup.string().required("This Field Cannot Be Empty"),
    githubLink: yup.string().required("This Field Cannot Be Empty"),
    linkedinLink: yup.string().required("This Field Cannot Be Empty"),
    company: yup.string().required("This Field Cannot Be Empty"),
    role: yup.string().required("This Field Cannot Be Empty"),
    companyLogo: yup.string().required("This Field Cannot Be Empty"),
    date: yup.string().required("This Field Cannot Be Empty"),
    onCampus: yup.bool().required("Please Select A Value"),
    location: yup.string().required("This Field Cannot Be Empty"),
    ctc: yup.number().required("This Field Cannot Be Empty"),
    selected: yup.bool().required("Please Select A Value"),

    platformUsed: yup.string().required("This Field Cannot Be Empty"),
    subjectLearned: yup.string().required("This Field Cannot Be Empty"),
    courses: yup.string().required("This Field Cannot Be Empty"),
    aptitudePrep: yup.string().required("This Field Cannot Be Empty"),

    description: yup
      .string()
      .min(150, "Description Must Be Greater Than 150 Characters")
      .required("This Field Cannot Be Empty"),

    process: yup
      .string()
      .min(100, "Process Must Be Greater Than 100 Characters")
      .required("This Field Cannot Be Empty"),
  });

  const initialValues = {
    name: "",
    college: "",
    resume: "",
    githubLink: "",
    linkedinLink: "",
    company: "",
    role: "SDE Intern",
    companyLogo: "",
    date: "",
    onCampus: true,
    location: "",
    ctc: 0,
    selected: true,
    platformUsed: "",
    subjectLearned: "",
    courses: "",
    aptitudePrep: "",
    process: "",
  };

  return (
    <div className="  bg-gradient-to-br   grid md:grid-cols-1 grid-cols-2 place-content-center ">
      <div className="col text-white  bg-primary flex justify-between items-start flex-col p-10 min-h-screen fixed w-1/2 right-0">
        <div className="flex justify-start items-center">
          <i className="bx bxl-dev-to text-3xl"></i>
          <p> Mentor </p>
        </div>

        <div className="text">
          <h1 className="text-3xl font-bold">
 
            Learn About New Courses and Interview Experiences
          </h1>
          <p className="text-white/70 my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            reprehenderit excepturi dicta tenetur quis modi quos aspernatur ab
            debitis aliquid?
          </p>
        </div>

        <div className="comment bg-dark-primary md:w-9/12 w-6/12 px-10 py-5 mx-auto rounded-md">
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
            adipisci?
          </p>
          <div className="profile flex">
            <img
              src="https://media.sketchfab.com/models/7b9a05ad2bfc42eca59141d550a868e2/thumbnails/c0a545aba25e4fc1a27a040429227266/cd1f9baf456146ab948056ff64f83b51.jpeg"
              className="w-12 object-cover h-12 rounded-full"
              alt="profile"
            />
            <div className="txt">
              <h3 className="ml-5">John Doe</h3>
              <h3 className="ml-5 text-white/70">Software Engineer</h3>
            </div>
          </div>
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}


        onSubmit={async (values , {resetForm}) => {

          const payload = {
            name: values.name,
            college: values.college,
            resume: values.resume,
            githubLink: values.githubLink,
            linkedinLink: values.linkedinLink,
            company: values.company,
            role: values.role,
            companyLogo: values.companyLogo,
            date: values.date,
            onCampus: values.onCampus,
            location: values.location,
            ctc: values.ctc,
            selected: values.selected,
            description: {
              platformUsed: values.platformUsed,
              subjectLearned: values.subjectLearned,
              courses: values.courses,
              aptitudePrep: values.aptitudePrep,
            },
            process: values.process.split(","),
          };
          console.log(payload)
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

          const resp = await fetch(`${ROOT_URL}/user/interview`, requestOptions);
           const res = await resp.json()
          console.log(res);

          if (res.errors) {
            alert("Invalid Credentials");
            console.log("error");
          } else {
            navigate("/dashboard");
          }

        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col justify-evenly h-full mx-20 items-center ">
            <p className="text-[2rem] font-semibold my-2 mt-10 ">
              Post Interview Experience
            </p>
            <div className="w-full my-3">

              <p className="text-2xl font-semibold my-2 ">Name</p>
              <Field
                name="name"
                type="text"
                className="border rounded px-3 py-3 bg-blue-50 text-lg w-full text-black "
                as="input"
              />
              {errors.name && touched.name ? (
                <div className="text-error text-center text-xl font-semibold">
                  {errors.name}
                </div>
              ) : null}
            </div>
            <div className="w-full my-3">
              <p className="text-2xl font-semibold my-2 ">College</p>
              <Field
                name="college"
                type="text"
                className="border rounded px-3 py-3 bg-blue-50 text-lg w-full text-black "
                as="input"
              />
              {errors.college && touched.college ? (
                <div className="text-error text-center text-xl font-semibold">
                  {errors.college}
                </div>
              ) : null}
            </div>
            <div className="w-full my-3">
              <p className="text-2xl font-semibold my-2 ">Link To Resume</p>
              <Field
                name="resume"
                type="text"
                className="border rounded px-3 py-3 bg-blue-50 text-lg w-full text-black "
                as="input"
              />
              {errors.resume && touched.resume ? (
                <div className="text-error text-center text-xl font-semibold">
                  {errors.resume}
                </div>
              ) : null}
            </div>
            <div className="w-full my-3">
              <p className="text-2xl font-semibold my-2 ">
                Link To GitHub Profile
              </p>
              <Field
                name="githubLink"
                type="text"
                className="border rounded px-3 py-3 bg-blue-50 text-lg w-full text-black "
                as="input"
              />
              {errors.githubLink && touched.githubLink ? (
                <div className="text-error text-center text-xl font-semibold">
                  {errors.githubLink}
                </div>
              ) : null}
            </div>
            <div className="w-full my-3">
              <p className="text-2xl font-semibold my-2 ">
                Link To LinkedIn Profile
              </p>
              <Field
                name="linkedinLink"
                type="text"
                className="border rounded px-3 py-3 bg-blue-50 text-lg w-full text-black "
                as="input"
              />
              {errors.linkedinLink && touched.linkedinLink ? (
                <div className="text-error text-center text-xl font-semibold">
                  {errors.linkedinLink}
                </div>
              ) : null}
            </div>

            <div className="w-full my-3">
              <p className="text-2xl font-semibold my-2 ">Company</p>

              <p className="text-xl font-semibold my-2 ">Company</p>

              <Field
                name="company"
                type="text"
                className="border rounded px-3 py-3 bg-blue-50 text-lg w-full text-black "
                as="input"
              />
              {errors.company && touched.company ? (
                <div className="text-red-500 text-center text-[16px] my-2">
                  {errors.company}
                </div>
              ) : null}
            </div>
            <div className="w-full my-3">
              <p className="text-xl font-semibold my-2 ">Role</p>
              <Field
                name="role"
                type="text"
                className="border rounded px-3 py-3 bg-blue-50 text-lg w-full text-black "
                as="select"
              >
                <option value="SDE Intern">SDE Intern</option>
                <option value="SDE-1">SDE-1</option>
                <option value="SDE-2">SDE-2</option>
                <option value="FrontEnd Developer">FrontEnd Developer</option>
                <option value="BackEnd Developer">BackEnd Developer</option>
                <option value="FullStack Developer">FullStack Developer</option>
                <option value="DevOps Engineer">DevOps Engineer</option>
                <option value="Other">Other</option>
              </Field>
              {errors.role && touched.role ? (
                <div className="text-red-500 text-center text-[16px] my-2">
                  {errors.role}
                </div>
              ) : null}
            </div>
            <div className="w-full my-3">
              <p className="text-xl font-semibold my-2 ">
                Company Logo{" "}
                <span className="text-sm text-slate-400 ">
                  (Enter Logo URL)
                </span>
              </p>
              <Field
                name="companyLogo"
                type="text"
                className="border rounded px-3 py-3 bg-blue-50 text-lg w-full text-black "
                as="input"
              />
              {errors.companyLogo && touched.companyLogo ? (
                <div className="text-red-500 text-center text-[16px] my-2">
                  {errors.companyLogo}
                </div>
              ) : null}
            </div>
            <div className="w-full my-3">
              <p className="text-xl font-semibold my-2 ">
                Date{" "}
                <span className="text-sm text-slate-400 ">
                  (Enter in DD/MM/YYYY Format)
                </span>{" "}
              </p>
              <Field
                name="date"
                type="text"
                className="border rounded px-3 py-3 bg-blue-50 text-lg w-full text-black "
                as="input"
              />
              {errors.date && touched.date ? (
                <div className="text-red-500 text-center text-[16px] my-2">
                  {errors.date}
                </div>
              ) : null}
            </div>
            <div className="w-full my-3">
              <p className="text-xl font-semibold my-2 ">Job Location</p>
              <Field
                name="onCampus"
                type="text"
                className=" appearance-none border rounded px-3 py-3 bg-blue-50 text-lg w-full text-black "
                as="select"
              >
                <option value={true}>On Campus</option>
                <option value={false}>Off Campus</option>
              </Field>
              {errors.onCampus && touched.onCampus ? (
                <div className="text-red-500 text-center text-[16px] my-2">
                  {errors.onCampus}
                </div>
              ) : null}
            </div>
            <div className="w-full my-3">
              <p className="text-xl font-semibold my-2 ">Company Location</p>
              <Field
                name="location"
                type="text"
                className="border rounded px-3 py-3 bg-blue-50 text-lg w-full text-black "
                as="input"
              />
              {errors.location && touched.location ? (
                <div className="text-red-500 text-center text-[16px] my-2">
                  {errors.location}
                </div>
              ) : null}
            </div>
            <div className="w-full my-3">
              <p className="text-xl font-semibold my-2 ">CTC</p>
              <Field
                name="ctc"
                type="number"
                className="appearance-none border rounded px-3 py-3 bg-blue-50 text-lg w-full text-black "
                as="input"
              />
              {errors.ctc && touched.ctc ? (
                <div className="text-red-500 text-center text-[16px] my-2">
                  {errors.ctc}
                </div>
              ) : null}
            </div>
            <div className="w-full my-3">
              <p className="text-xl font-semibold my-2 ">Were you Selected?</p>
              <Field
                name="selected"
                type="text"
                className=" appearance-none border rounded px-3 py-3 bg-blue-50 text-lg w-full text-black "
                as="select"
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </Field>
              {errors.selected && touched.selected ? (
                <div className="text-red-500 text-center text-[16px] my-2">
                  {errors.selected}
                </div>
              ) : null}
            </div>

            <div className="w-full my-3  p-5 bg-slate-200  rounded-lg flex flex-col">
              <p className="text-2xl font-semibold my-2 mx-2  ">
                Interview Description
              </p>
              <div classname="w-full">
                <p className="text-2xl font-semibold my-3  mx-10 ">
                  Platform Used
                </p>
                <Field
                  name="platformUsed"
                  type="text"
                  className="border rounded px-3 py-3 bg-blue-50 text-lg w-full mx-10 text-black "
                  as="input"
                />
                {errors.platformUsed && touched.platformUsed ? (
                  <div className="text-error text-center text-xl font-semibold">
                    {errors.platformUsed}
                  </div>
                ) : null}
              </div>
              <div classname="w-full">
                <p className="text-2xl font-semibold my-3  mx-10 ">
                  Subjects Required
                </p>
                <Field
                  name="subjectLearned"
                  type="text"
                  className="border rounded px-3 py-3 bg-blue-50 text-lg w-full mx-10 text-black "
                  as="input"
                />
                {errors.subjectLearned && touched.subjectLearned ? (
                  <div className="text-error text-center text-xl font-semibold">
                    {errors.subjectLearned}
                  </div>
                ) : null}
              </div>
              <div classname="w-full">
                <p className="text-2xl font-semibold my-3  mx-10 ">
                  Courses Used
                </p>
                <Field
                  name="courses"
                  type="text"
                  className="border rounded px-3 py-3 bg-blue-50 text-lg w-full mx-10 text-black "
                  as="input"
                />
                {errors.courses && touched.courses ? (
                  <div className="text-error text-center text-xl font-semibold">
                    {errors.courses}
                  </div>
                ) : null}
              </div>
              <div classname="w-full">
                <p className="text-2xl font-semibold my-3  mx-10 ">
                  Aptitude Prep
                </p>
                <Field
                  name="aptitudePrep"
                  type="text"
                  className="border rounded px-3 py-3 bg-blue-50 text-lg w-full mx-10 text-black "
                  as="textarea"
                />
                {errors.aptitudePrep && touched.aptitudePrep ? (
                  <div className="text-error text-center text-xl font-semibold">
                    {errors.aptitudePrep}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="w-full my-3">
              <p className="text-2xl font-semibold my-2 ">
                Interview Process
                <span className="text-sm text-slate-400 ">
                  (Enter Comma , Seperated Values)
                </span>{" "}
              </p>

            <div className="w-full my-3">
              <p className="text-xl font-semibold my-2 ">Job Description</p>
              <Field
                name="description"
                type="text"
                className="border rounded px-3 py-3 bg-blue-50 text-lg w-full text-black "
                as="textarea"
              />
              {errors.description && touched.description ? (
                <div className="text-red-500 text-center text-[16px] my-2">
                  {errors.description}
                </div>
              ) : null}
            </div>
            <div className="w-full my-3">
              <p className="text-xl font-semibold my-2 ">Interview Process</p>

              <Field
                name="process"
                type="text"
                className="border rounded px-3 py-3 bg-blue-50 text-lg w-full text-black "
                as="textarea"
              />
              {errors.process && touched.process ? (
                <div className="text-red-500 text-center text-[16px] my-2">
                  {errors.process}
                </div>
              ) : null}
            </div>
            <button
              type="submit"
              className=" px-5 bg-blue-600 text-xl py-2 my-5 rounded-xl text-white w-full"
            >
              Share Experience
            </button>
          </Form>
        )}
      </Formik>
      <ToastContainer />

    </div>
  );
};
