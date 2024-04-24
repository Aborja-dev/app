import { SectionLayout } from "../layout/SectionLayout"

import { AuthorItem } from "./cards/AuthorItem"

export const Authors = () => {
    return (
        <SectionLayout>
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
        </SectionLayout>
    )
}