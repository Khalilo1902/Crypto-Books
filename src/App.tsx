import {Outlet} from "react-router";
import Logo from "./components/Logo.tsx";
import Navigation from "./components/Navigation.tsx";


function App() {
    return (
        <div>


            <main
                className=" w-full h-full flex flex-col first-letter: content-center items-center relative text-white font-nunito"
            >
                <div className=" w-screen h-screen bg-gray-300 fixed"/>
                <Logo/>
                <Navigation/>
                <Outlet/>

            </main>


        </div>
    );
}

export default App;