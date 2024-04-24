import { SectionLayout } from "../layout/SectionLayout"
import { Author } from "../types/types"
import { AuthorItem } from "./cards/AuthorItem"

export const Authors = () => {
    const authors: Author[] = [
        {
            name: "Abraham",
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            booksPublished: 5
        },
        {
            name: "Abraham",
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            booksPublished: 5
        },
        {
            name: "Abraham",
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            booksPublished: 5
        },
        {
            name: "Abraham",
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            booksPublished: 5
        }
    ]
    return (
        <SectionLayout title="Nuestros autores">
            <section className="grid grid-cols-4 gap-10">
                {
                    authors.map((author) => (
                        <div className="col-span-1">
                            <AuthorItem key={author.name} {...author} />
                        </div>

                    ))
                }
            </section>
        </SectionLayout>
    )
}