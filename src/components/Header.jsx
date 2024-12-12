import { useEffect, useState } from "react";

export default function Header(){
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() =>{

    }, [isNavOpen])

    return (
        <header className="px-4 box-border flex justify-around w-full bg-gradient-to-b from-[#7b8cde] to-[#9999c3] self-center h-20 items-center border-[#7b8cde] text-[#001b2e]">
            <h1 className="text-xl animate-pulse">Scheduler</h1>
            
            <nav className="flex w-2/4">

                <section className="flex md:hidden w-full justify-end">

                    <div className="cursor-pointer" onClick={() => setIsNavOpen(!isNavOpen)}>           
                        {!isNavOpen ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>) : ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg> )}
                    </div>

                    <div className={isNavOpen ? "block z-20 text-center pt-3 absolute h-24 w-full bg-gradient-to-b rounded-b-xl from-[#9999c3] to-[#7b8cde] top-20 right-0" : "hidden"}>

                        <ul className="text-md gap-10 underline">
                            <li>
                                <a href="#" className="cursor-pointer">Inicio</a>
                            </li>
                            <li className="pt-3">
                                <a href="#">Agendar</a>
                            </li>
                        </ul>
                    </div>

                </section>
                <ul className="hidden w-full justify-end text-sm gap-20 md:flex">
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Agendar</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}