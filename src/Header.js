import Title from "./Components/Title";
import MidTitle from "./Components/MidTitle";
import { TbWorld } from "react-icons/tb";
import { LuMenu } from "react-icons/lu";
import { IoPersonCircleOutline } from "react-icons/io5";
import MiniHeader from "./Components/MiniHeader";
import NavIcons from "./Components/NavIcons";

const Header = () => {

    const clickeNow = () => {
        console.log("Clicked Now");
    }
    return (
        <section className="h-52">
            <header className="border shadow-sm h-44 p-8 text-center  max-[740px]:h-56 ">
                <nav className="flex justify-between ">
                    <Title />
                    <MidTitle />
                    <ul className="flex justify-between gap-4 max-[740px]:pr-4 ">
                        <li className="font-medium text-[15px] text-black leading-5 max-[740px]:text-[16px]">Airbnb your home</li>
                        <button onClick={clickeNow} className="h-6 w-7 "> <li><TbWorld className="w-full" /></li></button>
        
                            <li className="flex gap-1 max-[740px]:w-15">
                                <LuMenu className="h-6 w-full " />
                                <IoPersonCircleOutline className="h-6  w-full" />
                            </li>
                    </ul>
                </nav> 
                <>
                    <MiniHeader className="" />
                </>

            </header>
            <NavIcons />
        </section>
    )
}

export default Header;