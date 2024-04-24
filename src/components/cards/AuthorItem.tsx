export const AuthorItem = () => {
    return (
        <article className="group flex items-center flex-col gap-2 p-3 hover:cursor-pointer">
            <div className="w-32 h-32 border rounded-full overflow-hidden">
                <img src="12.jpg" className="object-cover object-center w-full h-full" alt="" />
            </div>
            <p className="capitalize font-bold tracking-wide hover:text-blue-500">Author</p>
            <p className="italic font-thin text-gray-500">2 libros publicados</p>
        </article>
    )
}