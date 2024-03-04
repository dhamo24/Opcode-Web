import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
        export default function Header () {
        return(
        <header className="bg-white shadow-lg ">
        <div className=" px-4 py-6 flex justify-between items-center bg-primary dark:bg-black" >
            <h1 className="text-2xl font-bold text-white">Opcode</h1>
            <div className="">
            <ThemeToggle/>
            </div>
            <nav className="space-x-4 ">
                <Link href="/Service" className="text-white">Service</Link>
                <Link href="/About" className="text-white">About</Link>
                <Link href="/Contactus" className="text-white">Contactus</Link>
            </nav>
        </div> 
    </header>
    )
    }