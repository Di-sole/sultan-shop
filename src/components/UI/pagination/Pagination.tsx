import { getPagesArray } from "../../../utils/utils";
import classes from './Pagination.module.css';

interface PaginationProps {
    totalProducts: number,
    limit: number,
    page: number,
    changePage: Function
}

export const Pagination: React.FC<PaginationProps> = ({totalProducts, limit, page, changePage}) => {
    let pagesArray = getPagesArray(totalProducts, limit);

    return (
        <div className={classes.pagination}>
            {pagesArray.map(p =>
                <span
                    key={p}
                    // повесить на страницы слушателя, и при нажатии на них, менять страницу в состоянии
                    onClick={(e) => changePage(e)}
                    // если текущий элемент итерации совпадает с тем, что хранится в состоянии,
                    // то ставим kлассы page и page__current
                    className={page == p ? `${classes.page} ${classes.page__current}` : classes.page} 
                >
                    {p}
                </span>
            )}
        </div>
    );
};