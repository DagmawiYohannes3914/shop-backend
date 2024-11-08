import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { RegistryDates } from "common/embedded/registry-dates.embedded";


@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true})
  name: string;

  @Column(() => RegistryDates, { prefix: false })
  registryDates: RegistryDates;
}
