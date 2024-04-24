import { AuthorItem } from "./cards/AuthorItem"

export const Authors = () => {
    return (
        <div className="mt-10 h-full mb-10">
            <div className="px-5 flex justify-between border-b border-b-slate-400 w-100 items-center h-[70px] mb-10">
                <h1 className="text-3xl capitalize">Autores</h1>
                <div className="flex items-center">
                    <a className="italic hover:text-blue-400" href="">ver mas</a>
                    <div className="w-5 h-5 ml-2">
                        <img src="chevron-right-svgrepo-com.svg" alt="chevron right" />
                    </div>
                </div>
            </div>
            <section className="grid grid-cols-4 gap-10">
                <div className="col-span-1">
                    <AuthorItem />
                </div>
                <div className="col-span-1">
                    <AuthorItem />
                </div>
                <div className="col-span-1">
                    <AuthorItem />
                </div>
                <div className="col-span-1">
                    <AuthorItem />
                </div>
            </section>
        </div>
    )
}