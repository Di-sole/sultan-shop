export interface IProduct {
    id: number,
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

export interface ISelectedProduct {
    item: IProduct,
    count?: string | number
}