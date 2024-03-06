import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: "users"})
export class User {
    @PrimaryGeneratedColumn({primaryKeyConstraintName: "pk-user"})
    id: number;

    @Column({nullable: false, unique: true, length: 50})
    main: string;

    @Column({nullable: false, length:100})
    password: string;
};