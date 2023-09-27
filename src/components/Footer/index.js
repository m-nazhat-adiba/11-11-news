import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col py-8 md:flex-row md:justify-between gap-12 xl:gap-32">
      <div className="flex flex-col md:w-[25%]">
        <Image
          src="/logo.svg"
          width={100}
          height={50}
          alt="logo"
          className="w-[50%] md:w-[60%]"
        />
        <p className="text-gray-900 py-6">
          Did you come here for something in particular or just general Riker
        </p>
      </div>

      <div className="text-gray-900 grid grid-cols-2 md:grid-cols-2 md:w-[40%] gap-10 md:gap-16 md:pl-8">
        <div className="flex flex-col">
          <p className="font-bold text-xl pb-4">Blogs</p>
          <ul className="flex flex-col gap-2">
            <li>
              <a>Travel?</a>
            </li>
            <li>
              <a>Technologies</a>
            </li>
            <li>
              <a>Business</a>
            </li>
            <li>
              <a>Fashion</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-xl pb-4">Quick Links</p>
          <ul className="flex flex-col gap-2">
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Support Center</a>
            </li>
            <li>
              <a>Terms and Condition</a>
            </li>
            <li>
              <a>Privacy Policy</a>
            </li>
            <li>
              <a>Accessbility</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-gray-900 flex flex-col gap-8 md:w-[30%] items-center md:items-start">
        <div className="flex flex-col w-full">
          <p className="font-bold text-lg pb-5 text-center md:text-start">
            Subscribe to our newsletter.
          </p>
          <form className="flex w-full">
            <input
              placeholder="Email address"
              className="border-2 border-gray-200 py-2 px-1 w-full"
            />
            <button className="px-4 py-2 bg-gray-900 text-white">
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex flex-col w-full">
          <p className="font-bold text-lg pb-5 text-center md:text-start">
            Follow on.
          </p>
          <div className="flex gap-6 text-2xl text-gray-900">
            <Icon icon="basil:instagram-solid" />
            <Icon icon="basil:facebook-solid" />
            <Icon icon="basil:twitter-solid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
