import { NavLink } from 'react-router-dom';
import classes from './Breadcrumbs.module.css';

interface BreadcrumbsProps {
    pathes: {name: string, link: string}[]
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({pathes}) => {
    return (
        <div className={classes.breadcrumbs}>
            <ul className={classes.breadcrumbs__list}>
                <li><NavLink to="/sultan-shop/admin">Админка</NavLink></li>
                {pathes.map(p => 
                    <li key={p.link}><NavLink to={p.link}>{p.name}</NavLink></li>
                )}
            </ul>
        </div>
    )
}