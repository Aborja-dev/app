import { SectionHeader } from "../components/SectionHeader";
import { Layout, Slots } from "../types/types";

export const SectionLayout: React.FC<Layout & Slots> = ({ children, navbar, header }) => {
    return (
        <div className="mt-10 h-full mb-10">
            {   header ?? <SectionHeader /> }
            {   navbar }
            <>
                {children}
            </>
        </div>
    )
}