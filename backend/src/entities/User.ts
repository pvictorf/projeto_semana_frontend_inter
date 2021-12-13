import { 
  Entity, 
  PrimaryColumn, 
  Column, 
  CreateDateColumn,
  UpdateDateColumn, 
} from 'typeorm'

@Entity() 
export class User {
  
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  accountNumber: number;

  @Column()
  accountDigit: number;

  @Column()
  wallet: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}