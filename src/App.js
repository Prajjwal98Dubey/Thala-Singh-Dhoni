import { useState } from 'react';
import './App.css';
import Sound from 'react-sound'
function App() {
  const [searchText, setSearchText] = useState("")
  const [result, setResult] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [moye, setMoye] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [hoverSeven, setHoverSeven] = useState(false)
  let confirmThala = new Set()
  const arr = ["7", "mahendra singh dhoni", "thala", "mahi", "ms", "dhoni", "msd"]
  for (let i = 0; i < arr.length; i++) {
    confirmThala.add(arr[i])
  }
  function containsAlphabets(inputString) {
    for (let char of inputString) {
      if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
        return true;
      }
    }
    return false;
  }
  const checkForSeven =(text)=>{
    for(let i=0;i<text.length;i++){
      if (text.charAt(i)==='7'){
        return true
      }
    }
    return false
  }
  const handleSubmit = (search) => {
    const checkSeven = checkForSeven(search)
    if (checkSeven){
      setResult(true)
      setIsLoading(false)
      setIsPlaying(true)
      return 
    }
    const textOrNumber = containsAlphabets(search)
    if (confirmThala.has(search)) {
      setResult(true)
      setIsLoading(false)
      setIsPlaying(true)
    }
    else if (search.length === 7) {
      setResult(true)
      setIsLoading(false)
      setIsPlaying(true)
    }
    else if (!textOrNumber) {
      const sumOfDigits = (search) => {
        let sum = 0
        for (let i = 0; i < search.length; i++) {
          sum += parseInt(search[i])
        }
        return sum
      }
      const temp = sumOfDigits(search)
      if (temp === 7) {
        setResult(true)
        setIsLoading(false)
        setIsPlaying(true)
      }
      else {
        setResult(false)
        setIsLoading(false)
        setMoye(true)
      }
    }
    else {
      setResult(false)
      setIsLoading(false)
      setMoye(true)
    }
  }
  const randomAngryMahi = ["https://media.tenor.com/DfxT94WUDrQAAAAM/ms-dhoni-rahul-gangwal.gif", "https://gifdb.com/images/high/ms-dhoni-poker-no-boo-nm5vfimf1i4ch2wf.webp", "https://gifdb.com/images/high/ms-dhoni-run-celebrate-c354ga70ihubt0ce.webp", "https://s3.scoopwhoop.com/anj/dhoni_gifs/661875877.gif", "https://media.tenor.com/3rvW5bS7jpwAAAAC/dhoni-angry-mahi.gif", "https://c.ndtvimg.com/2019-11/7i5i9bso_vvs-laxman-gautam-gambhir-twitter_625x300_15_November_19.jpg"]
  const randomThala = ["https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnd0MHl6eDBhcDd3ZGhyemRpcXBvbGYxNHhlOG9kem1wdTl5MTFpaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SsDiGCnZRtCCazWec0/giphy.gif", "https://gifdb.com/images/high/ms-dhoni-poker-ok-gugs8h5lojr2fyc4.webp", "https://media.tenor.com/lK8QYK2jjgkAAAAC/paandi-thala.gif", "https://media.tenor.com/Lrti6d1CzJ4AAAAC/msd-csk.gif"]
  return (
    <>
      <div className='bg-black w-full h-[585px] text-white font-Roboto '>
        <div className='flex justify-center w-full h-[70px] text-white pt-4'>
          <div><img className='w-[130px] h-[130px] rounded-full border border-yellow-500 shadow-lg shadow-yellow-200 hover:scale-105' src="https://static.toiimg.com/photo/104125218.cms" alt="loading" /></div>
        </div>
        <div className='flex justify-end mr-[15px] '>
          <span className='hover:underline cursor-pointer relative' onMouseEnter={() => {
            setIsHovered(true)
          }} onMouseLeave={() => {
            setIsHovered(false)
          }}>Why Thala is Trending ??</span>
        </div>
        {isHovered &&
          <div className=' absolute top-24 right-6 w-[300px] h-[300px] border border-white rounded-lg shadow-sm shadow-white'>
            <div className='flex justify-center text-xl mt-[30px] font-bold'>
              T + R + E + N + D + I + N + G = 7
            </div>
            <div className='flex justify-center  mt-[10px]'>Ignore 'I' like your crush ignores you.</div>
            <div className='flex justify-center mt-[5px]'><img className='w-[150px] h-[150px]' src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnd0MHl6eDBhcDd3ZGhyemRpcXBvbGYxNHhlOG9kem1wdTl5MTFpaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SsDiGCnZRtCCazWec0/giphy.gif" alt="loading" /></div>
          </div>
        }
        <div className='w-full flex justify-center mt-[150px]'>
          <div>
            <input type="text" className='text-black text-xl font-semibold pl-2 w-[400px] h-[45px] border border-yellow-400' placeholder='I dare you to write 7 ' value={searchText} onChange={(e) => {
              setIsLoading(true)
              setSearchText(e.target.value)
              setIsPlaying(false)
              setMoye(false)
            }} />
          </div>
          <div><button className='bg-yellow-400 w-[150px] h-[45px] font-bold text-xl ml-[5px] hover:bg-yellow-600' onClick={() => handleSubmit(searchText)}>Seven</button></div>
        </div>
        <Sound
          url={isPlaying ? 'msd.mp3' : 'moyemoye.mp3'}
          playStatus={isPlaying || moye ? Sound.status.PLAYING : Sound.status.STOPPED}
        />
        {isLoading ? null : result ?
          <div>
            <div className='flex justify-center mt-4'><span className='text-2xl'>{searchText.toLocaleUpperCase()}  </span><span className=' ml-2 text-2xl font-bold'>"Thala"</span>
            </div>
            <div className='flex justify-center'><span className='text-xl'>You know the reason 🤪</span></div>
            <div className='flex justify-center'>
              <img className='w-[200px] h-[200px] ' src={randomThala[Math.floor(Math.random() * randomThala.length)]} alt="loading" />
            </div>
          </div>
          :
          <div>
            <div className='flex justify-center text-2xl font-bold mt-[10px]'>No "Thala"</div>
            <div className='flex justify-center'>
              <img src={randomAngryMahi[Math.floor(Math.random() * randomAngryMahi.length)]} alt="loading" className='w-[200px] h-[200px]' />
            </div>
          </div>


        }
      </div>
    </>
  );
}

export default App;
