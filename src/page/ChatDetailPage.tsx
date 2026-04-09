import MessageBar from "@/components/Chat/MessageBar";
import FullScreenLoader from "@/components/shared/FullScreenLoader";
import { useCreateMessage, useMessages } from "@/hooks/useMessages";
import type { ChatMessage } from "@/types/conversation.type";
import { useState } from "react";
import { useParams } from "react-router"

export default function ChatDetailPage(){
  const { id } = useParams();
  const { data: conversation, isLoading, isError } = useMessages(id!);
  const { mutate: createMessage, isPending } = useCreateMessage(id!);
  const [inputData, setInputData] = useState("");

  const handleClick = () => {
    console.log(inputData);
    createMessage({ conversationId: id!, content: inputData});
    setInputData("");
  }

  if(isLoading || isError){
    return (
      <FullScreenLoader />
    )
  }
  
  return(
    <main className="w-full flex-1 flex flex-col md:flex-row gap-2">
      <div className="flex flex-col gap-2 w-full md:w-150 rounded-xl">
        <div className="sticky top-18 bg-surface-900 rounded-xl p-2">
          <h1 className="font-semibold text-xl">{ conversation.conversation.title }</h1>
        </div>
        <div className="relative w-full flex-1 flex flex-col md:w-150 bg-surface-900 rounded-xl p-2 -z-5">
          <div className="overflow-y-auto flex flex-col gap-1">
            {
              conversation.conversation.messages.map((msg: ChatMessage) => (
                <p key={msg.id}className={`max-w-8/10 rounded-xl p-2 ${msg.role === "user" ? "self-end bg-primary-300 text-black" : "self-start bg-secondary-700"}`}>{msg.content}</p>
              ))
            }
          </div>
          <MessageBar 
            className="sticky bottom-0 right-0 w-full"
            value={inputData}
            handleChange={(e) => setInputData(e.target.value)} 
            handleClick={handleClick}
            isPending={isPending}
          />
        </div>
      </div>
      <div className="w-full bg-surface-900 rounded-xl">

      </div>
    </main>
  )
}