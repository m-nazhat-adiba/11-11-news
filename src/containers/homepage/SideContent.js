import UserCard from "@/components/common/UserCard";
import React from "react";

const SideContent = ({ user, className }) => {
  const limit = 5;
  return (
    <div className={`flex flex-col ${className}`}>
      <h1 className="text-gray-900 text-xl font-semibold my-6">
        People you might follow
      </h1>
      <div className="flex flex-col gap-4">
        {user.slice(0, limit).map((item, key) => (
          <UserCard user={item} key={key} />
        ))}
      </div>
    </div>
  );
};

export default SideContent;
