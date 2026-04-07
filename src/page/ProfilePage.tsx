import CustomTextField from "@/components/shared/CustomTextField";
import FullScreenLoader from "@/components/shared/FullScreenLoader";
import { useUserInfo } from "@/hooks/useUserInfo"
import { useLogInInfo } from "@/store"
import { Link } from "react-router";

export default function ProfilePage() {
  const userId = useLogInInfo((state) => state.userId);
  const { data, isLoading, isError } = useUserInfo(userId);
  
  if(isLoading || isError) return <FullScreenLoader />

  return (
    <main className="w-full flex-1 flex justify-center items-start">
      <div className="w-full md:w-200 items-center flex flex-col gap-2 mt-3">
        <div className="w-full flex flex-col md:flex-row gap-2">
          <CustomTextField label="EMAIL" data={data.user.email} disabled />
          <CustomTextField label="NOMBRE_DE_USUARIO" data={data.user.username} disabled />
        </div>
        {
          data.user.apiKey
            ? <CustomTextField label="API_KEY" data={data.user.apiKey} disabled />
            : (
                <Link
                  to={"/dashboard/settings"}
                  className="group bg-red-800 p-4 rounded-xl w-full text-center hover:bg-red-700 transition-colors duration-300"
                >
                  <p className="group-hover:scale-105 transition-transform duration-300 font-semibold">Introduce una Api Key de Gemini válida</p>
                </Link>
              )
        }
      </div>
    </main>
  )
}