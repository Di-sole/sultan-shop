import { Button } from '../UI/button/Button';
import { IProduct } from '../../types/types';
import { NavLink } from 'react-router-dom';
import cart from '../../img/icons/icon_cart.svg';
import './ProductsListItem.css';

interface ProductsListItemProps {
    product: IProduct,
    handleAdd: Function,
    onClick?: Function
}

export const ProductsListItem: React.FC<ProductsListItemProps> = ({product, handleAdd, onClick}) => {
    return (
        <div className="product">
            <img className="product__image" src={product.img} alt="img"/>
            <div className="product__header">
                <span className="product__size">{product.size} {product.size_type}</span>
                <NavLink to={"/product/" + product.barcode}>
                    <h3 className="product__title">{product.name}</h3>
                </NavLink>
                {/* <h3 className="product__title" onClick={() => onClick(product)}>{product.name}</h3> */}
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

