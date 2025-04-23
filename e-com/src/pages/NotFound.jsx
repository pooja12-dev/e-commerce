import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-lg w-full bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="p-8 text-center">
            <div className="mb-6">
              <h1 className="text-6xl font-bold text-gray-800">404</h1>
              <div className="h-1 w-16 bg-indigo-500 mx-auto my-4"></div>
              <h2 className="text-2xl font-semibold text-gray-700">
                Page Not Found
              </h2>
            </div>

            <div className="mb-8">
              <p className="text-gray-600">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>

            <div className="inline-block relative">
              <Link
                to="/"
                className="group flex items-center px-6 py-3 text-white bg-indigo-600 rounded-lg transition-all duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>

          <div className="bg-gray-50 px-8 py-6 border-t border-gray-100">
            <p className="text-center text-gray-500 text-sm">
              If you believe this is an error, please contact support.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
