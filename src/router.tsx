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
            path: "/chat", 
            Component: ChatPage, 
            children: [
              { index: true, Component: ChatList },
              { path: ":id", Component: ChatDetailPage },
              { path: "new", Component: NewChatPage },
            ]
          },
          {
            path: "/profile", Component: ProfilePage,
          }
        ],
      },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);

export default router;