import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, ManyToMany } from "typeorm";
import { RegistryDates } from "common/embedded/registry-dates.embedded";
import { Product } from "products/entities/product.entity";


@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true})
  name: string;

  @Column(() => RegistryDates, { prefix: false })
  registryDates: RegistryDates;

  @ManyToMany(() => Product, (product) => product.categories)
  products: Product[]
}
