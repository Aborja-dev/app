import { Hero, Cart, Reviews, Authors } from "../components"
import { BaseLayout } from "../layout/BaseLayout"
import {books} from "../../data/books.json"
import {reviews} from "../../data/reviews.json"
import {authors} from "../../data/authors.json"
const booksJson = books
const reviewsJson = reviews
const authorsJson = authors

export const HomePage = () => {
    return (
        <div className="w-full bg-slate-100">
            <BaseLayout >
                <Hero items={reviewsJson} />
                <Cart books={booksJson} />
                <Reviews reviews={reviewsJson.slice(0, 3)} />
                <Authors authors={authorsJson} />
            </BaseLayout >
        </div>
    )
}