import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {Navigation} from "./Navigation/Navigation.jsx";


export default function App() {
  const router = createBrowserRouter(Navigation);

  return (
      <RouterProvider router={router} />
  )
}
