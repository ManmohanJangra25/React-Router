import { Link } from "react-router-dom";

function HomePage(){
    return(
        <>
            <h1>My Home Page</h1>
            <p>Go To <Link to="/products">Products</Link></p>
        </>
    )
}

export default HomePage;