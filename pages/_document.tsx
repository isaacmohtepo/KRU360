import {Html, Head, Main, NextScript} from "next/document";
export default function Document() {
	const loaderStyle = `
  #globalLoader{
      position: fixed;
      z-index: 1700;
      background-color: #032f48;
      display: flex;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
  }
  .loader {
   --clr: #fd9f02;
   /* color of spining  */
   width: 50px;
   height: 50px;
   position: relative;
  }
  .loader::before, .loader::after {
   position: absolute;
   top: -10px;
   left: -10px;
   width: 100%;
   height: 100%;
   border-radius: 100%;
   border: 10px solid transparent;
   border-top-color: var(--clr);
  }
  .loader::before {
   z-index: 1000;
   animation: spin 1s infinite;
  }
  .loader::after {
   border: 10px solid #ccc;
  }
  @keyframes spin {
   0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
   }
   100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
   }
  }`;
	return (
		<Html>
			<Head>
				<style>{loaderStyle}</style>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
