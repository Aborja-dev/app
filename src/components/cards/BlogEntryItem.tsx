import { BlogEntry } from "../../types/types"

export const BlogEntryItem: React.FC<BlogEntry> = ({ urlImg, tags, title, date, summary, comments }) => {
    return (
        <article className="group bg-white border shadow-sm flex flex-col overflow-hidden hover:cursor-pointer">
            <div className="w-full h-[150px]">
                <img src={urlImg} className="object-cover object-center w-full h-full" alt="" />
            </div>
            <div className="p-5 flex flex-col gap-2">
                <p className="uppercase text-red-600 tracking-wide">{tags.join(", ")}</p>
                <h2 className="hover:text-blue-700  text-2xl font-bold tracking-wide">{title}</h2>
                <p className="md:h-[100px] h-[50px] line-clamp-2 md:line-clamp-4">{summary}</p>
            </div>
            <div className="p-5 flex justify-between text-gray-500 font-thin">
                <div className="flex gap-2 items-center">
                    <div className="w-5 h-5">
                        <img src="clock-three-svgrepo-com.svg" alt="" />
                    </div>
                    <p>{date}</p>
                </div>
                <p>
                    <span className="mr-2">{comments}</span>
                    comments
                </p>
            </div>
        </article>
    )
}