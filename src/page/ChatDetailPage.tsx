import MessageBar from "@/components/Chat/MessageBar";
import FullScreenLoader from "@/components/shared/FullScreenLoader";
import { useMessages } from "@/hooks/useMessages";
import { useState } from "react";
import { useParams } from "react-router"

export default function ChatDetailPage(){
  const { id } = useParams();
  const { data: conversation, isLoading, isError } = useMessages(id!);
  const [inputData, setInputData] = useState("");

  const handleClick = () => {
    console.log(inputData);
    setInputData("");
  }

  if(isLoading || isError){
    return (
      <FullScreenLoader />
    )
  }
  console.log(conversation)
  return(
    <main className="w-full flex-1 flex flex-col md:flex-row gap-2">
      <div className="flex flex-col gap-2 w-full md:w-150 rounded-xl">
        <div className="bg-surface-900 rounded-xl p-2">
          <h1 className="font-semibold text-xl">{ conversation.conversation.title }</h1>
        </div>
        <div className="relative w-full flex-1 flex flex-col md:w-150 bg-surface-900 rounded-xl p-2">
          <div>
            {
              conversation.conversation.messages.map((msg) => (
                <p className={`${msg.role === "user" ? "self-end bg-amber-300" : "self-start bg-emerald-700"}`}>{msg.content}</p>
              ))
            }
          </div>
          <MessageBar 
            className="absolute w-full bottom-0 left-0"
            value={inputData}
            handleChange={(e) => setInputData(e.target.value)} 
            handleClick={handleClick}
          />
        </div>
      </div>
      <div className="w-full bg-surface-900 rounded-xl">

      </div>
    </main>
  )
}