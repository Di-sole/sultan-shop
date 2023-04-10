export interface IProduct {
    id: number | string,
    name: string,
    img: string,
    size_type: string,
    size: string,
    barcode: string,
    manufacturer: string,
    brand: string,
    description: string,
    price: string,
    category: string[]
}

export interface IProductInCart {
    item: IProduct,
    count?: string | number
}