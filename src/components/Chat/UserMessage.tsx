import DeleteMessageModal from "@/components/Chat/DeleteMessageModal";
import { Trash2 } from "lucide-react";
import { useRef } from "react";

interface Props {
  id: string;
  conversationId: string;
  message: string;
}

export default function UserMessage({ id, conversationId, message }: Props) {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleModal = () => {
    modalRef.current!.showModal();
  }

  return(
    <>
      <div className="max-w-8/10 flex flex-col gap-1 rounded-xl p-2 self-end bg-primary-300 text-black">
        <p className="w-full">
          {message}
        </p>
        <div className="self-start">
          <button 
            className="cursor-pointer hover:text-primary-700"
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