"use client";
import { LottiePlayer } from "@lottiefiles/lottie-player";
import React from "react";
import Lottie from "lottie-react";
import Ani from "../../../public/animation/beautifulBooks.json";
import Creativity from "../../../public/animation/creativity.json";
import SelfPublishers from "../../../public/animation/selfPublishers.json";


const Page = () => {
  return (
    <div>
      <section className="about bg-blue-200 pt-14 pb-16 lg:pt-20 lg:pb-24">
        <div className="container px-5 2xl:px-0 mx-auto">
          <div className="flex justify-between items-center flex-wrap">
            <div className=" w-full md:w-[50%] lg:w-[45%]">
              <h2 className=" text-4xl mb-5 font-bold text-[#00334e]">
                What Makes Us Different?
              </h2>
              <p className="text-base font-normal ">
                {" "}
                At BookPattern, our talented and professional team has spent
                years building a global platform to help self-publishers get a
                book that they can be proud of.{" "}
                <span className="block mt-5">
                  By crafting stunning book covers, formatting the interior, and
                  converting the book into an e-book, we make sure your book
                  stands out from the rest. We believe in creativity, diversity,
                  and putting our clients first. And on top of that, BookPattern
                  is well known for excellent quality and unmatched client
                  service as well.
                </span>{" "}
              </p>
            </div>

            <div className="hidden md:flex w-[50%] pr-0 2xl:pr-[250px]  flex-wrap gap-[35px] lg:gap-[60px] justify-center">
              <div class="book">
                <div className="pl-10 ">
                  <h2 className="text-3xl text-orange-500 mb-2 font-medium">
                    150<span>+</span>
                  </h2>
                  <h3 className="text-base ">Project Completed</h3>
                </div>
                <div class="cover"></div>
              </div>
              <div class="book">
                <div className="pl-10 ">
                  <h2 className="text-3xl text-orange-500 mb-2 font-medium">
                    70<span>+</span>
                  </h2>
                  <h3 className="text-base ">Our Happy Client</h3>
                </div>
                <div class="cover"></div>
              </div>
              <div class="book">
                <div className="pl-10 ">
                  <h2 className="text-3xl text-orange-500 mb-2 font-medium">
                    7<span>+</span>
                  </h2>
                  <h3 className="text-base ">Years Of experience</h3>
                </div>
                <div class="cover"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[100px]">
        <div className="container px-2 lg-px:0 mx-auto ">
          <div className="mb-20">
            <h2 className=" text-4xl mb-5 font-bold text-[#00334e] text-center">
              Our Mission
            </h2>
            <p className="text-base font-normal text-center w-full md:w-[80%] lg:w-[70%] mx-auto">
              Our mission is really simple and straightforward. We work hard to
              design your print or e-book in a way that will make you proud as
              well as engage more potential readers and increase book sales.
            </p>
          </div>

          <div className="flex md:justify-center gap-0 md:gap-8 lg:gap-0 lg:justify-between flex-wrap ">
            <div className="w-full mb-6 md:mb-0 md:w-[45%] lg:mb-0 lg:w-[31%] text-center rounded-lg p-9 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <Lottie className="h-[200px]" animationData={Ani} />
              <h2 className="text-2xl font-bold mb-3 text-[#00334e]">
                Crafting Beautiful Books
              </h2>
              <p className="text-base">
                Our professional designers are changing the way your books are
                visible to the readers and published.
              </p>
            </div>

            <div className="w-full mb-6 md:mb-0 md:w-[45%] lg:mb-0 lg:w-[31%] text-center rounded-lg p-9 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <Lottie className="h-[200px]" animationData={Creativity} />
              <h2 className="text-2xl font-bold mb-3 text-[#00334e]">
                Ensure Quality & Creativity
              </h2>
              <p className="text-base">
                We make sure our top-notch quality services are perfectly suited
                to your genre and budget.
              </p>
            </div>

            <div className="w-full mb-6 md:mb-0 md:w-[45%] lg:mb-0 lg:w-[31%] text-center rounded-lg p-9 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <Lottie className="h-[200px]" animationData={SelfPublishers} />
              <h2 className="text-2xl font-bold mb-3 text-[#00334e]">
                Help Self Publishers Go Global
              </h2>
              <p className="text-base">
                BookPattern helps self-publishers to share their stories and
                ideas with the world through our designs.
              </p>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Page;
