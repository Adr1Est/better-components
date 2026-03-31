import { createBrowserRouter } from "react-router";
import App from "@/App";
import ProtectedRoute from "@/components/shared/ProtectedRoute";
import ChatList from "@/components/Chat/ChatList";
import LoginPage from "@/page/LoginPage";
import SignUpPage from "@/page/SignUpPage";
import ChatPage from "@/page/ChatPage";
import NewChatPage from "@/page/NewChatPage";
import ChatDetailPage from "@/page/ChatDetailPage";

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
          { path: "/chat", 
            Component: ChatPage, 
            children: [
              { index: true, Component: ChatList },
              { path: ":id", Component: ChatDetailPage },
              { path: "new", Component: NewChatPage },
            ]},
        ],
      },
    ],
  },
]);

export default router;