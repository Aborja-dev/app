import { Header, Hero, Cart, Reviews, Authors, Footer } from "../components"

export const HomePage = () => {
    return (
        <div>
            <Header />
            <main className="bg-slate-50 w-full h-screen">
            <Hero />
            <Cart />
            <Reviews />
            <Authors />
            </main>
            <Footer />
        </div>
    )
}