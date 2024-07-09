import { PrismaClient } from '@prisma/client';
import { TownSchema, TownType } from 'models'; // Update the path as necessary
import { TownDataSchema, TownDataType } from 'models';
import Turn from "./turn";
import Region from "./region"; // Update the path as necessary

const prisma = new PrismaClient();

export class Town {
    pk: number | undefined;
    id: number | undefined;
    name: string | undefined;
    locationId: number | undefined;
    location: any | undefined;  // Replace with correct type
    region: number | undefined;
    capital: boolean | undefined;
    turnId: number | undefined;
    turn: Turn | undefined;  // Replace with correct type
    townData: TownDataType | undefined;

    constructor(data: TownType & { townData: TownDataType }) {
        this.pk = data.pk;
        this.id = data.id;
        this.name = data.name;
        this.locationId = data.locationId;
        this.location = data.location;
        this.region = data.region;
        this.capital = data.capital;
        this.turnId = data.turnId;
        this.turn = data.turn;
        this.townData = data.townData;
    }

    // Getter and Setter for TownData properties

    get centerIds(): number[] | undefined {
        return this.townData?.centerIds;
    }

    set centerIds(value: number[] | undefined) {
        if (this.townData) {
            this.townData.centerIds = value;
        }
    }

    get householdIds(): string[] | undefined {
        return this.townData?.householdIds;
    }

    set householdIds(value: string[] | undefined) {
        if (this.townData) {
            this.townData.householdIds = value;
        }
    }

    get commonersId(): number | undefined {
        return this.townData?.commonersId;
    }

    set commonersId(value: number | undefined) {
        if (this.townData) {
            this.townData.commonersId = value;
        }
    }

    get commoners(): any | undefined { // Replace with correct type
        return this.townData?.commoners;
    }

    set commoners(value: any | undefined) { // Replace with correct type
        if (this.townData) {
            this.townData.commoners = value;
        }
    }

    get governmentId(): number | undefined {
        return this.townData?.governmentId;
    }

    set governmentId(value: number | undefined) {
        if (this.townData) {
            this.townData.governmentId = value;
        }
    }

    get government(): any | undefined { // Replace with correct type
        return this.townData?.government;
    }

    set government(value: any | undefined) { // Replace with correct type
        if (this.townData) {
            this.townData.government = value;
        }
    }

    get churchId(): number | undefined {
        return this.townData?.churchId;
    }

    set churchId(value: number | undefined) {
        if (this.townData) {
            this.townData.churchId = value;
        }
    }

    get church(): any | undefined { // Replace with correct type
        return this.townData?.church;
    }

    set church(value: any | undefined) { // Replace with correct type
        if (this.townData) {
            this.townData.church = value;
        }
    }

    get navigationZones(): any | undefined { // Replace with correct type
        return this.townData?.navigationZones;
    }

    set navigationZones(value: any | undefined) { // Replace with correct type
        if (this.townData) {
            this.townData.navigationZones = value;
        }
    }

    get cultureId(): number | undefined {
        return this.townData?.cultureId;
    }

    set cultureId(value: number | undefined) {
        if (this.townData) {
            this.townData.cultureId = value;
        }
    }

    get culture(): any | undefined { // Replace with correct type
        return this.townData?.culture;
    }

    set culture(value: any | undefined) { // Replace with correct type
        if (this.townData) {
            this.townData.culture = value;
        }
    }

    get domain(): any[] | undefined { // Replace with correct type
        return this.townData?.domain;
    }

    set domain(value: any[] | undefined) { // Replace with correct type
        if (this.townData) {
            this.townData.domain = value;
        }
    }

    get regionRef(): Region | undefined { // Replace with correct type
        return this.townData?.regionRef;
    }

    set regionRef(value: Region | undefined) { // Replace with correct type
        if (this.townData) {
            this.townData.regionRef = value;
        }
    }

    // Static methods

    static async findUnique(pk: number): Promise<Town | null> {
        const town = await prisma.town.findUnique({
            where: { pk },
            include: {
                location: true,
                region: true,
                turn: true,
                townData: true
            }
        });
        return town ? new Town({ ...town, townData: town.townData } as TownType & { townData: TownDataType }) : null;
    }

    static async findById(id: number): Promise<Town | null> {
        const town = await prisma.town.findUnique({
            where: { id },
            include: {
                location: true,
                region: true,
                turn: true,
                townData: true
            }
        });
        return town ? new Town({ ...town, townData: town.townData } as TownType & { townData: TownDataType }) : null;
    }

    static async createTown(data: TownType & { townData: TownDataType }): Promise<Town> {
        const validatedData = TownSchema.parse(data);
        const validatedTownData = TownDataSchema.parse(data.townData);

        const town = await prisma.town.create({
            data: {
                ...validatedData,
                townData: {
                    create: validatedTownData
                }
            },
            include: {
                location: true,
                region: true,
                turn: true,
                townData: true
            }
        });

        return new Town({ ...town, townData: town.townData } as TownType & { townData: TownDataType });
    }

    static async updateTown(pk: number, data: Partial<TownType & { townData: Partial<TownDataType> }>): Promise<Town | null> {
        const validatedData = TownSchema.partial().parse(data);
        const validatedTownData = TownDataSchema.partial().parse(data.townData);

        const town = await prisma.town.update({
            where: { pk },
            data: {
                ...validatedData,
                townData: {
                    update: validatedTownData
                }
            },
            include: {
                location: true,
                region: true,
                turn: true,
                townData: true
            }
        });

        return town ? new Town({ ...town, townData: town.townData } as TownType & { townData: TownDataType }) : null;
    }
}

export default Town;
