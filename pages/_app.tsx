import '../styles/globals.css'
import 'boxicons/css/boxicons.min.css'
import type {AppProps} from 'next/app'
import {useEffect} from "react";

function MyApp({Component, pageProps}: AppProps) {

    //scroll to top
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    return (
        <>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
