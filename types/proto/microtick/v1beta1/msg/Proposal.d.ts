import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface DenomChangeProposal {
    title: string;
    description: string;
    backingDenom: string;
    backingRatio: string;
}
export interface MarketMetadata {
    name: string;
    description: string;
}
export interface AddMarketsProposal {
    title: string;
    description: string;
    markets: MarketMetadata[];
}
export declare const DenomChangeProposal: {
    encode(message: DenomChangeProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DenomChangeProposal;
    fromJSON(object: any): DenomChangeProposal;
    toJSON(message: DenomChangeProposal): unknown;
    fromPartial(object: DeepPartial<DenomChangeProposal>): DenomChangeProposal;
};
export declare const MarketMetadata: {
    encode(message: MarketMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketMetadata;
    fromJSON(object: any): MarketMetadata;
    toJSON(message: MarketMetadata): unknown;
    fromPartial(object: DeepPartial<MarketMetadata>): MarketMetadata;
};
export declare const AddMarketsProposal: {
    encode(message: AddMarketsProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddMarketsProposal;
    fromJSON(object: any): AddMarketsProposal;
    toJSON(message: AddMarketsProposal): unknown;
    fromPartial(object: DeepPartial<AddMarketsProposal>): AddMarketsProposal;
};
