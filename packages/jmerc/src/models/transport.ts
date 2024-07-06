import { BaseModel } from './baseModel';
import { TransportSchema, TransportType as TransportSchemaType } from '../schema/TransportSchema';
import { TradeRouteSchema, TradeRouteType } from '../schema';
import { TransportCargoSchema, TransportCargoType } from '../schema';
import { TransportJourneySchema, TransportJourneyType } from '../schema';
import { TransportJourneyLegSchema, TransportJourneyLegType } from '../schema';
import { TransportTypeSchema, TransportTypeType } from "../schema";
import { Location } from './location';
import { Inventory } from "./inventory";
import { Operation } from "./operation";
import { Producer } from "./producer";
import {Account, AccountAsset} from "./account";
import { ItemEnumType } from "../schema/enums";
import { Manager } from "./manager";
import { Flow } from "./flow";
import { Path } from "./path";
import { TransportTypeEnumType } from "../schema/enums";
import {Ingredient} from "./recipe";
import {Item} from "./item";

/**
 * Represents transport with associated attributes.
 */
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

    /**
     * Creates an instance of Transport.
     * @param data - The data to initialize the transport.
     */
    constructor(data: TransportSchemaType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();
        this.location = Location.build(this.location);
        this.domain = this.domain ? this.domain.map((item: Location) => Location.build(item)) : null;
        this.inventory = Inventory.build(this.inventory);
        this.cargo = this.cargo ? TransportCargo.build(this.cargo) : null;
        this.previous_operations = this.previous_operations ? Operation.build(this.previous_operations) : null;
        this.producer = this.producer ? Producer.build(this.producer) : null;
        this.route = this.route ? TradeRoute.build(this.route) : null;
        this.journey = TransportJourney.build(this.journey);
    }
}

/**
 * Represents a trade route with associated attributes.
 */
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

    /**
     * Creates an instance of TradeRoute.
     * @param data - The data to initialize the trade route.
     */
    constructor(data: TradeRouteType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();
        this.account = Account.build(this.account);

        Object.keys(this.managers).forEach((key: ItemEnumType) => {
            const manager = this.managers[key];
            this.managers[key] = Manager.build(manager);
        });

        Object.keys(this.current_flows).forEach((key: ItemEnumType) => {
            const flow = this.current_flows[key];
            this.current_flows[key] = Flow.build(flow);
        });

        Object.keys(this.previous_flows).forEach((key: ItemEnumType) => {
            const flow = this.previous_flows[key];
            this.previous_flows[key] = Flow.build(flow);
        });
    }

    get managersMap() : Map<ItemEnumType, Manager> {
        return new Map(Object.entries(this.managers).map(([key, value]) => [key as ItemEnumType, value]));
    }

    get currentFlowsMap() : Map<ItemEnumType, Flow> {
        return new Map(Object.entries(this.current_flows).map(([key, value]) => [key as ItemEnumType, value]));
    }

    get previousFlowsMap() : Map<ItemEnumType, Flow> {
        return new Map(Object.entries(this.previous_flows).map(([key, value]) => [key as ItemEnumType, value]));
    }
}

/**
 * Represents the cargo of transport with associated attributes.
 */
export class TransportCargo extends BaseModel implements TransportCargoType {
    static schema = TransportCargoSchema;

    reference: string;
    inventory: Inventory | null;

    /**
     * Creates an instance of TransportCargo.
     * @param data - The data to initialize the transport cargo.
     */
    constructor(data: TransportCargoType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();
    }
}

/**
 * Represents a transport journey with associated attributes.
 */
export class TransportJourney extends BaseModel implements TransportJourneyType {
    static schema = TransportJourneySchema;

    category: string;
    start_town_id: number;
    distance: number;
    moves: number;
    legs: TransportJourneyLeg[];

    /**
     * Creates an instance of TransportJourney.
     * @param data - The data to initialize the transport journey.
     */
    constructor(data: TransportJourneyType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();
        for(let i: number; i<this.legs.length; i++) {
            this.legs[i] = TransportJourneyLeg.build(this.legs[i]);
        }
    }
}

/**
 * Represents a leg of a transport journey with associated attributes.
 */
export class TransportJourneyLeg extends BaseModel implements TransportJourneyLegType {
    static schema = TransportJourneyLegSchema;

    path: Path[];

    /**
     * Creates an instance of TransportJourneyLeg.
     * @param data - The data to initialize the transport journey leg.
     */
    constructor(data: TransportJourneyLegType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();
        for(let i: number; i<this.path.length; i++) {
            this.path[i] = Path.build(this.path[i]);
        }
    }
}

/**
 * Represents a type of transport with associated attributes.
 */
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

    /**
     * Creates an instance of TransportType.
     * @param data - The data to initialize the transport type.
     */
    constructor(data: TransportTypeType) {
        super(data);
    }

    _initializeSubProperties() {
        super._initializeSubProperties();
    }

    get operatingCostsMap(): Map<ItemEnumType, number> {
        return new Map(Object.entries(this.operating_costs).map(([key, value]) => [key as ItemEnumType, value]));
    }
}
