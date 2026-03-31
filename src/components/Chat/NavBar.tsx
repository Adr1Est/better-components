import { LogOut, User, Settings, Sparkles, TriangleAlert } from "lucide-react";
import NavButton from "@/components/Chat/NavButton";
import { Link, useNavigate } from "react-router";
import NavLink from "@/components/Chat/NavLink";
import { logout } from "@/services/auth";
import axios from "axios";
import CustomText from "@/components/shared/CustomText";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useLogInInfo } from "@/store";
import MiniLoader from "@/components/shared/MiniLoader";

export default function NavBar() {
  const links = [
    { id: "link01", url: "/profile", icon: User, label: "Perfil", },
    { id: "link02", url: "/settings", icon: Settings, label: "Ajustes", },
  ];

  const navigate = useNavigate();

  const userId = useLogInInfo((state) => state.userId);
  const { data: user, isLoading, isError } = useUserInfo(userId);

  const handleLogOut = async () => {
    try {
      const data = await logout();
      console.log(data.msg);
      navigate("/");
    } catch (error) {
      if(axios.isAxiosError(error)){
        console.log(error.response?.data.msg);
      }
    }
  }

  return (
    <nav className="sticky top-1 w-full bg-surface-800 rounded-xl p-3 h-15 flex items-center justify-between">
      <Link 
        className="flex flex-row gap-1 items-center group"
        to={"/chat"}
      >
        <Sparkles size={25} className="group-hover:text-secondary-200 transition-colors duration-200"/>
        <h1 className="text-xl font-semibold group-hover:text-secondary-400 transition-colors duration-200">
          Better Components
        </h1>
      </Link>
      
      <div className="flex flex-row items-center gap-5">
        {
          isLoading 
          ? <MiniLoader /> 
          : isError
            ? <TriangleAlert />
            : <p>Bienvenido <CustomText text={user?.user.username}/>!</p>
        }
        
        {
          links.map(l => (
            <NavLink
              key={l.id}
              to={l.url}
              icon={l.icon}
              label={l.label}
            />
          ))
        }
        <NavButton 
          icon={LogOut}
          label="Cerrar sesión"
          handleClick={handleLogOut}
        />
      </div>
      
    </nav>
  )
}