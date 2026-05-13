import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="rounded-lg shadow-2xl p-10 text-center max-w-md ">
        <h1 className="text-7xl font-extrabold text-black mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-black mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 rounded-full bg-white text-red-600 font-semibold hover:scale-105 transition duration-300 shadow-lg"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;