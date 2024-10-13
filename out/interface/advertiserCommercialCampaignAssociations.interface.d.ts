import { Model } from 'sequelize';
export interface IAdvertiserCommercialCampaignAssociations extends Model {
    id: number;
    campaignId: number;
    commercialId: number;
    startDate: Date;
    endDate: Date;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly deletedAt?: Date;
}
