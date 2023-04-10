import classes from './Modal.module.css';

interface ModalProps {
    children: any,
    visible: boolean,
}

export const Modal: React.FC<ModalProps> = ({children, visible}) => {
    const modalClasses = [classes.modal]

    if (visible) {
        modalClasses.push(classes.active);
    }

    return (
        <div className={modalClasses.join(' ')} data-testid="modal">
            <div className={classes.modal__content}>
                {children}
            </div>
        </div>
    )
}