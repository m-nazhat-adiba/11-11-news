import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex w-full justify-between py-8">
      <Link href={"/"}>
        <Image src="/logo.svg" width={80} height={30} alt="logo" />
      </Link>
      <ul className="flex gap-4 text-gray-900">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <li>Blogs</li>
        <li>Pages</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default NavBar;
