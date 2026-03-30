import CustomText from "@/components/shared/CustomText";
import { Sparkles } from "lucide-react";
import geminiLogo from "/gemini-color.svg";
import CustomInput from "@/components/Login/CustomInput";
import { useId } from "react";
import CustomButton from "@/components/shared/CustomButton";
import { useNavigate } from "react-router";

export default function SignUpPage(){
  const emailInputId = useId();
  const usernameInputId = useId();
  const passwordInputId = useId();

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-7 justify-center items-center">
      <div className="w-90 md:w-100 p-1">
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

      <div className="bg-surface-900 p-3 rounded-xl w-90 md:w-100">
        <form className="flex flex-col gap-5" onSubmit={e => e.preventDefault()}>
          <CustomInput 
            label="Email"
            type="email"
            id={emailInputId}
            placeholder="johndoe@email.com"
          />
          <CustomInput
            label="Nombre de usuario"
            type="text"
            id={usernameInputId}
            placeholder="john123"
          />
          <CustomInput
            label="Contraseña"
            type="password"
            id={passwordInputId}
            placeholder="*********"
          />
          <CustomButton text="Registrarme"/>
        </form>
        <div className="flex gap-1 text-sm w-full justify-center mt-3">
          <p className="text-text-muted">Ya tengo cuenta: </p>
          <button 
            className="cursor-pointer font-semibold text-primary-300 hover:text-primary-500"
            onClick={() => navigate("/")}
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  )
}