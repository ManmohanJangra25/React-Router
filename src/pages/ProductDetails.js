import { useParams } from "react-router-dom";

function ProductDetailsPage() {

    const params = useParams();

    return (
        <>
            <h1>This Is Product Details Page</h1>
            <p>{params.productId}</p>
        </>
    );
}
export default ProductDetailsPage;