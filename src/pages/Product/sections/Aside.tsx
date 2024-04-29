import { Image } from "../../../components/shared"

export const Aside = () => {
    return (
        <section id="aside" className="w-full h-full border md:border-0 p-4 pt-4">
            <article className='grid grid-cols-6 gap-4 py-6 mt-4'>
                <Image className='col-span-1 row-span-2 h-full' url="https://random.imagecdn.app/500/500" />
                <p className="col-span-4 ml-4">Blindside (Michael Bennett Book 12)</p>
                <p className="col-span-4 ml-4">$69.99</p>
            </article>
            <article className='grid grid-cols-6 gap-4 py-6 mt-4'>
                <Image className='col-span-1 row-span-2 h-full' url="https://random.imagecdn.app/500/500" />
                <p className="col-span-4 ml-4">Blindside (Michael Bennett Book 12)</p>
                <p className="col-span-4 ml-4">$69.99</p>
            </article>
            <article className='grid grid-cols-6 gap-4 py-6 mt-4'>
                <Image className='col-span-1 row-span-2 h-full' url="https://random.imagecdn.app/500/500" />
                <p className="col-span-4 ml-4">Blindside (Michael Bennett Book 12)</p>
                <p className="col-span-4 ml-4">$69.99</p>
            </article>
        </section>
    )
}