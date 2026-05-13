import NavBar from "@/components/Chat/NavBar";
import OnboardingModal from "@/components/shared/OnboardingModal";
import { Outlet } from "react-router";

export default function ChatPage() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-2 p-2">
      <NavBar />
      <Outlet />
      <OnboardingModal />
    </div>
  )
}