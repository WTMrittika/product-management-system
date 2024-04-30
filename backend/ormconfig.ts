import { Product } from "src/entities/product.entity";
import { Registration } from "src/entities/registration.entity";
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { addToCart } from "src/entities/cart.entity";

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'mrittika',
  entities: [
    Registration, Product, addToCart
  ],
  synchronize: true,
};

export default config;