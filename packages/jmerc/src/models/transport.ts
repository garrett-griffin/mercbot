import { BaseModel } from './BaseModel';
import { TransportSchema, TransportType } from '../schema/TransportSchema';
import { TradeRouteSchema, TradeRouteType } from '../schema/TradeRouteSchema';
import { TransportCargoSchema, TransportCargoType } from '../schema/TransportCargoSchema';
import { TransportJourneySchema, TransportJourneyType } from '../schema/TransportJourneySchema';
import { TransportJourneyLegSchema, TransportJourneyLegType } from '../schema/TransportJourneyLegSchema';
import {TransportTypeType} from "../schema/TransportTypeSchema";
import { Location } from './location';
import {Inventory} from "./inventory";
import {Operation} from "./operation";
import {Producer} from "./producer";
import {Account} from "./account";
import {ItemEnumType} from "../schema/enums/ItemEnumSchema";
import {Manager} from "./manager";
import {Flow} from "./flow";
import {Path} from "./path";

export class Transport extends BaseModel implements TransportType {
    static schema = TransportSchema;

    id: number;
    reference: string;
    type: TransportTypeType;
    size: number;
    name: string;
    owner_id: number;
    hometown_id: number;
    location: Location;
    domain: Location[] | null;
    capacity: number;
    fish_quantity: number | null;
    inventory: Inventory;
    cargo: TransportCargo | null;
    previous_operations: Operation | null;
    provider_id: number | null;
    producer: Producer | null;
    route: TradeRoute | null;
    journey: TransportJourney;
}

export class TradeRoute extends BaseModel implements TradeRouteType {
    static schema = TradeRouteSchema;

    id: number;
    reference: string;
    local_town: number;
    remote_town: number;
    capacity: number;
    reserved_import: number;
    reserved_export: number;
    distance: number;
    moves: number;
    provider_id: number;
    account_id: string;
    account: Account;
    managers: Record<ItemEnumType, Manager>;
    current_flows: Record<ItemEnumType, Flow>;
    previous_flows: Record<ItemEnumType, Flow>;
}

export class TransportCargo extends BaseModel implements TransportCargoType {
    static schema = TransportCargoSchema;

    reference: string;
    inventory: Inventory | null;
}

export class TransportJourney extends BaseModel implements TransportJourneyType {
    static schema = TransportJourneySchema;

    category: string;
    start_town_id: number;
    distance: number;
    moves: number;
    legs: TransportJourneyLeg[];
}

export class TransportJourneyLeg extends BaseModel implements TransportJourneyLegType {
    static schema = TransportJourneyLegSchema;

    path: Path[];
}