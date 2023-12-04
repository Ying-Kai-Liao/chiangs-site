"use client";

import { useSession } from "next-auth/react";
import React, { useState } from "react";

const MAX_FILE_SIZE = 4.5 * 1024 * 1024; // 4.5 MB in bytes

function FileUpload() {
  const session = useSession();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files == null) {
      return;
    }

    const file = event.target.files[0];
    if (file.size > MAX_FILE_SIZE) {
      alert("File size exceeds the 4.5 MB limit.");
      return;
    }
    
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("fileToUpload", selectedFile);
    formData.append("email", session.data?.user.email as string | "");

    try {
      await fetch("https://discord-bot-ten-nu.vercel.app/api/discordbot", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));

      alert("File uploaded successfully");
    } catch (error) {
      console.error("Error:", error);
      alert("Error uploading file");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;
