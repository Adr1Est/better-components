import CustomTextField from "@/components/shared/CustomTextField";

export default function SettingsPage() {
  return (
    <main className="w-full flex-1 flex justify-center items-start">
      <CustomTextField label="API_KEY" data="hola" />
    </main>
  )
}