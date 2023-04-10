import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { AdminProductsList } from "../../components/admin/AdminProductsList/AdminProductsList";
import { Breadcrumbs } from "../../components/UI/breadcrumbs/Breadcrumbs";
import { Modal } from "../../components/UI/Modal/Modal";
import { AdminButton } from "../../components/UI/button/AdminButton";
import { AdminForm } from "../../components/admin/AdminForm/AdminForm";
import { IProduct } from "../../types/types";
import json from "../../json";
import './AdminPage.css';

export const AdminPage = () => {
    let products: IProduct[];
    
    if (localStorage.length === 0 || !localStorage.products) {
        products = JSON.parse(json);
    } else {
        products = JSON.parse(localStorage.products);
    }

    const [editedProduct, setEditedProduct] = useState(null)
    const [modal, setModal] = useState(false);
    const [currentList, setCurrentList] = useState(products);

    const handleEdit = (product: IProduct) => {
        setEditedProduct(product);
        setModal(true);
    }

    const handleDelete = (product: IProduct) => {
        const removed = products.find(p => p.barcode == product.barcode);
        const newState = products.filter(p => p != removed);
        localStorage.products = JSON.stringify(newState);
        setCurrentList(JSON.parse(localStorage.products));
    }

    const handleSubmit = () => {
        const form = document.forms[0];
        const selectedCategories: string[] = [];
        Array.from(form.category.options).forEach((o: any) => {if (o.selected) selectedCategories.push(o.value)});

        const newProduct: IProduct = {
            id: form.barcode.value,
            name: form.prodName.value,
            img: form.img_url.value,
            size_type: form.size_type.value,
            size: form.size.value,
            barcode: form.barcode.value,
            manufacturer: form.manufacturer.value,
            brand: form.brand.value,
            description: form.description.value,
            price: form.price.value,
            category: selectedCategories
        }

        let newState = [...products];

        if (form.name === 'add') {
            newState.push(newProduct);
        } 
        
        if (form.name === 'edit') {
            const index = currentList.findIndex(p => p.barcode === editedProduct.barcode);
            newState.splice(index, 1, newProduct)
        }

        localStorage.products = JSON.stringify(newState);
        setCurrentList(JSON.parse(localStorage.products));
        closeModals();
    }

    const handleCancel = () => {
        closeModals();
    }

    const closeModals = () => {
        setEditedProduct(null);
        setModal(false);
    }

    return (
        <>
            <Header />
            <main data-testid="admin-page">
                <div className="container">
                    <Breadcrumbs pathes={[{name: "Каталог", link: "/sultan-shop/"}]} />
                    <div className="admin-page__content">
                        <div className="admin__products">
                            <div className="admin__header">
                                <h2 className="admin__list-title">Список товаров</h2>
                                <AdminButton onClick={() => {setModal(true)}}>Добавить товар</AdminButton>
                            </div>
                            <AdminProductsList products={currentList} handleEdit={handleEdit} handleDelete={handleDelete} />
                        </div>
                    </div>
                </div>

                <Modal visible={modal}>
                    <AdminForm 
                        edited={editedProduct}
                        handleSubmit={handleSubmit}
                        handleCancel={handleCancel} 
                    />
                </Modal>
            </main>
            <Footer />
        </>
    )
}