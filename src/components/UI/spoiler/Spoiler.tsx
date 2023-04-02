import classes from './Spoiler.module.css';

interface SpoilerProps {
    title: string,
    children: any
}

export const Spoiler: React.FC<SpoilerProps> = ({title, children}) => {
    return (
        <details className={classes.spoiler}>
            <summary>{title}</summary>
            {children}
        </details>
    )
}