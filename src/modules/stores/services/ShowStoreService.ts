import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import { IStoresRepository } from '../domain/repositories/IStoresRepository';
import { IShowStore } from '../domain/models/IShowStore';
import { Stores } from '@prisma/client';

@injectable()
export default class ShowStoreService {
  constructor(
    @inject('StoresRepository')
    private storesRepository: IStoresRepository,
  ) {}

  async execute({ id }: IShowStore): Promise<Stores> {
    const store = await this.storesRepository.findById(id);

    if (!store) {
      throw new AppError('Store not found.');
    }

    return store;
  }
}
