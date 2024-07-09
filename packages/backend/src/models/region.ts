import { PrismaClient } from '@prisma/client';
import { RegionSchema, RegionType } from 'models'

const prisma = new PrismaClient();

export class Region implements RegionType {
    pk: number | undefined;
    id: number | undefined;
    name: string | undefined;
    description: string | undefined;
    centerId: number | undefined;
    center: any | undefined;  // Assuming any for now, replace with correct type
    size: number | undefined;
    seasonId: number | undefined;
    season: any | undefined;   // Assuming any for now, replace with correct type
    TownData: any | undefined; // Assuming any for now, replace with correct type

    constructor(data: RegionType) {
        this.pk = data.pk;
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.centerId = data.centerId;
        this.center = data.center;
        this.size = data.size;
        this.seasonId = data.seasonId;
        this.season = data.season;
        this.TownData = data.TownData;
    }

    static async findUnique(pk: number): Promise<Region | null> {
        const region = await prisma.region.findUnique({
            where: { pk },
            include: {
                center: true,
                season: true,
                TownData: true
            }
        });
        return region ? new Region(region as RegionType) : null;
    }

    static async findById(id: number): Promise<Region | null> {
        const region = await prisma.region.findUnique({
            where: { id },
            include: {
                center: true,
                season: true,
                TownData: true
            }
        });
        return region ? new Region(region as RegionType) : null;
    }

    static async createRegion(data: RegionType): Promise<Region> {
        const validatedData = RegionSchema.parse(data);
        const region = await prisma.region.create({
            data: validatedData,
            include: {
                center: true,
                season: true,
                TownData: true
            }
        });
        return new Region(region as RegionType);
    }

    static async updateRegion(pk: number, data: Partial<RegionType>): Promise<Region | null> {
        const validatedData = RegionSchema.partial().parse(data);
        const region = await prisma.region.update({
            where: { pk },
            data: validatedData,
            include: {
                center: true,
                season: true,
                TownData: true
            }
        });
        return region ? new Region(region as RegionType) : null;
    }
}

export default Region;
