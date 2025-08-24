import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Networks from "./pages/Networks";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'networks',
        Component: Networks,
      },
    ],
  },
]);

createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
