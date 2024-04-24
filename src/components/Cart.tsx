import { SectionLayout } from "../layout/SectionLayout"
import { CartCard } from "./cards/CartCard"

export const Cart = () => {
    return (
        <SectionLayout>
            <section className="grid grid-cols-4 gap-4">
                <div className="col-span-1">
                    <CartCard />
                </div>
                <div className="col-span-1">
                    <CartCard />
                </div>
                <div className="col-span-1">
                    <CartCard />
                </div>
                <div className="col-span-1">
                    <CartCard />
                </div>
            </section>
        </SectionLayout>

    )
}