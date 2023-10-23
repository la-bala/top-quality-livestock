import React from "react";
import { FacebookLogo } from "./FacebookLogo.jsx";
import Nav from "./Nav.jsx";
import Section1 from "./Section1.jsx";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx";
import Section4 from "./Section4.jsx";
import Section5 from "./Section5.jsx";

export default function LandingPage(props) {
  return (
    <main className="bg-white flex flex-col">
      <header className="self-stretch flex w-full flex-col md:px-20 mt-4">
        <Nav/>
      </header>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <footer className="items-center border-t-[color:var(--warm-200,#EDE8E4)] bg-zinc-50 self-stretch flex w-full flex-col mt-40 pt-16 pb-12 px-5 border-t border-solid max-md:max-w-full max-md:mt-10">
        <div className="justify-between items-start self-center flex w-full max-w-[1120px] gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="items-start flex flex-col">
            <h3 className="text-stone-500 text-lg font-semibold leading-[155.556%]">
              Let’s keep in touch!
            </h3>
            <div className="items-start flex w-[311px] max-w-full grow flex-col mt-2">
              <p className="text-gray-900 text-2xl font-semibold leading-[150%] tracking-tight">
                info@topqualitylivestock.com
              </p>
              <p className="text-gray-900 text-2xl font-semibold leading-[150%] tracking-tight">
                +1 512-387-4314
              </p>
            </div>
          </div>
          <FacebookLogo
            loading="lazy"
            srcSet="..."
            className="aspect-square object-cover object-center w-5 overflow-hidden max-w-full mt-24 max-md:mt-10"
            alt="Logo"
          />
        </div>
        <div className="items-start self-center flex w-full max-w-[1120px] flex-col mt-10 max-md:max-w-full">
          <div className="self-stretch bg-gray-200 flex w-full h-px flex-col max-md:max-w-full" />
          <div className="items-start self-center flex w-full justify-between gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
            <div className="items-start self-stretch flex justify-between gap-4">
              <a
                href="/terms"
                className="text-gray-500 text-sm font-medium leading-[142.857%] flex-1"
              >
                Terms of Service
              </a>
              <a
                href="/privacy"
                className="text-gray-500 text-sm font-medium leading-[142.857%] self-stretch"
              >
                Privacy Policy
              </a>
            </div>
            <p className="text-gray-500 text-sm font-medium leading-[142.857%] self-stretch">
              Copyright © Top Quality Livestock 2023. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
