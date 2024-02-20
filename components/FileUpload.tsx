"use client";

import { signIn, useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const MAX_FILE_SIZE = 4.5 * 1024 * 1024; // 4.5 MB in bytes

function FileUpload() {
  const session = useSession();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageBlob, setImageBlob] = useState<File | Blob | null>(null);
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

  useEffect(() => {
    // Define the CDN image URL
    const cdnImageUrl =
      "https://cdn.discordapp.com/attachments/1179870788640317562/1180061702813929512/human.png";

    const fetchImage = async () => {
      try {
        const response = await fetch(cdnImageUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch image: ${response.status}`);
        }
        const blob = await response.blob();
        setImageBlob(blob);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files == null) {
      return;
    }

    const file = event.target.files[0];
    if (file.size > MAX_FILE_SIZE) {
      alert("File size exceeds the 4.5 MB limit.");
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = function () {
      setPreview(fileReader.result);
    };
    fileReader.readAsDataURL(event.target.files[0]);

    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (session.status == "unauthenticated") {
      const loginButton = document.getElementById("login");
      if (loginButton) {
        loginButton.click();
      }
      return;
    }

    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("fileToUpload", selectedFile);
    formData.append("email", session.data?.user.email as string | "");
    formData.append("method", "/fusion1");

    if (imageBlob) formData.append("fileToUpload", imageBlob);

    try {
      const response = await fetch("/api/fileUpload", {
        // https://discord-bot-ten-nu.vercel.app/api/discordbot
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      alert("File uploaded successfully");
    } catch (error) {
      console.error("Error:", error);
      alert("Error uploading file");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center rounded max-w-full min-w-full max-h-full p-10 min-h-fit">
      <div className="flex justify-center items-center border-dashed border-2 border-red-200/50 rounded-2xl hover:bg-pink-100/50 hover:border-red-200 bg-gradient-to-r from-black/10 to-black/20 transition-colors duration-500 max-w-full min-w-full aspect-video ">
        <input
          type="file"
          id="fileUpload"
          onChange={handleFileChange}
          className="hidden"
        />
        <div
          className={`flex flex-col justify-center items-center space-y-5 ${
            selectedFile ? "mr-10" : ""
          }`}
        >
          <label
            htmlFor="fileUpload"
            className={`flex flex-col space-y-5 justify-center items-center justify-items-center h-full cursor-pointer`}
          >
            <span className="block font-sm py-2 px-4 rounded-md font-semibold border-pink-50 border-2 text-pink-100 hover:bg-pink-100/10">
              {selectedFile ? "更換檔案" : "選擇檔案"}
            </span>
            {preview && (
              <span className="flex font-sm max-w-[150px] text-center break-all overflow-hidden">
                {selectedFile ? selectedFile.name : "檔案名稱"}
              </span>
            )}
            {!preview && (
              <div className="mt-5 flex justify-center">
                <span className="bg-white/20 rounded-[12px] py-[5px] pl-[10px] pr-[14px] ltr:pr-[14px] rtl:pl-[14px] ltr:pl-[10px] rtl:pr-[10px] flex items-center text-center uppercase font-bold tracking-wide text-[10px] mx-2">
                  <Image
                    src="/photo.svg"
                    height="26"
                    width="27"
                    className=""
                    alt="Upload"
                  />
                  <span>photos</span>
                </span>
                <span className="bg-white/20 rounded-[12px] py-[5px] pr-[14px] pl-[10px] flex items-center text-center uppercase font-bold tracking-wide text-[10px] mx-2">
                  <Image
                    src="/video.svg"
                    height="26"
                    width="27"
                    className=""
                    alt="Upload"
                  />
                  <span>videos</span>
                </span>
              </div>
            )}
          </label>
          {preview && (
            <button
              onClick={handleUpload}
              className="block font-sm py-2 px-4 rounded-md border-0 font-semibold bg-pink-50 text-pink-700 hover:bg-pink-100 z-10"
            >
              上傳檔案
            </button>
          )}
        </div>
        {preview && (
          <div className="relative top-0 left-0 aspect-[4/5] h-full">
            <Image
              fill
              src={preview as string}
              alt="Upload preview"
              className="object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default FileUpload;
