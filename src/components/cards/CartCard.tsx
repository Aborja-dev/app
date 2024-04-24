export const CartCard = () => {
    return (
        <article className=" group bg-white border shadow-sm flex flex-col p-3 overflow-hidden">
                        <div className="w-full flex justify-center p-4 pb-20">
                            <img src="50-120x183.jpg" alt="book cover" />
                        </div>
                        <div className="
                    transform 
                    group-hover:-translate-y-[50px]
                    duration-300 
                    bg-white relative">
                            <p className="uppercase text-red-600 tracking-wide">Hardcover, kindle, paper</p>
                            <h2 className="text-2xl font-semibold">Titulo del libro</h2>
                            <p className="italic font-thin">Author</p>
                            <p className="font-bold text-2xl">$99</p>
                            <ul className="flex gap-2 items-center mt-2">
                                <li style={{
                                    clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
                                }} className="w-5 h-5 bg-orange-400"></li>
                                <li style={{
                                    clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
                                }} className="w-5 h-5 bg-orange-400"></li>
                                <li style={{
                                    clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
                                }} className="w-5 h-5 bg-orange-400"></li>
                            </ul>
                            <div className="
                        absolute bottom-0 
                        transform translate-y-full 
                        w-full
                        transition duration-300     
                        flex justify-between mt-4 items-center h-[50px]">
                                <p className="text-lg text-gray-600 font-thin tracking-wide uppercase">ADD TO CART</p>
                                <div className="w-8 h-8">
                                    <img src="heart-svgrepo-com.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </article>
    )
}