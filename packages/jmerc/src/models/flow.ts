import { BaseModel } from './BaseModel';
import { FlowSchema, FlowType } from '../schema/FlowSchema';

export class Flow extends BaseModel implements FlowType {
    static schema = FlowSchema;
}