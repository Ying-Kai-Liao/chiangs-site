"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useWindowWidth from "@/hooks/useWindowWidth";

const Footer = () => {
  const [enlarge, setEnlarge] = useState<boolean>(false);
  const width = useWindowWidth();

  const handleClick = () => {
    setEnlarge(!enlarge);
  };

  return (
    <footer className="bg-white text-[#686563] w-full">
      <div className="container mx-auto py-20 max-w-[1170px] px-4">
        <div
          className={`flex flex-wrap flex-row justify-center items-start gap-4 font-extralight`}
        >
          {width > 768 && (
            <div className="w-40 mr-16 ">
              <Link href={"/"}>
                <Image src={'/poster.png'} alt="" width={100}
                    height={100}/>
              </Link>
            </div>
          )}
          <div className="mb-4 px-4 w-[16rem]">
            <h3
              
              className={`text-base font-semibold mb-4 text-[#4D4A47]`}
            >
              營業時間
            </h3>
            <div className="grid grid-cols-3 gap-y-4 text-sm font-normal">
              <p className="col-span-1">週一至週五</p>
              <p className="col-span-2 pl-3">
                11:00-20:00
                <br />
                中午12:00-13:00休息
              </p>

              <p className="col-span-1">週六/日</p>
              <p className="col-span-2 pl-3">休息</p>
            </div>
          </div>
          <div className="mb-4 px-4 w-[16rem]">
            <h3
              
              className={`text-base font-semibold mb-4 text-[#4D4A47]`}
            >
              聯絡我們
            </h3>
            <ul className="text-sm font-normal space-y-4">
              <li className="underline">
                <a href={`tel:${"0912345678"}`}>0912345678</a>
              </li>
              <li>
                <span>亦可於官方 LINE@留言，客服將儘速與您聯繫</span>
              </li>
            </ul>
          </div>
          <div className="mb-4 px-4 w-[16rem]">
            <h3
              className={`text-base font-semibold mb-4 text-[#4D4A47]`}
            >
              LINE 諮詢
            </h3>
            <ul className="space-y-4 text-sm font-normal">
              <li className="flex flex-col">
                <Link href="https://lin.ee/OqQ6VuO">掃描 QRCODE 或點此</Link>
                <Link href="https://lin.ee/OqQ6VuO">加入 LINE 線上預約</Link>
              </li>
              {width > 768 && (
                <li onClick={handleClick} className="cursor-pointer">
                  <Image
                    src="https://qr-official.line.me/gs/M_789ngczz_BW.png?oat_content=qr"
                    alt="LINE QR Code"
                    width={100}
                    height={100}
                  />
                </li>
              )}
              {width <= 768 && (
                <Link href="https://lin.ee/OqQ6VuO">
                  <Image
                    src="https://qr-official.line.me/gs/M_789ngczz_BW.png?oat_content=qr"
                    alt="LINE QR Code"
                    width={100}
                    height={100}
                  />
                </Link>
              )}
            </ul>
          </div>
        </div>
      </div>
      {enlarge && (
        <div
          className="fixed top-0 w-screen h-screen bg-gray-300/70 flex justify-center items-center"
          onClick={handleClick}
        >
          <Image
            src="https://qr-official.line.me/gs/M_789ngczz_BW.png?oat_content=qr"
            alt="LINE QR Code"
            width={300}
            height={300}
          />
        </div>
      )}
      <div className="bg-black text-gray-50 text-xs py-3 px-3 font-normal">
        <div className="container mx-auto flex justify-between max-w-[1170px]">
          <ul className="flex space-x-6">
            {width > 768 && (
              <>
                <li>Terms</li>
                <li>Conditions</li>
                <li>Privacy Policy</li>
              </>
            )}
          </ul>
          <div className="">© Virtual Assistant Company. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
