import CustomButton from "@/components/shared/CustomButton";
import { useLogInInfo } from "@/store"
import axios from "axios";
import { logout } from "@/services/auth";
import { useNavigate } from "react-router";

export default function TestPage(){
  const token = useLogInInfo((state) => state.accessToken);
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const data = await logout();
      console.log(data.msg);
      navigate("/");
    } catch (error) {
      if(axios.isAxiosError(error)){
        console.log(error.response?.data.msg);
      }
    }
  }

  return(
    <div className="min-h-screen flex flex-col items-center justify-center gap-3">
      <div className="w-150 p-3 border bg-surface-900 rounded-xl">
        <p className="w-full truncate">{token || "Sin token"}</p>
      </div>

      <CustomButton 
        text="Cerrar Sesión"
        handleClick={handleClick}
      />
    </div>
  )
}