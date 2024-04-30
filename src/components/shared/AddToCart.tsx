import { useState } from "react"

export const AddToCart = () => {
    const [counter, setCounter] = useState<number>(0)
    const changeHandler = (value: number) => setCounter(value)
    return (
        <div className="border p-4 mr-2 flex mb-2">
            <button className="w-2/6 hover:border text-2xl" onClick={() => changeHandler(counter - 1)}>-</button>
            <input className="w-2/6 text-center  border-0" type="number" value={counter} readOnly />
            <button className="w-2/6 text-2xl" onClick={() => changeHandler(counter + 1)}>+</button>
        </div>
    )
}