import { CheckCircledIcon } from "@radix-ui/react-icons"


export default function AboutSection(){
    return(
        <div className="w-full bg-white p-32 grid grid-cols-2 text-gray-700 gap-12">
            <div>
                <img src="/about.jpg" />
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl text-blue-500 font-semibold">Who We Are</h1>
                <p className="text-base ">TINLOOP LAB SUPPLIES PVT LTD is a Zimbabwean wholly 
                    owned company registered under the companies act. 
                    We supply a comprehensive range of laboratory 
                    equipment such as</p>
                <ul>
                    <li className="flex items-center gap-4"><CheckCircledIcon /> Laboratory Equipment</li>
                    <li className="flex items-center gap-4"><CheckCircledIcon /> Chemicals</li>
                    <li className="flex items-center gap-4"><CheckCircledIcon /> Reagants</li>
                    <li className="flex items-center gap-4"><CheckCircledIcon /> PPE</li>
                </ul>
            </div>
        </div>
    )
}