import { useNavigate } from "react-router-dom";
import { useAction } from "../../hooks/useActions";
import { getProductsForPage } from "../../utils/utils";
import { ProductsListItem } from "../ProductsListItem/ProductsListItem";
import { Pagination } from "../UI/pagination/Pagination";
import { IProduct } from "../../types/types";
import './ProductsList.css';

interface ProductsListProps {
    products: IProduct[],
    productsLimit: number,
    page: number,
    handleAdd: Function
}

export const ProductsList: React.FC<ProductsListProps> = ({products, productsLimit, page, handleAdd}) => {
    const navigate = useNavigate();
    const {setCurrentPage} = useAction();

    const productsForPage: IProduct[] = getProductsForPage(page, productsLimit, products);

    const handleChangePage = (e: any) => {
        setCurrentPage(e.target.textContent);
    }

    return (
        <div className="wrapper_products-list">
            <div className="products-list">
                {productsForPage.map(product => 
                    <ProductsListItem 
                        key={product.barcode} 
                        product={product}
                        // onClick={(product: IProduct) => navigate('/product/' + product.barcode)}
                        handleAdd={handleAdd} />
                )}
            </div>
            <Pagination 
                totalProducts={products.length}
                limit={productsLimit}
                page={page}
                changePage={handleChangePage} />    
        </div>
    )
}
