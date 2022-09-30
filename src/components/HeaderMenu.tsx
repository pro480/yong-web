import React, { useState } from "react";
import Link from "next/link";
import { MinusIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { SubMap } from "../../typing";

interface Props {
  subMap: SubMap;
}

function HeaderMenu({ subMap }: Props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="h-full">
      {/*1st depth*/}

      <div className="flex h-full items-center text-xl font-semibold ">
        <div
          className="group relative h-full w-full items-center justify-center"
          onMouseOver={() => setDropdownOpen(true)}
          onMouseOut={() => setDropdownOpen(false)}
        >
          <div className="flex h-full items-center">
            <Link href={subMap.subTitle[0].href}>
              <a className="cursor-pointer">{subMap.title}</a>
            </Link>
          </div>
          <span className="absolute bottom-0 left-1/2 flex h-1.5 w-0 -translate-x-1/2 content-center justify-center bg-PRIMARY_COLOR group-hover:w-12 group-hover:transition-all"></span>
        </div>
      </div>
      {/*아래부터 드랍다운  메뉴*/}

      {dropdownOpen && (
        <div
          onMouseOver={() => setDropdownOpen(true)}
          onMouseOut={() => setDropdownOpen(false)}
          className="absolute left-0 z-10 flex w-screen justify-between border border-t border-b-2 border-b-PRIMARY_COLOR"
        >
          {/* 드랍다운 좌측 설명*/}
          <div className="flex w-[700px] flex-col gap-y-5 bg-PRIMARY_COLOR py-20 pl-44 text-white ">
            <div className="text-2xl font-bold">{subMap.title}</div>
            <div className="flex">
              <MinusIcon className="h-10 w-10" />
              <MinusIcon className="h-10 w-10 text-white/70 " />
              <MinusIcon className="h-10 w-10 text-white/20" />
            </div>
            <div className="">{subMap.description}</div>
          </div>
          {/*드랍다운 우측 메뉴*/}
          <ul className="flex w-full flex-wrap gap-x-14 gap-y-10 bg-white py-20 px-20">
            {/*2nd depth map*/}
            {subMap.subTitle.map((item, index) => (
              <li key={index} className="h-fit w-[20%]">
                <Link href={item.href}>
                  <div className="z-20 flex w-full justify-between border p-3 shadow-lg">
                    <span
                      onClick={() => setDropdownOpen(false)}
                      className="cursor-pointer"
                    >
                      {item.title}
                    </span>
                    {item.subMenu.length > 0 && (
                      <ChevronDownIcon className="h-6 text-gray-300" />
                    )}
                  </div>
                </Link>
                {/*3rd depth map*/}
                <ul className="bg-SUBMENU_COLOR bg-opacity-50 text-sm">
                  {item.subMenu?.map((subMenu, index) => (
                    <li
                      className="py-2 px-4 before:mr-2  before:text-PRIMARY_COLOR before:content-['\2022']"
                      key={index}
                    >
                      <Link href={subMenu.href}>
                        <span
                          className="cursor-pointer"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {subMenu.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default HeaderMenu;
