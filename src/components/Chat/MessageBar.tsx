import { SendHorizonal, TriangleAlert } from "lucide-react";
import { type ChangeEvent } from "react";
import MiniLoader from "@/components/shared/MiniLoader";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useLogInInfo } from "@/store";
import toast from "react-hot-toast";
import { warnToast } from "@/utils/toasts";

interface Props {
  className: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  isPending: boolean;
}

export default function MessageBar({ className, value, handleChange, handleClick, isPending }: Props) {
  const userId = useLogInInfo((state) => state.userId);
  const { data, isLoading, isError } = useUserInfo(userId);

  return (
    <form className={`${className}`} onSubmit={(e) => e.preventDefault()}>
      <input 
        type="text" 
        className="w-full bg-surface-700 rounded-l-xl p-2 h-15" 
        placeholder="Crea una card para mostrar datos del tiempo..."
        value={value}
        onChange={handleChange}
      />
      {
        !data.user.apiKey && (
          <button 
            className="absolute right-11 bottom-4" 
            title="Falta la clave API de Gemini"
            onClick={() => toast("Define una clave API de Gemini válida", warnToast)}
          >
            <TriangleAlert className="text-amber-400" strokeWidth={2} size={30}/>
          </button>
        ) 
      }
      <button 
        className={`
          bg-surface-900 rounded-r-xl p-2
          ${data.user.apiKey ? "text-primary-300 hover:text-secondary-500" : "text-primary-300/50"}
        `}
        onClick={handleClick}
        disabled={isPending || !data.user.apiKey}
      >
        { isPending || isLoading || isError ? <MiniLoader /> : <SendHorizonal  /> }
      </button>
    </form>
  )
}