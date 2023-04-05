import { IProduct } from "../../../types/types";
import { AdminButton } from "../../UI/button/AdminButton";
import './AdminForm.css';

interface AdminFormProps {
    handleSubmit: Function,
    handleCancel: Function,
    edited?: IProduct | null
}

export const AdminForm: React.FC<AdminFormProps> = ({handleSubmit, handleCancel, edited}) => {
    return (
        <div className="form__wrapper">
            <h2 className="admin__form-title">{edited ? "редактировать товар" : "добавить товар"}</h2>
            <form className="admin__form" name={edited ? 'edit' : 'add'}>
                <label>
                    <span>Название товара</span>
                    <input type="text" name="prodName" id="prodName" defaultValue={edited?.name} required />
                </label>
                <label>
                    <span>URL изображения</span>
                    <input type="text" name="img_url" id="img_url" defaultValue={edited?.img} required />
                </label>
                <label>
                    <span>Штрихкод</span>
                    <input type="number" name="barcode" id="barcode" defaultValue={edited?.barcode} required />
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
                    <input type="number" name="size" id="size" defaultValue={edited?.size} required />
                </label>
                <label>
                    <span>Производитель</span>
                    <input type="text" name="manufacturer" id="manufacturer" defaultValue={edited?.manufacturer} required />
                </label>
                <label>
                    <span>Бренд</span>
                    <input type="text" name="brand" id="brand" defaultValue={edited?.brand} required />
                </label>
                <label>
                    <span>Цена</span>
                    <input type="number" name="price" id="price" defaultValue={edited?.price} required />
                </label>
                <label>
                    <span>Описание</span>
                    <textarea name="description" id="description" rows={5}  defaultValue={edited?.description} required></textarea>
                </label>
                <label className="label_select">
                    <span>Категория</span>
                    <select name="category" id="category" multiple>
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
                {edited
                    ? <AdminButton onClick={handleSubmit}>Сохранить изменения</AdminButton>
                    : <AdminButton onClick={handleSubmit}>Добавить товар</AdminButton>
                }
                <AdminButton onClick={handleCancel}>Отмена</AdminButton>
            </form>
        </div>
    )
}
