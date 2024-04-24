export const BlogEntryItem = () => {
    return (
        <article className="group bg-white border shadow-sm flex flex-col overflow-hidden hover:cursor-pointer">
            <div className="w-full h-[250px]">
                <img src="img1-20.jpg" className="object-cover object-center w-full h-full" alt="" />
            </div>
            <div className="p-5 flex flex-col gap-2">
                <p className="uppercase text-red-600 tracking-wide">Hardcover, kindle, paper</p>
                <h2 className="hover:text-blue-700  text-2xl font-bold tracking-wide">Lorem ipsum dolor sit amet</h2>
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
    )
}