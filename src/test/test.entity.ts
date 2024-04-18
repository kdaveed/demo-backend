import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Submission } from "../submission/submission.entity";

@Entity()
export class Test {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @OneToMany(() => Submission, submission => submission.test)
  submissions: Submission[];
}
