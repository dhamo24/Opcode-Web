import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    return (
        <header className="bg-white shadow-lg">
            <div className="px-4 py-6 flex justify-between items-center bg-primary dark:bg-black">
                <h1 className="text-2xl font-bold text-white">Opcode</h1>
                <nav className="space-x-4 flex items-center">
                    <Link href="/Service" className="text-white link px-2 py-1 rounded">Service</Link>
                    <Link href="/About" className="text-white link px-2 py-1 rounded">About</Link>
                    <Link href="/Contactus" className="text-white link px-2 py-1 rounded">Contactus</Link>
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}
