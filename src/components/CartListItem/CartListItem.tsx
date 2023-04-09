import { useActions } from '../../hooks/useActions';
import { Button } from '../UI/button/Button';
import { CountBar } from '../UI/CountBar/CountBar';
import { ISelectedProduct } from '../../types/types';
import clear from '../../img/icons/icon_clear.svg';
import './CartListItem.css';

interface CartListItemProps {
    product: ISelectedProduct
}

export const CartListItem: React.FC<CartListItemProps> = ({product}) => {
    const {increaseCount, decreaseCount, removeFromCart} = useActions()
    
    const name: string = product.item.name.length > 50 
        ? product.item.name.slice(0, 50) + '...' 
        : product.item.name;
    const description: string = product.item.description.length > 150 
        ? product.item.description.slice(0, 120) + '...' 
        : product.item.description;

    const handleIncrease = () => {
        increaseCount(product);
    }

    const handleDecrease = (count: number | string) => {
        if (Number(count) > 1) {
            decreaseCount(product);
        } else {
            removeFromCart(product);
        }
    }

    const handleRemove = (product: ISelectedProduct) => {
        removeFromCart(product);
    }

    return (
        <div className="cart-item">
            <img className="cart-item__image" src={product.item.img} alt="img"/>
            <div className="cart-item__info">
                <span className="cart-item__size">{product.item.size} {product.item.size_type}</span>
                <h3 className="cart-item__title">{name}</h3>
                <p className="cart-item__description">{description}</p>
            </div>
            <CountBar 
                handleIncrease={handleIncrease} 
                handleDecrease={handleDecrease} 
                count={product.count}
            />
            <p className="cart-item__price">{Number(product.item.price) * Number(product.count)} ₽</p>
            <Button type="button" shape="circular" onClick={() => handleRemove(product)}>
                <img src={clear} alt="" />
            </Button>
        </div>
    )
}