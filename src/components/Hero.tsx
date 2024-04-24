import { HeroCard } from "./cards/HeroCard"

export const Hero = () => {
    const cards: {
        urlImg: string
        title: string
        subtitle: string
    }[] = [
        {
            urlImg: 'url(https://random.imagecdn.app/500/500)',
            title: 'Terror',
            subtitle: 'Abraham'
        },
        {
            urlImg: 'url(https://random.imagecdn.app/500/500)',
            title: 'Terror',
            subtitle: 'Abraham'
        },
        {
            urlImg: 'url(https://random.imagecdn.app/500/500)',
            title: 'Terror',
            subtitle: 'Abraham'
        },
        {
            urlImg: 'url(https://random.imagecdn.app/500/500)',
            title: 'Terror',
            subtitle: 'Abraham'
        },
        {
            urlImg: 'url(https://random.imagecdn.app/500/500)',
            title: 'Terror',
            subtitle: 'Abraham'
        }
    ]
    return (
        <div className="grid grid-cols-4 gap-2 auto-rows-auto pt-10 h-[550px] ">
            <div className="col-span-2 row-span-2 relative overflow-hidden">
                <HeroCard {...cards[0]} large />
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden">
                <HeroCard {...cards[1]}/>
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden">
                <HeroCard {...cards[2]}/>
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden">
                <HeroCard {...cards[3]}/>
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden">
                <HeroCard {...cards[4]}/>
            </div>
        </div>
    )
}