import { ResourceUnits } from "../../base/v1beta2/resourceunits";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** Resource stores unit, total count and price of resource */
export interface Resource {
    resources: ResourceUnits;
    count: number;
    price: DecCoin;
}
export declare const Resource: {
    encode(message: Resource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Resource;
    fromJSON(object: any): Resource;
    toJSON(message: Resource): unknown;
    fromPartial(object: DeepPartial<Resource>): Resource;
};
