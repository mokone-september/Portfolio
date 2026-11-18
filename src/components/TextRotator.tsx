
import React from "react";

const roles = [
  "Frontend Developer",
  "Full-Stack Developer",
  "React Developer",
];

function TextRotator() {
  return (
    <div className="w-full overflow-hidden py-4">
      <p className="flex flex-wrap items-center justify-center gap-x-3 font-poppins text-base font-semibold leading-normal text-[#4f5052] dark:text-gray-300 sm:text-2xl lg:justify-start">
        <span className="shrink-0">I am a</span>

        <span
          className="relative inline-flex h-[1.5em] min-w-[15rem] shrink-0 overflow-hidden text-left font-rubik text-lg leading-none text-[#2f7df4] sm:min-w-[20rem] sm:text-3xl"
          aria-label={roles.join(", ")}
        >
          <span className="animate-home-role-slide flex shrink-0 flex-col">
            {roles.map((role) => (
              <span
                key={role}
                className="flex h-[1.5em] shrink-0 items-center whitespace-nowrap"
              >
                {role}
              </span>
            ))}

            <span
              aria-hidden="true"
              className="flex h-[1.5em] shrink-0 items-center whitespace-nowrap"
            >
              {roles[0]}
            </span>
          </span>
        </span>
      </p>
    </div>
  );
}

export default TextRotator;
