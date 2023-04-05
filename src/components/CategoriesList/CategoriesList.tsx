import './CategoriesList.css';

interface CategoriesListProps {
    listType: string, 
    categories: string[], 
    selectedType: string,
    handleClick: (e: any) => void, 
    handleTitleClick?: () => void,
    title?: string
}

export const CategoriesList: React.FC<CategoriesListProps> = ({listType, categories, selectedType, handleClick, handleTitleClick, title}) => {
    return(
        <div className="categories">
            {title && 
                <h3 
                    className="categories__title"
                    onClick={() => handleTitleClick()}
                >
                    {title}
                </h3>
            }
            
            <ul className={"categories_" + listType}>
                {categories.map(value => 
                    <li 
                        key={value}
                        onClick={handleClick}
                        className={selectedType == value ? "category__current" : ""}
                    >
                        {value}
                    </li>)}
            </ul>
        </div>
    )
}