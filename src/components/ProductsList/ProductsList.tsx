import { useActions } from "../../hooks/useActions";
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

export const ProductsList: React.FC<ProductsListProps> = ({products, productsLimit = 100, page, handleAdd}) => {
    const { setCurrentPage } = useActions();

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
