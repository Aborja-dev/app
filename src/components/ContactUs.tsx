import { SectionLayout } from "../layout/SectionLayout"

export const ContactUs = () => {
    return (
        <SectionLayout
            header={
            <div className="px-5 flex justify-between border-b border-b-slate-400 w-100 items-center h-[70px] mb-16"></div>}>
            <section className="text-center">
                <h2 className="text-3xl font-semibold tracking-wide"> Contactanos</h2>
                <h3 className="text-xl italic font-thin text-slate-600">Signup to be the first to hear about exclusive deals, special offers and upcoming collections</h3>
                <div>
                    <form className="w-3/6 mx-auto py-5 px-6  flex gap-2 justify-center">
                        <input className="flex-grow p-5 text-md border border-black " type="text" placeholder="Nombre" />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded" type="submit">Enviar</button>
                    </form>
                </div>
            </section>
        </SectionLayout>
    )
}