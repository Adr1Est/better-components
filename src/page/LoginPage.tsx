import CustomInput from "@/components/Login/CustomInput";
import CustomButton from "@/components/shared/CustomButton";
import { hasEmptyFields, isValidEmail, isValidPassword } from "@/utils/validations";
import { Sparkles } from "lucide-react";
import { useId, useState } from "react";
import { useNavigate } from "react-router";
import { login } from "@/services/auth";
import axios from "axios";
import { useLogInInfo } from "@/store";

export default function LoginPage(){
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const emailInputId = useId();
  const passwordInputId = useId();
  const navigate = useNavigate();
  const setAccessToken = useLogInInfo((state) => state.setAccessToken);
  const setUserId = useLogInInfo((state) => state.setUserId);

  const handleClick = async () => {
    if(hasEmptyFields(formData)){
      return alert("Rellena todos los campos");
    }

    if(!isValidEmail(formData.email)){
      return alert("El email no es válido");
    }

    if(!isValidPassword(formData.password)){
      return alert("La contraseña debe tener al menos 6 caracteres");
    }

    try {
      const data = await login({ email: formData.email, password: formData.password });
      setAccessToken(data.accessToken);
      setUserId(data.id);
      console.log(data.msg);
      navigate("/chat");
    } catch (error) {
      if(axios.isAxiosError(error)){
        alert(error.response?.data.msg);
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col gap-7 justify-center items-center">
      <div className="flex items-center gap-2">
        <Sparkles size={35}/>
        <h1 className="text-4xl font-semibold">Better Components</h1>
      </div>
      
      <div className="bg-surface-900 w-110 rounded-xl p-8">
        <form className="flex flex-col gap-5" onSubmit={e => e.preventDefault()}>
          <CustomInput 
            label="EMAIL" 
            type="email" 
            id={emailInputId} 
            placeholder="johndoe@email.com"
            value={formData.email}
            handleChange={(e) => setFormData(f => ({ ...f, email: e.target.value }))}
          />
          <CustomInput 
            label="CONTRASEÑA" 
            type="password" 
            id={passwordInputId} 
            placeholder="***********"
            value={formData.password}
            handleChange={(e) => setFormData(f => ({ ...f, password: e.target.value }))}
          />

          <CustomButton 
            text="INICIAR_SESIÓN"
            handleClick={handleClick}
          />
        </form>
        {/* <div className="flex items-center justify-center gap-1 pt-7">
          <hr className="w-full border-surface-600"/>
          <p className="text-surface-500 font-semibold text-xs">SERVICIOS_DE_TERCEROS</p>
          <hr className="w-full border-surface-600"/>
        </div> */}
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