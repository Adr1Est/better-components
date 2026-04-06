import { TriangleAlert } from "lucide-react"
import { Link } from "react-router"

export default function NotFoundPage() {
  return(
    <main className="min-h-screen flex flex-col justify-center items-center">

      <div className="flex flex-col gap-1 w-100 bg-surface-900 rounded-xl p-2 text-amber-500">

        <div className="flex flex-row items-center gap-2">
          <TriangleAlert size={60} />
          <p className="font-semibold text-5xl">Error 404</p>
        </div>
        
        <h1 className="font-semibold text-2xl">Página no encontrada!</h1>

        <Link 
          to="/chat"
          className="w-full flex items-center justify-center font-semibold text-sm bg-tertiary-800 hover:bg-amber-200 text-text-primary hover:text-amber-950 rounded-xl p-2"
        >
          VOLVER
        </Link>

      </div>

    </main>
  )
}