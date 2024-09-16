import React from "react";
import { Stack } from "../ui";
import Image from "next/image";
import Marquee from "../magicui/marquee";

function WhatPeopleSay() {
  return (
    <div className="my-16">
      <Marquee pauseOnHover className="[--duration:200s]">
        {new Array(25).fill("_").map((_, index) => (
          <PersonCard key={index} />
        ))}
      </Marquee>
    </div>
  );
}

export default WhatPeopleSay;

// Person Card
function PersonCard() {
  return (
    <div className="card-border min-h-40 min-w-60 w-96 sm:w-[600px]">
      <div className="bg-white relative h-10 flex justify-between items-center py-12 px-7 sm:py-14 sm:px-14">
        <Stack direction="row" className="gap-5 items-center">
          <Image src="/avatar-card.png" alt="avatar" width={50} height={50} />
          <div>
            <p className="text-sm text-neutral-600 font-semibold">
              Irene Pereyra
            </p>
            <p className=" text-xs text-neutral-500">
              Interaction Design Fellow ‘19
            </p>
          </div>
        </Stack>
        <Image src="/in-icon.svg" alt="avatar" width={20} height={20} />
        <button className="button-primary absolute right-32 -bottom-5 hidden sm:block">
          Drag
        </button>
      </div>
      <div className="bg-gray-50 h-fit py-12 px-7 sm:py-14 sm:px-14">
        <p className="text-neutral-500">
          This Fellowship was a turning point in my career. I wouldn’t be where
          I am today without the financial support and experienced offered
          through the program.
        </p>
        <p className="text-[10px] text-neutral-600 mt-5">
          Education · B.A. Visual Design
        </p>
      </div>
    </div>
  );
}
