import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Main from './components/Cuerpo.jsx'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'


function App(){
 return (
    <>
        <NavBar/>
        <ItemListContainer greeting = "Bienvenido al tablero de invocadores"/>  
        <Header/>
        <Main/>
        <Footer/>
    </>
    )
}

export default App
