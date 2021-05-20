import { Entity,  JoinTable,  ManyToMany,  OneToMany,  PrimaryGeneratedColumn } from "typeorm";
import { Game } from "../../games/entities/Game";
import { User } from "./User";

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => User, (user) => user.orders)
  @JoinTable()
  users: User;

  @ManyToMany(() => Game, (game) => game.id)
  @JoinTable()
  games: Game[];
}