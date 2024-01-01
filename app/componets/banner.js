import { FileIcon } from "@radix-ui/react-icons";
import Slider from "./slider";
import Link from "next/link";


export default function Banner(){
    return(
        <div className="w-full h-screen p-8 md:p-24 flex flex-col items-center gap-4 justify-center md:grid md:grid-cols-2 bg-banner bg-center bg-cover">
            <div className="hidden text-black md:flex md:flex-col gap-8 md:p-24">
                <h1 className="text-3xl md:text-6xl font-semibold">
                <span className="text-blue-500">Tinloop</span> Lab Supplies</h1>
                <p className="text-sm md:text-base text-black">Your trusted partner in procurement and supply of laboratory 
                 equipment, apparatus, reagants, raw materials,chemicals, consumables and safety equipment</p>
                <div>
                    <Link  href="#contact" className="bg-blue-500 flex rounded py-2 px-8 text-white font-semibold items-center justify-center gap-2"> <FileIcon /> Get your quotation now</Link>
                </div>
            </div>
            <div className="hidden md:flex relative ">
                <Slider />
            </div>
            <div className="md:hidden flex flex-col items-center justify-center gap-4">
                <h1 className="text-3xl font-semibold md:hidden">
                    <span className="text-blue-500">Tinloop</span> Lab Supplies</h1>
                <p className="text-sm text-black md:hidden text-center">Your trusted partner in procurement and supply of laboratory 
                 equipment, apparatus, reagants, raw materials,chemicals, consumables and safety equipment</p>
                    <div></div>
                <div className="relative ">
                    <Slider />
                </div>
                <div className="md:hidden">
                     <Link  href="#contact" className="bg-blue-500 flex rounded py-2 px-8 text-white font-semibold items-center justify-center gap-2"> <FileIcon /> Get your quotation now</Link>
                </div>
            </div>
        </div>
    )
}