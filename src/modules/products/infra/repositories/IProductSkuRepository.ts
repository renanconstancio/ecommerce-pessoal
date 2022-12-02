import { ProductDTOs } from '../prisma/dtos/productDTOs';
import { ProductSkuDTOs } from '../prisma/dtos/productSkuDTOs';
import { ProductSkuStockDTOs } from '../prisma/dtos/productSkuStockDTOs';

export interface IProductSkuRepository {
  // findBySku(sku: string): Promise<ProductsSkusEntity | null>;
  // findAll(product_id: string): Promise<ProductsEntity | null>;
  // findAllByIds(id: IFindProductsSkus[]): Promise<ProductsSkusEntity[]>;

  findById({
    id,
    product_id,
  }: {
    id: string;
    product_id: string;
  }): Promise<ProductDTOs | null>;
  updateStock(data: ProductSkuStockDTOs[]): Promise<void>;
  save(sku: ProductSkuDTOs): Promise<ProductSkuDTOs>;
  remove(id: string): Promise<void>;
}