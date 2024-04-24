import { CartCard } from "./cards/CartCard"

export const Cart = () => {
    return (
        <div className="mt-10 h-full">
            <div className="px-5 flex justify-between border-b border-b-slate-400 w-100 items-center h-[70px] mb-10">
                <h1 className="text-3xl capitalize">Carro de compras</h1>
                <div className="flex items-center">
                    <a className="italic hover:text-blue-400" href="">ver mas</a>
                    <div className="w-5 h-5 ml-2">
                        <img src="chevron-right-svgrepo-com.svg" alt="chevron right" />
                    </div>
                </div>
            </div>
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