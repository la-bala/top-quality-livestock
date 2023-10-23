import React from "react";
import Bulletpng from '../assets/bullet.png';

export default function Bullet(props) {
    return(
        <img
            loading="lazy"
            src={Bulletpng}
            className="w-5 my-auto mx-[8px]"
            alt="Bullet"
        />
    );
}