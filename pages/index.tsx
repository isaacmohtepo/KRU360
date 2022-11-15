import Layout from "../business/general/Layout";
import Section1 from "../business/Home/container/section1/section1";
import Section2 from "../business/Home/container/section2/section2";
import VendeMas from "../business/Home/container/vendeMasVendeMejor/vendeMas";
import Section3 from "../business/Home/container/section3/section3";
import Section4 from "../business/Home/container/section4/section4";
import Section5 from "../business/Home/container/section5/section5";
import Section6 from "../business/Home/container/section6/section6";
import Section7 from "../business/Home/container/section7/section7";
import Section8 from "../business/Home/container/section8/section8";
import Estacionamiento from "../business/Home/container/estacionamiento/estacionamiento";
import React, {useEffect, useState} from "react";
import gsap from "gsap";
import {userContext} from "../context/userTypeContext";

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
		gsap.config();
	}, []);

	return (
		<>
			<Layout>
				<userContext.Consumer>
					{({user, handleChange, handleSubmit}) => {
						return (
							<>
								<Section1 handleChange={handleChange} />
								<Section2
									user={user}
									handleChange={handleChange}
									handleSubmit={handleSubmit}
								/>
								<VendeMas />
								<Section3 handleChange={handleChange} />
								<Section4 />
								<Section5 user={user} />
								<Section6 user={user} />
								<Section7 user={user} />
								<Section8 user={user} />
								<Estacionamiento user={user} />
							</>
						);
					}}
				</userContext.Consumer>
			</Layout>
		</>
	);
};

export default Home;
