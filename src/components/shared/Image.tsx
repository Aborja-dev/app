interface Props {
    url: string
    height?: string
    width?: string
}
export const Image: React.FC<Props> = ({url, height, width}) => {
    return (
        <figure className={`${width ?? 'w-12'} ${height ?? 'h-12'} `}>
            <img src={url} alt="image" className="object-cover object-center w-full h-full" />
        </figure>
    )
}