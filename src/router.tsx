import { createBrowserRouter } from "react-router";
import App from "@/App";
import ProtectedRoute from "@/components/shared/ProtectedRoute";
import LoginPage from "@/page/LoginPage";
import SignUpPage from "@/page/SignUpPage";
import ChatPage from "@/page/ChatPage";
import ChatList from "@/components/Chat/ChatList";

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
            ]},
        ],
      },
    ],
  },
]);

export default router;