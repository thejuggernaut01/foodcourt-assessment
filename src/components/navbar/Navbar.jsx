import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <header className="flex justify-between items-center mt-24">
          <div className="flex items-center border rounded px-3 py-2 gap-10 text-gray-500 cursor-pointer relative">
            <button className="">Sort</button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
          </div>

          <nav className="flex items-center relative">
            <input
              type="text"
              placeholder="Search"
              className="outline-gray-300 border rounded h-10 pl-10 relative w-[170px] md:w-[200px] lg:w-[250px]"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className="w-5 h-5 absolute left-3 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
