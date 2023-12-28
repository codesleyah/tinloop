import {EnvelopeClosedIcon, HomeIcon, MobileIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function ContactSection(){
    return(
        <div className="w-full bg-white p-8 md:p-32 flex flex-col md:grid md:grid-cols-2 text-gray-700 gap-12">
            <div className="w-full flex flex-col gap-4">
                <h1 className="md:hidden text-2xl md:text-4xl text-blue-500 font-semibold">Get In Touch</h1>
                <input className="border-2 h-12 rounded p-2"
                    placeholder="full name" />
                <input className="border-2 h-12 rounded p-2"
                    placeholder="phone number" />
                <input className="border-2 h-12 rounded p-2"
                    placeholder="email" />
                <textarea className="rounded border-2 p-2"
                    rows={10}
                    placeholder="message" />
                <div>
                    <button className="rounded py-2 px-4 shadow bg-blue-500 text-white">Send Message</button>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="hidden md:block text-2xl md:text-4xl text-blue-500 font-semibold">Get In Touch</h1>
                <ul className="flex flex-col gap-4 text-gray-700">
                    <li className="flex items-center gap-4"><MobileIcon /> +263714814319</li>
                    <li className="flex items-center gap-4"><EnvelopeClosedIcon />sales@tinlooplabsupplies.co.zw</li>
                    <li className="flex items-center gap-4"><HomeIcon />7721 Belvedere West, Harare , Zimbabwe</li>
                </ul>
                <div className="w-full flex items-center justify-start gap-4">
                    <Link href="https://www.linkedin.com/company/tinloop-lab-supplies/">
                        <Image src="/in.png" alt="facebook logo"  height={50} width={50}/>
                    </Link>
                    <Link href="https://www.facebook.com/profile.php?id=61554884257091">
                        <Image src="/fb.png" alt="facebook logo"  height={50} width={50}/>
                    </Link>
                    <Link href="https://wa.me/message/MCXC6PM46UTFJ1">
                        <Image src="/wa.png" alt="whatsapp logo"  height={50} width={50}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}