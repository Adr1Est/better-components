interface Props {
  message: string;
}

export default function UserMessage({ message }: Props) {
  return(
    <div className="max-w-8/10 flex flex-col gap-1 rounded-xl p-2 self-end bg-primary-300 text-black">
      <p className="w-full">
        {message}
      </p>
      <div>
        
      </div>
    </div>
  )
}