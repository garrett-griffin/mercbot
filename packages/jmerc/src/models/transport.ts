import { BaseModel } from './baseModel';
import { TransportSchema, TransportType as TransportSchemaType } from '../schema/TransportSchema';
import { TradeRouteSchema, TradeRouteType } from '../schema/TradeRouteSchema';
import { TransportCargoSchema, TransportCargoType } from '../schema/TransportCargoSchema';
import { TransportJourneySchema, TransportJourneyType } from '../schema/TransportJourneySchema';
import { TransportJourneyLegSchema, TransportJourneyLegType } from '../schema/TransportJourneyLegSchema';
import {TransportTypeSchema, TransportTypeType} from "../schema/TransportTypeSchema";
import { Location } from './location';
import {Inventory} from "./inventory";
import {Operation} from "./operation";
import {Producer} from "./producer";
import {Account} from "./account";
import {ItemEnumType} from "../schema/enums/ItemEnumSchema";
import {Manager} from "./manager";
import {Flow} from "./flow";
import {Path} from "./path";
import {TransportTypeEnumType} from "../schema/enums/TransportTypeEnumSchema";

export class Transport extends BaseModel implements TransportSchemaType {
    static schema = TransportSchema;

    id: number;
    reference: string;
    type: TransportTypeEnumType;
    size: number;
    name: string;
    owner_id: string;
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

export class TransportType extends BaseModel implements TransportTypeType {
    static schema = TransportTypeSchema;

    type: TransportTypeEnumType;
    category: number;
    tier: number;
    capacity: number;
    speed: number;
    journey_duration: number | null;
    effective_days: number | null;
    operating_costs: Record<ItemEnumType, number>;
    catches: string | null;
    fishing_range: number | null;
}