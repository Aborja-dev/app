interface Props {
    url: string
    height?: string
    width?: string
    className?: string
}
export const Image: React.FC<Props> = ({url, height, width, className}) => {
    return (
        <figure className={`${width ?? 'w-12'} ${height ?? 'h-12'} ${className}`}>
            <img src={url} alt="image" className="object-cover object-center w-full h-full" />
        </figure>
    )
}