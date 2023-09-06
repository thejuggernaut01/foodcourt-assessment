import React from "react";

const Folder = ({ name }) => {
  return (
    <div className="flex items-center border rounded-md text-gray-500 py-2 cursor-pointer">
      <div className="border rounded-full p-[4px] bg-gray-200 ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
          />
        </svg>
      </div>

      <div className="ml-3 mr-7 lg:mr-12">
        <h3 className="whitespace-nowrap text-xs lg:text-base font-semibold text-black opacity-85">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default Folder;
