import { Button } from "../UI/button/Button";
import { FilterByParams } from "../FilterByParams/FilterByParams";
import { FilterByPrice } from "../FilterByPrice/FilterByPrice";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useAction } from "../../hooks/useActions";
import icon_del from "../../img/icons/icon_clear.svg";
import './FiltersList.css';
import { useState } from "react";

export const FiltersList: React.FC = () => {
    const manufacturers = useTypedSelector(state => state.products.manufacturers);
    const {
        selectedMinPrice,
        selectedMaxPrice,
        selectedParams
    } = useTypedSelector(state => state.filter);
    const {
        FilterBySeveralFilters, 
        setMaxPrice, 
        setMinPrice, 
        setSelectedParams, 
        clearFilter, 
        resetProductsList
    } = useAction();

    const [inputValues, setInputValues] = useState({min: '', max: '', search: ''})

    const handleCheckboxChange = (e: any) => {
        setSelectedParams(e.target.value);
    }

    const handlePriceChange = (e: any) => {
        if (e.target.name === 'minPrice') {
            setMinPrice(e.target.value);
            setInputValues(prev => ({...prev, min: e.target.value}));
        }
        if (e.target.name === 'maxPrice') {
            setMaxPrice(e.target.value);
            setInputValues(prev => ({...prev, max: e.target.value}));
        }
    }

    const handleSearchInputChange = (e: any) => {
        setInputValues(prev => ({...prev, search: e.target.value}));
    }

    const handleSubmitFilter = (e: any) => {
        e.preventDefault();

        FilterBySeveralFilters({
            minPrice: selectedMinPrice,
            maxPrice: selectedMaxPrice,
            params: selectedParams
        });
    }

    const handleClearFilter = (e: any) => {
        e.preventDefault();

        clearFilter();
        resetProductsList();
        setInputValues({min: '', max: '', search: ''});
    }

    return (
        <div className="filters-list">
            <h2 className="filters-list__title">подбор по параметрам</h2>

            <FilterByPrice 
                onChange={handlePriceChange} 
                minPriceValue={inputValues.min}
                maxPriceValue={inputValues.max}
            />

            <FilterByParams
                title="Производитель" 
                paramValues={manufacturers} 
                selectedParams={selectedParams}
                searchQuery={inputValues.search}
                handleSearchInputChange={handleSearchInputChange}
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