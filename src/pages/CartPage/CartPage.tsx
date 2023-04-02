import { PageHeader } from "../../components/PageHeader/PageHeader";
import { CartList } from "../../components/CartList/CartList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useAction } from "../../hooks/useActions";

export const CartPage: React.FC = () => {
    const products = useTypedSelector(state => state.cart.selectedProducts);
    const {confirmPurchase} = useAction();

    const handleConfirm = () => {
        confirmPurchase();
    }

    return (
        <main>
            <div className="container">
                <PageHeader 
                    title="Корзина"
                    pathes={[{name: "Корзина", link: "/cart"}]}/>
                {products.length > 0 
                    ? <CartList products={products} handleConfirm={handleConfirm} />
                    : <div className="cart_empty">В корзине пока ничего нет</div>
                }
            </div>
        </main>
    )
}