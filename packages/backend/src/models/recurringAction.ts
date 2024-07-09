import { PrismaClient } from '@prisma/client';
import { RecurringActionType, RecurringActionSchema } from 'models';
import { GameAccount } from './gameAccount';
import { Turn } from './turn';
import { Action } from './action';

const prisma = new PrismaClient();

export class RecurringAction {
    pk: number;
    type: string;
    status: string;
    schedule: Date;
    gameAccountId: number;
    GameAccount: GameAccount;
    createdAt: Date;
    updatedAt: Date;
    startTurnId: number;
    Turn: Turn;
    when: string;
    numTurns?: number;
    interval: number;
    Action: Action[];

    constructor(data: RecurringActionType) {
        this.pk = data.pk;
        this.type = data.type;
        this.status = data.status;
        this.schedule = data.schedule;
        this.gameAccountId = data.gameAccountId;
        this.GameAccount = new GameAccount(data.GameAccount);
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
        this.startTurnId = data.startTurnId;
        this.Turn = new Turn(data.Turn);
        this.when = data.when;
        this.numTurns = data.numTurns;
        this.interval = data.interval;
        this.Action = data.Action.map((action: any) => new Action(action));
    }

    static async findByPk(pk: number): Promise<RecurringAction | null> {
        const recurringAction = await prisma.recurringAction.findUnique({
            where: { pk },
            include: {
                GameAccount: true,
                Turn: true,
                Action: true
            }
        });
        return recurringAction ? new RecurringAction(recurringAction as RecurringActionType) : null;
    }

    static async getAllByPlayer(gameAccountId: number): Promise<RecurringAction[]> {
        const recurringActions = await prisma.recurringAction.findMany({
            where: { gameAccountId },
            include: {
                GameAccount: true,
                Turn: true,
                Action: true
            }
        });
        return recurringActions.map((action: any) => new RecurringAction(action as RecurringActionType));
    }

    static async createRecurringAction(data: RecurringActionType): Promise<RecurringAction> {
        const validatedData = RecurringActionSchema.parse(data);
        const recurringAction = await prisma.recurringAction.create({
            data: validatedData,
            include: {
                GameAccount: true,
                Turn: true,
                Action: true
            }
        });
        return new RecurringAction(recurringAction as RecurringActionType);
    }

    static async updateRecurringAction(pk: number, data: Partial<RecurringActionType>): Promise<RecurringAction | null> {
        const validatedData = RecurringActionSchema.partial().parse(data);
        const recurringAction = await prisma.recurringAction.update({
            where: { pk },
            data: validatedData,
            include: {
                GameAccount: true,
                Turn: true,
                Action: true
            }
        });
        return recurringAction ? new RecurringAction(recurringAction as RecurringActionType) : null;
    }

    static async deleteRecurringAction(pk: number): Promise<void> {
        await prisma.recurringAction.delete({ where: { pk } });
    }
}

export default RecurringAction;
