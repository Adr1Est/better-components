import CustomTextField from "@/components/shared/CustomTextField";
import FullScreenLoader from "@/components/shared/FullScreenLoader";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useLogInInfo } from "@/store";
import { Eye, EyeClosed, Pencil, Trash } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [togglePassword, setTogglePassword] = useState<"password" | "text">("password");
  const [isDisabled, setIsDisabled] = useState(true);
  const userId = useLogInInfo((state) => state.userId);
  const { data, isLoading, isError } = useUserInfo(userId);
  const [formValue, setFormValue] = useState<string  | undefined>(undefined);

  if(isLoading || isError) return <FullScreenLoader />;

  const apiKey = data?.user?.apiKey ?? "";
  const value = formValue ?? apiKey;

  const handleEdit = () => {
    if(isDisabled){
      setIsDisabled(false);
      setTogglePassword("text");
      return;
    }

    console.log(formValue);
    setIsDisabled(true);
    setFormValue(undefined);
  }

  return (
    <main className="w-full flex-1 flex justify-center items-start">
      <div className="relative w-full md:w-1/2">
        <CustomTextField 
          label="API_KEY" 
          data={value || "Define una Api Key de Gemini"} 
          type={togglePassword} 
          disabled={isDisabled} 
          handleChange={(e) => setFormValue(e.target.value)}
        />
        <div className="absolute right-2 top-8">
          <button 
            className="bg-surface-950 hover:bg-primary-900 p-2" 
            onClick={() => setTogglePassword(t => t === "password" ? "text" : "password")}
          >
            {togglePassword === "text" ? <Eye /> : <EyeClosed />}
          </button>
          <button 
            className="bg-surface-950 hover:bg-secondary-900 p-2"
            onClick={handleEdit}
          >
            <Pencil />
          </button>
          <button className="rounded-r-xl bg-surface-950 hover:bg-red-900 p-2">
            <Trash />
          </button>
        </div>
        
      </div>
    </main>
  )
}