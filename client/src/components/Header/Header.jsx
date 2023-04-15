import "./Header.scss";
import { useEffect,useState,useContext } from "react";
import {useNavigate} from "react-router-dom";

import {TbSearch} from "react-icons/tb";
import {CgShoppingCart} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";

import  Search  from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";


const Header = () => {
    const [scrolled ,setScrolled]=useState(false);
    const [showCart ,setshowCart]=useState(false);
    const [showSearch ,setshowSearch]=useState(false);
    const {cartCount,headerShow,loginstatus, setHeaderShow,setLoginStatus}  =useContext(Context);
    const navigate=useNavigate();
    const handleScroll=()=>{
        const offset=window.scrollY
        if(offset>200)
        {
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    }
    useEffect(()=>{
      window.addEventListener("scroll",handleScroll);
    },[]);
    return (
    <>
    <header className={`main-header ${scrolled ? "sticky-header":''}`}>
        <div className="header-content">
            { ( headerShow ===true) && <ul className="left">
                <li onClick={()=>navigate('/home')}>Home</li>
                <li onClick={()=>navigate('/about')}>About</li>
                <li onClick={()=>navigate('/feedback')}>FeedBack</li>
                <li onClick={()=>{setHeaderShow(false)
                navigate('/logined')}}>{loginstatus}</li>
            </ul>}
            <div className="center" onClick={()=>navigate('/home')}>Space Management</div>
            { ( headerShow ===true) && <div className="right">
                <TbSearch onClick={()=>setshowSearch(true)}/>
                {/* <AiOutlineHeart/> */}
                <span className="cart-icon" onClick={()=>setshowCart(true)}>
                    <AiOutlineHeart />
                   {!!cartCount && <span>{cartCount}</span>}
                </span>
                <span onClick={()=>navigate('/updateuser')} style={{cursor:"pointer"}}>up</span>
            </div>}
        </div>
    </header>
    {showCart && <Cart setshowCart={setshowCart}/>}
    {showSearch && <Search setshowSearch={setshowSearch}/>} 
   </>
    );
};

export default Header;
