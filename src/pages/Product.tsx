
import { CartCard } from "../components/cards"
import { Icon } from "../components/shared/Icon"
import { Image } from "../components/shared/Image"
import { Rating } from "../components/shared/Rating"
import {books} from '../../data/books.json'
export const ProductPage = () => {
    return (       
        <>
            <div id="breadcrumb" className="w-full h-full">
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li className="inline-flex items-center">
                            <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Flowbite</span>
                            </div>
                        </li>
                    </ol>
                </nav>

            </div>
            <div id="product" className="w-full h-full">
                <article>
                    <Image url="https://random.imagecdn.app/500/500" />
                    <div>
                        <h2 id="title">Blindside (Michael Bennett Book 12)</h2>
                        <div>
                            <Rating rating={4} size="small" />
                            <div id="author">By (author) James Patterson</div>
                        </div>
                        <p>$69.99</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat.</p>
                    </div>
                    <div id="buy">
                        <div>
                            <button>+</button>
                            <input type="number" readOnly />
                            <button>-</button>
                            <button>Add to cart</button>
                        </div>
                    </div>
                </article>

            </div>
            <section id="aside" className="w-full h-full">
                <article>
                    <Image url="https://random.imagecdn.app/500/500" />
                    <div id="info">
                        <p>Blindside (Michael Bennett Book 12)</p>
                        <p>$69.99</p>
                    </div>
                    <div>
                        <Icon url="icons/Heart.svg" size={'w-10 h-10'}  />
                        <Icon url="icons/share.svg" size={'w-10 h-10'}  />
                    </div>
                </article>
            </section>
            <section id="detproduct-details" className="w-full h-full">
                <section>
                    <ul>
                        <li>Description</li>
                        <li>Reviews</li>
                        <li>Details</li>
                    </ul>
                </section>
                <section id="description">
                We aim to show you accurate product information. Manufacturers, suppliers and others provide what you see here, and we have not verified it. See our disclaimer

#1 New York Times Bestseller

A Reese Witherspoon x Hello Sunshine Book Club Pick

“I can’t even express how much I love this book! I didn’t want this story to end!”–Reese Witherspoon

“Painfully beautiful.”–The New York Times Book Review

“Perfect for fans of Barbara Kingsolver.”–Bustle

For years, rumors of the “Marsh Girl” have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl. But Kya is not what they say. Sensitive and intelligent, she has survived for years alone in the marsh that she calls home, finding friends in the gulls and lessons in the sand. Then the time comes when she yearns to be touched and loved. When two young men from town become intrigued by her wild beauty, Kya opens herself to a new life–until the unthinkable happens.
                </section>
                <section id="details">
                    <article>
                        <div>
                            <span>SKU</span>
                            <span>BW-1003010</span>
                        </div>
                        <div>
                            <span>SKU</span>
                            <span>BW-1003010</span>
                        </div>
                        <div>
                            <span>SKU</span>
                            <span>BW-1003010</span>
                        </div>
                        <div>
                            <span>SKU</span>
                            <span>BW-1003010</span>
                        </div>
                    </article>
                </section>
                <section>
                    <article>
                        <span>Abraham</span>
                        <Rating rating={4} size="small" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>August 1, 2022</p>
                    </article>
                </section>
            </section>
            <div id="related" className="w-full h-full">
                <h2>Related</h2>
                <div id="realted-grid">
                    <CartCard {...books[0]} />
                </div>
            </div>
        </>
    )
}