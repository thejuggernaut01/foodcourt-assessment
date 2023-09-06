"use client";

import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";

const Card = ({ name, src, favorite, date, id }) => {
  const [fav, setFav] = useState(favorite);
  const [showModal, setShowModal] = useState(false);

  const inputDate = new Date(date);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const outputDate = inputDate.toLocaleDateString("en-US", options);

  let newSrc;

  if (src && src.includes(".pdf")) {
    newSrc =
      "https://imgs.search.brave.com/kKDIt7Q7qdN0A_nALVA1_T5ibUsBoRGE6RE-8sTgTP4/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi84Lzg3L1BE/Rl9maWxlX2ljb24u/c3ZnLzUxMnB4LVBE/Rl9maWxlX2ljb24u/c3ZnLnBuZw";
  } else if (src && src.includes(".xlsx")) {
    newSrc =
      "https://imgs.search.brave.com/yl8C38tSoGAITP1o3YR3qIfwGk7huKpVMLQJImKHRxM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1pY29uL3hs/c3hfMzE4LTU2NDU3/MS5qcGc_c2l6ZT02/MjYmZXh0PWpwZw";
  } else {
    newSrc = src;
  }

  return (
    <>
      <aside
        className="border rounded-md shadow-md shadow-gray-300 w-[282px] cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <div className="w-[264px] h-[215px] relative m-2">
          <Image
            src={newSrc}
            fill={true}
            className="rounded-md object-cover relative"
            alt={name}
          />
          <div className="absolute top-3 right-3 border border-gray-400 p-2 rounded-full bg-gray-400 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={fav ? "red" : "none"}
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke={fav ? "red" : "#fff"}
              class="w-6 h-6"
              onClick={() => setFav((prev) => !prev)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
        </div>

        <div className="flex items-center space-x-5 mb-4">
          <div className="border border-fuchsia-50 rounded-full p-[4px] bg-fuchsia-50 ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#FFBF00"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-bold opacity-80 text-base">
              {name.split(".")[0]}
            </h3>
            <p className="text-sm text-gray-5ss00">Added {outputDate}</p>
          </div>
        </div>
      </aside>

      <Modal
        isVisible={showModal}
        setShowModal={setShowModal}
        favorite={favorite}
        name={name}
        src={src}
        outputDate={outputDate}
      />
    </>
  );
};

export default Card;
