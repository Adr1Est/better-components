import type { ChangeEvent } from "react";

interface Props {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function CustomInput({ label, type, id, placeholder, value, handleChange }: Props){
  return(
    <div className="flex flex-col">
      <label htmlFor={id} className="font-semibold text-secondary-400 text-sm">{label}</label>
      <input 
        className="bg-slate-950 h-10 p-5 rounded-md"
        type={type}
        id={id} 
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}