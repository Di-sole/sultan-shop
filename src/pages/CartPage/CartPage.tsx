import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { CartList } from "../../components/CartList/CartList";
import { Modal } from "../../components/UI/Modal/Modal";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import './CartPage.css';

export const CartPage: React.FC = () => {
    const products = useTypedSelector(state => state.cart.productsInCart);
    const { confirmPurchase } = useActions();
    const [modal, setModal] = useState(false);

    const handleConfirm = () => {
        confirmPurchase();
        setModal(true);
        setTimeout(() => setModal(false), 2000);
    }

    return (
        <>
            <Header />
            <main data-testid="cart-page">
                <div className="container">
                    <PageHeader 
                        title="Корзина"
                        pathes={[{name: "Каталог", link: "/sultan-shop/"}, {name: "Корзина", link: "/sultan-shop/cart"}]}
                    />
                    {products.length > 0 
                        ? <CartList products={products} handleConfirm={handleConfirm} />
                        : <div className="cart_empty">В корзине пока ничего нет</div>
                    }
                    <Modal visible={modal}>
                        <div className="thanks-message">
                            <p className="thanks-message__title">Спасибо за заказ</p>
                            <p className="thanks-message__content">Наш менеджер свяжется с вами в ближайшее время</p>
                        </div>
                    </Modal>
                </div>
            </main>
            <Footer />
        </>
    )
}