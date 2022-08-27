import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** EventSell is an event emitted when a sell order is created. */
export interface EventSell {
    /** order_id is the unique identifier of the sell order. */
    orderId: Long;
}
/** EventUpdateSellOrder is an event emitted when a sell order is updated. */
export interface EventUpdateSellOrder {
    /** order_id is the unique identifier of the sell order. */
    orderId: Long;
}
/**
 * EventAllowDenom is an event emitted when a new denom is added for use in the
 * marketplace.
 */
export interface EventAllowDenom {
    /**
     * denom is the bank denom (e.g. ibc/GLKHDSG423SGS) added to the list of
     * allowed denoms for use in the marketplace.
     */
    denom: string;
}
export declare const EventSell: {
    encode(message: EventSell, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSell;
    fromJSON(object: any): EventSell;
    toJSON(message: EventSell): unknown;
    fromPartial(object: DeepPartial<EventSell>): EventSell;
};
export declare const EventUpdateSellOrder: {
    encode(message: EventUpdateSellOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateSellOrder;
    fromJSON(object: any): EventUpdateSellOrder;
    toJSON(message: EventUpdateSellOrder): unknown;
    fromPartial(object: DeepPartial<EventUpdateSellOrder>): EventUpdateSellOrder;
};
export declare const EventAllowDenom: {
    encode(message: EventAllowDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAllowDenom;
    fromJSON(object: any): EventAllowDenom;
    toJSON(message: EventAllowDenom): unknown;
    fromPartial(object: DeepPartial<EventAllowDenom>): EventAllowDenom;
};
