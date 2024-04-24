import { BlogEntryItem } from "./cards/BlogEntryItem"

export const Reviews = () => {

    return (
        <div className="mt-10 h-full">
            <div className="px-5 flex justify-between border-b border-b-slate-400 w-100 items-center h-[70px] mb-5">
                <h1 className="text-3xl capitalize">Reseñas</h1>
                <div className="flex items-center">
                    <a className="italic hover:text-blue-400" href="">ver mas</a>
                    <div className="w-5 h-5 ml-2">
                        <img src="chevron-right-svgrepo-com.svg" alt="chevron right" />
                    </div>
                </div>
            </div>

            <ul className="py-2 flex justify-center gap-4">
                <li>Fantasia</li>
                <li>Cronica</li>
                <li>Novela</li>
                <li>Comedia</li>
            </ul>

            <section className="grid grid-cols-3 pt-10 gap-3">
                <div className="col-span-1">
                <BlogEntryItem />
                </div>
                <div className="col-span-1">
                <BlogEntryItem />
                </div>
                <div className="col-span-1">
                <BlogEntryItem />
                </div>
            </section>
        </div>
    )
}