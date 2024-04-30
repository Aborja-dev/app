import { Image } from "../shared"

export const ProductCard: React.FC = () => {

    return (
        <article className='flex flex-col col-span-4 md:col-span-2 lg:col-span-1 gap-2 p-6 mt-4 border border-black text-lg'>
                    <Image height='h-full' width='w-full' className='mx-auto mb-8' url="https://random.imagecdn.app/500/500" />
                    <p className="">Blindside (Michael Bennett Book 12)</p>
                    <p className="">Jhon Doe</p>
                    <p className="font-bold">$69.99</p>
                </article> 
    )
}