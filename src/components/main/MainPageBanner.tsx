import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MainPageBanner() {
    return (
        <div className='relative'>
            <Carousel
                className='relative aspect-2/1 w-full'
                showArrows={true}
                showIndicators={false}
                infiniteLoop={true}
                showThumbs={false}
                autoPlay={true}
                interval={5000}
                transitionTime={1000}
            >
                {/*로고 사이즈*/}
                <div className='bg-black/30'>
                    <div className='relative -z-10 h-full w-full'>
                        <Image
                            src='/images/dummy/banner1.jpg'
                            width={1000}
                            height={500}
                            layout='responsive'
                            alt='로고'
                            priority={true}
                            quality={75}
                        />
                    </div>
                </div>
                <div className='bg-black/30'>
                    <div className='relative -z-10 h-full w-full'>
                        <Image
                            src='/images/dummy/banner2.jpg'
                            width={1000}
                            height={500}
                            layout='responsive'
                            alt='로고'
                            priority={true}
                            quality={75}
                        />
                    </div>
                </div>

                <div className='bg-black/30'>
                    <div className='relative -z-10 h-full w-full'>
                        <Image
                            src='/images/dummy/banner3.jpg'
                            width={1000}
                            height={500}
                            layout='responsive'
                            alt='로고'
                            priority={true}
                            quality={75}
                        />
                    </div>
                </div>

                {/*<img src='/images/dummy/banner2.jpg' />*/}
            </Carousel>
            <div className='absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col whitespace-nowrap text-center text-white'>
                <h1 className='text-6xl font-bold leading-snug'>
                    Education Big Data Application
                    <br />
                    Research Center
                </h1>
                <span className='mt-16 text-4xl font-medium'>
                    Maximizing the Value of Education Big Data
                </span>
            </div>
        </div>
    );
}

export default MainPageBanner;
