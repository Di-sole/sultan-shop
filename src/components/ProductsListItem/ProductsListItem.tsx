import { NavLink } from 'react-router-dom';
import { Button } from '../UI/button/Button';
import { IProduct } from '../../types/types';
import cart from '../../img/icons/icon_cart.svg';
import './ProductsListItem.css';

interface ProductsListItemProps {
    product: IProduct,
    handleAdd: Function,
}

export const ProductsListItem: React.FC<ProductsListItemProps> = ({product, handleAdd}) => {
    return (
        <div className="product">
            <img className="product__image" src={product.img} alt="img"/>
            <div className="product__header">
                <span className="product__size">{product.size} {product.size_type}</span>
                <NavLink to={"/sultan-shop/product/" + product.barcode} data-testid="product-link">
                    <h3 className="product__title">{product.name}</h3>
                </NavLink>
            </div>
            <div className="product__info">
                <p><span>Штрихкод: </span>{product.barcode}</p>
                <p><span>Производитель: </span>{product.manufacturer}</p>
                <p><span>Бренд: </span>{product.brand}</p>
            </div>
            <div className="product__footer">
                <p className="product__price">{product.price} ₽</p>
                <Button type="button" shape="medium" onClick={() => handleAdd(product)}>
                    В корзину
                    <img src={cart} alt="" style={{marginLeft: "5px"}} />
                </Button>
            </div>
        </div>
    )
}

