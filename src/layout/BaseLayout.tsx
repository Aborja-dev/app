import { Footer, Header } from "../components";
import { Navigation } from "../components/navigation/Menu";
import { Layout } from "../types/types";

export const BaseLayout: React.FC<Layout> = ({ children }) => {
    return (
        <>
            <Navigation />
            <main className="md:w-5/6 max-w-screen-xl p-4 m-auto">
                {children}
            </main>
            <Footer />
        </>
    )
}