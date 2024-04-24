import { SectionLayout } from "../layout/SectionLayout"
import { BlogEntryItem } from "./cards/BlogEntryItem"

export const Reviews = () => {

    return (
        <SectionLayout
            navbar={
            <ul className="py-2 flex justify-center gap-4">
                <li>Fantasia</li>
                <li>Cronica</li>
                <li>Novela</li>
                <li>Comedia</li>
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