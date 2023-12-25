import Image from "next/image"

export default function TestimonialSection(){
    return(
        <div className="w-full flex flex-col gap-8 p-8 md:p-32 bg-gray-900 items-center justify-center">
            <h1 className="text-2xl md:text-4xl font-semibold">Testimonials</h1>
            <p className="text-base md:text-2xl text-center">what our clients say about us</p>
            <div className="w-full flex flex-col md:grid grid-cols-3 gap-4">
                <div className="bg-white text-gray-900 rounded shadow-xl flex flex-col items-center justify-center p-4 text-center gap-4">
                    <Image src="/qot.png" alt="quotes" height={50} width={50} />
                    <p className="text-sm md:text-base">"As a research scientist, the quality and purity of chemicals I use
                     are paramount. Every order from Tinloop has been spot-on. Their
                      consistency and attention to detail have greatly accelerated our 
                      breakthroughs in the lab. A trusted partner for top-notch chemical supplies!"
                    </p>
                    <h1 className="font-semibold">-Munashe Gurumuto</h1>
                </div>
                <div className="bg-white text-gray-900 rounded shadow-xl flex flex-col items-center justify-center p-4 text-center gap-4">
                    <Image src="/qot.png" alt="quotes" height={50} width={50} />
                    <p className="text-sm md:text-base">"Navigating the world of pharmaceuticals requires dependable partners. 
                    Tinloop&apos;s range of chemicals has been instrumental in our drug development 
                    processes. Not only are their products of the 
                    highest quality, but their customer service and prompt 
                    deliveries have also set them apart. Highly recommended!"
                    </p>
                    <h1 className="font-semibold">-Michelle Chopago</h1>
                </div>
                <div className="bg-white text-gray-900 rounded shadow-xl flex flex-col items-center justify-center p-4 text-center gap-4">
                    <Image src="/qot.png" alt="quotes" height={50} width={50} />
                    <p className="text-sm md:text-base">"In the realm of environmental solutions, precision is crucial. 
                    I&apos;ve relied on Tinloop for years to provide eco-friendly 
                    chemicals that meet stringent standards. Their commitment to sustainability, 
                    coupled with their expert knowledge, makes them an invaluable 
                    resource in my consultancy work. Kudos to the team!"
                    </p>
                    <h1 className="font-semibold">-Daiton Gumunyu</h1>
                </div>
            </div>
        </div>
    )
}