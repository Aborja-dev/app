import { Hero, Cart, Reviews, Authors } from "../components"
import { ContactUs } from "../components/ContactUs"
import { BaseLayout } from "../layout/BaseLayout"

export const HomePage = () => {
    return (
        <div className="w-full bg-slate-100">
            <BaseLayout >
                <Hero />
                <Cart />
                <Reviews />
                <Authors />
                <ContactUs />
            </BaseLayout >
        </div>
    )
}