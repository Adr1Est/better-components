import NavBar from "@/components/Chat/NavBar";
import { Outlet } from "react-router";

export default function ChatPage() {
  return (
    <div className="min-h-screen w-full p-1">
      <NavBar />
      <Outlet />
    </div>
  )
}