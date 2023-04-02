import { useState } from "react";
import { InputText } from "../UI/input/InputText";
import './FilterByParams.css';

interface FilterByParamsProps {
    title: string, 
    paramValues: string[], 
    handleCheckboxChange: Function
}

export const FilterByParams: React.FC<FilterByParamsProps> = ({title, paramValues, handleCheckboxChange}) => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="params-filter">
            <h3 className="params-filter__title">{title}</h3>

            <form className="params-filter__form" name="params">
                <InputText 
                    placeholder="Поиск..."
                    imgType="search" 
                    value={searchQuery}
                    onChange={setSearchQuery} 
                />

                <div className="wrapper_checkboxes">
                    {paramValues.map(val =>
                        <label key={val}>
                            <input 
                                type="checkbox"
                                name="param"
                                value={val}
                                // checked={false}
                                onChange={(e) => handleCheckboxChange(e)}
                            />
                            <span>{val}</span> 
                        </label>
                    )}
                </div>        
            </form>
        </div>
    )
}