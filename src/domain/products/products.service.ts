import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { Default_Page_Size } from 'common/util/common.constants';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ){}

  async create(createProductDto: CreateProductDto) {
    const product = this.productsRepository.create(createProductDto);
    return this.productsRepository.save(product);
  }

  findAll(paginationDto: PaginationDto) {
    const {limit, offset } = paginationDto;
    return this.productsRepository.find({
      skip: offset,
      take: limit ?? Default_Page_Size.PRODUCT,
    });
  }

  async findOne(id: number) {
   const product = await this.productsRepository.findOne({
  where: { id },
  relations: {
    categories: true,
  },
});
   if (!product) {
    throw new NotFoundException('Product not found');
   }
   return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productsRepository.preload({
      id,
      ...updateProductDto,
    });
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return this.productsRepository.save(product);
  }

  async remove(id: number) {
    const product = await this.findOne(id);
    return this.productsRepository.remove(product);
  }
}
