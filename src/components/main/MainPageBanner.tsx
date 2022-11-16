import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MainPageBanner() {
    return (
        <div className='relative'>
            <Carousel
                className='relative w-full'
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
                <h1 className=' text-lg font-bold leading-snug xs:text-xl md:text-2xl lg:text-4xl desktop:text-6xl'>
                    Edu-Big Data Application
                    <br />
                    Research Center
                </h1>
                <span className='mt-3 text-xs font-medium xs:mt-6 xs:text-base md:mt-10 md:text-xl lg:mt-14 lg:text-2xl desktop:mt-16 desktop:text-4xl'>
                    Maximizing the Value of Education Big Data
                </span>
            </div>
        </div>
    );
}

export default MainPageBanner;
