"use client";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";


function DropArea() {
  const session = useSession();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    const file = new FileReader();

    file.onload = function () {
      setPreview(file.result);
    };

    file.readAsDataURL(acceptedFiles[0]);
  }, []);

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
    });

  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

  useEffect(() => {
    const file = acceptedFiles[0];
    setSelectedFile(acceptedFiles[0]);
    console.log(file);
  }, [acceptedFiles]);

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("fileToUpload", selectedFile);
    formData.append("email", session.data?.user.email as string | "");
    console.log(formData)
    // try {
    //   const response = await fetch("/api/fileUpload", {
    //     // https://discord-bot-ten-nu.vercel.app/api/discordbot
    //     method: "POST",
    //     body: formData,
    //   });

    //   if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    //   }

    //   const data = await response.json();
    //   console.log(data);

    //   alert("File uploaded successfully");
    // } catch (error) {
    //   console.error("Error:", error);
    //   alert("Error uploading file");
    // }


  };

  return (
    <>
      <form className="flex flex-col max-w-md border border-gray-200 rounded p-6 mx-auto h-full">
        <div
          {...getRootProps()}
          className="mb-4 border-dashed border-2 border-gray-300 rounded h-full overflow-hidden"
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag in drop some files here, or click to select files</p>
          )}
          {preview && (
            <div className="p-6">
              <Image
                width={2000}
                height={2000}
                src={preview as string}
                alt="Upload preview"
                className="object-contain"
              />
            </div>
          )}
        </div>

        <button
          onClick={handleUpload}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default DropArea;
