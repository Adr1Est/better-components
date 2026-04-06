import FullScreenLoader from "@/components/shared/FullScreenLoader";
import { useMessages } from "@/hooks/useMessages";
import { useParams } from "react-router"

export default function ChatDetailPage(){
  const { id } = useParams();
  const { data: conversation, isLoading, isError } = useMessages(id!);

  if(isLoading || isError){
    return (
      <FullScreenLoader />
    )
  }
  return(
    <main className="w-full flex-1 flex flex-col md:flex-row gap-2">
      <div className="flex flex-col gap-2 w-full md:w-150 rounded-xl">
        <div className="bg-surface-900 rounded-xl p-2">
          <h1 className="font-semibold text-xl">{ conversation.conversation.title }</h1>
        </div>
        <div className="w-full flex-1 md:w-150 bg-surface-900 rounded-xl p-2">
          
        </div>
      </div>
      <div className="w-full bg-surface-900 rounded-xl">

      </div>
    </main>
  )
}