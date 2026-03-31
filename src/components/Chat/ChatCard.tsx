import { useDeleteChat } from "@/hooks/useConversation";
import dayjs from "@/utils/dayjs";
import { Pencil, Trash } from "lucide-react";
import { Link } from "react-router";

interface Props {
  id: string;
  title: string;
  createdAt: string;
}

export default function ChatCard({ id, title, createdAt }: Props) {
  const { mutate: deleteChat } = useDeleteChat();

  const handleEdit = async () => {
    console.log(id);
  }

  const handleDelete = () => {
    deleteChat(id);
  }

  return (
    <Link 
      className="flex flex-row gap-3 justify-center border border-tertiary-700 bg-surface-900 hover:bg-surface-600 rounded-xl p-3 w-80 md:w-100 h-40 transition-colors duration-500"
      to={`/chat/${id}`}
    >
      <h2 className="text-xl font-bold w-1/2">{title}</h2>
      <div className="flex flex-col w-1/2 h-full justify-end items-end">
        <div className="flex flex-row gap-1">
          <button 
            className="w-20 flex items-center justify-center p-3 bg-surface-950 hover:bg-secondary-900 rounded-xl group transition-colors duration-500"
            onClick={handleEdit}
          >
            <Pencil className="group-hover:scale-115 transition-transform" />
          </button>
          <button 
            className="w-20 flex items-center justify-center p-3 bg-surface-950 hover:bg-red-900 rounded-xl group transition-colors duration-500"
            onClick={handleDelete}
          >
            <Trash className="group-hover:scale-115 transition-transform" />
          </button>
        </div>
        <p className="opacity-50 text-sm">{dayjs(createdAt).fromNow()}</p>
      </div>
    </Link>
  )
}