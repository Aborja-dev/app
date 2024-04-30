import { Breadcrumb } from "flowbite-react"
import { BaseLayout } from "../layout/BaseLayout"
import { CartCard, ProductCard } from "../components/cards"
import { books } from '../../data/books.json'
export const CategoryPage = () => {
    return (
        <BaseLayout>
        <Breadcrumb />
            <section className="grid grid-cols-4 gap-4">
                <section data-id="filters" className="col-span-4 md:col-span-1">
                    <article className="border w-full">
                        <h2 className="py-5 px-2 lg:px-4 font-bold text-2xl md:text-lg lg:text-xl">Categorias</h2>
                        <ul className="flex flex-col gap-0">
                            <li className="border-b border-t p-6 md:p-4 lg:text-xl">Mystery</li>
                            <li className="border-b border-t p-6 md:p-4 lg:text-xl">Fantasy</li>
                            <li className="border-b border-t p-6 md:p-4 lg:text-xl">Horror</li>
                            <li className="border-b border-t p-6 md:p-4 lg:text-xl">Thriller</li>
                        </ul>
                    </article>
                </section> 
                <section data-id="cards" className="col-span-4 md:col-span-3 grid grid-cols-6 gap-2">
                    <div className="col-span-3 lg:col-span-2">
                        <ProductCard />
                    </div>
                    <div className="col-span-3 lg:col-span-2">
                        <ProductCard />
                    </div>
                    
                    <div className="col-span-3 lg:col-span-2">
                        <ProductCard />
                    </div>
                    <div className="col-span-3 lg:col-span-2">
                        <ProductCard />
                    </div>
                </section>
                <section data-id="related">

                </section>
            </section>
        </BaseLayout>
    )
}