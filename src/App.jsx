// Components
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {Navigation} from "./Navigation/Navigation.jsx";
// Style
import './assets/css/reset.css';
import './assets/css/fonts.css';

export default function App() {
  const router = createBrowserRouter(Navigation);

  return (
      <RouterProvider router={router} />
  )
}
