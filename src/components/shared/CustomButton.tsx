interface Props {
  text: string;
}

export default function CustomButton({ text }: Props){
  return(
    <button className="group bg-primary-300 rounded-md p-3 hover:scale-102 transition-transform duration-300">
      <span className="text-primary-950 font-bold text-sm">{text}</span>
    </button>
  )
}