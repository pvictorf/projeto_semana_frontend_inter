import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn,
  UpdateDateColumn, 
  BeforeInsert
} from 'typeorm'


@Entity('users') 
export class User {

  @BeforeInsert()
  updateEmail() {
    console.log(this)
    this.email = this.email.toLowerCase()
  }

  @PrimaryGeneratedColumn('uuid') 
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