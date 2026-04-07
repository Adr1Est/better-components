interface Props {
  label: string;
  email: string;
}

export default function CustomTextField({ label, email }: Props) {
  return (
    <div className="flex flex-col gap-1 w-full bg-surface-900 p-2 rounded-xl">
      <p className="text-secondary-400 font-semibold text-sm">{label}</p>
      <p className="rounded-xl bg-surface-600 p-2 overflow-x-auto">{email}</p>
    </div>
  )
}