import { NavLink } from "react-router-dom"
import CartWidget from "../components/CartWidget"

function NavBar() {
    return (
        <nav className="bg-red-500 flex justify-center space-x-4" >
            <NavLink className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" to='/Home'>Home</NavLink>
            <NavLink className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" to='/Categorias'>Chibis</NavLink>
            <NavLink className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" to='/Destacado'>Destacados</NavLink>
            <NavLink className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" to='/Carrito'><CartWidget/></NavLink>
        </nav>
    )
}

export default NavBar


