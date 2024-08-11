import Home from "@/pages/home/home"
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route path="/" element={<Home/>}/>
    </Route>
  )
)

export default router
