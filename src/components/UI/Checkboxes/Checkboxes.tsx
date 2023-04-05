import classes from './Checkboxes.module.css';

interface CheckboxesProps {
    values: string[],
    valuesName: string,
    selected: string[],
    handleChange: Function
}

export const Checkboxes: React.FC<CheckboxesProps> = ({values, valuesName, selected, handleChange}) => {
    return (
        <div className={classes.wrapper_checkboxes}>
            {values.map(val =>
                <label key={val}>
                    <input 
                        type="checkbox"
                        name={valuesName}
                        value={val}
                        checked={selected.includes(val)}
                        onChange={(e) => handleChange(e)}
                    />
                    <span>{val}</span> 
                </label>
            )}
        </div>
    )
}