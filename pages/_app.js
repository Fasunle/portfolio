import React from 'react';
import Head from 'next/head';
import "tailwindcss/tailwind.css";
import "../styles/style.css";
import NavBar from '../components/NavBar';
import Link from 'next/link';
import {useRouter} from 'next/router';

export default function App({ Component, props }) {
    const router = useRouter()
    const contact = router.pathname == '/contacts';
    const blogs = router.pathname == '/blogs';
    const portfolio = router.pathname == '/portfolio';
    const hireMe = contact || blogs || portfolio ? '' : (<button className="ring-2 focus:outline-none ring-red-500 focus-within font-mono bg-gray-200 relative z-20 transform -rotate-90 top-32 -left-3 rounded-full p-0.5 text-md text-red-500">
        <Link href="/contacts"><a >Hire Me</a></Link>
    </button>)
    return (
        <React.Fragment>
        <Head >
            <title>Fasunle Kehinde H.</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link href="https://fonts.gstatic.com" rel="preconnect" />
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Lemonada:wght500&display=swap" rel="stylesheet" />
            <script src="https://kit.fontawesome.com/a076d05399.js" />
            <script src="https://smtpjs.com/v3/smtp.js"></script>
        </Head>
        <body className="bg-gray-200">
            <NavBar />
            {
                hireMe
            }
            <Component {...props }/>
        </body>
        </React.Fragment>
    )
}