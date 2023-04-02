import { Button } from "../button/Button";
import classes from './InputText.module.css';
import search from '../../../img/icons/icon_search.svg';
import arrow from '../../../img/icons/icon_arrow.svg';

interface InputTextProps {
    imgType: "arrow" | "search",
    onChange: Function, 
    shape?: string,
    placeholder?: string,
    value?: string,
    disabled?: boolean
}

export const InputText: React.FC<InputTextProps> = ({onChange, imgType, ...props}) => {
    return (
        <div className={classes.input__wrapper}>
            <input 
                className={classes.input} 
                type="text" 
                placeholder={props.placeholder}
                value={props.value} 
                onChange={(e) => onChange(e.target.value)}
                disabled={props.disabled}
            />
            <Button shape="circular_input" type="button">
                {imgType === 'search' 
                    ?
                    <img src={search} alt="" />
                    :
                    <img src={arrow} alt="" className={classes.arrow} />
                }
            </Button>
        </div>
    )
}