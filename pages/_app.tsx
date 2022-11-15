import '../styles/globals.css'
import 'boxicons/css/boxicons.min.css'
import type {AppProps} from 'next/app'
import {useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

function MyApp({Component, pageProps}: AppProps) {

    useEffect(() => {
        AOS.init({duration: 1000});



    }, []);

    return (
        <>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
