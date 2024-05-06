import logo from "../../../../public/Logo_sm.svg";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="font-sans w-full overflow-hidden sm:px-20 px-10 text-[#FFFFFF80] py-5 space-y-2 rounded-t-3xl bg-[#0E0E0E]">
        <div className="sm:flex  sm:divide-x-2 max-sm:divide-y-2 divide-[#FFFFFF10] ">
          <div className="logo sm:pr-10">
            <Image
              src={logo}
              className="sm:px-10 h-72 max-sm:pb-5 sm:w-80 sm:h-80 "
              alt="Logo"
            />
          </div>
          <div className="sm:px-20 hidden max-sm:text-center sm:pt-16 pt-10 sm:flex sm:space-x-40">
            <div className="">
              <ul className="space-y-2">
                <h1 className="font-medium text-lg pb-2 text-white">
                  Anubhav Yadav
                </h1>
                <li className="text-md max-sm:hidden">
                  <a href="https://portfolio-new-nu-ashy.vercel.app/">Website</a>
                </li>
                <li className="text-md max-sm:hidden">
                  <a href="https://github.com/Anubhav5448">GitHub</a>
                </li>
            
                <li className="text-md max-sm:hidden">
                  <a href="https://x.com/Anubhav_Yadav06">Twitter</a>
                </li>
                <li className="text-md max-sm:hidden">
                  <a href="www.linkedin.com/in/anubhav-yadav-00b9981a3">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="space-y-2">
                <h1 className="font-medium text-lg pb-2 text-white">
                  Neeraj Yadav
                </h1>
                <li className="text-md max-sm:hidden">
                  <a href="https://portfolio-three-blush-91.vercel.app/">Website</a>
                </li>
                <li className="text-md max-sm:hidden">
                  <a href="https://github.com/NeerajYadav705">GitHub</a>
                </li>
               
                <li className="text-md max-sm:hidden">
                  <a href="https://x.com/NeerajYadav351">Twitter</a>
                </li>
                <li className="text-md max-sm:hidden">
                  <a href="https://www.linkedin.com/in/neeraj-yadav-017a571b4/">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
           
          </div>
        </div>
        <p className="text-center text-[FFFFFF90] max-sm:text-xs">
          Created with love ❤️ by
          <a className="text-white ml-2" href="https://portfolio-new-nu-ashy.vercel.app/">
           Anubhav yadav
          </a>{" "}
          and
          <a
            className="text-white ml-2"
            href="https://portfolio-three-blush-91.vercel.app/"
          >
            Neeraj Yadav
          </a>{" "}
        
        </p>
      </div>
    </>
  );
}
