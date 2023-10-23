import React from "react";
import { useNavigate } from 'react-router-dom';
import TqlLogo from '../assets/tqllogo.png';

export default function Nav(props) {

    const navigate = useNavigate();

    function login() {
        navigate('/login', { replace: false });
    }

    return(
        <nav className="flex flex-row">
          <img
            loading="lazy"
            src={TqlLogo}
            className="aspect-[1.52] object-contain object-center w-[85px] overflow-hidden self-stretch max-w-full ml-6"
            alt="Logo"
          />
          <div className="justify-between self-center flex w-full gap-5 px-5">
            <h1 className="text-slate-800 text-base font-medium leading-[150%] self-center max-lg:hidden my-auto">
              About Us
            </h1>
            <div className="ml-auto self-stretch flex justify-between gap-3">
                <div className="items-start self-center flex gap-2 my-auto max-md:justify-center max-lg:hidden">
                <a
                    href="tel:888-313-1597"
                    className="text-gray-900 text-base font-medium leading-[150%] self-stretch"
                >
                    Call us
                </a>
                <span className="text-stone-400 text-base leading-[150%] self-stretch">
                🖁
                </span>
                <span className="text-gray-900 text-base font-medium leading-[150%] self-stretch">
                    (888)-313-1597
                </span>
                </div>
                <div className="flex items-end">
                    <button onClick={login} className="text-slate-800 text-base font-semibold leading-[150%] self-stretch justify-center items-center border shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-white w-[166px] max-w-full px-3 py-2 rounded-md border-solid border-gray-200">
                        Sell Your Livestock
                    </button>
                    <button onClick={login} className="text-white text-base font-bold leading-[150%] self-stretch justify-center items-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-green-600 w-[80px] max-w-full px-3 py-2 rounded-md">
                        Log in
                    </button>
                </div>
            </div>
          </div>
        </nav>
    );
}