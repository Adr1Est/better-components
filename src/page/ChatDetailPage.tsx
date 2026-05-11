import AiMessage from "@/components/Chat/AiMessage";
import MessageBar from "@/components/Chat/MessageBar";
import ReactSandpack from "@/components/Chat/ReactSandpack";
import UserMessage from "@/components/Chat/UserMessage";
import FullScreenLoader from "@/components/shared/FullScreenLoader";
import { useCreateMessage, useMessages } from "@/hooks/useMessages";
import type { ChatMessage } from "@/types/conversation.type";
import { errorToast, warnToast } from "@/utils/toasts";
import { useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router"

export default function ChatDetailPage(){
  const { id } = useParams();
  const { data: conversation, isLoading, isError } = useMessages(id!);
  const { mutate: createMessage, isPending } = useCreateMessage(id!);
  const [inputData, setInputData] = useState("");
  const [model, setModel] = useState("gemini-3.1-flash-lite-preview");

  const handleClick = () => {
    if(!inputData){
      toast("Escribe un mensaje", warnToast);
      return;
    }
    if(!model){
      toast("Selecciona un LLM", warnToast);
      return;
    }
    
    createMessage({ conversationId: id!, content: inputData, model}, {
      onError: (error: any) => {
        const status = error?.response?.status ?? error?.status;

        const errorMessages: Record<number, string> = {
          400: "La clave API no es válida",
          401: "La clave API no es válida",
          429: "Has superado el límite de peticiones. Espera un momento.",
          503: "El LLM está experimentando alta demanda. Inténtalo de nuevo más tarde.",
        };

        const msg = errorMessages[status] ?? "Error inesperado al generar el mensaje.";
        toast.error(msg, errorToast);
      },
    });
    setInputData("");
  }

  if(isLoading || isError){
    return (
      <FullScreenLoader />
    )
  }

  const messages = conversation.conversation.messages;
  const lastMessage = messages[messages.length - 1];

  return(
    <main className="w-full flex-1 flex flex-col lg:flex-row gap-2">
      <div className="flex flex-col gap-2 w-full lg:w-150 rounded-xl">
        <div className="sticky top-18 bg-surface-900 rounded-xl p-2 z-1">
          <h1 className="font-semibold text-xl">{ conversation.conversation.title }</h1>
        </div>
        <div className="relative w-full flex-1 flex flex-col lg:w-150 bg-surface-950 rounded-xl p-2">
          <div className="overflow-y-auto flex flex-col gap-1">
            {
              conversation.conversation.messages.map((msg: ChatMessage) => {
                return msg.role === "user"
                  ? (
                      <UserMessage 
                        key={msg.id}
                        id={msg.id}
                        message={msg.content}
                      />
                    )
                  : (
                      <AiMessage 
                        key={msg.id}
                        id={msg.id}
                        message={msg.content}
                      />
                    )
              })
            }
          </div>
          <MessageBar 
            className="sticky bottom-0 right-0 w-full flex flex-col gap-1"
            value={inputData}
            handleChange={(e) => setInputData(e.target.value)} 
            handleClick={handleClick}
            model={model}
            handleModelChange={(e) => setModel(e.target.value)}
            isPending={isPending}
          />
        </div>
      </div>
      <div className="w-full h-full lg:sticky lg:top-18 rounded-xl overflow-hidden">
        {
          lastMessage?.componentCode && (
            <ReactSandpack
              className={"rounded-xl overflow-hidden border-2 border-primary-500"}
              componentCode={lastMessage?.componentCode}
              dependencies={lastMessage?.dependencies}
            />
          )
        }
      </div>
    </main>
  )
}