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
                    <article className="group bg-white border shadow-sm flex flex-col overflow-hidden">
                        <div className="w-full h-[250px]">
                            <img src="img1-20.jpg" className="object-cover object-center w-full h-full" alt="" />
                        </div>
                        <div className="p-5 flex flex-col gap-2">
                            <p className="uppercase text-red-600 tracking-wide">Hardcover, kindle, paper</p>
                            <h2 className="text-2xl font-bold tracking-wide">Lorem ipsum dolor sit amet</h2>
                            <p className="h-[100px]  line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nemo.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nemo.</p>
                        </div>
                        <div className="p-5 flex justify-between text-gray-500 font-thin">
                            <div className="flex gap-2 items-center">
                                <div className="w-5 h-5">
                                    <img src="clock-three-svgrepo-com.svg" alt="" />
                                </div>
                                <p>August 19, 2020</p>
                            </div>
                            <p>
                                <span className="mr-2">2</span>
                                comments
                            </p>
                        </div>
                    </article>
                </div>
                <div className="col-span-1">
                    <article className="group bg-white border shadow-sm flex flex-col overflow-hidden">
                        <div className="w-full h-[250px]">
                            <img src="img1-20.jpg" className="object-cover object-center w-full h-full" alt="" />
                        </div>
                        <div className="p-5 flex flex-col gap-2">
                            <p className="uppercase text-red-600 tracking-wide">Hardcover, kindle, paper</p>
                            <h2 className="text-2xl font-bold tracking-wide">Lorem ipsum dolor sit amet</h2>
                            <p className="h-[100px]  line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nemo.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nemo.</p>
                        </div>
                        <div className="p-5 flex justify-between text-gray-500 font-thin">
                            <div className="flex gap-2 items-center">
                                <div className="w-5 h-5">
                                    <img src="clock-three-svgrepo-com.svg" alt="" />
                                </div>
                                <p>August 19, 2020</p>
                            </div>
                            <p>
                                <span className="mr-2">2</span>
                                comments
                            </p>
                        </div>
                    </article>
                </div>
                <div className="col-span-1">
                    <article className="group bg-white border shadow-sm flex flex-col overflow-hidden">
                        <div className="w-full h-[250px]">
                            <img src="img1-20.jpg" className="object-cover object-center w-full h-full" alt="" />
                        </div>
                        <div className="p-5 flex flex-col gap-2">
                            <p className="uppercase text-red-600 tracking-wide">Hardcover, kindle, paper</p>
                            <h2 className="text-2xl font-bold tracking-wide">Lorem ipsum dolor sit amet</h2>
                            <p className="h-[100px]  line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nemo.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nemo.</p>
                        </div>
                        <div className="p-5 flex justify-between text-gray-500 font-thin">
                            <div className="flex gap-2 items-center">
                                <div className="w-5 h-5">
                                    <img src="clock-three-svgrepo-com.svg" alt="" />
                                </div>
                                <p>August 19, 2020</p>
                            </div>
                            <p>
                                <span className="mr-2">2</span>
                                comments
                            </p>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )
}