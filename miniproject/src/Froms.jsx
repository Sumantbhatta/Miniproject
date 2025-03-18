import React from "react";

const Forms = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h2 className="text-center text-2xl font-semibold text-gray-700">
          Sign Up
        </h2>
        <form className="mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Enter your email"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Enter your password"
            />
          </div>

          <div className="mt-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">
                I agree to the Terms and Conditions
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Forms;
