import { SectionLayout } from "../layout/SectionLayout"
import { Book } from "../types/types"
import { CartCard } from "./cards/CartCard"

export const Cart = () => {
    const books: Book[] = [
        {
            urlImg: 'https://random.imagecdn.app/500/500',
            tags: ['Fantasia'],
            author: 'Abraham',
            price: 10.99,
            rating: 4,
            title: 'Terror',
            date: '2022-01-01',
            summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, corrupti!',
            comments: 5,
            subtitle: 'Abraham'
        },
        {
            urlImg: 'https://random.imagecdn.app/500/500',
            tags: ['Fantasia'],
            author: 'Abraham',
            price: 10.99,
            rating: 4,
            title: 'Terror',
            date: '2022-01-01',
            summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, corrupti!',
            comments: 5,
            subtitle: 'Abraham'
        },
        {
            urlImg: 'https://random.imagecdn.app/500/500',
            tags: ['Fantasia'],
            author: 'Abraham',
            price: 10.99,
            rating: 4,
            title: 'Terror',
            date: '2022-01-01',
            summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, corrupti!',
            comments: 5,
            subtitle: 'Abraham'
        },
        {
            urlImg: 'https://random.imagecdn.app/500/500',
            tags: ['Fantasia'],
            author: 'Abraham',
            price: 10.99,
            rating: 4,
            title: 'Terror',
            date: '2022-01-01',
            summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, corrupti!',
            comments: 5,
            subtitle: 'Abraham'
        },
    ]
    return (
        <SectionLayout title="Carrito de compras">
            <section className="grid grid-cols-4 gap-4">
                {
                    books.map((book, index) => (
                        <div className="col-span-1">
                            <CartCard key={index} {...book} />
                        </div>
                    ))
                }
            </section>
        </SectionLayout>

    )
}