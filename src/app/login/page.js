import Link from "next/link";
import React from "react";
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

const page = () => {
  return (

    // 00334e  ff9900

    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-[#00334e] i justify-around items-center hidden">
        <div>
          {/* <h1 className="text-white font-bold text-4xl font-sans">GoFinance</h1> */}
          
          <img src="images/footer_logo.png" alt="" />
          <p className="text-white mt-1">
          Get in touch with us for world-class book designer.
          </p>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full  border-t-8 border-[#ff9900]"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full  border-t-8 border-[#ff9900]"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-t-8 border-[#ff9900]"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-t-8 border-[#ff9900]"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className=" w-full px-[10px] lg:px-[100px]">
          <h1 className="text-[#ff9900] font-bold text-5xl mb-1">Login</h1>
          <p className="text-sm font-normal text-[#00334e] mb-7">Do not share with your login information.</p>


          <div className="flex items-center border-2 border-[#00334e] border-opacity-50  py-2 px-3 rounded-2xl mb-4">
          <MdOutlineAlternateEmail className="h-5 w-5 text-[#00334e] text-opacity-50"   ></MdOutlineAlternateEmail>
            <input
              className="pl-2 outline-none w-full border-none"
              type="email"
              name=""
              id=""
              placeholder="Enter Your Email"
            />
          </div>

          <div className="flex items-center border-2 border-[#00334e] border-opacity-50  py-2 px-3 rounded-2xl mb-4">
          <RiLockPasswordFill className="h-5 w-5 text-[#00334e] text-opacity-50"   ></RiLockPasswordFill>
            <input
              className="pl-2 outline-none w-full border-none"
              type="password"
              name=""
              id=""
              placeholder="Enter Your Password"
            />
          </div>

          <span className="text-sm ml-2 hover:text-[#ff9900] cursor-pointer">
            Forgot Password ?
          </span>
          <button
            type="submit"
            className="block w-full transition-[.4s] bg-[#00334e] hover:bg-[#ff9900] mt-4 py-[10px] rounded-2xl text-white font-semibold mb-2"
          >
            Login
          </button>
          <div className="text-left ml-2 mt-3">
          <p className="text-sm text-[#00334e]">
          New user? <Link href="registration" className="text-[#ff9900] font-bold ">Register Here</Link>
          </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
