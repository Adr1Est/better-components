import { Trash2 } from "lucide-react";
import DeleteMessageModal from "@/components/Chat/DeleteMessageModal";
import { useRef } from "react";

interface Props {
  id: string;
  conversationId: string;
  message: string;
}

export default function AiMessage({ id, conversationId, message }: Props) {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleModal = () => {
    modalRef.current!.showModal();
  }

  return(
    <>
      <div className="max-w-8/10 flex flex-col gap-1 rounded-xl p-2 self-start bg-secondary-700 text-secondary-100">
        <p className="w-full">
          {message}
        </p>
        <div className="self-end">
          <button 
            className="cursor-pointer hover:text-secondary-900"
            onClick={handleModal}
          >
            <Trash2 size={18}/> 
          </button>
        </div>
      </div>
      <DeleteMessageModal 
        ref={modalRef}
        content={message}
        conversationId={conversationId}
        messageId={id}
      />
    </>
  )
}