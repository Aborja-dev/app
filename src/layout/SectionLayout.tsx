import { SectionHeader } from "../components/SectionHeader";
import { Layout, Slots } from "../types/types";
interface Props {
    title: string
}
export const SectionLayout: React.FC<Layout & Slots & Props> = ({ children, navbar, header, title }) => {
    return (
        <div className="mt-10 h-full mb-10">
            {   header ?? <SectionHeader title={title} /> }
            {   navbar }
            <>
                {children}
            </>
        </div>
    )
}