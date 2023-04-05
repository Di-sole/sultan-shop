import { useState } from "react";
import { InputText } from "../UI/input/InputText";
import { Checkboxes } from "../UI/Checkboxes/Checkboxes";
import './FilterByParams.css';

interface FilterByParamsProps {
    title: string, 
    paramValues: string[],
    selectedParams: string[],
    searchQuery: string,
    handleCheckboxChange: Function,
    handleSearchInputChange: Function
}

export const FilterByParams: React.FC<FilterByParamsProps> = ({title, paramValues, selectedParams, searchQuery, handleCheckboxChange, handleSearchInputChange}) => {
    const [filtredValues, setFiltredValues] = useState([]);

    const handleSearch = () => {
        const filtred = paramValues
            .filter(val => val.toLowerCase().includes(searchQuery.toLowerCase()));
        setFiltredValues(filtred);
    }

    return (
        <div className="params-filter">
            <h3 className="params-filter__title">{title}</h3>

            <div className="params-filter__wrapper">
                <InputText 
                    placeholder="Поиск..."
                    imgType="search" 
                    value={searchQuery}
                    handleClick={handleSearch}
                    handleChange={handleSearchInputChange}
                />

                <Checkboxes 
                    values={filtredValues.length > 0
                        ? filtredValues 
                        : paramValues}
                    valuesName="param"
                    selected={selectedParams}
                    handleChange={handleCheckboxChange}
                />    
            </div>
        </div>
    )
}