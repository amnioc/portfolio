import Image from "next/image";

export default function Logo () {
    return (
        <Image src="/icon.png" alt="initials N D in black text" width={100} height={100} className="fixed  p-2 left-0 top-0"/>
    )
}