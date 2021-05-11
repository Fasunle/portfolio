import React from 'react';
import Image from 'next/image';

const Home = () => {
    return (
        <div>
            <section className=" max-h-screen w-full">
                <Image
                    src='/images/beautiful.jpg'
                    alt="Background image"
                    layout="fill"
                    quality={100} />
                <div className="z-10 relative top-36 right-2 ">
                    <h1 className="font-dancing text-center text-5xl tracking-wider leading-relaxed text-opacity-80 text-pink-500">Fasunle Kehinde H.</h1>
                    <p className=" pl-11 text-center text-xl text-pink-300 font-mono">&hellip; for the love of creativity</p>
                </div>
            </section>
        </div>
    )
}
export default Home;