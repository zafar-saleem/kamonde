import { useRoutes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { FrameworksPage } from "./pages/FrameworksPage";
import { ModelerPage } from "./pages/ModelerPage";

export const Routes = () => {
  const element = useRoutes([
    { path: "/",
      element: <HomePage />,
    },
    { path: "/frameworks",
      element: <FrameworksPage />,
    },
    { path: "/modeler",
      element: <ModelerPage />,
    },
  ]);
  return element;
}
