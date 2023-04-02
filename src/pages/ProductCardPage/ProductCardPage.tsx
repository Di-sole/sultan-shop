import { useParams } from "react-router-dom";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { IProduct } from "../../types/types";

interface ProductCardPageProps {
    product: IProduct
}

export const ProductCardPage: React.FC<ProductCardPageProps> = ({product}) => {
    const {barcode} = useParams();
    
    return (
        <main>
            <div className="container">
                <PageHeader pathes={[
                    {name: "Каталог", link: "/"}, 
                    {name: `${product.name}`, link: `/product/${barcode}`}
                ]}/>
                <ProductCard product={product} />
            </div>
        </main>
    )
}