"use client";
import React, { useState } from "react";
import Image from "next/image";

const Modal = ({
  isVisible,
  setShowModal,
  favorite,
  src,
  name,
  outputDate,
}) => {
  const [fav, setFav] = useState(favorite);
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") setShowModal(false);
  };

  let imgSrc;

  if (src && src.includes(".pdf")) {
    imgSrc =
      "https://imgs.search.brave.com/kKDIt7Q7qdN0A_nALVA1_T5ibUsBoRGE6RE-8sTgTP4/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi84Lzg3L1BE/Rl9maWxlX2ljb24u/c3ZnLzUxMnB4LVBE/Rl9maWxlX2ljb24u/c3ZnLnBuZw";
  } else if (src && src.includes(".xlsx")) {
    imgSrc =
      "https://imgs.search.brave.com/yl8C38tSoGAITP1o3YR3qIfwGk7huKpVMLQJImKHRxM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1pY29uL3hs/c3hfMzE4LTU2NDU3/MS5qcGc_c2l6ZT02/MjYmZXh0PWpwZw";
  } else {
    imgSrc = src;
  }

  const handleDownload = async () => {
    if (src.endsWith(".pdf")) window.open(src, "_blank");

    // Create a blob URL for the image
    await fetch(src)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);

        // Create an anchor element
        const link = document.createElement("a");
        // Set the href and download attributes
        link.href = url;
        link.download = name;
        // Trigger a click event on the anchor element
        link.click();

        // Release the object URL to free up resources
        window.URL.revokeObjectURL(url);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <aside
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10"
      id="wrapper"
      onClick={(e) => handleClose(e)}
    >
      <div className="w-[400px] md:w-[600px] flex flex-col">
        <div className="bg-white p-2 rounded">
          <div className="flex justify-between items-center px-6 mt-3 mb-3">
            <button
              className="border p-1 rounded-full"
              onClick={handleDownload}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-gray-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
            </button>
            <button
              className="bg-gray-400 opacity-75 px-3 py-[0.3rem] rounded font-semibold"
              onClick={() => setShowModal(false)}
            >
              x Close
            </button>
          </div>

          <hr />

          <div className="min-w-fit h-[350px] relative mt-8 mx-6">
            <Image
              src={imgSrc}
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

            {/* <button
              className="border border-gray-600 p-1 rounded-full absolute bottom-3 left-3"
              onClick={handleDownload}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#fff"
                class="w-6 h-6 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
            </button>

            <div className="border border-gray-600 p-1 rounded-full absolute bottom-3 left-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#fff"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
                />
              </svg>
            </div> */}
          </div>

          <div className="flex items-center space-x-5 my-4 mx-6">
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
        </div>
      </div>
    </aside>
  );
};

export default Modal;
