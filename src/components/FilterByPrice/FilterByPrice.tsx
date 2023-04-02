import './FilterByPrice.css';

interface FilterByPriceProps {
    onChange: Function
}

export const FilterByPrice: React.FC<FilterByPriceProps> = ({onChange}) => {
    return (
        <div className="price-filter">
            <h3 className="price-filter__title">Цена ₽</h3>
            <form className="price-filter__form">
                <input 
                    type="number" 
                    name="minPrice" 
                    placeholder="0" 
                    onChange={(e) => onChange(e)} />
                <span>-</span>
                <input 
                    type="number" 
                    name="maxPrice" 
                    placeholder="10 000" 
                    onChange={(e) => onChange(e)} />
            </form> 
        </div>
    )
}