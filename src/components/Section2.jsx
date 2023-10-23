import React from "react";
import Nation from '../assets/nation.png';
import CowMoney from '../assets/cowmoney.png';
import Conversation from '../assets/conversation.png';
import Bullet from "./Bullet";

export default function Section2(props) {
    return(
    <section className="items-center self-center flex w-full max-w-[1200px] flex-col mt-24 max-md:max-w-full max-md:mt-10">
        <div className="justify-center items-start self-stretch flex flex-col px-5 max-md:max-w-full">
            <div className="items-center self-stretch flex flex-col -mr-5 max-md:max-w-full">
            <h3 className="text-green-600 text-center text-base font-semibold leading-[150%] tracking-widest uppercase self-center w-full max-md:max-w-full">
                Trusted Online Marketplace
            </h3>
            <h1 className="text-gray-900 text-center text-4xl font-semibold leading-[133.333%] tracking-tight self-center w-full mt-1 max-md:max-w-full">
                Why Sell with Top Quality Livestock?
            </h1>
            </div>
            <p className="text-zinc-800 text-center text-xl font-medium leading-[140%] self-center w-full mt-8 max-w-xl">
            Top Quality Livestock is the premier online marketplace connecting
            a national network of verified buyers and sellers of livestock.
            </p>
        </div>
        <div className="flex flex-col space-y-24 mt-16">
            <div className="flex mx-4 max-md:flex-col items-center">
                <div className="flex my-auto">
                    <Bullet/>
                    <div className="items-start flex flex-col my-auto">
                        <div className="items-start flex max-w-full flex-col">
                            <h4 className="text-green-600 text-sm font-semibold tracking-wider uppercase">
                                Free to list
                            </h4>
                            <h2 className="text-gray-900 text-3xl font-semibold mt-2">
                                Sell to a National Market
                            </h2>
                        </div>
                        <p className="text-slate-700 text-lg font-medium mt-4 max-md:max-w-full max-w-lg">
                            Sell to anyone from industry giants to small-scale
                            operations wanting to buy your product. Ensure
                            fair, competitive prices in the national
                            market with buyers you can trust. Get listings seen
                            for free.
                        </p>
                    </div>
                </div>
                <div className="w-[400px]">
                    <img
                        loading="lazy"
                        src={Nation}
                        className="aspect-[1.11] object-cover object-center w-full overflow-hidden grow max-md:mt-10"
                        alt="A map"
                    />
                </div>
            </div>
            <div className="flex mx-4 max-md:flex-col items-center">
                <div className="flex my-auto">
                    <Bullet/>
                    <div className="items-start flex flex-col my-auto">
                        <div className="items-start flex max-w-full flex-col">
                            <h4 className="text-green-600 text-sm font-semibold tracking-wider uppercase">
                                Get more offers
                            </h4>
                            <h2 className="text-gray-900 text-3xl font-semibold mt-2">
                                Make More Sales
                            </h2>
                        </div>
                        <p className="text-slate-700 text-lg font-medium mt-4 max-md:max-w-full max-w-lg">
                            Access to TQL’s marketplace means you are seen by
                            thousands of potential buyers. As soon as you are
                            verified to sell, get offers from all over the
                            country.
                        </p>
                    </div>
                </div>
                <div className="w-[400px]">
                    <img
                        loading="lazy"
                        src={CowMoney}
                        className="aspect-[1.11] object-cover object-center w-full overflow-hidden grow max-md:mt-10"
                        alt="Cow sold"
                    />
                </div>
            </div>
            <div className="flex mx-4 max-md:flex-col items-center">
                <div className="flex my-auto">
                    <Bullet/>
                    <div className="items-start flex flex-col my-auto">
                        <div className="items-start flex max-w-full flex-col">
                            <h4 className="text-green-600 text-sm font-semibold tracking-wider uppercase">
                                Instant messaging
                            </h4>
                            <h2 className="text-gray-900 text-3xl font-semibold mt-2">
                                Quick & Easy Process
                            </h2>
                        </div>
                        <p className="text-slate-700 text-lg font-medium mt-4 max-md:max-w-full max-w-lg">
                            Connect quickly with buyers and negotiate directly
                            until you are satisfied. Your cattle don’t leave the
                            ranch until you meet a buyer you like.
                        </p>
                    </div>
                </div>
                <div className="w-[400px]">
                    <img
                        loading="lazy"
                        src={Conversation}
                        className="aspect-[1.11] object-cover object-center w-full overflow-hidden grow max-md:mt-10"
                        alt="A conversation"
                    />
                </div>
            </div>
        </div>
    </section>
    );
}