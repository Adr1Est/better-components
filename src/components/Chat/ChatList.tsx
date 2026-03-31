import ChatCard from "@/components/Chat/ChatCard";
import { mockChats } from "@/utils/mockData";

export default function ChatList() {
  return (
    <main className="w-full flex-1 flex flex-wrap justify-center gap-1 bg-surface-800 rounded-xl p-3">
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