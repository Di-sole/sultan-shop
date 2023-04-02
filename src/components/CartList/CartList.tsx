import { useTypedSelector } from '../../hooks/useTypedSelector';
import { CartListItem } from '../CartListItem/CartListItem';
import { Button } from '../UI/button/Button';
import { ISelectedProduct } from '../../types/types';
import './CartList.css';

interface CartListProps {
    products: ISelectedProduct[], 
    handleConfirm: Function
}

export const CartList: React.FC<CartListProps> = ({products, handleConfirm}) => {
    const total = useTypedSelector(state => state.cart.totalPrice);

    return (
        <div className="cart-list">
            <div className="cart-list__products">
                {products.map(product => 
                    <CartListItem 
                        key={product.item.barcode} 
                        product={product} />
                )}
            </div>
            <div className="cart-list__footer">
                    <Button type="button" shape="big" onClick={() => handleConfirm()}>
                        Оформить заказ
                    </Button>
                    <p className="cart__total">{total + " ₽"}</p>
            </div>
        </div>
    )
}