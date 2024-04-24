export const SearchBar = () => {
    return (
        <div className="h-full w-full flex items-center">
                <div className="flex bg-white border rounded">
                    <figure className="w-10 p-2 hidden">
                        <img src="search-svgrepo-com.svg" alt="logo" />
                    </figure>
                    <input type="text" placeholder="Buscar..." />
                </div>
            </div>
    )
}