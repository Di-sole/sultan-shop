import { IProduct } from "../../../types/types";
import { AdminButton } from "../../UI/button/AdminButton";
import './AdminProductsListItem.css';

interface AdminProductsListItemProps {
    product: IProduct,
    handleEdit: Function,
    handleDelete: Function
}

export const AdminProductsListItem: React.FC<AdminProductsListItemProps> = 
    ({product, handleEdit, handleDelete}) => {
    return (
        <li>
            <div className="admin__product">
                <img className="admin__product-image" src={product.img} alt="img"/>
                <div className="admin__product-info">
                    <h3 className="admin__product-title">{product.name}</h3>
                    <p><span>штрихкод: </span>{product.barcode}</p>
                    <p><span>производитель: </span>{product.manufacturer}</p>
                    <p><span>бренд: </span>{product.brand}</p>
                    <p><span>размер: </span>{product.size} {product.size_type}</p>
                    <p><span>цена: </span>{product.price} руб</p>
                </div>
                
                <div className="admin__product-actions">
                    <AdminButton onClick={() => handleEdit(product)}>
                        Редактировать
                    </AdminButton>
                    <AdminButton onClick={() => handleDelete(product)}>
                        Удалить
                    </AdminButton>
                </div>
            </div>
        </li>
    )
}