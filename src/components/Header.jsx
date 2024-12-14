import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SaveModal from "./Modals/saveModal";

export default function Header(props){
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
<>
        <SaveModal {...props} />

        <header className="px-4 top-0 box-border flex justify-around w-full md:w-4/6 md:rounded-b-full md:border md:border-[#9999c3] bg-gradient-to-b from-[#7b8cde] to-[#9aa5dd] self-center h-20 items-center border-[#7b8cde] text-[#001b2e]">
            
            <Link to="/" className="text-xl md:text-2xl lg:text-3xl font-agu animate-pulse">Scheduler</Link> 
            
            <nav className="flex w-2/4 text-base lg:text-lg">

                <section className="flex md:hidden w-full justify-end">

                    <div className="cursor-pointer" onClick={() => setIsNavOpen(!isNavOpen)}>           
                        {!isNavOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>  
                        )}
                    </div>

                    <div className={isNavOpen ? "block z-20 text-center pt-5 absolute h-24 w-full bg-gradient-to-b rounded-b-xl from-[#9aa5dd] to-[#7b8cde] top-20 right-0" : "hidden"}>

                        <ul>
                            <li>
                                <Link to="/">Inicio</Link>
                            </li>
                            <li className="pt-3">
                                <button onClick={props.toggleForm}>Agendar</button>
                            </li>
                        </ul>
                    </div>

                </section>
                <ul className="hidden w-full justify-end gap-20 md:flex">
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <button onClick={props.toggleForm}>Agendar</button>
                    </li>
                </ul>
            </nav>
        </header>
</>
    )
}