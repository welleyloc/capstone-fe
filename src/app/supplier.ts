import { Product } from './product';

export class Supplier {
    supplierId: number;
    supplierName: string;
    productList?: Array<Product>;
}
