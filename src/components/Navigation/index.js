import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex w-full justify-between py-5">
      <Image src="/logo.svg" width={80} height={30} alt="logo" />
      <ul className="flex gap-4 text-gray-900">
        <li>Home</li>
        <li>Blogs</li>
        <li>Pages</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default NavBar;
