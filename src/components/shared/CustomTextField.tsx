import type { ChangeEvent } from "react";

interface Props {
  label: string;
  data: string;
  disabled?: boolean;
  type?: "text" | "password" | "email";
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function CustomTextField({ label, data, disabled, type, handleChange, placeholder }: Props) {
  return (
    <div className="flex flex-col gap-1 w-full bg-surface-900 p-2 rounded-xl">
      <p className="text-secondary-400 font-semibold text-sm">{label}</p>
      <input 
        className={`rounded-xl bg-surface-600 p-2 overflow-x-auto ${disabled && "bg-surface-700"}`} 
        value={data} 
        disabled={disabled}
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  )
}