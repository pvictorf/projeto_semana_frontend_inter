import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn,
  UpdateDateColumn, 
} from 'typeorm'


@Entity('user') 
export class User {

  // [NOTE] Ao adicionar PrimaryGeneratedColumn, automáticamente o id da entidade será um hash uuid
  // Foi necessário apagar o banco de dados pois anteriormente o id estaja interger!
  
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