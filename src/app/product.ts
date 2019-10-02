import { Category } from './category';
import { Supplier } from './supplier';

export class Product {
    id: number;
    productName: string;
    category: Category;
    availability: boolean;
    fullPrice: string;
    salePrice: string;
    supplier: Supplier;
    discountPercent: number;
}
