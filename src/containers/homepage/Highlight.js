import React from "react";
import PostCard from "@/components/common/PostCard";

const Highlight = ({ data, users }) => {
  return (
    <div>
      <h1 className="text-gray-900 text-xl font-semibold my-6">
        Recent blog posts
      </h1>
      <div className="flex">
        {/* Main Content */}
        <div className="flex flex-col gap-4">
          {data.map((item, key) => (
            <PostCard
              data={item}
              key={key}
              user={users.filter((acc) => acc.id === item.userId)}
              className="w-[680px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlight;
