import classes from './SelectSorting.module.css';

interface SelectSortingProps {
    options: {name: string, value: string}[], 
    defaultValue: string, 
    onChange: Function
}

export const SelectSorting: React.FC<SelectSortingProps> = ({options, defaultValue, onChange}) => {
    return (
        <div className={classes.select_sort}>
            <label htmlFor="sorting">Сортировка:</label>
            <select 
                name="sorting" 
                id="sorting"
                defaultValue={defaultValue}
                onChange={e => onChange(e)}
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