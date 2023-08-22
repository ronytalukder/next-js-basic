"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Page = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorMessege, setEmailErrorMessege] = useState("");
  const [passwordErrorMessege, setPasswordErrorMessege] = useState("");

  const emialRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErrorMessege("");
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordErrorMessege("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      setEmailErrorMessege("Email is required");
    }
    else if (!emialRegex.test(email)) {
      setEmailErrorMessege("Email is invalid");
    }

    else if (password === "") {
      setPasswordErrorMessege("Password is required");
    }

    // else if (!passwordRegex.test(password)) {
    //   setPasswordErrorMessege("Password is invalid");
    // }
    
    else {
      console.log(email, password);
    }

  }







  return (
    // 00334e  ff9900

    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-[#00334e] i justify-around items-center hidden">
        <div>
          {/* <h1 className="text-white font-bold text-4xl font-sans">GoFinance</h1> */}   
          <Image
            src="/images/footer_logo.png"
            alt=""
            width={200}
            height={200}
          />
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
        <form onSubmit={handleSubmit} className=" w-full px-[10px] lg:px-[100px]">
          <h1 className="text-[#ff9900] font-bold text-5xl mb-1">Login</h1>
          <p className="text-sm font-normal text-[#00334e] mb-7">  
            Do not share with your login information.    
          </p>

          <div className="flex items-center border-2 border-[#00334e] border-opacity-50  py-2 px-3 rounded-2xl mb-4">
            <MdOutlineAlternateEmail className="h-5 w-5 text-[#00334e] text-opacity-50"></MdOutlineAlternateEmail>
            <input
            onChange={handleEmail}
              className="pl-2 outline-none w-full border-none"
              type="email"
              name="email"
              id=""
              placeholder="Enter Your Email"
            />
          </div>
            <p className="text-sm text-red-500 block mb-3 pl-2">{emailErrorMessege}</p>

          <div className="flex items-center border-2 border-[#00334e] border-opacity-50  py-2 px-3 rounded-2xl mb-4">
            <RiLockPasswordFill className="h-5 w-5 text-[#00334e] text-opacity-50"></RiLockPasswordFill>
            <input
            onChange={handlePassword}
              className="pl-2 outline-none w-full border-none"
              type="password"
              name="password"
              id=""
              placeholder="Enter Your Password"
            />
          
          </div>
        <p className="text-sm text-red-500 block mb-3 pl-2">{passwordErrorMessege}</p>

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
              New user?{" "}
              <Link href="registration" className="text-[#ff9900] font-bold ">
                Register Here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
