import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "../components/ItemDetailContainer"
import Error from "../views/Error"
import Home from "../views/Home"
import Layout from "../views/Layout"


const Rutas = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Acá deben ir todas las páginas o vistas que se van a cargar en el Layout */}
          <Route index element={<Home />} />
          <Route path="/item-detail/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default Rutas