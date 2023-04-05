import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import cart_dark from '../../img/icons/icon_cart_dark.svg';
import './CartWidget.css';

export const CartWidget = () => {
    const total = useTypedSelector(state => state.cart.totalPrice);
    const count = useTypedSelector(state => state.cart.selectedProducts).length;

    return (
        <NavLink to="/sultan-shop/cart">
            <div className="cart-widget">
                <div className="cart-widget__image">
                    <img src={cart_dark} alt="" />
                    <div className="cart-widget__count">{count}</div>
                </div>
                <div>
                    <p className="light-gray">Корзина</p>
                    <p className="cart-widget__total">{total + " ₽"}</p>
                </div>
            </div>
        </NavLink>
    )
}