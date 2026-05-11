import { Trash2 } from "lucide-react";

interface Props {
  message: string;
}

export default function AiMessage({ message }: Props) {
  return(
    <div className="max-w-8/10 flex flex-col gap-1 rounded-xl p-2 self-start bg-secondary-700 text-secondary-100">
      <p className="w-full">
        {message}
      </p>
      <div className="self-end">
        <button>
          <Trash2 />hola
        </button>
      </div>
    </div>
  )
}