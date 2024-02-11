import React, { useState } from 'react'
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const arrSymbols  = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']
const arrNumbers =['0','1','2','3','4','5','6','7','8','9']

const PasswordGen = () => {
    const [slider, setSlider] = useState(0)
    const [password, setPassword] = useState("")
    const[status,setStatus] = useState("")
    const[lower,setLower] = useState(false)
    const[upper,setUpper] = useState(false)
    const[symbol,setSymbol] = useState(false)
    const[number,setNumber] = useState(false)
    const handleCopyBtn=()=>{
        if (password!=="") {
            navigator.clipboard.writeText(password)
            alert("Password Copied.")
            return
        }
        return alert("First Generate Password")
    }
    const handleGeneratePassword = () => {
        if (parseInt(slider)===0) return alert('Use Common Sense!!!') 
        let countTrue=0
        if (upper) countTrue+=1
        if (lower) countTrue+=1
        if (symbol) countTrue+=1
        if (number) countTrue+=1
        console.log(countTrue) 
        const givePasswordStrength=()=>{
            if (parseInt(slider) <= 5) return "Very Poor"
            else if (parseInt(slider)>5 && (countTrue<=1 && countTrue>0 )) return "Poor"
            else if (parseInt(slider)>5 && (countTrue<3 && countTrue>=2)) return "good"
            else if (parseInt(slider)>5 && (countTrue<4 && countTrue>=3)) return "very good"
            else if (parseInt(slider)>5 && (countTrue===4)) return "Strong"
            else if (parseInt(slider)>5 && countTrue===0) return "Poor : try using alphanumberic"
        }
        const shuffle =(res)=>{
            for(let i=0;i<res.length;i++){
              let index =  Math.floor(Math.random()*res.length)
              let temp = res[index]
              res[index] = res[i]
              res[i] = temp
            }
            return res
          }
        let res = []
        if (countTrue===0){
            for (let i = 0; i < parseInt(slider); i++){
                let index = Math.floor(Math.random() * 26)
                res.push(lowerCase[index])
            }
        }
        else{
            for (let i = 0; i < parseInt(slider); i += countTrue) {
                let index1 = Math.floor(Math.random() * 26)
                let index2 = Math.floor(Math.random() * 26)
                let index3 = Math.floor(Math.random() * arrSymbols.length)
                let index4 = Math.floor(Math.random() * arrNumbers.length)
                if (lower && res.length < parseInt(slider)){
                    res.push(lowerCase[index1])
                }
                if (upper && res.length < parseInt(slider)) {
                    res.push(upperCase[index2])
                }
                if (symbol && res.length < parseInt(slider)) {
                    res.push(arrSymbols[index3])
                }
                if (number && res.length < parseInt(slider)) {
                    res.push(arrNumbers[index4])
                }
            }
        } 
        console.log(res)
        let ans = shuffle(res).join("")
        setStatus(givePasswordStrength())
        setPassword(ans)
        return
    }
    return (
        <>
            <div className=' p-3 flex justify-center items-center'>
                <div className=' w-[550px] h-[490px] bg-blue-950/90 rounded-lg shadow-md shadow-blue-700'>
                    <div className='flex justify-between p-3 align-baseline'>
                        <div className='text-xl text-white font-semibold flex items-center'>{password}</div>
                        <div className='flex justify-center items-center p-2'><button className='w-[60px] h-[30px] text-white rounded-lg bg-[#12DABC] font-semibold' onClick={()=>handleCopyBtn()}>COPY</button></div>
                    </div>
                    <div className='flex justify-between p-3 align-baseline'>
                        <div className='text-xl text-white font-semibold flex items-center'>Character Length</div>
                        <div className='flex justify-center items-center p-2 text-white font-semibold text-xl'>{slider}</div>
                    </div>
                    <div className='flex justify-center p-2'>
                        <input type='range' min="0" max="20" className='w-[450px] h-[10px]' onChange={(e) => setSlider(e.target.value)} defaultValue="0" />
                    </div>
                    <div className='text-white flex justify-around text-sm p-4 font-semibold' >
                        <div className='p-2 m-1'>
                            <span><input type="checkbox"  onChange={(e)=>setUpper(e.target.checked)}/></span>
                            <span>Include Uppercase Letters</span>
                        </div>
                        <div className='p-2 m-1'>
                            <span><input type="checkbox" onChange={(e)=>setLower(e.target.checked)} /></span>
                            <span className=''>Include Lowercase Letters</span>
                        </div>
                    </div>
                    <div className='text-white flex justify-around text-sm p-4 font-semibold' >
                        <div className='p-2 m-1'>
                            <span><input type="checkbox" onChange={(e)=>setNumber(e.target.checked)} /></span>
                            <span>Include Numbers</span>
                        </div>
                        <div className='p-2 m-1'>
                            <span><input type="checkbox" onChange={(e)=>setSymbol(e.target.checked)} /></span>
                            <span className=''>Include Symbols</span>
                        </div>
                    </div>
                    <div className='flex justify-between text-white font-semibold p-4 text-xl'>
                        <div>Strength:</div>
                        <div>{status}</div>
                    </div>
                    <div className='text-white flex justify-center font-semibold p-4'>
                        <button className='w-[400px] h-[40px] p-2 cursor-pointer bg-[#14B57D] rounded-lg hover:opacity-85 hover:cursor-pointer' onClick={() => handleGeneratePassword()}>GENERATE PASSWORD</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordGen