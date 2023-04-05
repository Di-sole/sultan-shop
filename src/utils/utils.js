export const sortProducts = (sortValue, arr) => {
    switch (sortValue) {
        case 'name_ascending':
            return [...arr].sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
        case 'name_descending':
            return [...arr].sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1).reverse();
        case 'price_ascending':
            return [...arr].sort((a, b) => a.price - b.price);
        case 'price_descending':
            return [...arr].sort((a, b) => a.price - b.price).reverse();
        default:
            return arr;
    }
}

export const filterProducts = (filterValue, filterType, arr) => {
    switch (filterType) {
        case 'category':
            return [...arr].filter(elem => elem.category.includes(filterValue));
        case 'min-price':
            return [...arr].filter(elem => Number(elem.price) >= Number(filterValue));
        case 'max-price':
            if (Number(filterValue) == 0) return arr;
            return [...arr].filter(elem => Number(elem.price) <= Number(filterValue));
        case 'manufacturer':
            const newState = [];

            filterValue.forEach(val => {
                newState.push(
                    [...arr].filter(elem => elem.manufacturer === val)
                );
            });

            return newState.length > 0 ? newState.flat() : arr;
        default:
            return arr;
    }
}

export const getParamValues = (arr, param) => {
    const set = new Set();

    arr.forEach(elem => {
        if (Array.isArray(elem[param])) {
            elem[param].forEach(value => set.add(value));
        } else {
            set.add(elem[param]);
        }
    });

    return [...set];
}

export const getPagesArray = (totalProducts, limit) => {
    let totalPages = Math.ceil(totalProducts / limit);
    let result = [];

    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1)
    }
    
    return result;
}

export const getProductsForPage = (page, productsLimit, products) => {
    const firstIndx = (page - 1) * productsLimit;
    const lastIndx = firstIndx + productsLimit;

    return products.slice(firstIndx, lastIndx);
}