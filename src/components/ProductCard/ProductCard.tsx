import { useState } from 'react';
import { Button } from "../UI/button/Button";
import { Spoiler } from "../UI/spoiler/Spoiler";
import { CountBar } from "../UI/CountBar/CountBar";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { IProduct } from "../../types/types";
import cart from "../../img/icons/icon_cart.svg";
import "./ProductCard.css";

interface ProductCardProps {
    product: IProduct
}

export const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    const selectedProducts = useTypedSelector(state => state.cart.selectedProducts);
    const { increaseCount, addToCart } = useActions();
    const [count, setCount] = useState<number>(1);
    
    const handleAdd = (product: IProduct) => {
        const existed = selectedProducts.find(p => p.item.barcode == product.barcode);

        if (existed) {
            for (let i = 0; i < count; i++) {
                increaseCount({item: product});
            }
        } else {
            addToCart({item: product, count: count});
        }
    }

    const handleIncrease = (count: number) => {
        setCount(count + 1);
    }

    const handleDecrease = (count: number) => {
        if (count == 1) return;
        setCount(count - 1);
    }

    return (
        <div className="product-card">
            <div className="product-card__wrapper">
                <img className="product-card__image" src={product.img} alt="img" />
                <div className="product-card__content">
                    <h3 className="product-card__title">{product.name}</h3>
                    <p className="product-card__size">{product.size} {product.size_type}</p>
                    <div className="product-card__actions">
                        <p className="product-card__price">{Number(product.price) * count} ₽</p>
                        <CountBar 
                            handleIncrease={handleIncrease} 
                            handleDecrease={handleDecrease} 
                            count={count}
                        />
                        <Button shape="big" type="button" onClick={() => handleAdd(product)}>
                            В корзину
                            <img src={cart} alt="" style={{marginLeft: "5px"}} />
                        </Button>
                    </div>

                    <div className="product-card__info">
                        <p><span>Производитель: </span>{product.manufacturer}</p>
                        <p><span>Бренд: </span>{product.brand}</p>
                        <p><span>Штрихкод: </span>{product.barcode}</p>
                        <Spoiler title="Описание">
                            <div className="product-card__description">{product.description}</div> 
                        </Spoiler>
                        <Spoiler title="Характеристики">
                            <p><span>Тип: </span>{product.category[0]}</p>
                            <p><span>Производитель: </span>{product.manufacturer}</p>
                            <p><span>Бренд: </span>{product.brand}</p>
                            <p><span>Штрихкод: </span>{product.barcode}</p>
                            <p><span>Вес: </span>{product.size} {product.size_type}</p>
                            <p><span>Объем: </span>{product.size} {product.size_type}</p>
                        </Spoiler>
                    </div>
                </div>
            </div>
        </div>
    )
}