"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageSlider from "@/components/Diff";
import NewVideo from "@/components/Video";
import FileUpload from "@/components/FileUpload";

// #65152f dark light #98204f

const videoSrc =
  "https://cdn.discordapp.com/attachments/1179870788640317562/1184817526006370345/video_2160p-2.mp4?ex=658d5a4f&is=657ae54f&hm=adaa7a109a61cf5039c20b1722db9e27fac99db75e18a95fa14d60a4b73d1c5e&";

export default function Hero() {
  return (
    <section
      id="hero"
      className={`flex flex-col justify-center items-center w-screen space-y-20 bg-gradient-to-r from-pink-700 via-pink-700 to-pink-900 text-red-100`}
    >
      <div className="w-full mx-auto h-full">
        <div className="flex h-full">
          <aside className="flex justify-start items-center h-screen w-3/5 ">
            <ImageSlider
              className="max-w-[100%] max-h-[100%]"
              srcBefore="https://cdn.discordapp.com/attachments/1179870788640317562/1185339975647113317/before.png?ex=658f40e0&is=657ccbe0&hm=414f98f0e5d64c69e13be06378f3ef69078eea2ffc2b2c1483415a983b5fd929&"
              srcAfter="https://cdn.discordapp.com/attachments/1179870788640317562/1185339975265419345/after.png?ex=658f40e0&is=657ccbe0&hm=f444de42f7bdb45719da1b6b5affb168731c9bebbe07e09afa92236d0a3cf9e9&"
            />
            {/* div for background continuous*/}
            <div className="absolute left-0 top-0 w-full bg-gradient-to-b from-pink-700 to-pink-700/0 h-[15%]" />
            <div className="absolute left-0 bottom-0 w-full bg-gradient-to-b from-pink-700/0 to-pink-700 h-[15%]" />
            <div className="absolute left-0 bottom-[-15%] w-full bg-gradient-to-b from-pink-700 to-pink-700/0 h-[15%]" />
          </aside>
          <div className="flex flex-col justify-start items-center h-screen w-2/5">
            <div className="text-white max-w-md space-y-5 h-1/2 flex flex-col justify-center ">
              <span className="block text-5xl leading-relaxed tracking-wider">
                江秉承虛擬人專業虛擬人製造所
              </span>
              <span className="text-xl text-pink-100/70 block">
                專業虛擬人製造
              </span>
            </div>
            <div className="flex flex-col justify-center h-1/2 w-full">
              <FileUpload />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <NewVideo src={videoSrc} />
        <button className="text-4xl border-dashed border-black border-2 p-2 mt-[2%] mb-[15%]">
          <div className="">瞭解更多</div>
        </button>
      </div>
    </section>
  );
}
