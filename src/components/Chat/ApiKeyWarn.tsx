import { Link } from "react-router";
import geminiLogo from "/gemini-color.svg";

export default function ApiKeyWarn() {
  return (
    <div className="w-full md:w-9/10 h-100 bg-rose-700/50 flex flex-col items-center justify-center gap-3 rounded-xl p-2">
      <h2 className="font-bold text-sm md:text-2xl text-rose-100">Debes definir un clave API de Gemini válida</h2>
      <Link
        to="https://aistudio.google.com/apikey?hl=es-419"
        target="_blank"
        className="relative w-60 bg-rose-700 p-2 rounded-xl flex items-center gap-1 hover:scale-110 transition-all duration-300 ease-in overflow-hidden group"
      >
        <img src={geminiLogo} alt="Gemini logo" className="w-15 h-15 absolute -right-2 -rotate-15 grayscale group-hover:grayscale-0 group-hover:rotate-0 transition-all duration-1000"/>
        <p className="z-1 font-semibold">Solicitar clave API de Gemini</p>
      </Link>
      <Link
        to="/dashboard/settings"
        className="relative w-60 bg-primary-700 p-2 rounded-xl flex items-center gap-1 hover:scale-110 transition-all duration-300 ease-in overflow-hidden group"
      >
        <p className="z-1 font-semibold">Introducir clave API de Gemini</p>
      </Link>
    </div>
  )
}