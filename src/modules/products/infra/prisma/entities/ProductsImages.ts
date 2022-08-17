import { ProductsImages } from '@prisma/client';

export type ProductsImagesEntity = {
  id: string;
  product_sku_id: string | null;
  image: string;
  position: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
} & ProductsImages;
