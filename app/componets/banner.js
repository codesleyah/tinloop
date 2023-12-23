import { FileIcon } from "@radix-ui/react-icons"


export default function Banner(){
    return(
        <div className="w-full h-screen p-8 md:p-24 flex flex-col items-center justify-center md:grid md:grid-cols-2 bg-banner bg-center bg-cover">
            <div className="text-black flex flex-col gap-8 md:p-24">
                <h1 className="text-3xl md:text-6xl font-semibold"><span className="text-blue-500">Tinloop</span> Lab Supplies</h1>
                <p className="text-sm md:text-base text-black">Your trusted partner in procurement and supply of a wide
                range of major laboratory equipment, chemistry lab apparatus, chemicals raw materials, laboratory
                reagants, laboratory consumables and PPE</p>
                <div>
                    <button className="bg-blue-500 flex rounded py-2 px-8 text-white font-semibold items-center justify-center gap-2"> <FileIcon /> Get your quotation now</button>
                </div>
            </div>
        </div>
    )
}