import Link from "next/link"

export default function SkipToMenu () {
    return (
    <nav className=" basis-6 grow ">
            <Link href="#top">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#contact">Contact</Link>
            <Link href="#download">Download CV</Link>
    </nav>
    )
}