import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronUp } from "lucide-react";
import { useEffect } from "react"
interface DropdownProps {
  selectedModel: string;
  setSelectedModel: (modelName: string) => void;
}
export function DropdownMenuDemo({selectedModel,setSelectedModel}:DropdownProps) {
    useEffect(()=>{
        localStorage.setItem('model',selectedModel);
    },[selectedModel])
    //FOR OPEN AI IT CHARGES US TO USE THEIR APIs (for first three months it is free)
  // const models = [
  //   { id: "gpt-4", label: "GPT-4" },
  //   { id: "gpt-4-turbo", label: "GPT-4 Turbo" },
  //   { id: "gpt-3.5", label: "GPT-3.5" },
  //   { id: "o1", label: "o1 (Preview)" },
  // ]
const geminimodels = [
  { id: "gemini-2.5-flash", label: "Gemini 2.5 Flash" },
  { id: "gemini-2.5-flash-lite", label: "Gemini 2.5 Flash-Lite" },
  { id: "gemini-2.0-flash", label: "Gemini-2.0 Flash" },
];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-sky-600  font-mono hover:bg-sky-500 font-bold" asChild>
        <Button variant="outline">
          {selectedModel}
          <ChevronUp/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 font-mono font-bold bg-neutral-300">
        <DropdownMenuLabel className="font-mono font-extrabold">Select Model</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* {models.map((model) => (
          <DropdownMenuItem
            key={model.id}
            onClick={() => setSelectedModel(model.label)}
          >
            {model.label}
          </DropdownMenuItem>
        ))} */}
        {geminimodels.map((model)=>{
            return(
                <DropdownMenuItem key={model.id}
                onClick={() => {setSelectedModel(model.id) 
                  console.log(selectedModel)
                }}>
                {model.label}
            </DropdownMenuItem>
            )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
