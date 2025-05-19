import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegisterPage = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .required('Confirm password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const initialValues = {
    name: '',
    password: '',
    confirmPassword: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log('Form Submitted:', values);
    },
  });

  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen">
      <form onSubmit={formik.handleSubmit} className="max-w-2xl w-full">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-8 transition-all duration-500 hover:shadow-xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Welcome Back</h2>
            <p className="text-gray-500 mt-2">Please sign in to continue</p>
          </div>

          <div className="space-y-6">
   
            <div className="relative">
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                Email Address
              </label>
              <div className="relative">
                <i data-lucide="mail" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-600 text-sm mt-2">{formik.errors.name}</p>
                )}
              </div>
            </div>


            <div className="relative">
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <i data-lucide="lock" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
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
            </div>

            <div className="relative">
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <div className="relative">
                <i data-lucide="lock" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
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
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:opacity-90 transition duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              Sign In
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/80 text-gray-500">Or continue with</span>
              </div>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg group"
            >
              <i data-lucide="fingerprint" className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
              <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-200">Login with Fingerprint</span>
            </button>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?
              <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"> Sign up</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
