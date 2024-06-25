import { BaseModel } from './BaseModel';
import { TransportSchema, TransportType } from '../schema/TransportSchema';
import { TradeRouteSchema, TradeRouteType } from '../schema/TradeRouteSchema';
import { TransportCargoSchema, TransportCargoType } from '../schema/TransportCargoSchema';
import { TransportJourneySchema, TransportJourneyType } from '../schema/TransportJourneySchema';
import { TransportJourneyLegSchema, TransportJourneyLegType } from '../schema/TransportJourneyLegSchema';

export class Transport extends BaseModel implements TransportType {
    static schema = TransportSchema;
}

export class TransportRoute extends BaseModel implements TradeRouteType {
    static schema = TradeRouteSchema;
}

export class TransportCargo extends BaseModel implements TransportCargoType {
    static schema = TransportCargoSchema;
}

export class TransportJourney extends BaseModel implements TransportJourneyType {
    static schema = TransportJourneySchema;
}

export class TransportJourneyLeg extends BaseModel implements TransportJourneyLegType {
    static schema = TransportJourneyLegSchema;
}