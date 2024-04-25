interface Props {
    rating: number
    size?: string
}

export const Rating: React.FC<Props> = ({ rating, size = "medium" }) => {
    const sizes = {
        small: "w-5 h-5",
        medium: "w-8 h-8",
        large: "w-12 h-12"
    }
    
    const ratingArray = new Array(rating).fill(0)
    return (
        <ul className="flex gap-2 items-center mt-2">
            {
                ratingArray.map(() => <li style={{
                    clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
                }} className={`${sizes[size]} bg-orange-400`}></li>)
            }
        </ul>
    )
}