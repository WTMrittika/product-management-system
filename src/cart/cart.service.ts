
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from 'src/entities/cart.entity';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
  ) {}

  async create(createCartDto: CreateCartDto): Promise<Cart> {
    const cart = new Cart();
    cart.product_name = createCartDto.product_name;
    cart.no_of_products = createCartDto.no_of_products;
    return this.cartRepository.save(cart);
  }

  async findAll(): Promise<Cart[]> {
    return this.cartRepository.find();
  }

  async findOne(id: number): Promise<Cart | undefined> {
    return this.cartRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCartDto: UpdateCartDto): Promise<Cart> {
    const cart = await this.cartRepository.findOne({ where: { id } });
    if (!cart) {
    }
    cart.product_name = updateCartDto.product_name || cart.product_name;
    cart.no_of_products = updateCartDto.no_of_products || cart.no_of_products;
    return this.cartRepository.save(cart);
  }

  async remove(id: number): Promise<void> {
    await this.cartRepository.delete(id);
  }
}
