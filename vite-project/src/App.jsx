import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import {BrowserRouter} from 'react-router-dom'
import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home.jsx"
import Categorias from "./components/pages/Categorias.jsx"
import Destacado from "./components/pages/Destacado.jsx"
import Carrito from "./components/pages/Carrito.jsx"

function App(){
 return (
    <BrowserRouter>
        <NavBar/>
        <ItemListContainer greeting = "Bienvenido al tablero de invocadores"/>  
        <Header/>
        <Footer/>
        <Routes>
            <Route path="/Home" element={Home}/>

            <Route path="/Categorias" element={Categorias}/>

            <Route path="/Destacados" element={Destacado}/>

            <Route path="/Carrito" element={Carrito}/>

            <Route path="*" element={alert("400")}/>

        </Routes>
    </BrowserRouter>
    )
}

export default App
