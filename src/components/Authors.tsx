import { SectionHeader } from "./SectionHeader"
import { AuthorItem } from "./cards/AuthorItem"

export const Authors = () => {
    return (
        <div className="mt-10 h-full mb-10">
            <SectionHeader />
            <section className="grid grid-cols-4 gap-10">
                <div className="col-span-1">
                    <AuthorItem />
                </div>
                <div className="col-span-1">
                    <AuthorItem />
                </div>
                <div className="col-span-1">
                    <AuthorItem />
                </div>
                <div className="col-span-1">
                    <AuthorItem />
                </div>
            </section>
        </div>
    )
}