import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { registerSchema } from "../featuers/auth/register.schema";
import { registerInitialValues, type RegisterFormValues } from "../featuers/auth/register.types";
import { toRegisterFormData } from "../featuers/auth/register.formData";

const RegisterPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF8F0] px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl border border-gray-200">
        <h2 className="text-2xl font-bold text-[#C0392B] mb-6 text-center">Create an Account</h2>

        <Formik<RegisterFormValues>
          initialValues={registerInitialValues}
          validationSchema={registerSchema}
          onSubmit={async (values, { setSubmitting, setStatus, resetForm }) => {
            try {
              const formData = toRegisterFormData(values); // or inline FormData as before

              const res = await axios.post("http://localhost:3000/auth/register", formData, {
                headers: { "Content-Type": "multipart/form-data" },
              });

              setStatus({ ok: true, msg: "✅ Registered successfully!" });
              resetForm();
              console.log("Response:", res.data);
            } catch (err: any) {
              setStatus({
                ok: false,
                msg: "❌ " + (err?.response?.data?.message || "Registration failed"),
              });
              console.error("Registration error:", err?.response?.data || err.message);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, setFieldValue, touched, errors, status, values }) => (
            <Form className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Status */}
              {status?.msg && (
                <div
                  className={`md:col-span-2 -mt-2 mb-2 text-center font-medium ${
                    status.ok ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {status.msg}
                </div>
              )}

              {/* Full Name */}
              <div>
                <label className="text-sm font-medium text-gray-700">Full Name</label>
                <Field
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className={`mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0392B] hover:border-[#C0392B] transition ${
                    touched.fullName && errors.fullName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <ErrorMessage name="fullName" component="div" className="text-xs text-red-600 mt-1" />
              </div>

              {/* Username */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Username <span className="text-red-500">*</span>
                </label>
                <Field
                  name="username"
                  type="text"
                  placeholder="Choose a username"
                  className={`mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0392B] hover:border-[#C0392B] transition ${
                    touched.username && errors.username ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <ErrorMessage name="username" component="div" className="text-xs text-red-600 mt-1" />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className={`mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0392B] hover:border-[#C0392B] transition ${
                    touched.email && errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <ErrorMessage name="email" component="div" className="text-xs text-red-600 mt-1" />
              </div>

              {/* Profile Picture (Bootstrap-style) */}
              <div>
                <label className="text-sm font-medium text-gray-700">Profile Picture</label>
                <input
                  id="profilePic"
                  name="profilePic"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.currentTarget.files?.[0] || null;
                    setFieldValue("profilePic", file);
                  }}
                  className={`mt-1 block w-full text-sm text-gray-700 border rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C0392B] hover:border-[#C0392B]
                    file:mr-4 file:py-2 file:px-4 file:rounded-l-lg file:border-0 file:text-sm file:font-medium
                    file:bg-[#C0392B] file:text-white hover:file:bg-[#a93226]
                    ${touched.profilePic && errors.profilePic ? "border-red-500" : "border-gray-300"}`}
                />
                {values.profilePic && (
                  <div className="text-xs text-gray-600 mt-1 truncate">
                    Selected: {values.profilePic.name}
                  </div>
                )}
                <ErrorMessage name="profilePic" component="div" className="text-xs text-red-600 mt-1" />
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Password <span className="text-red-500">*</span>
                </label>
                <Field
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  className={`mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0392B] hover:border-[#C0392B] transition ${
                    touched.password && errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <ErrorMessage name="password" component="div" className="text-xs text-red-600 mt-1" />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <Field
                  name="confirmPassword"
                  type="password"
                  placeholder="Re-enter password"
                  className={`mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0392B] hover:border-[#C0392B] transition ${
                    touched.confirmPassword && errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-xs text-red-600 mt-1"
                />
              </div>

              {/* Submit */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C0392B] text-white py-2.5 rounded-lg font-semibold hover:bg-[#a93226] shadow-sm hover:shadow transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Registering..." : "Register"}
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-[#C0392B] font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;