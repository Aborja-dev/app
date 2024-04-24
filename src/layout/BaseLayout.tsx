import { Footer, Header } from "../components";
import { Layout } from "../types/types";

export const BaseLayout: React.FC<Layout> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="w-5/6 m-auto">
                {children}
            </main>
            <Footer />
        </>
    )
}