import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface Params {
    recoveryPeriod: Long;
    adjustPricePeriod: Long;
    basePrice: string;
    baseLoad: string;
    maxBlockBandwidth: Long;
}
export interface NeuronBandwidth {
    neuron: string;
    remainedValue: Long;
    lastUpdatedBlock: Long;
    maxValue: Long;
}
export interface Price {
    price: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const NeuronBandwidth: {
    encode(message: NeuronBandwidth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NeuronBandwidth;
    fromJSON(object: any): NeuronBandwidth;
    toJSON(message: NeuronBandwidth): unknown;
    fromPartial(object: DeepPartial<NeuronBandwidth>): NeuronBandwidth;
};
export declare const Price: {
    encode(message: Price, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Price;
    fromJSON(object: any): Price;
    toJSON(message: Price): unknown;
    fromPartial(object: DeepPartial<Price>): Price;
};
