import { Header, Hero, Cart, Reviews, Authors, Footer } from "../components"
import { ContactUs } from "../components/ContactUs"

export const HomePage = () => {
    return (
        <div className="w-full bg-slate-100">
            <Header />
            <main className="w-5/6 m-auto">
            <Hero />
            <Cart />
            <Reviews />
            <Authors />
            <ContactUs />
            </main>
            <Footer />
        </div>
    )
}