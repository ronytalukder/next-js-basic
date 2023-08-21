import React from "react";

const page = () => {
  return (

    // 00334e  ff9900

    <div class="h-screen md:flex">
      <div class="relative overflow-hidden md:flex w-1/2 bg-[#00334e] i justify-around items-center hidden">
        <div>
          {/* <h1 class="text-white font-bold text-4xl font-sans">GoFinance</h1> */}
          
          <img src="images/footer_logo.png" alt="" />
          <p class="text-white mt-1">
          Get in touch with us for world-class book designer.
          </p>
        </div>
        <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full  border-t-8 border-[#ff9900]"></div>
        <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full  border-t-8 border-[#ff9900]"></div>
        <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-t-8 border-[#ff9900]"></div>
        <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-t-8 border-[#ff9900]"></div>
      </div>
      <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form class=" w-full px-[10px] lg:px-[100px]">
          <h1 class="text-[#ff9900] font-bold text-5xl mb-1">Login</h1>
          <p class="text-sm font-normal text-[#00334e] mb-7">Do not share with your login information.</p>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              class="pl-2 outline-none w-full border-none"
              type="text"
              name=""
              id=""
              placeholder="Full name"
            />
          </div>
          <button
            type="submit"
            class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Login
          </button>
          <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">
            Forgot Password ?
          </span>
        </form>
      </div>
    </div>
  );
};

export default page;
