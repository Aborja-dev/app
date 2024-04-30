import { BlogEntryItem } from "../components/cards"
import { BlogMenu } from "../components/navigation/BlogMenu"
import { BaseLayout } from "../layout/BaseLayout"

import { BlogEntry } from "../types/types"

export const BlogListPage = () => {
    const blogs: BlogEntry[] =[
        {
            title: "Blog 1",
            summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, corrupti!",
            subtitle: "Abraham",
            tags: ["Fantasia", "Terror"],
            date: "2022-01-01",
            urlImg: "https://random.imagecdn.app/500/500",
            comments: 5
        }
    ]
    return (
        <BaseLayout >
            <BlogMenu className="lg:text-xl lg:gap-10 my-8"/>
                <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-6 md:col-span-3 lg:col-span-2">
                        <BlogEntryItem {...blogs[0]} />
                    </div>
                    <div className="col-span-6 md:col-span-3 lg:col-span-2">
                        <BlogEntryItem {...blogs[0]} />
                    </div>
                    <div className="col-span-6 md:col-span-3 lg:col-span-2">
                        <BlogEntryItem {...blogs[0]} />
                    </div>
                    <div className="col-span-6 md:col-span-3 lg:col-span-2">
                        <BlogEntryItem {...blogs[0]} />
                    </div>
                    <div className="col-span-6 md:col-span-3 lg:col-span-2">
                        <BlogEntryItem {...blogs[0]} />
                    </div>
                    <div className="col-span-6 md:col-span-3 lg:col-span-2">
                        <BlogEntryItem {...blogs[0]} />
                    </div>
                </div>
        </BaseLayout>
    )
}