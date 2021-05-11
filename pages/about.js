import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
        <section className="relative container mx-auto max-h-screen font-dancing">
                <p className="text-2xl font-light text-base prose">Welcome to my portfolio website 🤩</p>
            <div className="">
                <article>
                    <h2 className="font-semibold font-serif text-center prose text-red-500 text-2xl">Fasunle Kehinde Hussein</h2>
                    <div className="absolute h-80 w-80 p-3 rounded-2xl bg-gray-800 right-0 inset-y-20">
                        <Image
                            className="rounded-3xl "
                        src='/images/finest.jpg'
                        alt="fasunle's image"
                        layout="responsive"
                        height={80}
                        width={80}
                        quality={100} />
                        <figcaption className="text-center text-red-500 mt-5 font-dancing">Fasunle Kehinde Hussein</figcaption>
                    </div>
                    <div className="prose">
                        <p className="">
                        I'm a full-stack developer. I can develop hybrid applications for both desktop and mobile phones.
                        I can use javascript to do a lot of cool stuff on the internet.
                        <p className="max-w-screen-lg">
                            I love pets and also a football addict 😜
                        </p>
                        <ul className="">
                            <li>Blog apps </li>
                            <li>E-commerce website from small startup to a large business</li>
                            <li>School websites</li>
                            <li>Personal website</li>
                            <li>Organizational Websites</li>
                            <li>Religious groups websites</li>
                        </ul>
                    </p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default About;