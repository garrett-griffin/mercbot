import { PrismaClient } from '@prisma/client';
import { SiteType } from 'models';
import { Season } from './season'

const prisma = new PrismaClient();

export class Site implements SiteType {
    public pk: number | undefined;
    public name: string | undefined;
    public url: string | undefined;
    public seasons: Season[] | undefined;

    constructor({ pk, name, url, seasons }: SiteType) {
        this.pk = pk;
        this.name = name;
        this.url = url;
        this.seasons = seasons;
    }

    static async getPrimarySite(): Promise<Site | null> {
        return prisma.site.findFirst({
            where: { url: 'play.mercatorio.io' },
        });
    }
    static async getAll(): Promise<Site[] | null> {
        return prisma.site.findMany();
    }
}

export default Site;
