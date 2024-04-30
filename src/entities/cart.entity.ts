import {BeforeInsert, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('cart')
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  product_name: string;

  @Column({ nullable: false })
  no_of_products: number;
  
}