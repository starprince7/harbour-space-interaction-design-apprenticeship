import Image from "next/image";
import React from "react";
import { Stack } from "../ui";

function Header() {
  return (
    <div className="w-full bg-[#523996]/90 text-white p-3 uppercase relative">
      <div className="container">
        <Stack direction="row" className="justify-between items-center">
          <div className="flex space-x-2">
            <p className="font-bold">Harbour space</p>{" "}
            <p className="text-xs inline">/Interaction design</p>
          </div>
          <Image
            alt="hamburger-icon"
            width={35}
            height={35}
            src="/hamburger-menu-icon.png"
            className="sm:hidden"
          />
        </Stack>
        {/* Floating Circle */}
        <div className="absolute right-11 top-2 hidden sm:grid place-content-center text-center rounded-full w-20 h-20 text-xs hover:scale-110 ease-linear duration-100 p-8 font-bold bg-[#4fa16c]">
          Apply Now
        </div>
      </div>
    </div>
  );
}

export default Header;
