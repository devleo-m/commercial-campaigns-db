import {
    User,
    Campaigns,
    AdvertiserCommercials,
    AdvertiserCommercialCampaignAssociations,
} from './models'

export class Associations {

    constructor() {}

    public sync() {
        User.hasMany(Campaigns, { foreignKey: 'userId', as: 'campaigns' })
        User.hasMany(AdvertiserCommercials, { foreignKey: 'userId', as: 'advertiserCommercials' })

        Campaigns.belongsTo(User, { foreignKey: 'userId', as: 'user' })
        Campaigns.belongsToMany(AdvertiserCommercialCampaignAssociations, { through: 'advertiserCommercialCampaignAssociations', foreignKey: 'campaignId', as: 'advertiserCommercialCampaignAssociations' })

        AdvertiserCommercials.belongsTo(User, { foreignKey: 'userId', as: 'user' })
        AdvertiserCommercials.belongsToMany(AdvertiserCommercialCampaignAssociations, { through: 'advertiserCommercialCampaignAssociations', foreignKey: 'commercialId', as: 'advertiserCommercialCampaignAssociations' })

        AdvertiserCommercialCampaignAssociations.belongsToMany(AdvertiserCommercials, { through: 'advertiserCommercialCampaignAssociations', foreignKey: 'commercialId', as: 'advertiserCommercials' })
        AdvertiserCommercialCampaignAssociations.belongsToMany(Campaigns, { through: 'advertiserCommercialCampaignAssociations', foreignKey: 'campaignId', as: 'campaigns' })
    }
}