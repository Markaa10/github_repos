import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages";

export default function App() {
  const router = createBrowserRouter([
    {
      index: true,
      path: "/",
      element: <HomePage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
