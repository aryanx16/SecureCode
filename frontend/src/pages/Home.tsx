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

const Home = () => {
    const [code, setcode] = useState(`function sum(){
        return 1+1}`)
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
            loading: "Loading...",
            success: "Got the data", // Display custom success message
            error: "Invalid input or server issue",
        }, { position: "bottom-center" });
        // setreviewedcode(response.data)

    }
    return (
        <div className="bg-gray-950 h-screen w-screen flex flex-col">
            {/* Navbar */}
            <div className="font-mono  flex justify-between items-center font-bold text-3xl sm:text-4xl text-sky-500 px-4 pt-2">
                <div className='flex gap-1 justify-center items-center'>
                    <img width={42} src="https://cdn3d.iconscout.com/3d/premium/thumb/dark-web-3d-icon-download-in-png-blend-fbx-gltf-file-formats--website-tor-browser-network-deep-pack-crime-security-icons-7412312.png?f=webp" alt="" />
                SecureCode
                </div>
                <div className=''>
                    <Link to={"https://github.com/aryanx16/SecureCode"}>
                    <img width={42} src="https://cdn3d.iconscout.com/3d/free/thumb/free-github-3d-icon-download-in-png-blend-fbx-gltf-file-formats--social-media-logo-technology-logos-pack-icons-10367941.png?f=webp" alt="" />
                    </Link>
                </div>
            </div>
            {/* Main */}
            <div className="flex flex-col bg-slate-950 sm:flex-row gap-5 flex-1 min-h-0  p-5">
                <div className="left bg-slate-950 flex flex-col border  border-sky-600 w-full p-3 h-96 sm:h-full rounded-md">
                    <div className='text-2xl text-sky-500 font-bold font-mono'>
                        Code Input
                    </div>
                    <div className='code bg-slate-900 overflow-auto p-1 flex-1 rounded-md h-full text-sky-200'>
                        <Editor className='overflow-y-auto h-full    border-0' value={code}
                            onValueChange={code => setcode(code)}
                            highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
                        />
                    </div>
                    <div className='w-full flex justify-end pt-2'>
                        <button onClick={reviewcode} className='px-3 py-1 border rounded-md transition-all ease-initial duration-300 bg-sky-500 cursor-pointer text-slate-950 hover:text-sky-500 hover:bg-gray-950 font-bold'>Review</button>
                    </div>
                </div>
                <div className="right w-full border border-sky-500 rounded-md h-full overflow-y-auto">
                    <div className='text-md text-sky-100 p-3 font-sans  '>
                        <div className='text-2xl text-sky-500 font-mono font-bold pt-2'>
                        Reviewed Code

                        </div>
                        <div className='overflow-y-auto bg-slate-900 p-1 rounded-md'>
                            <Markdown

                                rehypePlugins={[rehypeHighlight]}

                            >{reviewedcode}</Markdown>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Home
