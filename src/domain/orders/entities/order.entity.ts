
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { RegistryDates } from "common/embedded/registry-dates.embedded";
import { OrderStatus } from "orders/enums/order-status.enum";
import { User } from "users/entities/user.entity";
import { Payment } from "payments/entities/payment.entity";
import { OrderItem } from "./order-item.entity";
import { Expose } from "class-transformer";
@Entity()
export class Order {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.AWAITING_PAYMENT,
  })
  status: OrderStatus;

  @Column(() => RegistryDates, { prefix: false })
  registryDates: RegistryDates;

  @ManyToOne(() => User, (customer) => customer.orders, { nullable: false})
  customer: User;

  @OneToOne(() => Payment, (payment) => payment.order, { cascade: true })
  payment: Payment;  

  @OneToMany(() => OrderItem, (item) => item.order, { cascade: true })
  items: OrderItem[];

  @Expose()
  get total(){
    return this.items?.reduce((acc, current) => acc + current.subtotal, 0)
  }


}
