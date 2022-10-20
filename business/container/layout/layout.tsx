import Header from "../header/header";
import Navbar from "../navbar/navbar";

export default function Layout({children}: any) {
    return (
        <div>
            <Header/>
            <Navbar/>
            <main>
                {children}
            </main>
        </div>
    );
}