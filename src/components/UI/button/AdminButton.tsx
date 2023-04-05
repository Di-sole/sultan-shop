import classes from './AdminButton.module.css';

interface AdminButtonProps {
    children: any,
    onClick: Function
}

export const AdminButton: React.FC<AdminButtonProps> = ({children, onClick, ...props}) => {
    return (
        <button
            {...props}
            className={classes.admin__btn}
            type="button"
            onClick={() => onClick()}
        >
            {children}
        </button>
    )
}
