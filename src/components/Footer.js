import Link from "next/link";
import React from "react";
import { FaAngleRight, FaPhoneAlt } from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import { FaFacebookF, FaLocationDot } from "react-icons/fa6";



// export function ami (params) {
//     return {
//         props : {data:"lalala"}
//     }
    
// }


const Footer = () => {
  return (
    <footer className="bg-[#00334e] pt-10">
      <div className="container mx-auto flex justify-between flex-wrap">
        <div className="w-[100%] mb-3 lg:mb-0 p-2 lg:p-0 md:w-[100%] lg:w-[25%]">
          <div className="">
            <img src="images/footer_logo.png" alt="footerLogo" />
          </div>
          <br />
          <p className="text-white">
            BookPattern, where beautiful books are designed. We're dedicated to
            help self-publish authors reach the audience they deserve with our
            extraordinary designs.
          </p>
          <br />
        </div>
        <div className="w-[100%] mb-3 lg:mb-0 p-2 lg:p-0 md:w-[50%] lg:w-[20%]">
          <h1 className="text-white text-xl font-medium tracking-[0.030rem]">
            Quick Links
          </h1>
          <ul className="mt-2 text-gray-300/80 flex flex-col	">
          <li className="flex items-center ">
              <FaAngleRight className="mr-2 text-[#ff9900]" />
              <Link href="#" className="text-white hover:text-[#ff9900] transition-all hover:tracking-[1px]">
                Home
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[100%] mb-3 lg:mb-0 p-2 lg:p-0 md:w-[50%] lg:w-[20%]">
          <h1 className="text-white text-xl font-medium tracking-[0.030rem]">
            Our Services
          </h1>
          <ul className="mt-2 text-gray-300/80 flex flex-col">
          <li className="flex items-center ">
              <FaAngleRight className="mr-2 text-[#ff9900]" />
              <Link href="#" className="text-white hover:text-[#ff9900] transition-all hover:tracking-[1px]">
                Home
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[100%] mb-3 lg:mb-0 p-2 lg:p-0 md:w-[1000%] lg:w-[25%]">
          <h1 className="text-white text-xl font-medium ">
            Connect Us
          </h1>
          <br />
          <div className="flex items-center">
            <FaLocationDot className="mr-2 text-white" />
            <p className="text-white"> 1016 H St, Modesto, CA 95354, United States</p>
          </div><br/>
          <div className="flex items-center ">
            <FaPhoneAlt className="mr-2 text-white" />
            <p className="text-white"> +12096221108</p>
          </div> <br/>
          <div className="flex items-center">
            <MdEmail className="mr-2 text-white" />
            <p className="text-white">  contact@bookpattern. com</p>
          </div>
        </div>
      </div>

      <div className ="bg-[#ff9900] py-3 mt-5">
      <div className="flex flex-col-reverse lg:flex-row container mx-auto  flex-wrap p-2 lg:p-0 justify-between items-center ">

        <div className="w-100% lg:w-70%">
          <p>
            Copyright © {new Date().getFullYear()}{" "}
            <Link href="/" className="text-[#00334e] font-bold text-white"> Book Pattern</Link> All Rights Reserved.
          </p>
        </div>

        <div className="w-100% lg:w-30%">
          <Link
            href="#"
            >
            <div className="w-[40px] h-[40px] text-[#ff9900] bg-[#00334e] hover:bg-white hover:text-[#00334e]  flex justify-center items-center rounded-full">
            <FaFacebookF/>
            </div>
          </Link>
        </div>
        </div>
      </div>


    </footer>
  );
};




export default Footer;
