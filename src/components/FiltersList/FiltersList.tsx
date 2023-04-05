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
    const {selectedMinPrice, selectedMaxPrice, selectedParams} = useTypedSelector(state => state.filter);
    const {
        FilterBySeveralFilters, 
        setMaxPrice, 
        setMinPrice, 
        setSelectedParams, 
        clearFilter, 
        resetProductsList
    } = useAction();

    const [inputValues, setInputValues] = useState({min: '', max: '', search: ''});
    const [filtredValues, setFiltredValues] = useState(manufacturers);

    const handleSearchParams = () => {
        const filtred = filtredValues
            .filter(val => val.toLowerCase().includes(inputValues.search.toLowerCase()));
        setFiltredValues(filtred);
    }

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

    const handleInputChange = (e: any) => {
        setInputValues(prev => ({...prev, search: e.target.value}));
    }

    const handleSubmitFilter = () => {
        FilterBySeveralFilters({
            minPrice: selectedMinPrice,
            maxPrice: selectedMaxPrice,
            params: selectedParams
        });
    }

    const handleClearFilter = () => {
        clearFilter();
        resetProductsList();
        setInputValues({min: '', max: '', search: ''});
        setFiltredValues(manufacturers);
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
                paramValues={filtredValues} 
                selectedParams={selectedParams}
                searchQuery={inputValues.search}
                handleInputChange={handleInputChange}
                handleCheckboxChange={handleCheckboxChange}
                handleSearch={handleSearchParams}
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