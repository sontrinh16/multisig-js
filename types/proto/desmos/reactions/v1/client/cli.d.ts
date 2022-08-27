import { RegisteredReactionValueParams, FreeTextValueParams } from "../models";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * SetReactionsParamsJSON contains the data that can be specified when setting a
 * subspace reactions params using the CLI command
 */
export interface SetReactionsParamsJSON {
    /** Params related to RegisteredReactionValue reactions */
    registeredReactionParams: RegisteredReactionValueParams;
    /** Params related to FreeTextValue reactions */
    freeTextParams: FreeTextValueParams;
}
export declare const SetReactionsParamsJSON: {
    encode(message: SetReactionsParamsJSON, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetReactionsParamsJSON;
    fromJSON(object: any): SetReactionsParamsJSON;
    toJSON(message: SetReactionsParamsJSON): unknown;
    fromPartial(object: DeepPartial<SetReactionsParamsJSON>): SetReactionsParamsJSON;
};
