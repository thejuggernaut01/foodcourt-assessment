'use client'

import Card from "../components/Card";
import Folder from "../components/Folder";
import React, { useState, useEffect } from "react";
import { NextResponse } from "next/server";
import Link from "next/link";

export default  function Home() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([]);
  const [sort, setSort] = useState(false)
  
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch("http://3wdz.c.time4vps.cloud:3000/", {
          cache: "no-cache",
        });
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData); // Update the data state with the fetched data
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []); 

  const handleFilterByName = () => {
    const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
    setData(sortedData);
  }

   const handleFilterByDate = () => {
    const sortedData = [...data].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    setData(sortedData);
    
  }

  const fileData = data && data.filter((data) => data.type === "file").filter((data) => data.name.split('.')[0].toLowerCase().includes(search.toLowerCase()));
  const folderData = data && data.filter((data) => data.type === "folder");

  return (
    <>
      <section className="w-[90%] mx-auto">
          <header className="flex justify-between items-center mt-24">
            <div className="flex items-center border rounded px-3 py-2 gap-10 text-gray-500 cursor-pointer relative" onClick={() => setSort(prev => !prev)}>
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
                onChange={(e) => setSearch(e.target.value)}
                value={search}
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

          {sort && <div className="border mt-2 rounded-md p-4 max-w-max">
            <p className="cursor-pointer" onClick={handleFilterByName}>By name</p>
            <hr className="my-1" />
            <p className="cursor-pointer" onClick={handleFilterByDate}>By time created </p>
          </div>}

        <main className="mt-8">
          <h2 className="font-bold text-lg mb-5 opacity-85">Folders</h2>
          <div className="grid gap-4 grid-cols-2 grid-rows-2 md:grid-cols-3 xl:grid-cols-4">
            {folderData.map((data) => (
              <Link key={data.key} href={`/${data.name.toLowerCase()}`}>
                <Folder data={...data} />
              </Link>
            ))}
          </div>
        </main>

        <aside className="mb-20 mt-7">
          <h2 className="font-bold text-lg mb-5 opacity-85">Files</h2>
          <div className="flex flex-wrap gap-3">
            {fileData.length > 0 ? fileData.map((data) => (
              <Card
                key={data.id}
                name={data.name}
                src={data.src}
                favorite={data.favorite}
                date={data.created_at}
                id={data.id}
              />
            )) : <p className="text-2xl">File Not found!</p>}
          </div>
        </aside>
        
      </section>
    </>
  );
}
