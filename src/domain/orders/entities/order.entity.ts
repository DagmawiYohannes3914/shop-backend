
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { RegistryDates } from "common/embedded/registry-dates.embedded";
import { OrderStatus } from "orders/enums/order-status.enum";
@Entity()
export class Order {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: OrderStatus;

  @Column(() => RegistryDates, { prefix: false })
  registryDates: RegistryDates;

}