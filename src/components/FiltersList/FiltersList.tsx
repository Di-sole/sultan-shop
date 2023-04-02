import { Button } from "../UI/button/Button";
import { FilterByParams } from "../FilterByParams/FilterByParams";
import { FilterByPrice } from "../FilterByPrice/FilterByPrice";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useAction } from "../../hooks/useActions";
import icon_del from "../../img/icons/icon_clear.svg";
import './FiltersList.css';

export const FiltersList: React.FC = () => {
    const manufacturers = useTypedSelector(state => state.products.manufacturers);
    const minPrice = useTypedSelector(state => state.filter.selectedMinPrice);
    const maxPrice = useTypedSelector(state => state.filter.selectedMaxPrice);
    const selectedParams = useTypedSelector(state => state.filter.selectedParams);
    const {
        filterProducts, 
        setMaxPrice, 
        setMinPrice, 
        setSelectedParams, 
        clearFilter, 
        resetProductsList
    } = useAction();

    const handleCheckboxChange = (e: any) => {
        setSelectedParams(e.target.value);
    }

    const handlePriceChange = (e: any) => {
        if (e.target.name === 'minPrice') {
            setMinPrice(e.target.value);
        }
        if (e.target.name === 'maxPrice') {
            setMaxPrice(e.target.value);
        }
    }

    const handleSearch = () => {}

    const handleSubmitFilter = (e: any) => {
        e.preventDefault();
        
        // if (minPrice) {
        //     filterProducts({filter: minPrice, filterType: 'min-price'});
        // }

        // if (maxPrice) {
        //     filterProducts({filter: maxPrice, filterType: 'max-price'});
        // }

        // if (selectedParams.length != 0) {
        //     filterProducts({filter: selectedParams, filterType: 'manufacturer'});    
        // }
    }

    const handleClearFilter = (e: any) => {
        e.preventDefault();

        clearFilter();
        resetProductsList();
    }

    return (
        <div className="filters-list">
            <h2 className="filters-list__title">подбор по параметрам</h2>

            <FilterByPrice onChange={handlePriceChange} />

            <FilterByParams
                title="Производитель" 
                paramValues={manufacturers} 
                handleCheckboxChange={handleCheckboxChange}
            />

            <div className="filters-list__btns">
                <Button shape="big" onClick={handleSubmitFilter}>Показать</Button>
                <Button shape="circular" onClick={handleClearFilter}>
                    <img src={icon_del} alt="" />
                </Button>    
            </div>
        </div>
    )
}