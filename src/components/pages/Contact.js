import React from "react";
import { TextInput } from "../common/TextInput";
import { model, validation } from "../../components/models/contactModel.js";
import { Formik } from "formik";
import { toast } from "react-toastify";

const Contact = () => {
  const logInSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();

    toast.success(`Submit`, {
      position: "top-right",
    });
  };

  return (
    <div className="mt-12 max-w-screen-xl m-auto w-full">
      <Formik
        onSubmit={logInSubmit}
        initialValues={model}
        validationSchema={validation}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="">
                <TextInput
                  name="fullName"
                  type="text"
                  placeholder="your Name"
                  display="fullName  "
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullName}
                  error={errors.fullName}
                  touched={touched.fullName}
                  required
                />
              </div>
              <div className="mt-4">
                <TextInput
                  name="email"
                  type="email"
                  placeholder="e***@***.com"
                  display="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={errors.email}
                  touched={touched.email}
                  required
                />
              </div>
              <div className="mt-4">
                <TextInput
                  name="productName"
                  type="productName"
                  placeholder="productName"
                  display="productName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.productName}
                  error={errors.productName}
                  touched={touched.productName}
                  required
                />
              </div>
              <div className="mt-4">
                <TextInput
                  name="message"
                  type="message"
                  placeholder="message"
                  display="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  error={errors.message}
                  touched={touched.message}
                  required
                />
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="btn font-bold px-4 w-full py-2 rounded   text-gray-200 bg-[#300d4f]"
                >
                  Submit
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
      <div className="text-center justify-center flex m-auto mt-12 ">
        <div>
          <p className=""> or Enquiry</p>
          <div className="bg-indigo-900 p-2 rounded text-gray-50">
            <a href="tel:+7001186809">7001186809</a>
          </div>
          <p className="mt-2">  whatsApp</p>
          <div className="bg-indigo-900 p-2 mt-1 rounded text-gray-50">
            <a href="  https://wa.me/7001186809 ">7001186809</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
