import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Status } from "../../types/v1/status";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface Plan {
    id: Long;
    provider: string;
    price: Coin[];
    validity: string;
    bytes: string;
    status: Status;
    statusAt: Date;
}
export declare const Plan: {
    encode(message: Plan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Plan;
    fromJSON(object: any): Plan;
    toJSON(message: Plan): unknown;
    fromPartial(object: DeepPartial<Plan>): Plan;
};
