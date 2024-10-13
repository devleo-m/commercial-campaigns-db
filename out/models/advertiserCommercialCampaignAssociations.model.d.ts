import { Model } from 'sequelize';
import { IAdvertiserCommercialCampaignAssociations } from '../interface';
type AdvertiserCommercialCampaignAssociationsModel = typeof Model & {
    new (): IAdvertiserCommercialCampaignAssociations;
};
export declare const AdvertiserCommercialCampaignAssociations: AdvertiserCommercialCampaignAssociationsModel;
export {};
