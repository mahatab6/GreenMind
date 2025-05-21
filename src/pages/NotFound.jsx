// NotFound.jsx
import React from 'react';
import { Link } from 'react-router';
import { FaLeaf } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-green-50 text-green-800 p-6">
      <FaLeaf size={80} className="mb-6 text-green-400" />
      <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-6">
        Oops! Looks like the plant you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="mt-4 inline-block bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
