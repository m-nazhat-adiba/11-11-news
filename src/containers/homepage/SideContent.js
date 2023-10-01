import React from "react";

import Tag from "@/components/common/Tag";
import UserCard from "@/components/common/UserCard";
import ToDoCard from "@/components/common/ToDoCard";

const SideContent = ({ user, className, todo }) => {
  const limit = 5;
  return (
    <div className={`flex flex-col ${className} w-96 px-4`}>
      <h1 className="text-gray-900 text-xl font-semibold my-6">To do</h1>
      <div className="flex flex-col gap-4">
        {todo.slice(0, limit).map((item, key) => (
          <ToDoCard
            user={user.filter((acc) => acc.id === item.id)}
            todos={item}
            isHome={true}
            key={key}
            className="w-full"
          />
        ))}
      </div>
      <h1 className="text-gray-900 text-xl font-semibold my-6">
        People you might follow
      </h1>
      <div className="flex flex-col gap-4">
        {user.slice(0, limit).map((item, key) => (
          <UserCard user={item} key={key} />
        ))}
      </div>
      <div>
        <h1 className="text-gray-900 text-xl font-semibold my-6">
          Tags you might like
        </h1>
        <div className="flex flex-col gap-3 text-gray-900">
          <Tag>Technologies</Tag>
          <Tag>Fashion</Tag>
          <Tag>Business</Tag>
          <Tag>Crime</Tag>
          <Tag>Religion</Tag>
        </div>
      </div>
    </div>
  );
};

export default SideContent;
