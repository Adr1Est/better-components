import { Eye, EyeClosed } from "lucide-react";
import { useState, type ChangeEvent } from "react";

interface Props {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function CustomInput({ label, type, id, placeholder, value, handleChange }: Props){
  const [passState, setPassState] = useState("password");

  return(
    <div className="flex flex-col">
      <label htmlFor={id} className="font-semibold text-secondary-400 text-sm">{label}</label>
      <div className="relative w-full">
        <input 
          className="bg-slate-950 h-10 p-5 rounded-md w-full"
          type={type === "password" ? passState : type}
          id={id} 
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
        {
          type === "password"
            ? (
                <button 
                  className="absolute right-2 top-2 hover:text-secondary-400"
                  onClick={() => setPassState(p => p === "password" ? "text" : "password")}
                >
                  {passState === "password" ? <Eye /> : <EyeClosed />}
                </button>
              )
            : ""
        }
      </div>
    </div>
  )
}