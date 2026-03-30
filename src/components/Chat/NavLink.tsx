import type { LucideIcon } from "lucide-react";
import { Link } from "react-router";

interface Props {
  to: string;
  icon: LucideIcon;
  label?: string;
}

export default function NavLink({ to, icon: Icon, label}: Props) {
  return(
    <Link
      to={to}
      className="flex flex-col justify-center items-center group"
    >
      <Icon size={25} className="group-hover:text-tertiary-500 transition-colors duration-200"/>
      <p className="hidden md:inline text-xs group-hover:text-tertiary-500 transition-colors duration-200">{label}</p>
    </Link>
  )
}