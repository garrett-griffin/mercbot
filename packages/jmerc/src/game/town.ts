import Client from '../client'
import { ItemEnumType } from "../schema/enums/ItemEnumSchema";
import { Commoners } from "../models/commoners";
import { Market, MarketItem, MarketItemDetails } from "../models/market";
import { Structure } from "../models/structure";
import { TownData, TownDemand } from "../models/town";
import { ItemTradeResult } from "../models/itemTrade";

export class Town {
    _client: Client;
    _market: Market;
    data: TownData;

    constructor(client: Client, public id: number, data: TownData = null) {
        this._client = client;
        this.data = data;
    }

    async load(): Promise<void> {
        this.data = await this._client.townsApi.getTown(this.id);
        this._market = await this._client.townsApi.getMarketData(this.id);
    }

    get commoners(): Commoners {
        return this.data!.commoners;
    }

    get demands(): TownDemand[] {
        return this.data!.commoners.demands;
    }

    get market(): Record<ItemEnumType, MarketItem> {
        return this._market.markets;
    }

    get name(): string {
        return this.data!.name;
    }

    get structures(): {
        [key: string]: Structure;
    } {
        const structures: {
            [key: string]: Structure;
        } = {};
        for (const domain in this.data!.domain) {
            if (this.data!.domain[domain].structure !== null) {
                structures[domain] = this.data!.domain[domain].structure;
            }
        }
        return structures;
    }

    get totalSatisfaction(): number {
        const demands = this.data!.commoners.sustenance.flatMap((category) => category.products);
        const desireTotal = demands.reduce((acc, demand) => acc + demand.desire, 0);
        const resultTotal = demands.reduce((acc, demand) => acc + demand.result, 0);
        return Math.ceil((resultTotal / desireTotal) * 100);
    }

    get totalStructures(): number {
        return Object.values(this.data!.domain).filter((domain) => domain.structure !== null).length;
    }

    get totalTaxes(): number {
        return Object.values(this.data!.government.taxes_collected).reduce((acc, value) => acc + value, 0);
    }

    async buy(item: ItemEnumType, expectedBalance: number, operation: string, volume: number, price: number): Promise<ItemTradeResult> {
        return await this._client.townsApi.sendBuyOrder(item, this.id, expectedBalance, operation, price, volume);
    }

    async fetchMarketItem(item: ItemEnumType): Promise<MarketItemDetails> {
        return await this._client.townsApi.getMarketItem(this.id, item);
    }

    item(item: ItemEnumType): MarketItem | null {
        return this._market.markets[item];
    }

    async sell(item: ItemEnumType, expectedBalance: number, operation: string, volume: number, price: number): Promise<ItemTradeResult> {
        return await this._client.townsApi.sendSellOrder(item, this.id, expectedBalance, operation, price, volume);
    }
}