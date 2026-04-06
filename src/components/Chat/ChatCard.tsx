import dayjs from "@/utils/dayjs";
import { Pencil, Trash } from "lucide-react";
import { Link } from "react-router";
import DeleteChatModal from "@/components/Chat/DeleteChatModal";
import { useId, useRef, useState, type ChangeEvent, type MouseEvent } from "react";
import CustomInput from "@/components/Login/CustomInput";
import { stopPropagation } from "@/utils/stopPropagation";
import { useChangeChatTitle } from "@/hooks/useConversation";

interface Props {
  id: string;
  title: string;
  createdAt: string;
}

export default function ChatCard({ id, title, createdAt }: Props) {
  const [isEditable, setIsEditable] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const modalRef = useRef<HTMLDialogElement>(null);
  const newTitleInputId = useId();

  const { mutate: changeTitle } = useChangeChatTitle();

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  }

  const handleEdit = (e: MouseEvent) => {
    stopPropagation(e);

    if(!isEditable) return setIsEditable(true);

    if(newTitle && newTitle !== title){
      changeTitle({ chatId: id, title: newTitle });
    }
    
    setIsEditable(false);
  }

  const handleModalOpen = (e: MouseEvent) => {
    stopPropagation(e);
    setIsEditable(false);
    modalRef.current!.showModal();
  }

  return (
    <>
      <Link 
        className="flex flex-row gap-3 justify-center border border-tertiary-700 bg-surface-900 hover:bg-surface-600 rounded-xl p-3 w-80 md:w-100 h-40 transition-colors duration-500"
        to={`/chat/${id}`}
      >
        {
          isEditable 
            ? (
              <CustomInput 
                label=""
                type="text"
                id={newTitleInputId}
                placeholder="nuevo título"
                value={newTitle}
                handleChange={handleChangeTitle}
                onClick={stopPropagation}
              />
            ) 
            : <h2 className="text-xl font-bold w-1/2">{title}</h2>
        }
        <div className="flex flex-col w-1/2 h-full justify-end items-end">
          <div className="flex flex-row gap-1">
            <button 
              className={`
                ${isEditable ? "bg-emerald-800" : "bg-surface-950 hover:bg-secondary-900"}
                w-20 flex items-center justify-center p-3 rounded-xl group transition-colors duration-500
              `}
              onClick={handleEdit}
            >
              <Pencil className="group-hover:scale-115 transition-transform" />
            </button>
            <button 
              className="w-20 flex items-center justify-center p-3 bg-surface-950 hover:bg-red-900 rounded-xl group transition-colors duration-500"
              onClick={handleModalOpen}
            >
              <Trash className="group-hover:scale-115 transition-transform" />
            </button>
          </div>
          <p className="opacity-50 text-sm">{dayjs(createdAt).fromNow()}</p>
        </div>
      </Link>
      <DeleteChatModal 
        ref={modalRef}
        title={title}
        chatId={id}
      />
    </>
  )
}