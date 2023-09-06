"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Card from "../../components/Card";

const Page = () => {
  const router = useRouter();
  const pathname = usePathname().split("/")[1];
  const path = pathname.charAt(0).toUpperCase() + pathname.slice(1);

  const [data, setData] = useState([]);

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

  const folderData = data.filter((data) => data.name === "Inbox");

  return (
    <>
      <div className="w-[90%] mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mt-3 cursor-pointer"
          onClick={() => router.back()}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <h2 className="font-bold text-lg mb-5 opacity-85 mt-8">
          {path} Folder
        </h2>

        <div className="flex flex-wrap gap-3">
          {folderData && folderData[0]?.contents.length > 0 ? (
            folderData[0].contents.map((data) => (
              <Card
                key={data.id}
                name={data.name}
                src={data.src}
                favorite={data.favorite}
                date={data.created_at}
                id={data.id}
              />
            ))
          ) : (
            <p>Folder is empty!</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
