import { Footer, Header } from "../components";
import { ContactUs } from "../components/ContactUs";
import { Layout } from "../types/types";

export const BaseLayout: React.FC<Layout> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="md:w-5/6 max-w-screen-xl p-4 m-auto">
                {children}
            <ContactUs />
            </main>
            <Footer />
        </>
    )
}