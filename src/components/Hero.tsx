import { BlogEntry, Book } from "../types/types"
import { HeroCard } from "./cards/HeroCard"
interface Props {
    items: Array<Book | BlogEntry>
}
export const Hero: React.FC<Props > = ({items}) => {
    return (
        <div className="grid grid-cols-4 gap-2 auto-rows-auto pt-10 h-[550px] ">
            <div className="col-span-2 row-span-2 relative overflow-hidden">
                <HeroCard {...items[0]} urlImg={`url(${items[0].urlImg})`} large />
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden">
                <HeroCard {...items[1]} urlImg={`url(${items[1].urlImg})`}/>
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden">
                <HeroCard {...items[2]} urlImg={`url(${items[2].urlImg})`}/>
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden">
                <HeroCard {...items[3]} urlImg={`url(${items[3].urlImg})`}/>
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden">
                <HeroCard {...items[4]} urlImg={`url(${items[4].urlImg})`}/>
            </div>
        </div>
    )
}