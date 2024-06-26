
import { Book } from "../../types/types"
import { Rating } from "../shared/Rating"


export const CartCard: React.FC<Book> = ({ urlImg, tags, author, price, rating, title }) => {
    return (
        <article className=" group bg-white border shadow-sm flex flex-col p-3 overflow-hidden hover:border-black">
                        <div className="w-full flex justify-center p-4 pb-20">
                            <img src={urlImg} alt="book cover" />
                        </div>
                        <div className="
                    transform 
                    lg:group-hover:-translate-y-[50px]
                    duration-300 
                    bg-white relative
                    p-5
                    md:p-0
                    ">
                <p className="uppercase text-red-600 tracking-wide">{tags.join(", ")}</p>
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="italic font-thin">{author}</p>
                <p className="font-bold text-2xl">${price}</p>
                <ul className="flex gap-2 items-center mt-2">
                    <Rating rating={rating} />
                </ul>
                <div className="
                        lg:absolute bottom-0 
                        transform lg:translate-y-full 
                        w-full
                        transition duration-300     
                        flex justify-between mt-4 items-center h-[50px]">
                    <div className="flex gap items-center">
                        <svg className="
                        hover:text-white
                        hover:bg-blue-500
                        hover
                        box-content
                        transition duration-300
                        rounded-full
                        p-3
                        hover:cursor-pointer w-6 h-6  
                        text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.7" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" />
                        </svg>
                        <p className="text-lg text-gray-600 font-thin tracking-wide uppercase hover:text-blue-500 hover:cursor-pointer lg:block md:hidden hidden">ADD TO CART</p>
                    </div>
                    <div className="w-8 h-8 hover:bg-blue-500 animate-all duration-200 p-2 rounded-full overflow-hidden box-content">
                        <img src="heart-svgrepo-com.svg" alt="" />
                    </div>
                </div>
            </div>
        </article>
    )
}