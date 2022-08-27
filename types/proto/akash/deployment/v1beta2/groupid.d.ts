import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** GroupID stores owner, deployment sequence number and group sequence number */
export interface GroupID {
    owner: string;
    dseq: Long;
    gseq: number;
}
export declare const GroupID: {
    encode(message: GroupID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GroupID;
    fromJSON(object: any): GroupID;
    toJSON(message: GroupID): unknown;
    fromPartial(object: DeepPartial<GroupID>): GroupID;
};
