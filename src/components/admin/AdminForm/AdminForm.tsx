import { IProduct } from "../../../types/types";
import { AdminButton } from "../../UI/button/AdminButton";
import './AdminForm.css';

interface AdminFormProps {
    product: IProduct | null,
    formType: "add" | "edit"
    handleSubmit: Function,
    handleCancel: Function
}

export const AdminForm: React.FC<AdminFormProps> = ({product, formType, handleSubmit, handleCancel}) => {
    console.log(product)
    return (
        <div className="form__wrapper">
            <h2 className="admin__form-title">{formType === "add" ? "добавить товар" : "редактировать товар"}</h2>
            <form className="admin__form">
                <label>
                    <span>Название товара</span>
                    <input type="text" name="name" id="name" value={product ? product.name : ''} required />
                </label>
                <label>
                    <span>URL изображения</span>
                    <input type="text" name="img_url" id="img_url" value={product ? product.img: ''} required />
                </label>
                <label>
                    <span>Штрихкод</span>
                    {formType === "add" 
                        ? <input type="number" name="barcode" id="barcode" value={product ? product.barcode : ''} required />
                        : <input type="number" name="barcode" id="barcode" value={product ? product.barcode : ''} disabled />
                    }
                    
                </label>
                <label className="label_select">
                    <span>Тип объема</span>
                    <select name="size_type" id="size_type" value={product ? product.size_type : ''}>
                        <option value="г">грамм</option>
                        <option value="мл">миллилитр</option>
                    </select>
                </label>
                <label>
                    <span>Объем</span>
                    <input type="number" name="size" id="size" value={product ? product.size : ''} required />
                </label>
                <label>
                    <span>Производитель</span>
                    <input type="text" name="manufacturer" id="manufacturer" value={product ? product.manufacturer : ''} required />
                </label>
                <label>
                    <span>Бренд</span>
                    <input type="text" name="brand" id="brand" value={product ? product.brand : ''} required />
                </label>
                <label>
                    <span>Цена</span>
                    <input type="number" name="price" id="price" value={product ? product.price : ''} required />
                </label>
                <label>
                    <span>Описание</span>
                    <textarea name="description" id="description" rows={5}  value={product ? product.description : ''} required ></textarea>
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
                {formType === "add" 
                    ? <AdminButton onClick={handleSubmit}>Добавить товар</AdminButton>
                    : <AdminButton onClick={handleSubmit}>Сохранить изменения</AdminButton>
                }
                <AdminButton onClick={handleCancel}>Отмена</AdminButton>
            </form>
        </div>
    )
}

{/* <label className="label_select">
    <span>Категория</span>
    <Checkboxes 
        valuesName="category" 
        values={[
            "Эпиляция и депиляция",
            "Средства для ванны и душа",
            "Гели для душа",
            "Скрабы, пилинги",
            "Мочалки и губки для тела",
            "Интимный уход",
            "Дезодоранты, антиперспиранты"
        ]}
        handleChange={handleCheckboxChange}
        selected={[]}
    />
</label> */}