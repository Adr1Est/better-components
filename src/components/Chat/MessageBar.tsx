import { SendHorizonal } from "lucide-react";
import { type ChangeEvent } from "react";
import MiniLoader from "@/components/shared/MiniLoader";

interface Props {
  className: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  isPending: boolean;
}

export default function MessageBar({ className, value, handleChange, handleClick, isPending }: Props) {
  return (
    <form className={`${className}`} onSubmit={(e) => e.preventDefault()}>
      <input 
        type="text" 
        className="w-full bg-surface-700 rounded-xl p-2 h-15" 
        placeholder="Crea una card para mostrar datos del tiempo..."
        value={value}
        onChange={handleChange}
      />
      <button 
        className="absolute right-2 bottom-4 text-primary-300 hover:text-secondary-500"
        onClick={handleClick}
        disabled={isPending}
      >
        {isPending ? <MiniLoader /> : <SendHorizonal  />}
      </button>
    </form>
  )
}