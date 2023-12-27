import Link from "next/link";


export default function TalktousSection(){
    return(
        <div className="w-full flex flex-col gap-8 p-8 md:p-32 bg-blue-500 items-center justify-center">
            <h1 className="text-2xl md:text-5xl font-semibold">Talk to us right now</h1>
            <p className="text-base md:text-2xl text-center">our agents are on standby ready to serve you</p>
            <Link href="https://wa.link/s2d5ag" className="bg-white rounded items-center justify-center text-blue-500 py-4 font-semibold px-12">whatsapp us</Link>
        </div>
    )
}