interface Props {
    large?: boolean
    urlImg: string
    title: string
    subtitle: string
}

export const HeroCard: React.FC<Props> = ({large = false, urlImg, title, subtitle}) => {
    const textClass = {
        large: {
            title: "text-[3rem] font-thin text-white leading-tight",
            subtitle: "text-lg font-bold tracking-wide text-gray-200 italic",
            button: "w-[150px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        },
        default: {
            title: "text-[1.5rem] text-white leading-tight",
            subtitle: "text-sm font-bold tracking-wide text-gray-200 italic",
            button: "w-[100px] text-left hover:text-blue-700 text-white font-bold rounded"
        }
    }
    const styles = textClass[large ? 'large' : 'default']
    return (
        <>
            <div
                className="w-full h-full bg-cover bg-no-repeat absolute transform hover:scale-105 duration-200 hover:cursor-pointer"
                style={{ backgroundImage: urlImg }}>
                <div className="w-full h-full bg-black opacity-50"></div>
            </div>
            <div className={
                `flex flex-col justify-center p-5 gap-3 w-3/4 z-20 absolute hover:cursor-pointer
                ${large ? 'lg:top-1/3 md:top-0' : 'top-0'}`}>
                <h3 className={styles.subtitle}>{subtitle}</h3>
                <h2 className={styles.title}>{title}</h2>
                <button className={styles.button}>Ver mas</button>
            </div>
        </>
    )
}
