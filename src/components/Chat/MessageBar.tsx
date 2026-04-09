import { SendHorizonal } from "lucide-react";
import { type ChangeEvent } from "react";

interface Props {
  className: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
}

export default function MessageBar({ className, value, handleChange, handleClick }: Props) {
  return (
    <div className={className}>
      <input 
        type="text" 
        className="w-full bg-surface-700 rounded-xl p-2" 
        placeholder="Crea una card para mostrar datos del tiempo..."
        value={value}
        onChange={handleChange}
      />
      <button 
        className="absolute right-2 bottom-2 hover:text-primary-300"
        onClick={handleClick}
      >
        <SendHorizonal  />
      </button>
    </div>
  )
}