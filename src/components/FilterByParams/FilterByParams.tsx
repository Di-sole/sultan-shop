import { InputText } from "../UI/input/InputText";
import { Checkboxes } from "../UI/Checkboxes/Checkboxes";
import './FilterByParams.css';

interface FilterByParamsProps {
    title: string, 
    paramValues: string[],
    selectedParams: string[],
    searchQuery: string,
    handleCheckboxChange: Function,
    handleInputChange: Function,
    handleSearch: Function
}

export const FilterByParams: React.FC<FilterByParamsProps> = (props) => {
    const {
        title, 
        paramValues, 
        selectedParams, 
        searchQuery, 
        handleCheckboxChange, 
        handleInputChange,
        handleSearch
    } = props

    return (
        <div className="params-filter">
            <h3 className="params-filter__title">{title}</h3>

            <div className="params-filter__wrapper">
                <InputText 
                    placeholder="Поиск..."
                    imgType="search" 
                    value={searchQuery}
                    handleClick={handleSearch}
                    handleChange={handleInputChange}
                />

                <Checkboxes 
                    values={paramValues}
                    valuesName="param"
                    selected={selectedParams}
                    handleChange={handleCheckboxChange}
                />    
            </div>
        </div>
    )
}
