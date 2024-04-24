import { SectionHeader } from "./SectionHeader"
import { CartCard } from "./cards/CartCard"

export const Cart = () => {
    return (
        <div className="mt-10 h-full">
            <SectionHeader />
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
        </div>
    )
}