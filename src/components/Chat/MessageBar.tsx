import { SendHorizonal, TriangleAlert } from "lucide-react";
import { type ChangeEvent } from "react";
import MiniLoader from "@/components/shared/MiniLoader";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useLogInInfo } from "@/store";
import toast from "react-hot-toast";
import { warnToast } from "@/utils/toasts";
import { geminiModels } from "@/utils/geminiModels";

interface Props {
  className: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  model: string;
  handleModelChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  isPending: boolean;
}

export default function MessageBar({ className, value, handleChange, handleClick, model, handleModelChange, isPending }: Props) {
  const userId = useLogInInfo((state) => state.userId);
  const { data, isLoading, isError } = useUserInfo(userId);

  return (
    <form className={`${className}`} onSubmit={(e) => e.preventDefault()}>
      <select
        className="rounded-xl w-60 p-2 self-end bg-surface-700 border-2 border-surface-400"
        value={model} 
        onChange={handleModelChange}
      >
        {
          geminiModels.map((m) => (
            <option key={m.id} value={m.model}>{m.model}</option>
          ))
        }
      </select>
      <div className="flex flex-row">
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
      </div>
    </form>
  )
}