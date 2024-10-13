import { Model } from 'sequelize';
import { IAdvertiserCommercials } from '../interface';
type AdvertiserCommercialsModel = typeof Model & {
    new (): IAdvertiserCommercials;
};
export declare const AdvertiserCommercials: AdvertiserCommercialsModel;
export {};
