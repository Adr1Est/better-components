import { createBrowserRouter } from "react-router";
import App from "@/App";
import LoginPage from "@/page/LoginPage";
import SignUpPage from "@/page/SignUpPage";
import TestPage from "@/page/TestPage";

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
      {
        path: "test",
        Component: TestPage,
      },
    ],
  },
]);

export default router;