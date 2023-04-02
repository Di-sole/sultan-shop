import { MouseEventHandler } from 'react';
import classes from './Button.module.css';

interface ButtonProps {
    children: any,
    shape: string,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    type?: 'button'

}

export const Button: React.FC<ButtonProps> = ({children, shape, ...props}) => {
    return (
        <button {...props} className={classes.btn + ' ' + classes[shape]}>
            {children}
        </button>
    );
};