import React from "react";
import Farmer from '../assets/farmer.png';
import No1 from '../assets/no1.png';
import No2 from '../assets/no2.png';
import No3 from '../assets/no3.png';
import No4 from '../assets/no4.png';

export default function Section4(props) {
    return(
    <section className="bg-stone-100 self-stretch flex w-full justify-evenly flex-row mt-24 pt-12 pb-28 px-5 max-md:max-w-full max-md:mt-10">
        <div className="flex flex-col items-stretch w-6/12 max-md:hidden">
            <img
              loading="lazy"
              src={Farmer}
              className="object-cover object-center w-full self-stretch overflow-hidden grow max-md:max-w-full max-md:mt-10"
              alt="A farmer and his cow"
            />
        </div>
        <div>
            <h2 className="text-green-600 text-base font-semibold leading-[150%] tracking-widest uppercase">
                Get approved today
            </h2>
            <h1 className="justify-center text-gray-900 text-3xl font-semibold leading-[131.25%] tracking-tight mt-3">
                Start Selling Around <br /> the Country
            </h1>
            <div className="justify-center items-start flex w-[342px] max-w-full flex-col mt-11 max-md:mt-10">
                <div className="items-start self-stretch flex justify-between gap-4 px-5">
                <img
                    loading="lazy"
                    src={No1}
                    alt="1"
                />
                <a
                    href="#"
                    className="text-neutral-800 text-base font-medium leading-[150%] self-center grow shrink-0 basis-auto my-auto"
                >
                    Create an account
                </a>
                </div>
                <hr className="border self-stretch flex w-full h-px flex-col mt-5 border-dashed border-black" />
            </div>
            <div className="justify-center items-start flex w-[342px] max-w-full flex-col mt-6">
                <div className="items-start self-stretch flex justify-between gap-4 px-5">
                <img
                    loading="lazy"
                    src={No2}
                    alt="2"
                />
                <a
                    href="#"
                    className="text-neutral-800 text-base font-medium leading-[150%] self-center grow shrink-0 basis-auto my-auto"
                >
                    Get approved to sell
                </a>
                </div>
                <hr className="border self-stretch flex w-full h-px flex-col mt-5 border-dashed border-black" />
            </div>
            <div className="items-start flex w-[342px] max-w-full flex-col mt-4">
                <div className="items-start self-stretch flex justify-between gap-4 px-5">
                <img
                    loading="lazy"
                    src={No3}
                    alt="3"
                />
                <div className="text-neutral-800 text-base font-medium leading-[150%] self-stretch grow shrink-0 basis-auto">
                    Add cattle listing with breed, age, <br /> weight
                </div>
                </div>
                <hr className="border self-stretch flex w-full h-px flex-col mt-3 border-dashed border-black" />
            </div>
            <div className="items-start flex w-[342px] max-w-full gap-4 mt-7 px-5">
                <img
                loading="lazy"
                src={No4}
                alt="4"
                />
                <div className="text-neutral-800 text-base font-medium leading-[150%] self-stretch grow shrink-0 basis-auto">
                Start appearing in our catalog for <br /> thousands of nationwide buyers <br /> searching for livestock everyday!
                </div>
            </div>
            <div className="justify-center items-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-orange-500 flex w-[342px] max-w-full grow flex-col mt-16 px-5 py-3.5 rounded-lg max-md:mt-10">
                <div className="text-white text-lg font-bold leading-[155.556%] self-center">
                Register to Get Started
                </div>
            </div>
        </div>
    </section>
    );
}