interface Props {
  label: string;
  data: string;
  disabled?: boolean;
  type?: "text" | "password" | "email";
}

export default function CustomTextField({ label, data, disabled }: Props) {
  return (
    <div className="flex flex-col gap-1 w-full bg-surface-900 p-2 rounded-xl">
      <p className="text-secondary-400 font-semibold text-sm">{label}</p>
      <input 
        className={`rounded-xl bg-surface-600 p-2 overflow-x-auto ${disabled && "bg-surface-700"}`} 
        value={data} 
        disabled={disabled}
        type="text"
      />
    </div>
  )
}