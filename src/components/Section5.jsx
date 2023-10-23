import React from "react";
import Team from '../assets/team.png';

export default function Section5(props) {
    return(
    <section className="self-center w-full max-w-[1120px] mt-32 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src={Team}
              className="object-cover object-center w-full self-stretch overflow-hidden grow max-md:max-w-full max-md:mt-10"
              alt="The team"
            />
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="items-start flex flex-col mt-2 max-md:max-w-full max-md:mt-10">
              <div className="items-start flex w-[295px] max-w-full flex-col">
                <h3 className="text-green-600 text-base font-semibold leading-[150%] tracking-widest uppercase">
                  Who We Are
                </h3>
                <h1 className="text-gray-900 text-4xl font-semibold leading-[133.333%] tracking-tight mt-1">
                  The Top Quality <br /> Livestock Family
                </h1>
              </div>
              <p className="text-slate-700 text-lg leading-[177.778%] mt-8 max-md:max-w-full">
                Top Quality Livestock got its start in Austin, Texas with one
                goal: provide farmers and ranchers with digital solutions to
                help them become more efficient, profitable, and competitive in
                national markets.
                <br />
                <br />
                Our team of ranchers and tech innovators is helping build a
                stronger future for agriculture, as a trusted partner of
                operations across the country.
                <br />
                <br />
                We are driven by the belief that agriculture is the backbone of
                this country and without farmers and ranchers creating a secure
                and independent food supply, there is no United States.
              </p>
            </div>
          </div>
        </div>
    </section>
    );
}