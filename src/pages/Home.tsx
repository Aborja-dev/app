import { Header, Hero, Cart, Reviews, Authors, Footer } from "../components"

export const HomePage = () => {
    return (
        <div className="w-full bg-slate-100">
            <Header />
            <main className="w-5/6 m-auto  h-screen">
            <Hero />
            <Cart />
            <Reviews />
            <Authors />
            </main>
            <Footer />
        </div>
    )
}