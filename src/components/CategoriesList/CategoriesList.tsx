import './CategoriesList.css';

interface CategoriesListProps {
    listType: string, 
    categories: string[], 
    selectedCategory: string,
    handleClick: (e: any) => void, 
    handleTitleClick?: () => void,
    title?: string
}

export const CategoriesList: React.FC<CategoriesListProps> = ({listType, categories, selectedCategory, handleClick, handleTitleClick, title}) => {
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
                        className={selectedCategory == value ? "category__current" : ""}
                    >
                        {value}
                    </li>)}
            </ul>
        </div>
    )
}