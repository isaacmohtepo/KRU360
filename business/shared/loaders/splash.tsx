import Image from "next/image";
import {useEffect, useState} from "react";
export interface Props {
	children: any;
}

export const Splash: React.FC<Props> = ({children}) => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		// whatever you need to do
		setTimeout(() => setLoading(false), 1000);
	}, []);
	return !loading ? (
		children
	) : (
		<div id={"globalLoader"}>
			<Image
				src="/images/go-kru.png"
				alt="botRobot"
				className="loader"
				width="112"
				height="84"
			></Image>

		</div>
	);
};
