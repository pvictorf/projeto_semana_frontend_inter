import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn, 
  ManyToOne,  
} from 'typeorm'

import { User } from './User'

@Entity()
export class Pix {
 
  @PrimaryGeneratedColumn('uuid') 
  id: string;

  @Column()
  status: string;

  @Column()
  value: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, ({id}: User) => id)
  @JoinColumn()
  requestingUser: User;

  @ManyToOne(() => User, ({id}: User) => id, {nullable: true})
  @JoinColumn()
  payingUser: User;


}