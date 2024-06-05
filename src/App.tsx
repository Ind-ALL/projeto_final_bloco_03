import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/NavBar"
import Home from "./pages/home/Home"
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria"
import FormCategoria from "./components/categoria/formcategoria/FormCategoria"
import ListarCategorias from "./components/categoria/listacategoria/ListaCategoria"

function App() {

  return (
    <>
      <BrowserRouter>
                  <Navbar />
                  <div className='min-h-[80vh]'>
                  <Routes>
                          <Route path="/" element={<Home/>} />
                          <Route path="/home" element={<Home />} />
                          <Route path="/categoria" element={<ListarCategorias />} />
                          <Route path="/cadastrarcategoria" element={<FormCategoria />} />
                          <Route path="/editarcategoria/:id" element={<FormCategoria />} />
                          <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
 
                    </Routes>
                  </div>
                  <Footer />
              </BrowserRouter>
    </>
  )
}

export default App
