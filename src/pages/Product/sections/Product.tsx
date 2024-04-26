import { Icon, Image } from "../../../components/shared"
import { Rating } from "../../../components/shared/Rating"


export const Product = () => {
    return (
        <div data-id="product" className="w-full h-full mt-8">
                    <article className="w-full h-full p-2">
                        <div className="mx-auto container py-10">
                        <Image url="https://random.imagecdn.app/500/500" className="conainer mx-auto" height="h-[350px]" width="w-4/6"/>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 data-id="title" className={`
                            font-bold text-3xl 
                            hover:cursor-pointer hover:text-orange-500`}>Blindside (Michael Bennett Book 12)</h2>
                            <div className="flex items-center justify-between">
                                <Rating rating={4} size="small" />
                                <div data-id="author" className="mt-2">By (author) <span className="italic text-gray-500">James Patterson</span></div>
                            </div>
                            <p className="text-3xl font-bold">$69.99</p>
                            <p className={`
                            text-gray-500 
                            line-clamp-5
                            mb-6
                            `}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
                            .</p>
                        </div>
                        <div data-id="buy" className="flex flex-col">
                            <div className="border p-4 mr-2 flex mb-2">
                                <button className="w-2/6 hover:border text-2xl">-</button>
                                <input className="w-2/6 text-center  border-0" type="number" value={1} readOnly />
                                <button className="w-2/6 text-2xl">+</button>
                            </div>
                                <button className="py-2 bg-black text-white">Add to cart</button>
                        </div>
                        <div className="inline-flex my-4 justify-center w-full items-center">
                            <Icon url="icons/Heart.svg" size="w-6 h-6" />
                            <p className="text-xl text-gray-500">Add to wishlist</p>
                        </div>
                        <div className="inline-flex my-4 justify-center w-full items-center">
                            <Icon url="icons/share.svg" size="w-6 h-6" />
                            <p className="text-xl text-gray-500">Share</p>
                        </div>
                    </article>

                </div>
    )
}