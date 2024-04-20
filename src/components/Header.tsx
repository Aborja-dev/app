const routes = ["Home", "Categorias", "Shop", "Blog"]

export const Header = () => {
    return (
        <div className="flex w-full bg-slate-300 px-5 h-20 shadow-md items-center">
            <div className="flex items-center" >
                <figure className="w-10 mr-2">
                    <img src="logo-removebg-preview.png" alt="logo" />
                </figure>
                <h1 className="text-lg italic">La Biblioteca Infinita</h1>
            </div>
            <div className="flex-grow">
                <ul className="flex justify-center h-full items-center gap-4 text-xl" >
                    {
                        routes.map((route, index) => 
                        <li key={index} className="pb-2 hover:border-b-2 hover:border-blue-300">{route}</li>)
                    }
                </ul>
            </div>
            <div className="h-full flex items-center">
                <div className="flex bg-white border rounded">
                    <figure className="w-10 p-2">
                        <img src="search-svgrepo-com.svg" alt="logo" />
                    </figure>
                    <input type="text" placeholder="Buscar..." />
                </div>
            </div>
        </div>
    )
}