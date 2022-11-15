import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "boxicons/css/boxicons.css";
import type {AppProps} from "next/app";
import React, {useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {Splash} from "../business/shared/loaders/splash";

import {userContext} from "../context/userTypeContext";

function MyApp({Component, pageProps}: AppProps) {
	React.useEffect(() => {
		import("@lottiefiles/lottie-player");
		AOS.init({duration: 1000});
	});
	const [user, setUser] = useState({
		company: "",
		email: "",
		name: "",
		phone: "",
		type: "empresario",
	});

	const handleChange = (e: any) => {
		//TODO: modal de confirmación
		setUser({...user, [e.target.name]: e.target.value});
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		//TODO: modal de escoger tipo de usaurio y subir datos
		console.log(user);
	};

	const value = {user, handleChange, handleSubmit};
	return (
		<Splash>
			<userContext.Provider value={value}>
				<Component {...pageProps} />
			</userContext.Provider>
		</Splash>
	);
}

export default MyApp;
