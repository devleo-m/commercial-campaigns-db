import { Model } from 'sequelize';
export interface IAdvertiserCommercials extends Model {
    id: number;
    name: string;
    color: string;
    userId: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly deletedAt?: Date;
}
