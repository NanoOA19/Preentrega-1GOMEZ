import CartWidget from "../components/CartWidget"

function NavBar() {
    return (
        <nav className="bg-red-500 flex justify-center space-x-4" >
            <a className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" href='#'>Home</a>
            <a className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" href='#'>Chibis</a>
            <a className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" href='#'>Destacados</a>
            <CartWidget/>
        </nav>
    )
}

export default NavBar


