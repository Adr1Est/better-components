import { createBrowserRouter } from "react-router";
import App from "@/App";
import ProtectedRoute from "@/components/shared/ProtectedRoute";
import LoginPage from "@/page/LoginPage";
import SignUpPage from "@/page/SignUpPage";
import TestPage from "@/page/TestPage";
import ChatPage from "@/page/ChatPage";

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
          { path: "/test", Component: TestPage },
          { path: "/chat", Component: ChatPage },
        ],
      },
    ],
  },
]);

export default router;