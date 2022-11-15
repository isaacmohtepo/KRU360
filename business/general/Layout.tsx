import Head from "next/head";
import React, {useEffect, useRef} from "react";
import {ParallaxProvider} from "react-scroll-parallax";

export interface Props {
	children: any;
}

const Layout: React.FC<Props> = ({children}: any) => {
	return (
		<div>
			<Head>
				<title>KRU 360</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta name="keywords" content="KRU 360" />
				<meta name="author" content="KRU 360" />
				<meta name="robots" content="index, follow" />
				<meta name="googlebot" content="index, follow" />
				<meta name="description" content="KRU 360" />
				<meta
					id="meta-description"
					name="description"
					content="En KRU somos tu partner de crecimiento. Con nuestros servicios lograrás modelos de negocios innovadores para impulsar tu empresa más allá del cielo. Para ello, el desarrollo de software y diseño de página web, junto a mentorías para emprendedores y mentoría cultural empresarial para fortalecer la inteligencia emocional en tu equipo, serán clave."
				/>
				<link rel="icon" href="favicon.png" />

				{/* eslint-disable-next-line @next/next/next-script-for-ga */}
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-98F8YCFM1Q"
				/>
				<script>
					{`
                           window.dataLayer = window.dataLayer || [];
                           function gtag(){dataLayer.push(arguments);}
                           gtag('js', new Date());
                           gtag('config', 'G-98F8YCFM1Q');`}
				</script>
			</Head>
			<main>
				<ParallaxProvider>{children}</ParallaxProvider>
			</main>
		</div>
	);
};

export default Layout;
