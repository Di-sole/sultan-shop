import { Button } from "../button/Button";
import classes from './InputText.module.css';
import search from '../../../img/icons/icon_search.svg';
import arrow from '../../../img/icons/icon_arrow.svg';
import { useRef } from "react";

interface InputTextProps {
    imgType: "arrow" | "search",
    value?: string,
    handleClick?: Function,
    handleChange?: Function,
    placeholder?: string,
    disabled?: boolean
}

export const InputText: React.FC<InputTextProps> = ({handleClick, imgType, ...props}) => {
    return (
        <div className={classes.input__wrapper}>
            <input 
                className={classes.input} 
                type="text" 
                placeholder={props.placeholder}
                value={props.value}
                disabled={props.disabled}
                onChange={(e) => props.handleChange(e)}
            />
            <Button 
                shape="circular_input" 
                type="button" 
                onClick={() => handleClick()}
            >
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