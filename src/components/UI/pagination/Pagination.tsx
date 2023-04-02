export {}
// export const getPagesArray = (totalPages) => {
//     let result = [];
//     for (let i = 0; i < totalPages; i++) {
//         result.push(i + 1)
//     }
//     return result;
// }


// export const Pagination = ({totalPages, page, changePage}) => {
//     let pagesArray = getPagesArray(totalPages);
//     return (
//         <div className="pagination">
//             {pagesArray.map(p =>
//                 <span
//                     // onClick={() => changePage(p)}
//                     // повесить на страницы слушателя, и при нажатии на них, менять страницу в состоянии
//                     key={p}
//                     className={page == p ? 'page page__current' : 'page'} 
//                     // если текущий элемент итерации совпадает с тем, что хранится в состоянии,
//                     // то ставим слассы page и page__current
//                 >
//                         {p}
//                     </span>
//             )}
//         </div>
//     );
// };