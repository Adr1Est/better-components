import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  label?: string;
  handleClick: () => void;
}

export default function NavButton({ icon: Icon, label, handleClick }: Props) {
  return(
    <button
      className="flex flex-col justify-center items-center group"
      onClick={handleClick}
    >
      <Icon size={25} className="group-hover:text-tertiary-500 transition-colors duration-200"/>
      <p className="hidden md:inline text-xs group-hover:text-tertiary-500 transition-colors duration-200">{label}</p>
    </button>
  )
}