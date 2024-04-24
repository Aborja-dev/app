interface Props {
    rating: number
}

export const Rating: React.FC<Props> = ({ rating }) => {
    const ratingArray = new Array(rating).fill(0)
    return (
        <ul className="flex gap-2 items-center mt-2">
            {
                ratingArray.map(() => <li style={{
                    clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
                }} className="w-5 h-5 bg-orange-400"></li>)
            }
        </ul>
    )
}