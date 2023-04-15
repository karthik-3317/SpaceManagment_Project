import { Outlet,Navigate} from "react-router-dom";
import jwt_decode from "jwt-decode";
const PrivateRoutes=()=>{
    let auth=localStorage.getItem("token")
    console.log(auth);
       if (auth != null) {
    const decoded = jwt_decode(auth);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      // Token is expired
      localStorage.removeItem("token");
      localStorage.removeItem("user")
      
      return <Navigate to="/login" />;
    } else {
      // Token is valid
      return <Outlet />;
    }
  }
     else{
        return(
            <Navigate to='/login'/>
        )
     }
}   
export default PrivateRoutes