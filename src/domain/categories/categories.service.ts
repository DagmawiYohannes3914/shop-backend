import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { IdDto } from 'common/dto/id.dto';
import { PaginationDto } from 'common/dto/pagination.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {

  constructor(
    @InjectRepository(Category)
    private readonly categoriesRepository: Repository<Category>,
  ){}

  create(createCategoryDto: CreateCategoryDto) {
    const category = this.categoriesRepository.create({
      ...createCategoryDto,
    });

    return this.categoriesRepository.save(category);
  }

  findAll(paginationDto: PaginationDto) {
    const { page = 1, limit = 30 } = paginationDto;
    return this.categoriesRepository.find({
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  async findOne(id: number) {
    const category = await this.categoriesRepository.findOne({
      where: { id },
    })
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const user = await this.categoriesRepository.preload({
      id,
      ...updateCategoryDto,
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.categoriesRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    return this.categoriesRepository.remove(user);
  }
}
