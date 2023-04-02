import { MouseEventHandler } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './CategoriesList.css';

interface CategoriesListProps {
    listType: string, 
    categories: string[], 
    handleClick: MouseEventHandler<HTMLLIElement>, 
    title?: string
}

export const CategoriesList: React.FC<CategoriesListProps> = ({listType, categories, handleClick, title}) => {
    const selectedType = useTypedSelector(state => state.sort.selectedSort);

    return(
        <div className="categories">
            <h3 className="categories__title">{title}</h3>
            
            <ul className={"categories_" + listType}>
                {categories.map(value => 
                    <li 
                        key={value}
                        onClick={handleClick}>{value}
                    </li>)}
            </ul>
        </div>
    )
}