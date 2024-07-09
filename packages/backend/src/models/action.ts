import { PrismaClient } from '@prisma/client';
import { ActionType, ActionSchema } from 'models';
import { GameAccount } from './gameAccount';
import { Turn } from './turn';
import { RecurringAction } from './recurringAction';

const prisma = new PrismaClient();

export class Action {
    pk: number;
    type: string;
    status: string;
    schedule: Date;
    gameAccountId: number;
    GameAccount: GameAccount;
    createdAt: Date;
    updatedAt: Date;
    turnId: number;
    turn: Turn;
    when: string;
    recurringActionId: number;
    RecurringAction: RecurringAction;

    constructor(data: ActionType) {
        this.pk = data.pk;
        this.type = data.type;
        this.status = data.status;
        this.schedule = data.schedule;
        this.gameAccountId = data.gameAccountId;
        this.GameAccount = new GameAccount(data.GameAccount);
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
        this.turnId = data.turnId;
        this.turn = new Turn(data.turn);
        this.when = data.when;
        this.recurringActionId = data.recurringActionId;
        this.RecurringAction = new RecurringAction(data.RecurringAction);
    }

    static async findByPk(pk: number): Promise<Action | null> {
        const action = await prisma.action.findUnique({
            where: { pk },
            include: {
                GameAccount: true,
                turn: true,
                RecurringAction: true
            }
        });
        return action ? new Action(action as ActionType) : null;
    }

    static async getAllByPlayer(gameAccountId: number): Promise<Action[]> {
        const actions = await prisma.action.findMany({
            where: { gameAccountId },
            include: {
                GameAccount: true,
                turn: true,
                RecurringAction: true
            }
        });
        return actions.map((action: any) => new Action(action as ActionType));
    }

    static async createAction(data: ActionType): Promise<Action> {
        const validatedData = ActionSchema.parse(data);
        const action = await prisma.action.create({
            data: validatedData,
            include: {
                GameAccount: true,
                turn: true,
                RecurringAction: true
            }
        });
        return new Action(action as ActionType);
    }

    static async updateAction(pk: number, data: Partial<ActionType>): Promise<Action | null> {
        const validatedData = ActionSchema.partial().parse(data);
        const action = await prisma.action.update({
            where: { pk },
            data: validatedData,
            include: {
                GameAccount: true,
                turn: true,
                RecurringAction: true
            }
        });
        return action ? new Action(action as ActionType) : null;
    }

    static async deleteAction(pk: number): Promise<void> {
        await prisma.action.delete({ where: { pk } });
    }
}

export default Action;
