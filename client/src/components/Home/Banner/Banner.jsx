import "./Banner.scss";
import BannerImg from "../../../assets/INTERIOR.png";
const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>
                A little preview of Livspace homes · Design a Compact Apartment - Livspace. Vibrant, compact home 
                </p>
                <div className="ctas">
                
                 <div className="banner-cta">Read More</div>
                 <div className="banner-cta v2">Shop Now</div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="" />
        </div>
    </div>;
};

export default Banner;
