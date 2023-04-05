import { useState } from "react";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { CartList } from "../../components/CartList/CartList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useAction } from "../../hooks/useActions";
import { Modal } from "../../components/UI/Modal/Modal";
import './CartPage.css';

export const CartPage: React.FC = () => {
    const products = useTypedSelector(state => state.cart.selectedProducts);
    const { confirmPurchase } = useAction();
    const [modal, setModal] = useState(false);

    const handleConfirm = () => {
        confirmPurchase();
        setModal(true);
        setTimeout(() => setModal(false), 2000);
    }

    return (
        <main>
            <div className="container">
                <PageHeader 
                    title="Корзина"
                    pathes={[{name: "Корзина", link: "/sultan-shop/cart"}]}
                />
                {products.length > 0 
                    ? <CartList products={products} handleConfirm={handleConfirm} />
                    : <div className="cart_empty">В корзине пока ничего нет</div>
                }
                <Modal visible={modal} setVisible={setModal}>
                    <div className="thanks-message">
                        <p className="thanks-message__title">Спасибо за заказ</p>
                        <p className="thanks-message__content">Наш менеджер свяжется с вами в ближайшее время</p>
                    </div>
                </Modal>
            </div>
        </main>
    )
}