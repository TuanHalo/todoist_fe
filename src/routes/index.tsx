import { MainLayout } from "@/components";
import { Home } from "@/pages";

export const routers = [
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
    ],
  },
];
