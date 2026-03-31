import { useParams } from "react-router"

export default function ChatDetailPage(){
  const { id } = useParams();

  return(
    <div>
      <p>{id}</p>
    </div>
  )
}