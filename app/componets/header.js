import Link from "next/link";
import { MobileIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Header(){
    return(
        <div className="w-full flex justify-between items-center px-8 md:px-24 py-4 absolute">
            <Image src="/logo.png" alt="logo" height={50} width={50}  />
            <Link href="tel:+263714814319" className="rounded-full px-4 py-2 text-white font-semibold items-center justify-center flex gap-2 bg-blue-500"><MobileIcon  />Call Now</Link>
        </div>
    )
}