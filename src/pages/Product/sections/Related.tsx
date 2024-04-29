import { Image } from '../../../components/shared'

export const Related = () => {
    return (
        <div id="related" className="w-full h-full">
            <h2 className='py-10 md:py-5 px-2 font-bold text-2xl'>Related</h2>
            <div id="related-grid" className='grid grid-cols-4 gap-4'>
                <article className='flex flex-col col-span-4 md:col-span-2 lg:col-span-1 gap-2 p-6 mt-4 border border-black text-lg'>
                    <Image height='h-full' width='w-full' className='mx-auto mb-8' url="https://random.imagecdn.app/500/500" />
                    <p className="">Blindside (Michael Bennett Book 12)</p>
                    <p className="">Jhon Doe</p>
                    <p className="font-bold">$69.99</p>
                </article> 
                <article className='flex flex-col col-span-4 md:col-span-2 lg:col-span-1 gap-2 p-6 mt-4 border border-black text-lg'>
                    <Image height='h-full' width='w-full' className='mx-auto mb-8' url="https://random.imagecdn.app/500/500" />
                    <p className="">Blindside (Michael Bennett Book 12)</p>
                    <p className="">Jhon Doe</p>
                    <p className="font-bold">$69.99</p>
                </article>                
            </div>
        </div>
    )
}