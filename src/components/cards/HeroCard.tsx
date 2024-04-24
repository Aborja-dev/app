export const HeroCard = () => {

    return (
        <div
            className="w-full h-full bg-cover bg-no-repeat relative transform hover:scale-105"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)' }}>
            <div className="flex flex-col justify-center p-5 gap-3 w-3/4 absolute z-20">
                <h3 className="text-sm font-bold tracking-wide text-gray-200 italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, corrupti!</h3>
                <h2 className="text-[1.5rem] text-white leading-tight " >Lorem ipsum dolor sit amet.</h2>
                <button className=" w-[100px] text-left hover:text-blue-700 text-white font-bold rounded">Ver mas</button>
            </div>
            <div className="w-full h-full bg-black opacity-50"></div>
        </div>
    )
}