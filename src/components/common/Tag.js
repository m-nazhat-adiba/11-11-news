import React from "react";

const Tag = ({ children }) => {
  return (
    <p className="border-2 rounded-full px-6 py-2 w-fit border-gray-300">
      {children}
    </p>
  );
};

export default Tag;
