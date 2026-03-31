import { Pencil, Trash } from "lucide-react";

interface Props {
  id: string;
  title: string;
  createdAt: string;
}

export default function ChatCard({ id, title, createdAt }: Props) {
  const handleEdit = async () => {
    console.log(id);
  }

  const handleDelete = async () => {
    console.log(id);
  }

  return (
    <div className="flex flex-row gap-3 justify-center border border-tertiary-700 bg-surface-900 rounded-xl p-3 w-80 md:w-100 h-40">
      <h2 className="text-xl font-bold w-1/2">{title}</h2>
      <div className="flex flex-col w-1/2 h-full justify-end items-end">
        <div className="flex flex-row gap-1">
          <button 
            className="w-20 flex items-center justify-center p-3 bg-secondary-800 hover:bg-secondary-700 rounded-xl group transition-colors duration-500"
            onClick={handleEdit}
          >
            <Pencil className="group-hover:scale-115 transition-transform" />
          </button>
          <button 
            className="w-20 flex items-center justify-center p-3 bg-red-800 hover:bg-red-700 rounded-xl group transition-colors duration-500"
            onClick={handleDelete}
          >
            <Trash className="group-hover:scale-115 transition-transform" />
          </button>
        </div>
        <p className="opacity-50 text-sm">Creado: {createdAt}</p>
      </div>
      
    </div>
  )
}