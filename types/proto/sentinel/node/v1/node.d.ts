import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Status } from "../../types/v1/status";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface Node {
    address: string;
    provider: string;
    price: Coin[];
    remoteUrl: string;
    status: Status;
    statusAt: Date;
}
export declare const Node: {
    encode(message: Node, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Node;
    fromJSON(object: any): Node;
    toJSON(message: Node): unknown;
    fromPartial(object: DeepPartial<Node>): Node;
};
