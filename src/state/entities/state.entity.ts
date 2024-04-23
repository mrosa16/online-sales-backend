import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'state' })
export class StateEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'createdAt' })
  createdAt: Date;

  @Column({ name: 'updatedAt' })
  updateAt: Date;
}
