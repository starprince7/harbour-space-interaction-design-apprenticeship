import React from "react";
import { Stack } from "../ui";

function ScholarshipInformation() {
  return (
    <div className="container pt-10 sm:pt-0">
      <Stack direction="column" className="gap-7 sm:flex-row">
        <div className="sm:border px-5 min-w-72 space-y-5">
          <div>
            <p className="text-[#523996] font-semibold sm:my-5">
              Scholarship value
            </p>
            <p className="text-lg sm:text-3xl text-gray-600">€31,300</p>
          </div>
          <div className="divider hidden sm:block sm:mt-52 mb-10"></div>
          <div className="grid grid-cols-2 gap-6 pb-5">
            <div>
              <p className="text-[#523996] font-semibold">Tuition covered</p>
              <p>€20,900</p>
            </div>
            <div>
              <p className="text-[#523996] font-semibold">Remaining</p>
              <p>€2,000</p>
            </div>
            <div>
              <p className="text-[#523996] font-semibold">Living stipend</p>
              <p className="">€8,400 (€700/month)</p>
            </div>
          </div>
        </div>
        <Stack direction="column" className="gap-7">
          <Stack direction="column" className="gap-7 sm:flex-row">
            <div className="border px-5 py-6 flex-1">
              <p className="text-[#523996] font-semibold my-5">
                Study commitment
              </p>
              <p className="text-2xl text-gray-500">3 hours / day</p>
              <div className="divider my-5 w-10"></div>
              <p className="text-gray-500">
                You will complete 15 modules to graduate. Daily classes are 3
                hours, plus coursework to complete in your own time.
              </p>
            </div>
            <div className="border px-5 py-6 flex-1">
              <p className="text-[#523996] font-semibold my-5">
                Work commitment
              </p>
              <p className="text-2xl text-gray-500">4 hours / day</p>
              <div className="divider my-5 w-10"></div>
              <p className="text-gray-500">
                Immerse yourself in the professional world during your
                apprenticeship. You’ll learn the ropes from the best and get to
                apply your newly acquired knowledge in the field from day one.
              </p>
            </div>
          </Stack>
          <div className="divider relative">
            <p className="absolute left-[30%] sm:left-[42%] -top-4 bg-white px-7 py-1 text-neutral-600">
              GRADUATION
            </p>
          </div>
          <div className="border px-5 py-6">
            <p className="text-[#523996] font-semibold my-5">
              A full-time contract
            </p>
            <p className="text-2xl text-gray-500">1 Year / Full-Time</p>
            <div className="divider my-5 w-10"></div>
            <p className="text-gray-500">
              You’ll be guaranteed a 1 year contract with SCG upon graduation.
            </p>
          </div>
        </Stack>
      </Stack>
    </div>
  );
}

export default ScholarshipInformation;
