import Link from "next/link"
import Logo from "../logo/Logo"
import Header from "../header/Header"

export default function Menu () {
    return (
    <nav className="border-2 border-web-orange-600 bg-purple-heart-600 text-purple-heart-50 top-1 fixed flex sm:flex-row flex-col sm:w-screen sm:h-auto h-screen w-auto justify-between">
        <section className="flex flex-row p-2">
        <Logo />
        <Header />
        </section>
            <section className="flex sm:text-3xl text-xl sm:flex-row flex-col shrink gap-5" id="nav-links">
                <Link href="#top">Home</Link>
                <Link href="#about">About</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#experience">Experience</Link>
                <Link href="#contact">Contact</Link>
                <Link href="#download">Download CV</Link>
            </section>
    </nav>
    )
}