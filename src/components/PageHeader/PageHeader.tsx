import { Breadcrumbs } from '../UI/breadcrumbs/Breadcrumbs';
import './PageHeader.css';

interface PageHeaderProps {
    pathes: {name: string, link: string}[],
    title?: string,
    children?: any
}

export const PageHeader: React.FC<PageHeaderProps> = ({children, title, pathes}) => {
    return (
        <div className="page__header">
            <Breadcrumbs pathes={pathes} />
            <div className="page__header_wrapper">
                <h1 className="page__title">{title}</h1>
                {children} 
            </div>
        </div>
    )
}