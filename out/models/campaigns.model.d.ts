import { Model } from 'sequelize';
import { ICampaigns } from '../interface';
type CampaignsModel = typeof Model & {
    new (): ICampaigns;
};
export declare const Campaigns: CampaignsModel;
export {};
