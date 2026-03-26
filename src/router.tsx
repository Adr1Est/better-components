import { createBrowserRouter } from "react-router";
import App from "@/App";
import LoginPage from "@/page/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: LoginPage,
      },
    ],
  }
]);

export default router;