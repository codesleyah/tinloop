import { CheckCircledIcon } from "@radix-ui/react-icons"


export default function WhyusSection(){
    return(
        <div className="w-full bg-white p-8 md:p-32 flex flex-col md:grid md:grid-cols-2 text-gray-700 gap-12"> 
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl md:text-4xl text-blue-500 font-semibold">Why Choose Us</h1>
                <ul>
                    <li className="flex items-center gap-4 text-xs md:text-sm"><CheckCircledIcon /> Experienced technical team</li>
                    <li className="flex items-center gap-4 text-xs md:text-sm"><CheckCircledIcon /> Excellent customer service</li>
                    <li className="flex items-center gap-4 text-xs md:text-sm"><CheckCircledIcon /> After sale services</li>
                    <li className="flex items-center gap-4 text-xs md:text-sm"><CheckCircledIcon /> Genuine Products</li>
                    <li className="flex items-center gap-4 text-xs md:text-sm"><CheckCircledIcon /> Lower Prices</li>
                    <li className="flex items-center gap-4 text-xs md:text-sm"><CheckCircledIcon /> Reliable</li>
                </ul>
            </div>
            <div>
                <img src="/about.jpg" />
            </div>
        </div>
    )
}