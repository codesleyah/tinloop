import Link from "next/link";


export default function TalktousSection(){
    return(
        <div className="w-full flex flex-col gap-8 p-32 bg-blue-500 items-center justify-center">
            <h1 className="text-5xl font-semibold">Talk to us right now</h1>
            <p className="text-2xl">our agents are on standby ready to serve you</p>
            <Link href="#" className="bg-white rounded items-center justify-center text-blue-500 py-4 font-semibold px-12">whatsapp us</Link>
        </div>
    )
}