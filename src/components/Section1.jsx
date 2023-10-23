import React from "react";
import Check from '../assets/check.png';

export default function Section1(props) {
    return(
        <section className="bg-gray-900 self-stretch flex w-full flex-col mt-4 px-5 py-20 max-md:max-w-full">
        <div className="justify-center items-center self-center flex w-[877px] max-w-full flex-col px-5">
          <h2 className="text-white text-center text-xl font-medium leading-[140%] self-center max-w-[678px] max-md:max-w-full">
            Top Quality Livestock
          </h2>
          <h1 className="text-white text-center text-6xl font-medium leading-[100%] self-stretch w-full mt-6 max-md:max-w-full max-md:text-4xl max-md:mr-2">
            Sell Your Cattle <br /> to Nationwide Buyers
          </h1>
          <div className="justify-between items-start self-center flex w-[655px] max-w-full gap-5 mt-6 max-md:flex-wrap max-md:justify-center">
            <div className="items-start bg-white bg-opacity-10 self-stretch flex w-[215px] max-w-full justify-between gap-2 px-4 py-1 rounded-[40px]">
              <img
                loading="lazy"
                src={Check}
                className="aspect-square object-cover object-center w-4 fill-green-600 overflow-hidden self-center max-w-full my-auto"
                alt="Quick & Easy Process"
              />
              <span className="text-white text-base font-medium leading-[150%] self-stretch">
                Quick & Easy Process
              </span>
            </div>
            <div className="items-start bg-white bg-opacity-10 self-stretch flex w-[183px] max-w-full justify-between gap-2 px-4 py-1 rounded-[40px]">
              <img
                loading="lazy"
                src={Check}
                className="aspect-square object-cover object-center w-4 fill-green-600 overflow-hidden self-center max-w-full my-auto"
                alt="Top-Dollar Offers"
              />
              <span className="text-white text-base font-medium leading-[150%] self-stretch">
                Top-Dollar Offers
              </span>
            </div>
            <div className="items-start bg-white bg-opacity-10 self-stretch flex w-[209px] max-w-full justify-between gap-2 px-4 py-1 rounded-[40px]">
              <img
                loading="lazy"
                src={Check}
                className="aspect-square object-cover object-center w-4 fill-green-600 overflow-hidden self-center max-w-full my-auto"
                alt="Add Listings for Free"
              />
              <span className="text-white text-base font-medium leading-[150%] self-stretch">
                Add Listings for Free
              </span>
            </div>
          </div>
        </div>
        <h2 className="text-white text-center text-xl font-medium leading-[140%] self-center max-w-[729px] mt-12 max-md:mt-10">
          Get Approved, Get Offers, Get Paid
        </h2>
        <button className="justify-center items-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-orange-500 self-center flex w-[326px] max-w-full flex-col mt-12 px-5 py-4 rounded-lg max-md:mt-10">
          <span className="text-white text-lg font-bold leading-[155.556%] self-center">
            Register to Sell
          </span>
        </button>
      </section> 
    );
}