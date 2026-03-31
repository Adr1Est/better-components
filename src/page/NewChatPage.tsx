import CustomInput from "@/components/Login/CustomInput";
import CustomButton from "@/components/shared/CustomButton";
import { useId, useState } from "react";
import { useNavigate } from "react-router";

export default function NewChatPage() {
  const [title, setTitle] = useState("");
  const titleInputId = useId();

  const navigate = useNavigate();

  const handleClick = async () => {
    console.log(title);
    navigate("/chat");
  }

  return (
    <main className="w-full flex-1 flex justify-center md:items-center mt-5 md:mt-0">
      <form 
        className="w-100 flex flex-col justify-center gap-3 bg-surface-800 p-3 rounded-xl h-40"
        onSubmit={(e) => e.preventDefault()}
      >
        <CustomInput 
          label="TÍTULO"
          type="text"
          id={titleInputId}
          placeholder="Botón minimalista..."
          value={title}
          handleChange={(e) => setTitle(e.target.value)}
        />

        <CustomButton 
          text="Crear chat"
          handleClick={handleClick}
        />
      </form>
    </main>
  )
}