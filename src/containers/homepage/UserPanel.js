import { Divider } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const UserPanel = () => {
  return (
    <div className="flex flex-col text-gray-900 w-52 gap-10 sticky top-0">
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold my-6">Blogs</h2>
        <ul className="flex flex-col gap-4">
          <Divider />
          <li>Trending Now</li>
          <Divider />
          <li>Fashion</li>
          <Divider />
          <li>Technologies</li>
          <Divider />
          <li>Business</li>
          <Divider />
          <li>Politics</li>
        </ul>
      </div>
      <div className="flex flex-col gap-6 w-full">
        <button className="bg-gray-900 text-white w-full py-2 rounded-lg">
          Write Blog
        </button>
        <div className="flex gap-2 items-center">
          <Image
            src="/avatar.svg"
            width={50}
            height={50}
            alt="avatar"
            className="rounded-full"
          />
          <div>
            <p className="font-semibold text-lg">Nazhat Adiba</p>
            <p>@nazhat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
