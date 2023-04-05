import { useParams } from "react-router-dom";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export const ProductCardPage: React.FC = () => {
    const { barcode } = useParams();
    const { products } = useTypedSelector(state => state.products);
    const product = products.find(p => p.barcode === barcode);
    
    return (
        <main>
            <div className="container">
                <PageHeader pathes={[
                    {name: "Каталог", link: "/sultan-shop/"}, 
                    {name: `${product.name}`, link: `/sultan-shop/product/${barcode}`}
                ]}/>
                <ProductCard product={product} />
            </div>
        </main>
    )
}