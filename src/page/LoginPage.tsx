import CustomInput from "@/components/Login/CustomInput";
import CustomButton from "@/components/shared/CustomButton";
import { Sparkles } from "lucide-react";
import { useId } from "react";
import { useNavigate } from "react-router";

export default function LoginPage(){
  const emailInputId = useId();
  const passwordInputId = useId();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col gap-7 justify-center items-center">
      <div className="flex items-center gap-2">
        <Sparkles size={35}/>
        <h1 className="text-4xl font-semibold">Better Components</h1>
      </div>
      
      <div className="bg-background2 w-110 h-100 rounded-xl p-8">
        <form className="flex flex-col gap-5">
          <CustomInput 
            label="EMAIL" 
            type="email" 
            id={emailInputId} 
            placeholder="johndoe@email.com"
          />
          <CustomInput 
            label="PASSWORD" 
            type="password" 
            id={passwordInputId} 
            placeholder="***********"
          />

          <CustomButton 
            text="INICIAR_SESIÓN"
          />
        </form>
        <div className="flex items-center justify-center gap-1 pt-7">
          <hr className="w-full border-surface-600"/>
          <p className="text-surface-500 font-semibold text-xs">SERVICIOS_DE_TERCEROS</p>
          <hr className="w-full border-surface-600"/>
        </div>
      </div>
      <div className="flex gap-1 text-sm">
        <p className="text-text-muted">No tengo cuenta: </p>
        <button 
          className="cursor-pointer font-semibold text-primary-300 hover:text-primary-500"
          onClick={() => navigate("/signup")}
        >
          Registrarme
        </button>
      </div>
    </div>
  )
}