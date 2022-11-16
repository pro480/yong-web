import React, { memo, useEffect, useState } from "react";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import HeaderMenu from "./HeaderMenu";
import useAuth from "../../../hooks/useAuth";
import { ImGithub } from "react-icons/im";
import logo_EN from "../../../../public/images/logo/logo_EN.png";
import { data, info, major, notice, research } from "../../../utils/Utils";
import MobileHeader from "./MobileHeader";
import i18next from "../../../../public/locales/i18n";
import {useRecoilState} from "recoil";
import {languageState} from "../../../atoms/languageAtom";

function Header() {
    const { user, logout } = useAuth();
    const [openHeader, setOpenHeader] = useState(false);
    const [isEnglish, setIsEnglish] = useRecoilState(languageState);
    const changeLanguage = (lang: string) => {
        i18next.changeLanguage(lang);
        // sessionStorage.clear()
// x        sessionStorage.setItem("isEnglish", isEnglish.toString())
    };

    useEffect(() => {
        sessionStorage.setItem("isEnglish", isEnglish.toString());
    }, [isEnglish]);

    useEffect(() => {
        if (sessionStorage.getItem("isEnglish") === "true") {
            // setIsEnglish(true);
            i18next.changeLanguage("en");
        } else if (sessionStorage.getItem("isEnglish") === "false") {
            i18next.changeLanguage("ko");
            // setIsEnglish(false);
        }
        
    }, []);

    return (
        <>
            <header className='border-b px-2 md:h-[200px] md:px-2 desktop:h-[100px]'>
                {/*아래는 전체 컨테이너*/}
                <div className='flex flex-col-reverse justify-center md:h-[100px] md:flex-row md:items-center md:justify-between'>
                    <Link href='/'>
                        {/* 아래는 로고 컨테이너*/}
                        <div className='h-20 border-t p-3 md:h-full md:w-96 md:border-none desktop:w-[500px]'>
                            {/*아래는 로고 사이즈*/}
                            <div className='relative block h-full cursor-pointer'>
                                <Image
                                    src={logo_EN}
                                    layout='fill'
                                    objectFit='contain'
                                    objectPosition='center'
                                    alt='로고'
                                    priority={true}
                                />
                            </div>
                        </div>
                    </Link>
                    {/*아래는 GNB Wrap*/}
                    <div className='flex flex-col-reverse md:flex-row-reverse desktop:w-full desktop:flex-row desktop:items-center desktop:justify-between'>
                        {/* 헤더메뉴 Container*/}
                        <nav className='absolute top-[100px] left-0 hidden h-[100px] justify-around border-t md:flex md:w-full desktop:static desktop:px-12'>
                            <HeaderMenu subMap={info} />
                            <HeaderMenu subMap={research} />
                            <HeaderMenu subMap={major} />
                            <HeaderMenu subMap={data} />
                            <HeaderMenu subMap={notice} />
                        </nav>
                        {/*기타 메뉴 리스트*/}
                        <div className='text-PRIMARY_FONT_COLOR flex h-12 items-center px-3 desktop:w-[500px] desktop:justify-between'>
                            <a
                                target='_blank'
                                href='https://github.com/pro480/yong-web'
                                rel='noopener noreferrer'
                                className='mr-5 hover:scale-110'
                            >
                                {/*noopener noreferred은 보안 위협을 피하기 위함*/}
                                <ImGithub size='24' />
                            </a>
                            {isEnglish ? (
                                <button
                                    className='fonts mr-5 hover:scale-110'
                                    onClick={() => {
                                        changeLanguage("ko");
                                        setIsEnglish(false);
                                    }}
                                >
                                    한글(KO)
                                </button>
                            ) : (
                                <button
                                    className='fonts mr-5 hover:scale-110'
                                    onClick={() => {
                                        changeLanguage("en");
                                        setIsEnglish(true);
                                    }}
                                >
                                    영문(EN)
                                </button>
                            )}

                            {user ? (
                                <button
                                    onClick={logout}
                                    className='mr-5 hidden hover:scale-110 md:flex'
                                >
                                    Logout
                                </button>
                            ) : (
                                <Link href='/adminLogin'>
                                    <a className='mr-5 hidden hover:scale-110 md:flex'>
                                        ADMIN
                                    </a>
                                </Link>
                            )}
                            <Bars3CenterLeftIcon
                                className='ml-auto h-8 cursor-pointer hover:scale-110 desktop:ml-0'
                                onClick={() => setOpenHeader((prev) => !prev)}
                            />
                        </div>
                    </div>
                </div>
            </header>

            <MobileHeader
                openHeader={openHeader}
                setOpenHeader={setOpenHeader}
            />
        </>
    );
}

export default memo(Header);
