import { Checkboxes } from "../../components/UI/Checkboxes/Checkboxes";
import { Breadcrumbs } from "../../components/UI/breadcrumbs/Breadcrumbs";
import { IProduct } from "../../types/types";
import json from "../../json";
import './AdminPage.css';
import { Modal } from "../../components/UI/Modal/Modal";
import { useState } from "react";
import { AdminButton } from "../../components/UI/button/AdminButton";
import { AdminForm } from "../../components/admin/AdminForm/AdminForm";

export const AdminPage = () => {
    const products: IProduct[] = localStorage.length == 0 ? JSON.parse(json) : JSON.parse(localStorage.products);
    if (localStorage.length === 0) localStorage.products = JSON.stringify(products);

    const [modalEdit, setModalEdit] = useState(false);
    const [modalAdd, setModalAdd] = useState(false);
    const [editedProduct, setEditedProduct] = useState(null);
    // const [currentList, setCurrentList] = useState(products);

    const handleEdit = (product: IProduct) => {
        setEditedProduct(product);
        setModalEdit(true);
    }

    const handleDelete = (product: IProduct) => {
        const removed = products.find(p => p.barcode == product.barcode);
        const newState = products.filter(p => p != removed);
        localStorage.products = JSON.stringify(newState);
        // setCurrentList(JSON.parse(localStorage.products));
    }

    const handleCheckboxChange = () => {

    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const form = e.target.form
        const newProduct: IProduct = {
            id: form.barcode.value,
            name: form.title.value,
            img: form.img_url.value,
            size_type: form.size_type.value,
            size: form.size.value,
            barcode: form.barcode.value,
            manufacturer: form.manufacturer.value,
            brand: form.brand.value,
            description: form.description.value,
            price: form.price.value,
            category: form.category.value
        }

        const newState = [...products];
        newState.push(newProduct);
        localStorage.products = JSON.stringify(newState);

        closeModals();
    }

    const handleCancel = () => {
        closeModals();
    }

    const closeModals = () => {
        setModalAdd(false);
        setModalEdit(false);
    }

    return (
        <main>
            <div className="container">
                <Breadcrumbs pathes={[{name: "Каталог", link: "/sultan-shop/"}]} />
                <div className="admin-page__content">
                    <div className="admin__products">
                        <div className="admin__header">
                            <h2 className="admin__list-title">Список товаров</h2>
                            <AdminButton onClick={() => {setModalAdd(true)}}>Добавить товар</AdminButton>
                        </div>
                        
                        <ul className="admin__list">
                            {products.map(prod => 
                                <li key={prod.barcode}>
                                    <div className="admin__product">
                                        <img className="admin__product-image" src={prod.img} alt="img"/>
                                        <h3 className="admin__product-title">{prod.name}</h3>
                                        <div className="admin__product-actions">
                                            <AdminButton onClick={handleEdit}>
                                                Редактировать
                                            </AdminButton>
                                            <AdminButton onClick={handleDelete}>
                                                Удалить
                                            </AdminButton>
                                        </div>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>

            <Modal visible={modalAdd} setVisible={setModalAdd}>
                <AdminForm 
                    product={null}
                    formType="add"
                    handleSubmit={handleSubmit}
                    handleCancel={handleCancel} 
                />
            </Modal>
            <Modal visible={modalEdit} setVisible={setModalEdit}>
                <AdminForm 
                    product={editedProduct}
                    formType="edit"
                    handleSubmit={handleSubmit}
                    handleCancel={handleCancel} 
                />
            </Modal>
        </main>
    )
}