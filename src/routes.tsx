import { useRoutes } from "react-router-dom";
import { HomePage } from "./pages/home/home";
import { FrameworksPage } from "./pages/frameworks/frameworks";

export const Routes = () => {
  const element = useRoutes([
    { path: "/",
      element: <HomePage />,
    },
    { path: "/frameworks",
      element: <FrameworksPage />,
    },
  ]);
  return element;
}
