import { Footer, Header } from "../components";
import { Layout } from "../types/types";

export const BaseLayout: React.FC<Layout> = ({ children }) => {
    return (
        <>

            <main className="md:w-5/6 lg:w-full p-4 m-auto">
                {children}
            </main>
            <Footer />
        </>
    )
}