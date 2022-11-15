import React, { useRef, useState } from "react";
import Link from "next/link";
import { MinusIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/24/outline";
import { SubMap } from "../../../../typing";
import { useOnClickOutside } from "usehooks-ts";

interface Props {
    subMap: SubMap;
}

function MobileHeaderMenu({ subMap }: Props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const menuRef = useRef(null);

    const handleClickOutside = () => {
        // Your custom logic here
        setDropdownOpen(false);
    };

    const handleClickInside = () => {
        // Your custom logic here
    };

    useOnClickOutside(menuRef, handleClickOutside);

    return (
        <div ref={menuRef}>
            <div className='flex items-center justify-between  border-b px-6 text-base font-semibold hover:text-PRIMARY_COLOR-500'>
                <Link href={subMap.subMenu[0].href}>
                    <div className='group relative flex h-full cursor-pointer items-center py-4  pr-12 text-lg'>
                        {subMap.title_KO}
                    </div>
                </Link>
                <PlusIcon
                    className={`h-7 cursor-pointer text-GRAY_COLOR-800 ${
                        dropdownOpen && "rotate-45"
                    } transition-all duration-500`}
                    onClick={() => setDropdownOpen((prev) => !prev)}
                />
            </div>
            <ul
                className={`left-0 z-10  flex w-full flex-col  justify-between overflow-hidden border-t border-b-PRIMARY_COLOR-500 bg-GRAY_COLOR-200/30 transition-all duration-500 ease-in-out  ${
                    dropdownOpen ? "max-h-screen" : "max-h-0"
                }`}
            >
                {subMap.subMenu.map((item, index) => (
                    <Link key={index} href={item.href}>
                        <h1 className='flex w-full cursor-pointer justify-between p-3 hover:font-semibold hover:text-PRIMARY_COLOR-500'>
                            <span className=''>{item.title_KO}</span>
                        </h1>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default MobileHeaderMenu;
