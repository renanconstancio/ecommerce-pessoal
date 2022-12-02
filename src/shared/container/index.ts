import { container, delay } from 'tsyringe';

// import StoreRepository from '@modules/stores/infra/prisma/repositories/StoreRepository';
// import { IStoreRepository } from '@modules/stores/repositories/IStoreRepository';

import ProductRepository from '@modules/products/infra/prisma/repositories/productRepository';
import { IProductRepository } from '@modules/products/infra/repositories/IProductRepository';

// import ProductSkuRepository from '@modules/products/infra/prisma/repositories/ProductSkuRepository';
// import { IProductSkuRepository } from '@modules/products/repositories/IProductSkuRepository';

// import { IProductImageRepository } from '@modules/products/repositories/IProductImageRepository';
// import ProductImageRepository from '@modules/products/infra/prisma/repositories/productsImageRepository';

// import { IResizeImage } from './providers/resizeImage/dtos/IResizeImage';
// import ResizeImage from './providers/resizeImage/ResizeImage';

// container.registerSingleton<IResizeImage>('ResizeImage', ResizeImage);

// container.registerSingleton<IStoreRepository>(
//   'StoreRepository',
//   delay(() => StoreRepository),
// );

container.registerSingleton<IProductRepository>(
  'ProductRepository',
  delay(() => ProductRepository),
);

// container.registerSingleton<IProductSkuRepository>(
//   'ProductSkuRepository',
//   delay(() => ProductSkuRepository),
// );

// container.registerSingleton<IProductImageRepository>(
//   'ProductImageRepository',
//   delay(() => ProductImageRepository),
// );
