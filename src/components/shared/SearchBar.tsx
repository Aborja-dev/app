interface Props {
    className?: string
}

export const SearchBar: React.FC<Props> = ({className}) => {
    return (
        <div className={`h-full w-full flex items-center ${className}`}>
                <div className="flex bg-white border rounded">
                    <figure className="w-10 h-10 p-2">
                        <img src="search-svgrepo-com.svg" alt="logo" />
                    </figure>
                    <input className="border-0 w-full rounded-lg" type="text" placeholder="Buscar..." />
                </div>
            </div>
    )
}