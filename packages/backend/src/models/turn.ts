import { PrismaClient } from '@prisma/client';
import {SeasonType, TurnType} from "models";
import { Season } from './season'; // Import the getCurrentSeason function

const prisma = new PrismaClient();

const months = [
    "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December", "January"
];

export class Turn {
    // Note: We are only including a few properties for brevity.
    // Include all properties from the TurnSchema
    pk: number;
    turn: number;
    month: string;
    year: number;
    seasonId: number;
    season: SeasonType;
    accounts: object[] | undefined;
    Building: object[] | undefined;
    BuildingConstructionEffort: object[] | undefined;
    BuildingConstruction: object[] | undefined;
    BuildingOperation: object[] | undefined;
    BuildingOperationFlow: object[] | undefined;
    BuildingRequirement: object[] | undefined;
    BuildingRequirements: object[] | undefined;
    BuildingStorage: object[] | undefined;
    BuildingType: object[] | undefined;
    BuildingUpgrade: object[] | undefined;
    BusinessBuilding: object[] | undefined;
    Business: object[] | undefined;
    Commoners: object[] | undefined;
    DeliveryCost: object[] | undefined;
    Flow: object[] | undefined;
    Household: object[] | undefined;
    Ingredient: object[] | undefined;
    Inventory: object[] | undefined;
    ItemOrder: object[] | undefined;
    ItemPrice: object[] | undefined;
    Item: object[] | undefined;
    ItemTradeResult: object[] | undefined;
    ItemTradeSettlement: object[] | undefined;
    Location: object[] | undefined;
    Manager: object[] | undefined;
    MarketItemDetails: object[] | undefined;
    MarketItem: object[] | undefined;
    Market: object[] | undefined;
    MarketMapping: object[] | undefined;
    Operation: object[] | undefined;
    OperationFlow: object[] | undefined;
    Path: object[] | undefined;
    PrestigeImpact: object[] | undefined;
    Producer: object[] | undefined;
    Recipe: object[] | undefined;
    Structure: object[] | undefined;
    StructureTag: object[] | undefined;
    Sustenance: object[] | undefined;
    Tile: object[] | undefined;
    TownChurch: object[] | undefined;
    TownCulture: object[] | undefined;
    Town: object[] | undefined;
    TownData: object[] | undefined;
    TownDataDomain: object[] | undefined;
    TownDemandCategory: object[] | undefined;
    TownDemand: object[] | undefined;
    TownGovernment: object[] | undefined;
    TownGovernmentTaxes: object[] | undefined;
    TradeRoute: object[] | undefined;
    TradeRouteManager: object[] | undefined;
    TradeRouteFlow: object[] | undefined;
    TransportCargo: object[] | undefined;
    TransportJourneyLeg: object[] | undefined;
    TransportJourney: object[] | undefined;
    Transport: object[] | undefined;
    TransportType: object[] | undefined;
    WorkerSkill: object[] | undefined;
    Action: object[] | undefined;
    RecurringAction: object[] | undefined;

    constructor(turn: TurnType) {
        this.pk = turn.pk;
        this.turn = turn.turn;
        this.seasonId = turn.seasonId;
        this.season = turn.season;
        this.month = turn.month;
        this.year = turn.year;
        Object.keys(turn).forEach(key => {
            // Note: `as any` is used to bypass TypeScript type checking
            // It might be better to use a more precise type if possible
            (this as any)[key] = turn[key as keyof typeof turn];
        });
    }

    static async getCurrentTurn(): Promise<Turn | null> {
        const currentSeason = await Season.getCurrentSeason(); // Call getCurrentSeason function

        if (!currentSeason) {
            throw new Error('Current season not found');
        }

        const currentTurn = await prisma.turn.findFirst({
            where: { seasonId: currentSeason.pk }, // Use the seasonId from the current season
            orderBy: [
                { turn: 'desc' }
            ]
        });

        if (currentTurn) {
            const turnNumber = currentTurn.turn;
            const monthIndex = (turnNumber - 1) % 12;
            const year = Math.floor((turnNumber - 2) / 12) + 1;
            currentTurn.month = months[monthIndex];
            currentTurn.year = year;
        }

        return currentTurn ? new Turn(currentTurn as TurnType) : null;
    }
}

export default Turn;
