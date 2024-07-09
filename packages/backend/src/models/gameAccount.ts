import { PrismaClient } from '@prisma/client';
import { GameAccountType, GameAccountSchema } from 'models';
import { User } from './user';
import { Season } from './season';

const prisma = new PrismaClient();

export class GameAccount {
    pk: number;
    apiUser: string;
    apiToken: string;
    userId: number;
    user: User;
    seasonId: number;
    season: Season;
    players: object[];
    Action: object[];
    RecurringAction: object[];

    constructor(data: GameAccountType) {
        this.pk = data.pk;
        this.apiUser = data.apiUser;
        this.apiToken = data.apiToken;
        this.userId = data.userId;
        this.user = new User(data.user);
        this.seasonId = data.seasonId;
        this.season = new Season(data.season);
        this.players = data.players;
        this.Action = data.Action;
        this.RecurringAction = data.RecurringAction;
    }

    static async findUnique(pk: number): Promise<GameAccount | null> {
        const gameAccount = await prisma.gameAccount.findUnique({
            where: { pk },
            include: {
                user: true,
                season: true,
                players: true,
                Action: true,
                RecurringAction: true
            }
        });
        return gameAccount ? new GameAccount(gameAccount as GameAccountType) : null;
    }

    static async findById(id: number): Promise<GameAccount | null> {
        const gameAccount = await prisma.gameAccount.findUnique({
            where: { pk: id },
            include: {
                user: true,
                season: true,
                players: true,
                Action: true,
                RecurringAction: true
            }
        });
        return gameAccount ? new GameAccount(gameAccount as GameAccountType) : null;
    }

    static async getAllByUserId(userId: number): Promise<GameAccount[]> {
        const gameAccounts: GameAccountType[] = await prisma.gameAccount.findMany({
            where: { userId },
            orderBy: [{ apiUser: 'asc' }],
            include: {
                user: true,
                season: true,
                players: true,
                Action: true,
                RecurringAction: true
            }
        });
        return gameAccounts.map(gameAccount => new GameAccount(gameAccount as GameAccountType));
    }

    static async createGameAccount(data: GameAccountType): Promise<GameAccount> {
        const validatedData = GameAccountSchema.parse(data);
        const gameAccount = await prisma.gameAccount.create({
            data: {
                ...validatedData,
                userId: validatedData.userId,
                seasonId: validatedData.seasonId
            },
            include: {
                user: true,
                season: true,
                players: true,
                Action: true,
                RecurringAction: true
            }
        });
        return new GameAccount(gameAccount as GameAccountType);
    }

    static async updateGameAccount(pk: number, data: Partial<GameAccountType>): Promise<GameAccount | null> {
        const validatedData = GameAccountSchema.partial().parse(data);
        const gameAccount = await prisma.gameAccount.update({
            where: { pk },
            data: validatedData,
            include: {
                user: true,
                season: true,
                players: true,
                Action: true,
                RecurringAction: true
            }
        });
        return gameAccount ? new GameAccount(gameAccount as GameAccountType) : null;
    }

    static async deleteGameAccount(pk: number): Promise<void> {
        await prisma.gameAccount.delete({ where: { pk } });
    }
}

export default GameAccount;
