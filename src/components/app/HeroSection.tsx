import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Stack } from "../ui";

function HeroSection() {
  return (
    <div className="sm:h-[70vh] grid sm:place-items-center">
      <ApprenticeshipUI />
    </div>
  );
}

export default HeroSection;

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): TimeLeft => {
  if (typeof window === "undefined") {
    // Return default values for server-side rendering
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const difference = +new Date("2024-09-23") - +new Date();
  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export const ApprenticeshipUI: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number): string => {
    return time < 10 ? `0${time}` : time.toString();
  };

  return (
    <div className="container mx-auto h-fit pt-16 sm:p-5">
      <Stack
        direction="column-reverse"
        className="lg:flex lg:flex-row lg:space-x-8"
      >
        <Stack
          direction="column"
          className="lg:w-2/3 space-y-4 px-4 sm:px:0  text-gray-600"
        >
          <div className="relative hidden sm:block">
            <h1 className="text-3xl hidden sm:block font text-[#523996] ida_icon">
              Interaction Design Apprenticeship
            </h1>
            <Image
              src="/interactive-design-icon.svg"
              alt="logo"
              width={150}
              height={150}
              className="absolute -top-14 right-16"
            />
          </div>
          <p className="text-sm font-bold">
            A fully funded work-study program to launch your tech career
          </p>
          <p className="text-xs">
            Harbour.Space has partnered with SCG to empower driven talent and
            eliminate the barriers to accessing exceptional education and career
            opportunities through a Masters Fellowship.
          </p>
          <p className="text-xs sm:hidden">
            Scholarship candidates will receive full financial support to
            complete their Masters program at Harbour.Space while gaining
            invaluable work experience through an internship with SCG, a leading
            company in the industry.
          </p>
          <p className="text-sm">
            <span className="font-semibold">Position:</span> Marketing
            Performance
          </p>
          <button className="button-primary">Apply Now</button>
        </Stack>

        <Stack direction="column" className="lg:w-1/2 space-y-4 p-4 rounded">
          <div className="relative sm:hidden">
            <h1 className="text-3xl mb-2 font text-[#523996]">
              Interaction Design Apprenticeship
            </h1>
            <Image
              src="/interactive-design-icon.svg"
              alt="logo"
              width={150}
              height={150}
              className="absolute -top-20 right-16"
            />
          </div>
          <div className="flex flex-col-reverse sm:flex-row w-36 justify-between gap-1">
            <Image src="/elephant-logo.svg" alt="logo" width={50} height={50} />
            <p className="text-xs text-gray-500 font-light">
              Powered by:{" "}
              <b className="inline sm:block font-medium sm:text-lg">Zeptolab</b>
            </p>
          </div>
          <div className="p-4 rounded border border-[#5239963d]">
            <p className="text-[#523996]">Application closes in</p>
            {isClient ? (
              <p className="text-xl sm:text-2xl text-gray-700 font-light">
                {timeLeft.days} Day : {formatTime(timeLeft.hours)} Hrs :{" "}
                {formatTime(timeLeft.minutes)} Min :{" "}
                {formatTime(timeLeft.seconds)} Sec
              </p>
            ) : (
              <p className="text-xl sm:text-2xl text-gray-700 font-light">
                Loading...
              </p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4 p-4 rounded border border-[#5239963d]">
            <div className="">
              <p className="text-[#523996] text-sm">Location</p>
              <p className="text-gray-600">Bangkok</p>
            </div>
            <div className="">
              <p className="text-[#523996] text-sm">Start date</p>
              <p className="text-gray-600">30 June 2020</p>
            </div>
            <div className="">
              <p className="text-[#523996] text-sm">Duration</p>
              <p className="text-gray-600">1 Year Full-Time</p>
            </div>
            <div className="">
              <p className="text-[#523996] text-sm">End date</p>
              <p className="text-gray-600">3 Aug 2020</p>
            </div>
          </div>
        </Stack>
      </Stack>
    </div>
  );
};
