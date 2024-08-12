import Home from "@/pages/home/home"
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import About from "./pages/team/team"
import Contact from "./pages/contact/contact"
import Layout from "./components/layout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/equipe" element={<About />} />
      <Route path="/contato" element={<Contact />} />
    </Route>
  )
)

export default router
