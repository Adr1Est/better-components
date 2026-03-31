import ChatCard from "@/components/Chat/ChatCard";
import { useChats } from "@/hooks/useConversation";
import { useLogInInfo } from "@/store";
import { Plus } from "lucide-react";
import { Link } from "react-router";
import FullScreenLoader from "@/components/shared/FullScreenLoader";
import type { Chat } from "@/types/conversation.type";

export default function ChatList() {
  const userId = useLogInInfo((state) => state.userId);
  const { data: chatList, isLoading } = useChats(userId);

  if(isLoading){
    return (
      <FullScreenLoader />
    )
  }

  return (
    <main className="w-full flex-1 flex flex-wrap justify-center content-start gap-3 p-3">
      <div className="w-full h-11 flex items-center justify-center mb-1">
        <Link 
          className="flex items-center justify-center gap-3 w-30 h-10 bg-surface-900 rounded-xl hover:bg-surface-600 transition-colors duration-500"
          to="/chat/new"
        >
          <p className="text-sm font-semibold">Nuevo chat</p>
          <Plus size={20}/>
        </Link>
      </div>
      {
        chatList.conversations.map((chat: Chat) => (
          <ChatCard
            key={chat.id}
            id={chat.id}
            title={chat.title}
            createdAt={chat.createdAt}
          />
        ))
      }
    </main>
  )
}