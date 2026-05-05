import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4F39F6] to-[#9514FA] px-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 text-center max-w-md w-full border border-white/20">
        <h1 className="text-7xl font-extrabold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-200 mb-6">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 rounded-full bg-white text-[#4F39F6] font-semibold hover:scale-105 transition duration-300 shadow-lg"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;