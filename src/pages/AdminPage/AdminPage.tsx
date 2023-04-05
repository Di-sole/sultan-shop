import json from "../../json";
import { IProduct } from "../../types/types";

export const AdminPage = () => {
    const products: IProduct[] = JSON.parse(json);

    return (
        <main>
            <div className="admin__products">
                <ul className="admin__list">
                    {products.map(prod => 
                        <li>
                            <div className="admin__product">
                                <img className="admin__product-image" src={prod.img} alt="img"/>
                                <h3 className="admin__product-title">{prod.name}</h3>
                                <div className="admin__product-actions">
                                    <button className="admin__btn admin__btn_redact">Редактировать</button>
                                    <button className="admin__btn admin__btn_delete">Удалить</button>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </main>
    )
}