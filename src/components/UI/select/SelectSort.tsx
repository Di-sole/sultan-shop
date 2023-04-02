import classes from './SelectSort.module.css';

interface SelectSortProps {
    options: {name: string, value: string}[], 
    defaultValue: string, 
    value: string, 
    onChange: Function
}

export const SelectSort: React.FC<SelectSortProps> = ({options, defaultValue, value, onChange}) => {
    return (
        <div className={classes.select_sort}>
            <label htmlFor="sorting">Сортировка:</label>
            <select 
                name="sorting" 
                id="sorting"
                value={value} 
                defaultValue={defaultValue}
                onChange={e => onChange(e, e.target.value)}
            >
                <option disabled>{defaultValue}</option>
                {options.map(option =>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )}    
            </select>
        </div>
    )
}