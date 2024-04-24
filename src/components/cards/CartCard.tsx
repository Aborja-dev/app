
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
                    group-hover:-translate-y-[50px]
                    duration-300 
                    bg-white relative">
                            <p className="uppercase text-red-600 tracking-wide">{tags.join(", ")}</p>
                            <h2 className="text-2xl font-semibold">{title}</h2>
                            <p className="italic font-thin">{author}</p>
                            <p className="font-bold text-2xl">${price}</p>
                            <ul className="flex gap-2 items-center mt-2">
                                <Rating rating={rating} />
                            </ul>
                            <div className="
                        absolute bottom-0 
                        transform translate-y-full 
                        w-full
                        transition duration-300     
                        flex justify-between mt-4 items-center h-[50px]">
                                <p className="text-lg text-gray-600 font-thin tracking-wide uppercase hover:text-blue-500 hover:cursor-pointer">ADD TO CART</p>
                                <div className="w-8 h-8 hover:bg-blue-500 animate-all duration-200 p-2 rounded-full overflow-hidden box-content">
                                    <img src="heart-svgrepo-com.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </article>
    )
}