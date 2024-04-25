interface Props {
    title: string
}

export const SectionHeader: React.FC<Props> = ({ title }) => {
    return (
        <div className="px-5 flex justify-between border-b border-b-slate-400 w-100 items-center h-[70px] mb-10">
                <h1 className="text-2xl capitalize">{title}</h1>
                <div className="flex items-center group">
                    <a className="italic hover:text-blue-400 hidden md:block" href="">ver mas</a>
                    <div className="w-5 h-5 ml-2 group-hover:translate-x-2 duration-300 ease-in-out">
                        <img src="chevron-right-svgrepo-com.svg" alt="chevron right" />
                    </div>
                </div>
            </div>
    )
}