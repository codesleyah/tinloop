import Link from "next/link";


export default function Footer(){
    return(
        <div className="w-full flex flex-col md:flex-row justify-between p-8 bg-gray-900">
            <p className="text-xs">Copyrights &copy; 2024 Tinloop Lab Supplies. All rights reserved</p>
            <p className="text-xs">powered by <Link href="startum.ac.zw" className="text-blue-500">Startum</Link></p>
        </div>
    )
}