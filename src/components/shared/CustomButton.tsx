interface Props {
  text: string;
  handleClick: () => void;
}

export default function CustomButton({ text, handleClick }: Props){
  return(
    <button 
      className="group bg-primary-300 rounded-md p-3 hover:scale-102 transition-transform duration-300"
      onClick={handleClick}
    >
      <span className="text-primary-950 font-bold text-sm">{text}</span>
    </button>
  )
}