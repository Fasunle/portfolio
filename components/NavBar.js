import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';


const NavBar = () => {
    return (
        <section className="bg-gray-500 text-gray-800 h-16 w-full sticky top-0 right-0 p-3 font-nunito z-50">
            <nav className="grid grid-cols-5 gap-x-1">
                <span className=" text-3xl text-indigo-400 justify-content-center col col-span-2 font-lemonada"><Link href="/"><a>Fasunle</a></Link></span>
                <ul className="flex flex-end items-center space-x-5 text-2xl col-span-2">
                    {/* <li className=" border-box h-11 w-auto hover:bg-gray-800 hover:text-white pt-1 p-1 rounded-md"><Link href="/"><a >Home</a></Link></li> */}
                    <li className=" border-box h-11 w-auto hover:bg-gray-800 hover:text-white pt-1 p-1 rounded-md"><Link href="/portfolio"><a >Portfolio</a></Link></li>
                    <li className=" border-box h-11 w-auto hover:bg-gray-800 hover:text-white pt-1 p-1 rounded-md"><Link href="/blogs"><a >Blogs</a></Link></li>
                    <li className=" border-box h-11 w-auto hover:bg-gray-800 hover:text-white pt-1 p-1 rounded-md"><Link href="/about"><a >About</a></Link></li>
                </ul>
                <div className="flex space-x-3">
                    <SocialIcon url="https://facebook.com/fasunlekehinde.7" target="_blank" style={{height:40, width:40}} fgColor="#fff" bgColor="#1F2937" />
                    <SocialIcon url="https://twitter.com/epitomekennie" target="_blank" style={{height:40, width:40}} fgColor="#fff" bgColor="#1F2937" />
                    <SocialIcon url="https://www.instagram.com/fasunlekehinde/" target="_blank" style={{height:40, width:40}} fgColor="#fff" bgColor="#1F2937" />
                    <SocialIcon url="https://github.com/Fasunle" target="_blank" style={{ height: 40, width: 40 }} fgColor="#fff" bgColor="#1F2937" />
                </div>
            </nav>
        </section>
    )
}

export default NavBar;