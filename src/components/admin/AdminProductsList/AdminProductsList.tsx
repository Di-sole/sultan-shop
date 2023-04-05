import { IProduct } from "../../../types/types";
import { AdminButton } from "../../UI/button/AdminButton";
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
                <li key={prod.barcode}>
                    <div className="admin__product">
                        <img className="admin__product-image" src={prod.img} alt="img"/>
                        <div className="admin__product-info">
                            <h3 className="admin__product-title">{prod.name}</h3>
                            <p><span>штрихкод: </span>{prod.barcode}</p>
                            <p><span>производитель: </span>{prod.manufacturer}</p>
                            <p><span>бренд: </span>{prod.brand}</p>
                            <p><span>размер: </span>{prod.size} {prod.size_type}</p>
                            <p><span>цена: </span>{prod.price} руб</p>
                        </div>
                        
                        <div className="admin__product-actions">
                            <AdminButton onClick={() => handleEdit(prod)}>
                                Редактировать
                            </AdminButton>
                            <AdminButton onClick={() => handleDelete(prod)}>
                                Удалить
                            </AdminButton>
                        </div>
                    </div>
                </li>
            )}
        </ul>
    )
}