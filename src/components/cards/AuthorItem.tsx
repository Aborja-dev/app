import { Author } from "../../types/types"


export const AuthorItem: React.FC<Author> = ({ avatar, name, booksPublished }) => {
    return (
        <article className="group flex items-center flex-col gap-2 p-3 hover:cursor-pointer">
            <div className="w-32 h-32 border rounded-full overflow-hidden">
                <img src={avatar} className="object-cover object-center w-full h-full" alt="" />
            </div>
            <p className="capitalize font-bold tracking-wide hover:text-blue-500">{name}</p>
            <p className="italic font-thin text-gray-500">{booksPublished} libros publicados</p>
        </article>
    )
}