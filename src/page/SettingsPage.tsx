import CustomTextField from "@/components/shared/CustomTextField";
import FullScreenLoader from "@/components/shared/FullScreenLoader";
import MiniLoader from "@/components/shared/MiniLoader";
import { useSaveApiKey, useUserInfo } from "@/hooks/useUserInfo";
import { useLogInInfo } from "@/store";
import { successToast, warnToast } from "@/utils/toasts";
import { Eye, EyeClosed, Pencil, Trash } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function SettingsPage() {
  const [togglePassword, setTogglePassword] = useState<"password" | "text">("password");
  const [isDisabled, setIsDisabled] = useState(true);
  const userId = useLogInInfo((state) => state.userId);
  const { data, isLoading, isError } = useUserInfo(userId);
  const { mutate: saveApiKey, isPending } = useSaveApiKey();
  const [formValue, setFormValue] = useState<string  | undefined>(undefined);
  const [isDeleteAccountClicked, setIsDeleteAccountClicked] = useState(false);

  if(isLoading || isError) return <FullScreenLoader />;

  const apiKey = data?.user?.apiKey ?? "";
  const value = formValue ?? apiKey;

  const handleEdit = () => {
    if(isDisabled){
      setIsDisabled(false);
      setTogglePassword("text");
      return;
    }
    if (formValue === undefined || formValue === apiKey) {
      setIsDisabled(true);
      toast("La clave API no se ha modificado", warnToast);
      return;
    }
    saveApiKey({id: userId, apiKey: formValue!});
    toast.success("Clave API modificada con éxito", successToast);
    setIsDisabled(true);
    setFormValue(undefined);
  }

  const handleDelete = () => {
    if(!apiKey) return;

    saveApiKey({ id: userId, apiKey: "" });
    toast.success("Clave API borrada", successToast);
    setFormValue(undefined);
    setIsDisabled(true);
  }

  const handleDeleteUser = () => {
    if(!isDeleteAccountClicked) return setIsDeleteAccountClicked(true);
    console.log(isDeleteAccountClicked, "<---------");
    setIsDeleteAccountClicked(false);
  }

  return (
    <main className="w-full flex-1 flex flex-col justify-start items-center gap-3">
      <div className="relative w-full md:w-1/2">
        <CustomTextField 
          label="API_KEY" 
          data={value} 
          type={togglePassword} 
          disabled={isDisabled} 
          handleChange={(e) => setFormValue(e.target.value)}
          placeholder="Define una Api Key de Gemini"
        />
        <div className="absolute right-2 top-8">
          <button 
            className="bg-surface-950 hover:bg-primary-900 p-2" 
            onClick={() => setTogglePassword(t => t === "password" ? "text" : "password")}
            disabled={isPending}
          >
            {togglePassword === "text" ? <Eye /> : <EyeClosed />}
          </button>
          <button 
            className="bg-surface-950 hover:bg-secondary-900 p-2"
            onClick={handleEdit}
            disabled={isPending}
          >
            {isPending ? <MiniLoader /> : <Pencil />}
          </button>
          <button 
            className="rounded-r-xl bg-surface-950 hover:bg-red-900 p-2"
            onClick={handleDelete}
            disabled={isPending}
          >
            <Trash />
          </button>
        </div>
      </div>
      <button
          className={`group relative w-full md:w-1/2 p-4 rounded-xl ${
            isDeleteAccountClicked
              ? "bg-red-700 active:text-red-950" : "bg-red-800 hover:bg-red-700 active:text-red-950"
            }`}
          onClick={handleDeleteUser}
        >
          <span className="inline-block group-hover:scale-110 font-semibold transition-transform duration-300">
            {isDeleteAccountClicked ? "Esto también borrará los chats ¿Estás seguro?" : "Eliminar cuenta de la base de datos"}
          </span>
      </button>
    </main>
  )
}