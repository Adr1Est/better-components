import { createBrowserRouter } from "react-router";
import App from "@/App";
import ProtectedRoute from "@/components/shared/ProtectedRoute";
import ChatList from "@/components/Chat/ChatList";
import LoginPage from "@/page/LoginPage";
import SignUpPage from "@/page/SignUpPage";
import ChatPage from "@/page/ChatPage";
import NewChatPage from "@/page/NewChatPage";
import ChatDetailPage from "@/page/ChatDetailPage";
import NotFoundPage from "@/page/NotFoundPage";
import ProfilePage from "@/page/ProfilePage";
import SettingsPage from "@/page/SettingsPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: LoginPage },
      { path: "signup", Component: SignUpPage },
      {
        Component: ProtectedRoute,
        children: [
          { 
            path: "/dashboard", 
            Component: ChatPage, 
            children: [
              { index: true, Component: ChatList },
              { path: "chat/:id", Component: ChatDetailPage },
              { path: "chat/new", Component: NewChatPage },
              { path: "profile", Component: ProfilePage },
              { path: "settings", Component: SettingsPage },
            ]
          },
        ],
      },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);

export default router;