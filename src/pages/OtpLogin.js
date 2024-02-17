import React, { useEffect, useRef, useState } from 'react'

const OtpLogin = () => {
    const [items, setItems] = useState(new Array(4).fill(""))
    const inputRef = useRef([])
    const handleEnterNumber = (e, index) => {
        const newItems = [...items]
        const value = e.target.value
        newItems[index] = value.substring(value.length - 1)
        setItems(newItems)
        // move the focus to the next input
        if (newItems[index] && index < 3 && inputRef.current[index + 1]) {
            inputRef.current[index + 1].focus()
        }
    }
    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !items[index] && index-1 >=0 && inputRef.current[index-1] ) {
                inputRef.current[index-1].focus()   
        }

    }
    const handleClick=(index)=>{
        inputRef.current[index].setSelectionRange(1,1)
    }
    useEffect(() => {
        if (inputRef.current[0]) {
            inputRef.current[0].focus()
        }
    }, [])
    return (
        <>
            <div className='flex justify-center items-center w-full h-full p-20'>
                {
                    items.map((item, index) => (
                        <div key={index} className='p-2'><input ref={(input) => { inputRef.current[index] = input }} className={`w-[50px] h-[50px] border border-gray-500 text-2xl pl-[20px]`} value={item} onChange={(e) => handleEnterNumber(e, index)}   onKeyDown={(e) => handleKeyDown(e, index)} onClick={()=>handleClick(index)}/></div>
                    ))
                }
            </div>
            <div className='flex justify-center'>
                <button className='w-[200px] h-[45px] rounded-lg bg-[#26A0CA] text-white text-center font-semibold'>Continue</button>
            </div>
        </>
    )
}

export default OtpLogin