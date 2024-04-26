import { Image, Rating } from "@components/shared"

export const Product = () => {
    return (
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
    )
}