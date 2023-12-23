import Link from "next/link"
import { MobileIcon } from "@radix-ui/react-icons"

export default function Header(){
    return(
        <div className="w-full flex justify-end items-center px-8 md:px-24 py-4 absolute">
            <Link href="#" className="rounded-full px-4 py-2 text-white font-semibold items-center justify-center flex gap-2 bg-blue-500"><MobileIcon  />Call Now</Link>
        </div>
    )
}