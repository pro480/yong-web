import React from "react";
import Link from "next/link";
import { MinusIcon } from "@heroicons/react/24/solid";

interface SubTitle {
  title: string;
  subMenu: { title: string; href: string }[];
  href: string;
}

interface Props {
  title: string;
  description: string;
  subTitle: SubTitle[];
  href: string;
}

function HeaderMenu({ title, description, subTitle, href }: Props) {
  return (
    <div className="h-full">
      <div className="h-full">
        <Link href={href}>
          <div className="peer flex h-full cursor-pointer items-center text-xl font-semibold">
            {title}
          </div>
        </Link>
        <div className="absolute left-0 hidden w-screen justify-between border-b border-[#0096f5] hover:flex peer-hover:flex">
          <div className="flex w-[700px] flex-col gap-y-5 bg-[#0096f5] pl-96 pt-20 text-white ">
            <div className="text-2xl font-bold">{title}</div>
            <div className="flex">
              <MinusIcon className="h-10 w-10" />
              <MinusIcon className="h-10 w-10 text-white/70 " />
              <MinusIcon className="h-10 w-10 text-white/20" />
            </div>
            <div className="">{description}</div>
          </div>
          <ul className="grid w-full grid-cols-4 gap-x-14 gap-y-10 bg-white py-20 px-20">
            {subTitle.map((item, index) => (
              <li key={index} className="w-full border border-gray-500">
                <Link href={item.href}>
                  <div className="w-full border border-gray-500">
                    {item.title}
                  </div>
                </Link>
                <ul>
                  {item.subMenu.map((subMenu, index) => (
                    <li key={index}>
                      <Link href={subMenu.href}>{subMenu.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default HeaderMenu;
