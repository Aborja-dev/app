import { Image } from "../../types/types";
interface Props {
    children?: React.ReactNode
    bgColor?: string
    size?: string | Size
    label?: string
}
export type Size = {
    width: string
    height: string
}
export const Icon: React.FC<Image & Props> = ({ url, size, bgColor, children }) => {
    return (
        <>
            {children ??
                <div className={`
                    ${size} 
                    hover:${bgColor} animate-all duration-200 p-2 rounded-full overflow-hidden box-content`}>
                    <img src={url} alt="icon" />
                </div>
                
            }
        </>
    )
}