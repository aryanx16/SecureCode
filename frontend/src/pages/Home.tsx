import  { useEffect, useState } from 'react'
import Editor from 'react-simple-code-editor'
// FOR NEUTRAL THEME
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"
import axios from 'axios'

//   FOR BLUE THEME
// import '../assets/styles/prism-dark-blue.css'; 
// import prism from 'prismjs';
// import 'prismjs/components/prism-javascript.min.js'; 

const Home = () => {
    const [code,setcode] = useState(`function sum(){
        return 1+1}`)
    useEffect(()=>{
        prism.highlightAll()
    },[])
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
    const reviewcode = async()=>{
        const response = await axios.post(`${BACKEND_URL}/ai/response`,{code})
        console.log(response)
        // console.log(import.meta.env.VITE_BACKEND_URL)
    }
  return (
    <div className="bg-gray-950 h-screen w-screen flex flex-col">
    {/* Navbar */}
    <div className="font-mono font-bold text-4xl text-sky-500 px-3 py-1">
        SecureCode
    </div>
    {/* Main */}
    <div className="flex flex-col bg-slate-950 sm:flex-row gap-5 flex-1 min-h-0  p-5">
        <div className="left bg-slate-950 flex flex-col border  border-sky-600 w-full p-3 h-96 sm:h-full rounded-md">
            <div className='text-2xl text-sky-500 font-bold font-mono'>
                Code Input
            </div>
            <div className='code bg-slate-900 overflow-auto p-1 flex-1 rounded-md h-full text-sky-200'>
                <Editor className='overflow-y-auto   border-0' value={code}
                onValueChange={code=>setcode(code)}
                highlight={code=>prism.highlight(code,prism.languages.javascript,"javascript")}
                />
            </div>
            <div className='w-full flex justify-end pt-2'>
                <button onClick={reviewcode} className='px-3 py-1 border rounded-md transition-all ease-initial duration-300 bg-sky-500 cursor-pointer text-slate-950 hover:text-sky-500 hover:bg-gray-950'>Review</button>
            </div>
        </div>
        <div className="right w-full border border-sky-500 rounded-md h-full">
            <div className='text-2xl text-sky-500 p-3 font-mono font-bold'>
                Reviewed Code
            </div>

        </div>
    </div>
</div>

  )
}

export default Home
