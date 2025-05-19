
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../lib/firebase';

const AccountPage = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .required('Confirm password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (value) => {
      const payload = {
        email: value.email,
        password: value.password
      };
      createUserWithEmailAndPassword(auth, payload.email, payload.password)
        .then((res) => {
          console.log(res, "res");
        })
        .catch((err) => {
          console.error("Firebase error:", err);
        });

    }
  });

  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen">
      <form onSubmit={formik.handleSubmit} className="max-w-2xl w-full">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-8 transition-all duration-500 hover:shadow-xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Create an Account</h2>
            <p className="text-gray-500 mt-2">Register below</p>
          </div>
          <div className="space-y-6">
            <div className="relative">
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="lamiya@gmail.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-600 text-sm mt-2">{formik.errors.email}</p>
              )}
            </div>

            <div className="relative">
              <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-600 text-sm mt-2">{formik.errors.password}</p>
              )}
            </div>

            <div className="relative">
              <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-medium mb-2">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <p className="text-red-600 text-sm mt-2">{formik.errors.confirmPassword}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-2 text-gray-600 text-sm" htmlFor="remember">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:opacity-90 transition duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              Sign Up
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?
              <a href="/account" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"> Sign in</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccountPage;