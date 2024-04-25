import { SectionLayout } from "../layout/SectionLayout"
import { Author } from "../types/types"
import { AuthorItem } from "./cards/AuthorItem"
interface Props {
    authors: Author[]
}
export const Authors: React.FC<Props> = ({ authors }) => {

    return (
        <SectionLayout title="Nuestros autores">
            <section className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
                {
                    authors.map((author) => (
                        <div className="col-span-1">
                            <AuthorItem key={author.name} {...author} />
                        </div>

                    ))
                }
            </section>
        </SectionLayout>
    )
}