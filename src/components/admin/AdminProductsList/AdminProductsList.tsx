import { IProduct } from "../../../types/types";
import { AdminButton } from "../../UI/button/AdminButton";
import { AdminProductsListItem } from "../AdminProductsListItem/AdminProductsListItem";
import './AdminProductsList.css';

interface AdminProductsListProps {
    products: IProduct[],
    handleEdit: Function,
    handleDelete: Function
}

export const AdminProductsList: React.FC<AdminProductsListProps> = ({products, handleEdit, handleDelete}) => {
    return (
        <ul className="admin__list">
            {products.map(prod => 
                <AdminProductsListItem 
                    key={prod.barcode}
                    product={prod}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete} />
            )}
        </ul>
    )
}