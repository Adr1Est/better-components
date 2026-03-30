import { createBrowserRouter } from "react-router";
import App from "@/App";
import LoginPage from "@/page/LoginPage";
import SignUpPage from "@/page/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: LoginPage,
      },
      {
        path: "signup",
        Component: SignUpPage,
      },
    ],
  },
]);

export default router;