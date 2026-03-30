import CustomText from "@/components/shared/CustomText";
import { Sparkles } from "lucide-react";
import geminiLogo from "/gemini-color.svg";

export default function SignUpPage(){
  return (
    <div className="min-h-screen flex flex-col gap-7 justify-center items-center">
      <div className="w-90 md:w-100">
        <div className="flex items-center gap-2 mb-5"> 
          <Sparkles size={35}/>
          <h1 className="text-3xl md:text-4xl font-semibold">Better Components</h1>
        </div>
        <p className="text-2xl md:text-5xl text-justify mb-3">
          Genera <CustomText text="componentes"/> de <CustomText text="React"/> con <CustomText text="IA" />
        </p>
        <div className="flex gap-3 border border-tertiary-800 bg-surface-900 rounded-xl w-1/2 p-3">
          <p>Powered by <CustomText text="Gemini"/></p>
          <img src={geminiLogo} alt="Gemini logo" className="w-10 h-10"/>
        </div>
      </div>

      <div>
        <form className="">
          
        </form>
      </div>
    </div>
  )
}