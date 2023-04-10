import { useState } from 'react';
import classes from "./CountBar.module.css";

interface CountBarProps {
    handleIncrease: Function, 
    handleDecrease: Function, 
    count?: string | number
}

export const CountBar: React.FC<CountBarProps> = ({handleIncrease, handleDecrease, count}) => {
    return (
        <div className={classes.bar}>
            <button
                data-testid="decrease-btn"
                className={classes.count_btn}
                type="button" 
                onClick={() => handleDecrease(count)}>
                <span>-</span>
            </button>

            <span 
                data-testid="countbar-value" 
                className={classes.value}
            >
                    {count}
            </span>

            <button 
                data-testid="increase-btn"
                className={classes.count_btn}
                type="button" 
                onClick={() => handleIncrease(count)}>
                <span>+</span>
            </button>
        </div>
    )
}