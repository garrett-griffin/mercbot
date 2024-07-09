import { PrismaClient } from '@prisma/client';
import { SeasonType, GameAccountType } from "models";
import Site from './site';

const prisma = new PrismaClient();

export class Season implements SeasonType {
    public pk: number | undefined;
    public number: number | undefined;
    public siteId: number | undefined;
    public site: Site | undefined;
    public gameAccounts: GameAccountType[] | undefined;
    public turns?: any[]; // adjust this with the type inferred from the `Turn` Zod schema
    public Region?: any[]; // adjust this with the type inferred from the `Region` Zod schema

    constructor({
                    pk,
                    number,
                    siteId,
                    site,
                    gameAccounts,
                    turns,
                    Region,
                }: SeasonType) {
        this.pk = pk;
        this.number = number;
        this.siteId = siteId;
        this.site = site;
        this.gameAccounts = gameAccounts;
        this.turns = turns;
        this.Region = Region;
    }


    static async getCurrentSeason(): Promise<Season | null> {
        const site = await Site.getPrimarySite();
        if (!site) {
            throw new Error('Primary site not found');
        }
        return prisma.season.findFirst({
            where: { siteId: site.pk },
            orderBy: { number: 'desc' }
        });
    }

    static async getCurrentSeasonForSite(siteId: number): Promise<Season | null> {
        return prisma.season.findFirst({
            where: { siteId },
            orderBy: { number: 'desc' }
        });
    }
}

export default Season;
