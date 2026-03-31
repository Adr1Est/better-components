import ChatCard from "@/components/Chat/ChatCard";
import { mockChats } from "@/utils/mockData";
import { Plus } from "lucide-react";

export default function ChatList() {

  return (
    <main className="w-full flex-1 flex flex-wrap justify-center gap-1 bg-surface-800 rounded-xl p-3">
      <div className="w-full flex items-center justify-center mb-1">
        <button 
          className="flex items-center justify-center gap-3 w-30 h-10 bg-surface-950 rounded-xl hover:bg-surface-600 transition-colors duration-500"
          onClick={() => console.log("a")}
        >
          <p className="text-sm font-semibold">Nuevo chat</p>
          <Plus size={20}/>
        </button>
      </div>
      {
        mockChats.map(c => (
          <ChatCard
            key={c.id}
            id={c.id}
            title={c.title}
            createdAt={c.createdAt}
          />
        ))
      }
    </main>
  )
}