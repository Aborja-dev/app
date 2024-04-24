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
                    <article className="group flex items-center flex-col gap-2 p-3">
                        <div className="w-32 h-32 border rounded-full overflow-hidden">
                            <img src="12.jpg" className="object-cover object-center w-full h-full" alt="" />
                        </div>
                        <p className="capitalize font-bold tracking-wide">Author</p>
                        <p className="italic font-thin text-gray-500">2 libros publicados</p>
                    </article>
                </div>
                <div className="col-span-1">
                    <article className="group flex items-center flex-col gap-2 p-3">
                        <div className="w-32 h-32 border rounded-full overflow-hidden">
                            <img src="12.jpg" className="object-cover object-center w-full h-full" alt="" />
                        </div>
                        <p className="capitalize font-bold tracking-wide">Author</p>
                        <p className="italic font-thin text-gray-500">2 libros publicados</p>
                    </article>
                </div>
                <div className="col-span-1">
                    <article className="group flex items-center flex-col gap-2 p-3">
                        <div className="w-32 h-32 border rounded-full overflow-hidden">
                            <img src="12.jpg" className="object-cover object-center w-full h-full" alt="" />
                        </div>
                        <p className="capitalize font-bold tracking-wide">Author</p>
                        <p className="italic font-thin text-gray-500">2 libros publicados</p>
                    </article>
                </div>
                <div className="col-span-1">
                    <article className="group flex items-center flex-col gap-2 p-3">
                        <div className="w-32 h-32 border rounded-full overflow-hidden">
                            <img src="12.jpg" className="object-cover object-center w-full h-full" alt="" />
                        </div>
                        <p className="capitalize font-bold tracking-wide">Author</p>
                        <p className="italic font-thin text-gray-500">2 libros publicados</p>
                    </article>
                </div>
            </section>
        </div>
    )
}