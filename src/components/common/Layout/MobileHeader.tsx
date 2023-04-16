import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo_text_tag from "/public/images/logo/logo_text_tag_EN.png";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { data, info, major, notice, research } from "../../../utils/Utils";
import Link from "next/link";
import { MinusIcon } from "@heroicons/react/24/solid";
import MobileHeaderMenu from "./MobileHeaderMenu";
import { useRouter } from "next/router";

interface Props {
    setOpenHeader: React.Dispatch<React.SetStateAction<boolean>>;
    openHeader: boolean;
}

function MobileHeader({ setOpenHeader, openHeader }: Props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const router = useRouter();

    const showMenu = () => {
        setDropdownOpen(true);
        document.addEventListener("click", closeMenu);
    };

    const closeMenu = () => {
        setDropdownOpen(false);

        document.removeEventListener("click", closeMenu);
    };

    useEffect(() => {
        setOpenHeader(false);
    }, [router.pathname]);

    useEffect(() => {
        document.body.style.cssText = `
      position: ${openHeader && "fixed"}; 
      top: -${window.scrollY}px;
      overflow-y : scroll;
      width: 100%;`;
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = "";
            window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
        };
    }, [openHeader]);

    return (
        <div
            className={`absolute h-full ${
                openHeader ? "w-full" : "w-0 overflow-hidden"
            } z-50 bg-black/30`}
        >
            <div
                className={`absolute right-0 top-0 z-50 flex h-[calc(100vh-200px)] overflow-y-scroll scrollbar-hide desktop:h-[calc(100vh-100px)] ${
                    openHeader ? "w-96" : "w-0"
                } overflow-y flex-col bg-white transition-all duration-300 ease-linear`}
            >
                <div className='relative flex h-fit justify-between'>
                    <div className='w-36 p-4'>
                        <Image src={logo_text_tag} objectFit='contain' />
                    </div>
                    <XMarkIcon
                        onClick={() => setOpenHeader(false)}
                        className='bg h-20 cursor-pointer bg-PRIMARY_COLOR-600 p-3 text-white'
                    />
                </div>
                <MobileHeaderMenu subMap={info} />
                <MobileHeaderMenu subMap={research} />
                <MobileHeaderMenu subMap={major} />
                <MobileHeaderMenu subMap={data} />
                <MobileHeaderMenu subMap={notice} />
                <div className='flex-1'></div>
            </div>
        </div>
    );
}

export default MobileHeader;
