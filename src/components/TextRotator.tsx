import React from "react";

const roles = [
  "Frontend Developer",
  "Full-Stack Developer",
  "React Developer",
];

function TextRotator() {
  return (
    <div className="w-full overflow-hidden py-4">
      <p className="flex flex-wrap items-center justify-center gap-x-2 font-poppins text-base font-semibold text-[#4f5052] dark:text-gray-300 sm:text-2xl lg:justify-start">
        <span>I am a</span>
        <span
          className="relative inline-flex h-[1.5em] min-w-[12rem] overflow-hidden text-left font-rubik text-lg text-[#2f7df4] sm:text-3xl"
          aria-label={roles.join(", ")}
        >
          <span className="animate-role-slide flex flex-col">
            {roles.map((role) => (
              <span
                key={role}
                className="flex h-[1.5em] items-center whitespace-nowrap"
              >
                {role}
              </span>
            ))}
            <span
              aria-hidden="true"
              className="flex h-[1.5em] items-center whitespace-nowrap"
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
