import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { RegistryDates } from "common/embedded/registry-dates.embedded";
import { Order } from "orders/entities/order.entity";
@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column(() => RegistryDates, { prefix: false })
  registryDates: RegistryDates;

  @OneToOne(() => Order, (order) => order.payment, {
  nullable: false,
  onDelete: 'CASCADE',
})
@JoinColumn()
order: Order;

}
