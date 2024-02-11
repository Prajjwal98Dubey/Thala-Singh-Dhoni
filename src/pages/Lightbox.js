import React, { useState } from 'react'
import ModalLightbox from './ModalLightbox'

const data = ["https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/x/l/d/s-st28-vebnor-original-imagq6aqgh2hzv22.jpeg?q=70","https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/w/1/r/xl-seersucker-popcorn-half-sleeve-shirt-for-men-solstice-original-imagvg67mfgkgcjy.jpeg?q=70","https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/f/g/a/-original-imagxuwb6azsrxvj.jpeg?q=70","https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/f/1/2/xxl-vs-ch-multi-vellical-original-imaguht5ge5s7gkf.jpeg?q=70","https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/3/j/v/xxl-st10-vebnor-original-imagnvrqgv7e5crg.jpeg?q=70","https://rukminim2.flixcart.com/image/612/612/kkr72q80/shirt/f/r/m/38-12442634-roadster-original-imagyyymzeytwzeg.jpeg?q=70"]
export const CLOSE_IMG="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgiPjxwYXRoIGQ9Ik0xOCA2IDYgMTgiLz48cGF0aCBkPSJtNiA2IDEyIDEyIi8+PC9zdmc+"
const Lightbox = () => {
    const[products,setProducts]=useState(data)
    const[isOpen,setIsOpen]=useState(false)
    const[currIndex,setCurrIndex] = useState(0)
    const[selected,setSelected] = useState(null)
    const handleClick=(index)=>{
        setIsOpen(true)
        setCurrIndex(index)
        setSelected(index)
    }
  return (
    <>
        <div className='relative flex flex-wrap justify-center'>
            {products.map((prod,index)=><div key={index}><img src={prod} alt="loading" className={`w-[400px] h-[250px] p-2 m-2 cursor-pointer hover:scale-110 ${selected===index ? 'border border-green-600' : null}`} onClick={()=>handleClick(index)} /></div>)}
        </div>
        {isOpen && 
            <ModalLightbox setIsOpen={setIsOpen} products={products} currIndex={currIndex}  setSelected={setSelected} />
            }
    </>
  )
}

export default Lightbox