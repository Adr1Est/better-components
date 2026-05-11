import { successToast } from "@/utils/toasts";
import { X, Trash } from "lucide-react";
import type { RefObject } from "react";
import toast from "react-hot-toast";

interface Props {
  ref: RefObject<HTMLDialogElement | null>;
  content: string;
  messageId: string;
}

export default function DeleteMessageModal({ ref, content, messageId }: Props) {
  
  const handleDelete = () => {
    ref.current?.close();
    toast.success(`Mensaje borrado`, successToast);
  }

  return(
    <dialog 
      ref={ref}
      className="hidden open:flex flex-col gap-2 w-90 m-auto rounded-xl p-3 bg-surface-800 border-3 border-tertiary-800 text-tertiary-400 font-semibold backdrop:bg-black/50"
    >
      <p>¿Seguro que quieres borrar el mensage?</p>
      <p className="w-full text-secondary-400 font-bold bg-surface-900 p-1 rounded-xl">{content}</p>
      <div className="flex flex-row gap-1 w-full justify-end">
        <button
          onClick={() => ref.current?.close()}
          className="bg-surface-900 rounded-xl p-1 hover:text-text-primary"
        >
          <X strokeWidth={3}/>
        </button>
        <button
          onClick={handleDelete}
          className="bg-surface-900 rounded-xl p-1 hover:text-text-primary"
        >
          <Trash strokeWidth={3}/>
        </button>
      </div>
    </dialog>
  )
}