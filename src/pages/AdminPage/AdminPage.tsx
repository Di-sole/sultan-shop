import { Breadcrumbs } from "../../components/UI/breadcrumbs/Breadcrumbs";
import json from "../../json";
import { IProduct } from "../../types/types";
import './AdminPage.css';

export const AdminPage = () => {
    const products: IProduct[] = JSON.parse(json);

    const handleEdit = (product: IProduct) => {

    }

    const handleDelete = (product: IProduct) => {

    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    return (
        <main>
            <div className="container">
                <Breadcrumbs pathes={[{name: "Каталог", link: "/"}]} />
                <div className="admin-page__content">
                    <div className="admin__products">
                        <h2 className="admin__list-title">Список товаров</h2>
                        <ul className="admin__list">
                            {products.map(prod => 
                                <li key={prod.barcode}>
                                    <div className="admin__product">
                                        <img className="admin__product-image" src={prod.img} alt="img"/>
                                        <h3 className="admin__product-title">{prod.name}</h3>
                                        <div className="admin__product-actions">
                                            <button 
                                                className="admin__btn admin__btn_edit"
                                                type="button"
                                                onClick={() => handleEdit(prod)}
                                            >
                                                Редактировать
                                            </button>
                                            <button 
                                                className="admin__btn admin__btn_delete"
                                                type="button"
                                                onClick={() => handleDelete(prod)}
                                            >
                                                Удалить
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className="admin__product-add">
                        <h2 className="admin__form-title">Добавить товар</h2>
                        <form className="admin__form">
                            <label>
                                <span>Название товара</span>
                                <input type="text" />
                            </label>
                            <label>
                                <span>URL изображения</span>
                                <input type="text" />
                            </label>
                            <label>
                                <span>Штрихкод</span>
                                <input type="number" />
                            </label>
                            <label className="label_select">
                                <span>Тип объема</span>
                                <select name="size_type" id="size_type">
                                    <option value="г">грамм</option>
                                    <option value="мл">миллилитр</option>
                                </select>
                            </label>
                            <label>
                                <span>Объем</span>
                                <input type="number" />
                            </label>
                            <label>
                                <span>Производитель</span>
                                <input type="text" />
                            </label>
                            <label>
                                <span>Бренд</span>
                                <input type="text" />
                            </label>
                            <label>
                                <span>Описание</span>
                                <textarea name="description" id="description" rows={1}></textarea>
                            </label>
                            <label>
                                <span>Цена</span>
                                <input type="number" />
                            </label>
                            <label className="label_select">
                                <span>Категория</span>
                                <select name="category" id="category">
                                    <option value="Кремы, лосьоны, масла">Кремы, лосьоны, масла</option>
                                    <option value="Эпиляция и депиляция">Эпиляция и депиляция</option>
                                    <option value="Средства для ванны и душа">Средства для ванны и душа</option>
                                    <option value="Гели для душа">Гели для душа</option>
                                    <option value="Скрабы, пилинги">Скрабы, пилинги</option>
                                    <option value="Мочалки и губки для тела">Мочалки и губки для тела</option>
                                    <option value="Интимный уход">Интимный уход</option>
                                    <option value="Дезодоранты, антиперспиранты">Дезодоранты, антиперспиранты</option>
                                </select>
                            </label>
                            <button
                                className="admin__btn admin__btn_delete"
                                type="button"
                                onClick={(e) => handleSubmit(e)}
                            >
                                Добавить товар
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}