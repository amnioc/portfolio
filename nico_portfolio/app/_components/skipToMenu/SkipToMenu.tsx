import Link from "next/link"

export default function SkipToMenu () {
    return (
    <nav className=" border-2 border-black bg-orange-400  top-2 grow fixed right-10 text-4xl p-3 justify-evenly">
            <Link href="#top">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#contact">Contact</Link>
            <Link href="#download">Download CV</Link>
    </nav>
    )
}