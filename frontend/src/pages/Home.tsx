import { useEffect, useState } from 'react'
import Editor from 'react-simple-code-editor'
// FOR NEUTRAL THEME
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"
import axios from 'axios'
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { Bot, Code } from 'lucide-react'
import {motion} from "framer-motion"

const Home = () => {
    const [code, setcode] = useState(`function sum(){
        return 1+1
        }`)
    const [reviewedcode, setreviewedcode] = useState(``)
    useEffect(() => {
        prism.highlightAll()
    }, [])
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
    const reviewcode = async () => {
        const response = async () => {
            try {
                const { data }: { data: string } = await axios.post(`${BACKEND_URL}/ai/response`, { code });
    
                if (!data.trim()) {
                    throw new Error("Empty response received");
                }
    
                console.log(data);
                setreviewedcode(data);
    
                return "Got the data!"; // Required for toast.success
            } catch (e) {
                console.error("Error:", e);
                throw new Error("Error when fetching or empty response");
            }
        };
    
        toast.promise(response(), {
            loading: "Analyzing your code...",
            success: "Review complete!", // Display custom success message
            error: "Invalid input or server issue",
        }, { position: "bottom-center" });
        // setreviewedcode(response.data)

    }
    return (
        <div className="bg-gray-950 h-screen w-screen flex flex-col">
            {/* Navbar */}
            <div className="font-mono  flex justify-between items-center font-bold text-3xl sm:text-4xl text-sky-500 px-4 pt-2">
                <div className='flex gap-1 justify-center items-center'>
                   <div className="relative">
                                <img width={40} height={40} src="https://cdn3d.iconscout.com/3d/premium/thumb/dark-web-3d-icon-download-in-png-blend-fbx-gltf-file-formats--website-tor-browser-network-deep-pack-crime-security-icons-7412312.png?f=webp" alt="SecureCode" className="drop-shadow-lg" />
                                <div className="absolute inset-0 bg-sky-400/20 rounded-lg blur-md"></div>
                            </div>
                            <Link to={'/'}>
                SecureCode
                            </Link>
                </div>
                <div className='flex font-mono font-light text-xl justify-center items-center gap-2'>
                    <Link to={'/'}>
                   <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(14, 165, 233, 0.3)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="text-lg bg-gradient-to-r from-sky-500 to-blue-500 text-white px-1 py-1 sm:py-1.5 sm:px-6  rounded-lg hover:from-sky-400 hover:to-blue-400 transition-all duration-300 font-semibold shadow-lg"
                                    >
                                    About
                                </motion.button>
                    {/* <a href="#about" className="hover:text-sky-400 transition-colors text-sky-200">About</a> */}
                    </Link>
                    <Link to={"https://github.com/aryanx16/SecureCode"}>
                    <img width={42} src="https://cdn3d.iconscout.com/3d/free/thumb/free-github-3d-icon-download-in-png-blend-fbx-gltf-file-formats--social-media-logo-technology-logos-pack-icons-10367941.png?f=webp" alt="" />
                    {/* Github */}
                    </Link>
                </div>
            </div>
            {/* Main */}
            <div className="flex flex-col bg-slate-950 sm:flex-row gap-5 flex-1 min-h-0  p-5">
                <motion.div initial={{x:-32}}
        animate={{x:0}} className="left bg-slate-950 flex flex-col border  border-sky-600 w-full p-3 h-96 sm:h-full rounded-md">
                    <div className='flex gap-2  items-center text-2xl text-sky-500 font-bold font-mono'>
                      <Code/>  Code Input
                    </div>
                    <div className='code bg-slate-900 overflow-auto p-1 flex-1 rounded-md h-full text-sky-200'>
                        <Editor className='overflow-y-auto h-full    border-0' value={code}
                            onValueChange={code => setcode(code)}
                            highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
                        />
                    </div>
                    <div className='w-full flex justify-end pt-2'>
                        <motion.button
                         whileHover={{ scale: 1.02,  }}
                         whileTap={{ scale: 0.98 }}
                         
                        onClick={reviewcode} className='px-3 py-1 border rounded-md transition-all ease-initial duration-300 bg-sky-500 cursor-pointer text-slate-950 hover:text-sky-500 hover:bg-gray-950 font-bold'>Review</motion.button>
                    </div>
                </motion.div>
                <motion.div
                initial={{x:32}}
                animate={{x:0}}
                transition={{duration:0.8}}
                className="right w-full border border-sky-500 rounded-md h-full overflow-y-auto">
                    <div className='text-md text-sky-100 p-3 font-sans  '>
                        <div className='text-2xl flex gap- items-center text-sky-500 font-mono font-bold pt-2'>
                        <Bot/>
                        AI Review

                        </div>
                        <div className='overflow-y-auto bg-slate-900 p-1 rounded-md'>
                            <Markdown

                                rehypePlugins={[rehypeHighlight]}

                            >{reviewedcode || "Your code review will appear here"}
                            </Markdown>
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>

    )
}

export default Home
