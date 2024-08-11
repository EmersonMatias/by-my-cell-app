import Home from "@/pages/home/home"
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Header from "./components/header"
import About from "./pages/team/team"
import Contact from "./pages/contact/contact"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Header />}>
      <Route path="/" element={<Home />} />
      <Route path="/equipe" element={<About />} />
      <Route path="/contato" element={<Contact />} />
    </Route>
  )
)

export default router
