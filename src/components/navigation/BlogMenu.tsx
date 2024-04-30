interface Props {
    className?: string
}
export const BlogMenu = ({className}: Props) => {
    return (
        <ul className={`py-2 flex lg:justify-center md:justify-around gap-4 ${className}`}>
                <li className="hover:text-blue-500 hover:border-b hover:border-b-blue-500 transition-all duration-200 hover:cursor-pointer">Fantasia</li>
                <li className="hover:text-blue-500 hover:border-b hover:border-b-blue-500 transition-all duration-200 hover:cursor-pointer">Cronica</li>
                <li className="hover:text-blue-500 hover:border-b hover:border-b-blue-500 transition-all duration-200 hover:cursor-pointer">Novela</li>
                <li className="hover:text-blue-500 hover:border-b hover:border-b-blue-500 transition-all duration-200 hover:cursor-pointer">Comedia</li>
            </ul>
    )
}