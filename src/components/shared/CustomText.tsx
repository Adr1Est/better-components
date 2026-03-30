interface Props {
  text: string;
}

export default function CustomText({ text }: Props){
  return(
    <span className="text-tertiary-400 font-semibold hover:text-tertiary-100 transition-colors duration-500">
      {text}
    </span>
  )
}