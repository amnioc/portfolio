import Link from "next/link"
import Logo from "../logo/Logo"
import Header from "../header/Header"


export default function Menu () {
    return (
    <nav className="border-2 border-web-orange-600 bg-purple-heart-600 text-purple-heart-50 top-1 fixed flex lg:flex-row flex-col lg:w-screen lg:h-auto h-screen w-auto justify-between">
        <section className="flex flex-row p-2">
        <Logo />
        <Header />
        </section>
            <section className="flex lg:text-3xl text-xl lg:flex-row flex-col shrink gap-5" id="nav-links">
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