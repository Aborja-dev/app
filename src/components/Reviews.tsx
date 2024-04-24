import { SectionLayout } from "../layout/SectionLayout"
import { BlogEntryItem } from "./cards/BlogEntryItem"

export const Reviews = () => {

    return (
        <SectionLayout
            navbar={
            <ul className="py-2 flex justify-center gap-4">
                <li className="hover:text-blue-500 hover:border-b hover:border-b-blue-500 transition-all duration-200 hover:cursor-pointer">Fantasia</li>
                <li className="hover:text-blue-500 hover:border-b hover:border-b-blue-500 transition-all duration-200 hover:cursor-pointer">Cronica</li>
                <li className="hover:text-blue-500 hover:border-b hover:border-b-blue-500 transition-all duration-200 hover:cursor-pointer">Novela</li>
                <li className="hover:text-blue-500 hover:border-b hover:border-b-blue-500 transition-all duration-200 hover:cursor-pointer">Comedia</li>
            </ul>
            }>
            <section className="grid grid-cols-3 pt-10 gap-3">
                <div className="col-span-1">
                    <BlogEntryItem />
                </div>
                <div className="col-span-1">
                    <BlogEntryItem />
                </div>
                <div className="col-span-1">
                    <BlogEntryItem />
                </div>
            </section>
        </SectionLayout>
    )
}