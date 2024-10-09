import { Model } from 'sequelize'

export interface ICampaigns extends Model {
    id: number
    name: string
    startDate: Date
    endDate: Date
    userId: number
    readonly createdAt: Date
    readonly updatedAt: Date
    readonly deletedAt?: Date
}