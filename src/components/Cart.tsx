import { SectionLayout } from "../layout/SectionLayout"
import { Book } from "../types/types"
import { CartCard } from "./cards/CartCard"
interface Props {
    books: Book[]
}
export const Cart: React.FC<Props> = ({ books }) => {
    
    return (
        <SectionLayout title="Carrito de compras">
            <section className="grid lg:grid-cols-4 gap-4 md:grid-cols-2">
                {
                    books.map((book, index) => (
                        <div className="col-span-1">
                            <CartCard key={index} {...book} />
                        </div>
                    ))
                }
            </section>
        </SectionLayout>

    )
}