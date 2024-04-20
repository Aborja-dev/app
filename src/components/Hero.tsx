export const Hero = () => {

    return (
        <div className="w-5/6 m-auto grid grid-cols-4 gap-2 auto-rows-auto pt-20">
            <div className="
            col-span-2 row-span-2 bg-teal-500 h-[500px] bg-cover bg-no-repeat relative" 
            style={{backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)'}}>
                <div className="flex flex-col justify-center p-5 gap-3 w-3/4 absolute top-1/3 z-20">    
                    <h3 className="text-lg font-bold tracking-wide text-gray-200 italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, corrupti!</h3>
                    <h2 className="text-[3rem] text-white leading-tight " >Lorem ipsum dolor sit amet.</h2>
                    <button className=" w-[150px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ver mas</button>
                </div>
                <div className="w-full h-full bg-black opacity-50"></div>
            </div>
            <div className="col-span-1 bg-teal-500">
                <h2>Titulo</h2>
            </div>
            <div className="col-span-1 bg-teal-500">
                <h2>Titulo</h2>
            </div>
            <div className="col-span-1 bg-teal-500">
                <h2>Titulo</h2>
            </div>
            <div className="col-span-1 bg-teal-500">
                <h2>Titulo</h2>
            </div>
        </div>
    )
}