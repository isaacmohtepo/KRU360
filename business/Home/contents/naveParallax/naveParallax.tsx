import styles from "./naveParallax.module.css";
import {Parallax} from "react-scroll-parallax";
import React from "react";
import {Controller, Scene} from "react-scrollmagic";
import {Tween, Timeline} from "react-gsap";

const NaveParallax = () => {
	return (
		<div className={styles.nave2} id="nave" >
			<Controller>
				<Scene duration={10}  pin>
					<Timeline paused>
						<Tween >
							<div>
								<Parallax speed={100} translateY={[0, -140]} scale={[1, 0.4]} opacity={[1, 0]}>
									<lottie-player
										src="json/nave2.json"
										background="transparent"
										speed="1"
										loop
										autoplay
									></lottie-player>
								</Parallax>
							</div>
						</Tween>
					</Timeline>
				</Scene>
			</Controller>
		</div>
	);
};


export default NaveParallax;
