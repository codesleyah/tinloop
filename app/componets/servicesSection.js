


export default function ServicesSection(){
    return(
        <div className="p-8 md:p-32 flex flex-col md:grid md:grid-cols-2 gap-4 bg-gray-300 text-black">
            <div className="flex flex-col gap-2 items-center justify-center relative bg-black">
                <div className="w-full h-full">
                    <img src="/edu.jpg"/>
                </div>
                <div className="bg-black opacity-75 p-2 absolute bottom-0 text-white">
                    <h1 className="font-semibold text-sm md:text-base">Education &  Research</h1>
                    <p className="text-sm">Weather you are a high school 
                        or a tetiary institution. 
                        deliver the best lab materials
                        to meet your needs</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center relative">
                <div>
                    <img src="/med.jpg"/>
                </div>
                <div className="bg-black opacity-75 p-2 absolute bottom-0 text-white">
                    <h1 className="font-semibold text-sm md:text-base">Medical Failities</h1>
                     <p className="text-sm">We supply various equipment and specialized equipment. We also supply 
                     reagants, chemicals, consumables and safety equipment</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center relative">
                <div>
                    <img src="/mine.jpg"/>
                </div>
                <div className="bg-black opacity-75 p-2 absolute bottom-0 text-white">
                    <h1 className="font-semibold text-sm md:text-base">Mining</h1>
                    <p className="text-xs md:text-sm">We have all the chemicals required
                    to make your mining easier as well 
                    as PPE to protect your workers</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center relative">
                <div className="w-full h-full">
                    <img src="/ing.jpg"/>
                </div>
                <div className="bg-black opacity-75 p-2 absolute bottom-0 text-white">
                    <h1 className="font-semibold text-sm md:text-base">Industry</h1>
                    <p className="text-xs md:text-sm ">we supply chemicals, lab equipment 
                        and ppe to a wide range of specialized industries be it 
                        heavy or light industries.</p>
                </div>
            </div>
        </div>
    )
}