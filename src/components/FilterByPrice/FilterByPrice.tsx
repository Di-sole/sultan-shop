import './FilterByPrice.css';

interface FilterByPriceProps {
    onChange: Function,
    minPriceValue: string,
    maxPriceValue: string,
}

export const FilterByPrice: React.FC<FilterByPriceProps> = ({onChange, minPriceValue, maxPriceValue}) => {
    return (
        <div className="price-filter">
            <h3 className="price-filter__title">Цена ₽</h3>
            <form className="price-filter__form">
                <input 
                    type="number" 
                    name="minPrice"
                    value={minPriceValue} 
                    placeholder="0" 
                    onChange={(e) => onChange(e)} />
                <span>-</span>
                <input 
                    type="number" 
                    name="maxPrice" 
                    value={maxPriceValue}
                    placeholder="10 000" 
                    onChange={(e) => onChange(e)} />
            </form> 
        </div>
    )
}