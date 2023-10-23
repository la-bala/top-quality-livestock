import React from "react";
import Product1 from '../assets/product1.png';
import Product2 from '../assets/product2.png';
import Product3 from '../assets/product3.png';
import Product4 from '../assets/product4.png';

export default function Section3(props) {
    return(
    <section className="items-start self-center flex w-full max-w-[1120px] flex-col mt-28 max-md:max-w-full max-md:mt-10 max-lg:hidden">
        <div className="items-start self-stretch flex flex-col px-5 max-md:max-w-full">
          <h3 className="text-green-600 text-center text-base font-semibold leading-[150%] tracking-widest uppercase">
            Top cattle offers from around the country
          </h3>
          <h1 className="text-black text-3xl font-semibold leading-[137.5%] tracking-tight self-center w-full -ml-5 mt-2 max-md:max-w-full">
            Register today and get your cattle listed.
          </h1>
        </div>
        <div className="self-stretch mt-10 px-5 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
              <div className="items-start flex grow flex-col max-md:mt-5">
                <div className="relative group">
                    <img
                    loading="lazy"
                    src={Product1}
                    className="aspect-[1.66] object-cover object-center w-full justify-end items-start overflow-hidden"
                    alt="Cattle"
                    />
                    <div className="invisible group-hover:visible bg-black absolute w-full h-full top-0 text-white flex place-items-center"><span className="mx-auto">List Your Cattle Here</span></div>
                </div>
                <div className="items-start flex w-[126px] max-w-full flex-col mt-3">
                  <h2 className="text-gray-900 text-lg font-semibold leading-[160%]">
                    12 Red Angus
                  </h2>
                  <div className="items-start flex w-[60px] max-w-full gap-1 mt-3">
                    <span className="text-gray-500 text-lg leading-[111.111%] self-stretch">
                      🇺🇸
                    </span>
                    <span className="text-slate-700 text-center text-sm font-medium leading-[142.857%] self-stretch">
                      Texas
                    </span>
                  </div>
                </div>
                <p className="text-stone-950 text-xl font-semibold leading-[160%] mt-3">
                  $3,200 / head
                </p>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-start flex grow flex-col max-md:mt-5">
                <div className="relative group">
                    <img
                    loading="lazy"
                    src={Product2}
                    className="aspect-[1.66] object-cover object-center w-full justify-end items-start overflow-hidden"
                    alt="Cattle"
                    />
                    <div className="invisible group-hover:visible bg-black absolute w-full h-full top-0 text-white flex place-items-center"><span className="mx-auto">List Your Cattle Here</span></div>
                </div>
                <div className="items-start flex w-[84px] max-w-full flex-col mt-3">
                  <h2 className="text-gray-900 text-lg font-semibold leading-[160%]">
                    17 Angus
                  </h2>
                  <div className="items-start flex w-full gap-1 mt-3">
                    <span className="text-gray-500 text-lg leading-[111.111%] self-stretch">
                      🇺🇸
                    </span>
                    <span className="text-slate-700 text-center text-sm font-medium leading-[142.857%] self-stretch">
                      Kansas
                    </span>
                  </div>
                </div>
                <p className="text-stone-950 text-xl font-semibold leading-[160%] mt-3">
                  $2,200 / head
                </p>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-start flex grow flex-col max-md:mt-5">
                <div className="relative group">
                    <img
                    loading="lazy"
                    src={Product3}
                    className="aspect-[1.66] object-cover object-center w-full justify-end items-start overflow-hidden"
                    alt="Cattle"
                    />
                    <div className="invisible group-hover:visible bg-black absolute w-full h-full top-0 text-white flex place-items-center"><span className="mx-auto">List Your Cattle Here</span></div>
                </div>
                <div className="items-start flex w-32 max-w-full flex-col mt-3">
                  <h2 className="text-gray-900 text-lg font-semibold leading-[160%]">
                    8 Beefmaster
                  </h2>
                  <div className="items-start flex w-[60px] max-w-full gap-1 mt-3">
                    <span className="text-gray-500 text-lg leading-[111.111%] self-stretch">
                      🇺🇸
                    </span>
                    <span className="text-slate-700 text-center text-sm font-medium leading-[142.857%] self-stretch">
                      Texas
                    </span>
                  </div>
                </div>
                <p className="text-stone-950 text-xl font-semibold leading-[160%] mt-3">
                  $2,500 / head
                </p>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-start flex grow flex-col max-md:mt-5">
                <div className="relative group">
                    <img
                    loading="lazy"
                    src={Product4}
                    className="aspect-[1.66] object-cover object-center w-full justify-end items-start overflow-hidden"
                    alt="Cattle"
                    />
                    <div className="invisible group-hover:visible bg-black absolute w-full h-full top-0 text-white flex place-items-center"><span className="mx-auto">List Your Cattle Here</span></div>
                </div>
                <div className="items-start flex w-[98px] max-w-full flex-col mt-3">
                  <h2 className="text-gray-900 text-lg font-semibold leading-[160%]">
                    1 Brahman
                  </h2>
                  <div className="items-start flex w-[60px] max-w-full gap-1 mt-3">
                    <span className="text-gray-500 text-lg leading-[111.111%] self-stretch">
                      🇺🇸
                    </span>
                    <span className="text-slate-700 text-center text-sm font-medium leading-[142.857%] self-stretch">
                      Texas
                    </span>
                  </div>
                </div>
                <p className="text-stone-950 text-xl font-semibold leading-[160%] mt-3">
                  $5,500 / head
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="justify-center items-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-orange-500 self-center flex w-[280px] max-w-full flex-col -ml-2.5 mt-20 px-5 py-3.5 rounded-lg max-md:mt-10">
          <span className="text-white text-lg font-bold leading-[155.556%] self-center">
            Register to Sell
          </span>
        </button>
    </section>
    );
}