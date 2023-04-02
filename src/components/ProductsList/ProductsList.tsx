import { useNavigate } from "react-router-dom";
import { ProductsListItem } from "../ProductsListItem/ProductsListItem";
// import { Pagination } from "../UI/pagination/Pagination";
import { IProduct } from "../../types/types";
import './ProductsList.css';

interface ProductsListProps {
    products: IProduct[],
    handleAdd: Function
}

export const ProductsList: React.FC<ProductsListProps> = ({products, handleAdd}) => {
    const navigate = useNavigate()

    return (
        <div className="wrapper_products-list">
            <div className="products-list">
                {products.map(product => 
                    <ProductsListItem 
                        key={product.barcode} 
                        product={product}
                        onClick={(product: IProduct) => navigate('/products/' + product.barcode)}
                        handleAdd={handleAdd} />
                )}
            </div>
            {/* <Pagination totalPages="5" page="1" />     */}
        </div>
    )
}
