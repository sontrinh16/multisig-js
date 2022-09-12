import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** Params defines the claim module's parameters. */
export interface Params {
    airdropEnabled: boolean;
    /** airdrop starting time */
    airdropStartTime: Timestamp;
    durationUntilDecay: Duration;
    durationOfDecay: Duration;
    /** denom of claimable asset */
    claimDenom: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
