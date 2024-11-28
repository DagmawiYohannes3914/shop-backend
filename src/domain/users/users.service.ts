import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { Default_Page_Size } from 'common/util/common.constants';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ){}

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.usersRepository.findOne({
      where: {email: createUserDto.email},
    });
    if (existingUser){
      throw new ConflictException('Email already exists');
    }

    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
  }

  findAll(paginationDto: PaginationDto) {
    const {limit, offset } = paginationDto;
    return this.usersRepository.find({
      skip: offset,
      take: limit ?? Default_Page_Size.USER,
    });
  }

  async findOne(id: number) {
   const user = await this.usersRepository.findOne({
  where: { id },
  relations: {
    orders: {
      items: true,
      payment: true,
    }
  },
});
   if (!user) {
    throw new NotFoundException('User not found');
   }
   return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.preload({
      id,
      ...updateUserDto,
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.usersRepository.save(user);
  }

  async recover(id: number) {
    const user = await this.usersRepository.findOne({
      where: { id },
      relations: {
        orders: {
          items: true,
          payment: true,
        },
      },
      withDeleted: true,
    });

    if (!user) {
      throw new NotFoundException(
        'User not found'
      );
    }
    if (!user.registryDates.deletedAt) {
      throw new ConflictException('User not deleted');
    }

    return this.usersRepository.recover(user)
  }

  async remove(id: number, soft: boolean) {
    const user = await this.findOne(id);
    return soft 
      ? this.usersRepository.softRemove(user) 
      : this.usersRepository.remove(user);
  }
}
