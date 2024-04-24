import { HeroCard } from "./cards/HeroCard"

export const Hero = () => {

    return (
        <div className="grid grid-cols-4 gap-2 auto-rows-auto pt-10 h-[550px] ">
            <div className="col-span-2 row-span-2 relative overflow-hidden">
                <HeroCard large />
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden">
                <HeroCard/>
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden">
                <HeroCard/>
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden">
                <HeroCard/>
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden">
                <HeroCard/>
            </div>
        </div>
    )
}