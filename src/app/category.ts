import { Product } from './product';

export class Category {
    categoryId: number;
    categoryName: string;
    productList?: Array<Product>;
}
