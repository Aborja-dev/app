import { useState } from "react"
import { Rating } from "../../../components/shared"

export const ProductDetail = () => {
    const [tag, setTag] = useState<string>('description')
    return (
        <section data-id="product-details" className="w-full h-full mt-4 flex flex-col">
            <section className="border-b pb-2">
                <ul className="flex gap-2 justify-around group">
                    <li 
                    className="group-hover:cursor-pointer active:border-b active:border-b-gray-500 pb-2"
                    onClick={() => setTag('description')}
                    >Description</li>
                    <li className="group-hover:cursor-pointer active:border-b active:border-b-gray-500 pb-2" 
                    onClick={() => setTag('reviews')}
                    >Reviews</li>
                    <li className="group-hover:cursor-pointer active:border-b active:border-b-gray-500 pb-2"
                    onClick={() => setTag('details')}
                    >Details</li>
                </ul>
            </section>
            {
                tag === 'description' && (
                    <section data-id="description" className="p-4 border ">
                        We aim to show you accurate product information. Manufacturers, suppliers and others provide what you see here, and we have not verified it. See our disclaimer
                        #1 New York Times Bestseller
                        A Reese Witherspoon x Hello Sunshine Book Club Pick
                        “I can’t even express how much I love this book! I didn’t want this story to end!”–Reese Witherspoon
                        “Painfully beautiful.”–The New York Times Book Review
                        “Perfect for fans of Barbara Kingsolver.”–Bustle
                        For years, rumors of the “Marsh Girl” have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl. But Kya is not what they say. Sensitive and intelligent, she has survived for years alone in the marsh that she calls home, finding friends in the gulls and lessons in the sand. Then the time comes when she yearns to be touched and loved. When two young men from town become intrigued by her wild beauty, Kya opens herself to a new life–until the unthinkable happens.
                    </section>
                )
            }
            {
                tag === 'details' && (
                    <section id="details" className="p-4 border">
                        <article className="p-4 grid place-items-center grid-cols-2 gap-2">
                            <span>SKU</span>
                            <span className="font-bold">BW-1003010</span>
                            <span>SKU</span>
                            <span className="font-bold">BW-1003010</span>
                            <span>SKU</span>
                            <span className="font-bold">BW-1003010</span>
                            <span>SKU</span>
                            <span className="font-bold">BW-1003010</span>

                        </article>
                    </section>
                )
            }
            {
                tag === 'reviews' && (
                    <section className="border p-2 pb-8">
                        <article className="border-b flex flex-col gap-2 p-2 pb-8 mb-4">
                            <span className="font-bold">Abraham</span>
                            <Rating rating={4} size="small" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p className="italic text-gray-500">August 1, 2022</p>
                        </article>
                        <article className="border-b flex flex-col gap-2 pb-8 mb-4">
                            <span className="font-bold">Abraham</span>
                            <Rating rating={4} size="small" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>August 1, 2022</p>
                        </article>
                    </section>
                )
            }

        </section>
    )
}