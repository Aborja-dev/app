import { SectionLayout } from "../layout/SectionLayout"
import { BlogEntry } from "../types/types"
import { BlogEntryItem } from "./cards/BlogEntryItem"

export const Reviews = () => {
    const reviews: BlogEntry[] = [
        {
            urlImg: 'https://random.imagecdn.app/500/500',
            tags: ['Fantasia', 'Terror'],
            title: 'Terror',
            date: '2022-01-01',
            summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, corrupti!',
            comments: 5,
            subtitle: 'Abraham'
        },
        {
            urlImg: 'https://random.imagecdn.app/500/500',
            tags: ['Fantasia'],
            title: 'Terror',
            date: '2022-01-01',
            summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, corrupti!',
            comments: 5,
            subtitle: 'Abraham'
        },
        {
            urlImg: 'https://random.imagecdn.app/500/500',
            tags: ['Fantasia'],
            title: 'Terror',
            date: '2022-01-01',
            summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, corrupti!',
            comments: 5,
            subtitle: 'Abraham'
        }
    ]
    return (
        <SectionLayout
            title="Ultimas entradas"
            navbar={
            <ul className="py-2 flex justify-center gap-4">
                <li className="hover:text-blue-500 hover:border-b hover:border-b-blue-500 transition-all duration-200 hover:cursor-pointer">Fantasia</li>
                <li className="hover:text-blue-500 hover:border-b hover:border-b-blue-500 transition-all duration-200 hover:cursor-pointer">Cronica</li>
                <li className="hover:text-blue-500 hover:border-b hover:border-b-blue-500 transition-all duration-200 hover:cursor-pointer">Novela</li>
                <li className="hover:text-blue-500 hover:border-b hover:border-b-blue-500 transition-all duration-200 hover:cursor-pointer">Comedia</li>
            </ul>
            }>
            <section className="grid grid-cols-3 pt-10 gap-3">
                {
                    reviews.map((review, index) => 
                        <div key={index} className="col-span-1">
                            <BlogEntryItem key={index} {...review}/>
                        </div>
                    )
                }
            </section>
        </SectionLayout>
    )
}