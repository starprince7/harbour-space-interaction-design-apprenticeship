import React from "react";
import { Stack } from "../ui";
import Image from "next/image";

function AboutApprenticeship() {
  return (
    <div className="mb-96 sm:mb-20 container relative">
      <Stack direction="column" className="sm:flex-row space-x-36 items-center">
        <div className="circle-pattern w-96 h-80 sm:w-[470px] sm:h-[470px]">
          <Image
            src="/image-circle.png"
            alt="about image"
            width={400}
            height={400}
            className="w-64 sm:w-[400px] h-auto hidden sm:block"
          />
        </div>
        <MobileImageOverlay />
        <Stack
          direction="column"
          className="hidden sm:flex gap-3 sm:w-96 text-gray-500"
        >
          <h2 className="text-[#523996] font-semibold my-5 text-4xl">
            About the apprenticeship
          </h2>
          <p>
            Our scholarships are designed to give talented and driven young
            people from any background access to top-class education, experience
            and network. We offer a fully-funded master’s degree alongside an
            apprenticeship and a guaranteed job upon graduation.{" "}
          </p>
        </Stack>
      </Stack>
    </div>
  );
}

export default AboutApprenticeship;

//Mobile image overlay
function MobileImageOverlay() {
  return (
    <div className="bg-[#523996] w-screen h-72 absolute top-[60%] right-0 sm:hidden">
      <Stack
        direction="column"
        className="bg-white h-[60vh] p-6 w-[382px] border -mt-4 mx-auto"
      >
        <Image
          src="/image-circle.png"
          alt="about image"
          width={400}
          height={400}
          className="w-64 sm:w-[400px] h-auto mx-auto -mt-36"
        />
        <Stack
          direction="column"
          className=" sm:hidden gap-3 sm:w-96 text-gray-500"
        >
          <h2 className="text-[#523996] my-10 font-semibold text-4xl">
            About the apprenticeship
          </h2>
          <p>
            Our scholarships are designed to give talented and driven young
            people from any background access to top-class education, experience
            and network. We offer a fully-funded master’s degree alongside an
            apprenticeship and a guaranteed job upon graduation.{" "}
          </p>
        </Stack>
      </Stack>
    </div>
  );
}
