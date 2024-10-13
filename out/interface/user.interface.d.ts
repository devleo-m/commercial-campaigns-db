import { Model } from 'sequelize';
export interface IUser extends Model {
    id: number;
    name: string;
    email: string;
    password: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly deletedAt?: Date;
}
