import {BrowserRouter,Routes, Route} from "react-router-dom"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login"
import Category from "./components/Category/Category";
import Registration from "./components/Login/Registration";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import About from './components/About/About'
import Feedback from './components/Feedback/Feedback'
import Success from './components/Feedback/Success'
import UnSuccess from './components/Feedback/UnSuccess'
import UpdateUser from "./components/Login/UpdateUser";
function App() {
    return(
        <BrowserRouter>
        <AppContext>
            
        <Header/>
        <Routes>
            <Route path="/" element={<Registration/>}/>
            <Route path="/logined" element={<Registration/>}/>
            <Route path="/home" element={<Home/>} />
            <Route path="/category/:id" element={<Category/>}/>
            <Route path="/product/:id" element={<SingleProduct/>}/>
            <Route path="/feedback" element={<Feedback/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/success" element={<Success/>}/>
            <Route path="/updateuser" element={<UpdateUser/>}/>
            <Route path="/success=false" element={<UnSuccess/>}/>
        </Routes>
        <Newsletter/>
        <Footer/>
        </AppContext>
        </BrowserRouter>
    )
}

export default App;

