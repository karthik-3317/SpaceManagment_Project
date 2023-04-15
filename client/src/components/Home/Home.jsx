import "./Home.scss";
import { useEffect ,useContext} from "react";
import Banner from "./Banner/Banner";
import Products from "../Products/Products";
import { Context } from "../../utils/context";

import Category from "./Category/Category";
import { fetchDataFromApi } from "../../utils/api";
const Home = () => {

    const {categories,setCategories,products,setProducts} = useContext(Context);
    useEffect (()=>{
        getProducts()
        getCategories()
    },[]);

    const getProducts = ()=>{
        fetchDataFromApi("/api/products?populate=*").then(res =>{
            setProducts(res);
        })
        } 

    const getCategories = ()=>{
    fetchDataFromApi("/api/categories?populate=*").then(res =>{
        setCategories(res);
    })
    }
    if(categories != null) {
    return <div className="home">
        <Banner/>
        <div className="main-content">
            <div className="layout">
            <Category categories={categories}/>
            <Products products ={products} headingText="Popular Products"/>
            </div>
        </div>
        </div>;
    }
};

export default Home;
