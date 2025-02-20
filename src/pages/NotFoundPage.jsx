import React from 'react';
import {FaExclamationTriangle} from 'react-icons/fa';
const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">

      <FaExclamationTriangle className="text-6xl text-red-500 mr-4" />
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
    </div>
  );
};

export default NotFoundPage;
