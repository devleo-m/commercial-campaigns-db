import { Model } from 'sequelize';
import { IUser } from '../interface';
type UserModel = typeof Model & {
    new (): IUser;
};
export declare const User: UserModel;
export {};
