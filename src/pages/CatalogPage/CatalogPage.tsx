import { PageHeader } from "../../components/PageHeader/PageHeader";
import { SelectSorting } from "../../components/UI/select/SelectSorting";
import { ProductsList } from "../../components/ProductsList/ProductsList";
import { FiltersList } from "../../components/FiltersList/FiltersList";
import { CategoriesList } from "../../components/CategoriesList/CategoriesList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useAction } from "../../hooks/useActions";
import { IProduct } from "../../types/types";
import './CatalogPage.css';

export const CatalogPage: React.FC = () => {
    const {selectedProducts} = useTypedSelector(state => state.cart);
    const {selectedType} = useTypedSelector(state => state.filter);
    const {
        filtredAndSortedProducts, 
        categories,
        productsLimit, 
        currentPage
    } = useTypedSelector(state => state.products);
    const {
        setSelectedSort, 
        setSelectedType, 
        clearFilter,
        sortProducts, 
        filterProducts, 
        resetProductsList,
        addToCart, 
        increaseCount
    } = useAction();

    const handleSortChange = (e: any) => {
        setSelectedSort(e.target.value);
        sortProducts(e.target.value);
    }

    const handleCategoryClick = (e: any) => {
        setSelectedType(e.target.textContent);
        filterProducts({
            filter: e.target.textContent, 
            filterType: 'category'
        });
    }

    const handleCategoryTitleClick = () => {
        clearFilter();
        resetProductsList();
    }

    const handleAdd = (product: IProduct) => {
        const existed = selectedProducts.find(p => p.item.barcode == product.barcode);

        if (existed) {
            increaseCount({item: product});
        } else {
            addToCart({
                item: product, 
                count: 1
            });
        }
    }

    return (
        <main>
            <div className="container">
                <PageHeader title="каталог" pathes={[{name: "Каталог", link: "/"}]}>
                    <SelectSorting 
                        defaultValue="Название"
                        onChange={handleSortChange}
                        options={[
                            {value: "name_ascending", name: "Название А-Я"},
                            {value: "name_descending", name: "Название Я-А"},
                            {value: "price_ascending", name: "Сначала дешевле"},
                            {value: "price_descending", name: "Сначала дороже"},
                        ]}
                    />
                </PageHeader>

                <CategoriesList 
                    listType="top"
                    categories={categories}
                    selectedType={selectedType}
                    handleClick={handleCategoryClick}
                />

                <div className="page-content">
                    <div className="wrapper_filters">
                        <FiltersList />
                        <CategoriesList 
                            listType="aside"
                            categories={categories}
                            selectedType={selectedType}
                            handleClick={handleCategoryClick}
                            title="Уход за телом" 
                            handleTitleClick={handleCategoryTitleClick}
                        />
                    </div>
                    <ProductsList 
                        products={filtredAndSortedProducts} 
                        productsLimit={productsLimit}
                        page={currentPage}
                        handleAdd={handleAdd}/>
                </div>
            </div>    
        </main>
    )
}