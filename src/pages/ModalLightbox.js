import React, { useState } from 'react'
import { CLOSE_IMG } from './Lightbox'
const LEFT_ARROW = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFycm93LWxlZnQiPjxwYXRoIGQ9Im0xMiAxOS03LTcgNy03Ii8+PHBhdGggZD0iTTE5IDEySDUiLz48L3N2Zz4="
const RIGHT_ARROW = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFycm93LXJpZ2h0Ij48cGF0aCBkPSJNNSAxMmgxNCIvPjxwYXRoIGQ9Im0xMiA1IDcgNy03IDciLz48L3N2Zz4="
const ModalLightbox = ({ setIsOpen, products, currIndex ,setSelected }) => {
    const [modalCurrIndex, setModalCurrIndex] = useState(currIndex)
    const handleLeft = () => {
        if (modalCurrIndex > 0) {
            setModalCurrIndex(modalCurrIndex => modalCurrIndex - 1)
            setSelected(selected=>selected-1)
        }
    }
    const handleRight = () => {
        if (modalCurrIndex < products.length-1) {
            setModalCurrIndex(modalCurrIndex => modalCurrIndex + 1)
            setSelected(selected=>selected+1)

        }
    }
    return (
        <>
            <div className=' absolute top-20 left-[250px] bg-white z-10  w-[700px] h-[400px] border border-black  shadow-black shadow-xl rounded-lg'>
                <div className='flex justify-end p-2'><img src={CLOSE_IMG} alt="loading" className='w-[20px] h-[20px] cursor-pointer ' onClick={() =>
                 {
                    setSelected(null)
                    setIsOpen(false)

                }} /></div>
                <div className='w-[650px] flex justify-evenly'>
                    <div className='flex items-center'><img src={LEFT_ARROW} alt="loading" className='w-[30px] h-[30px] cursor-pointer ' onClick={() => handleLeft()} /></div>
                    <div className=''><img src={products[modalCurrIndex]} alt="loading" className='w-[450px] h-[300px] p-2 m-1' /></div>
                    <div className='flex items-center'><img src={RIGHT_ARROW} alt="loading" className='w-[30px] h-[30px] cursor-pointer' onClick={() => handleRight()} /></div>
                </div>
            </div>
        </>
    )
}

export default ModalLightbox