import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Test } from "../test/test.entity";




@Entity()
export class Submission {

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column({type: 'jsonb'})
  answers: any;

  @ManyToOne(() => Test, test => test.submissions)
  test: Test;

}