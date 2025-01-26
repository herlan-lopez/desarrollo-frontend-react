import Home from "../../screens/Home"
import Product from "../../screens/Product"
import About from "../../screens/About"
import Think from "../../screens/Think"
import Counter from "../Counter/Counter"
import {Routes,Route} from "react-router"
import Login from "../../screens/Login"
import LandingPage from "../../screens/LandingPage"
const Router = () => {
  return (
    <>
       <Routes>
            <Route index element={<LandingPage/>} />
            <Route path="products" element={<Product />} />
            <Route path="think" element={<Think />} />
            <Route path="about" element={<About />} />
            <Route path="counter" element={<Counter />} />
            <Route path="login" element={<Login />} />
        </Routes>
    </>
  )
}

export default Router