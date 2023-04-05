import classes from './Modal.module.css';

interface ModalProps {
    children: any,
    visible: boolean,
    setVisible: Function
}

export const Modal: React.FC<ModalProps> = ({children, visible, setVisible}) => {
    const modalClasses = [classes.modal]

    if (visible) {
        modalClasses.push(classes.active);
    }

    return (
        <div className={modalClasses.join(' ')}>
            <div className={classes.modal__content}>
                {children}
            </div>
        </div>
    )
}