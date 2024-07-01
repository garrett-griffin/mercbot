import dotenv from 'dotenv';
import * as jmerc from "../../";
import {Client} from "../../";

dotenv.config();

async function balanceItem(player: jmerc.Player, item: jmerc.ItemEnumType, buyShortfall: boolean = false, _sellExcess: boolean = false): Promise<boolean> {
    const manager = player.storehouse.data.inventory.managers[item];
    const flow = player.storehouse.data.flows.get(item);
    let buyVolume: number | null = null;

    if (!manager || !flow) {
        console.log(`No manager or flow for ${item}`);
        return false;
    }

    let consumed = flow.consumption;

    if (flow.shortfall) {
        consumed += flow.shortfall;
    }

    consumed -= flow.production;

    if (flow.resident) {
        consumed -= flow.resident;
    }

    console.log(`\tCurrently consuming ${consumed} ${item}`);
    console.log(`\tCurrently buying ${manager.buyVolume} ${item}`);

    const oldVolume = manager.buyVolume;
    buyVolume = Math.ceil(consumed);
    const sellVolume = 0 - buyVolume;

    if (buyShortfall && flow.shortfall && flow.shortfall > 0.0) {
        console.log(`\t\tBuying Shortfall of ${Math.ceil(flow.shortfall)} of ${item} at max price of ${Math.ceil(player.storehouse.items.get(item).averageCost * 2)}.`);
        await player.storehouse.items.get(item).buy(Math.ceil(flow.shortfall), Math.ceil(player.storehouse.items.get(item).averageCost * 2));
    }

    if (consumed === manager.buyVolume) {
        return false;
    }

    if ((0 < buyVolume && buyVolume === oldVolume) || (0 < sellVolume && sellVolume === manager.sellVolume) || (buyVolume === 0 && sellVolume === 0)) {
        console.log(`\t${item} consumption is balanced (wasting less than 1.0 ${item})`);
        return false;
    }

    console.log(`Old volume: ${oldVolume} - Buy volume: ${buyVolume}`);
    console.log(`Old sell volume: ${manager.sellVolume} - Sell volume: ${sellVolume}`);

    if (buyVolume > 0.0) {
        console.log(`     Adjusting ${item} purchase amount to ${buyVolume}`);
        await player.storehouse.items[item].patchManager({ buyVolume, sellVolume: 0 });
        console.log(`     ${item} purchase amount adjusted successfully`);
    } else if (sellVolume > 0.0) {
        console.log(`     Adjusting ${item} sale amount to ${sellVolume}`);
        await player.storehouse.items[item].patchManager({ buyVolume: 0, sellVolume });
        console.log(`     ${item} sale amount adjusted successfully`);
    }

    return true;
}

async function balanceLabour(player: jmerc.Player): Promise<boolean> {
    return await balanceItem(player, jmerc.ItemEnum.Labour, true);
}

async function balanceCarting(player: jmerc.Player): Promise<boolean> {
    return await balanceItem(player, jmerc.ItemEnum.Carting, true);
}

async function balanceOxPower(player: jmerc.Player): Promise<boolean> {
    return await balanceItem(player, jmerc.ItemEnum.OxPower, true);
}

export async function main() {
    const client = new Client(process.env.API_USER, process.env.API_TOKEN);
    const player: jmerc.Player = await client.getPlayer();
    console.log(`Handling - ${player.data.household.name}...`);
    await balanceLabour(player);
    await balanceCarting(player);
    await balanceOxPower(player);
}

main();