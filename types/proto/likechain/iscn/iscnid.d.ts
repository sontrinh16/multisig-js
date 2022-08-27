import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface IscnIdPrefix {
    registryName: string;
    contentId: string;
}
export interface IscnId {
    prefix: IscnIdPrefix;
    version: Long;
}
export declare const IscnIdPrefix: {
    encode(message: IscnIdPrefix, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IscnIdPrefix;
    fromJSON(object: any): IscnIdPrefix;
    toJSON(message: IscnIdPrefix): unknown;
    fromPartial(object: DeepPartial<IscnIdPrefix>): IscnIdPrefix;
};
export declare const IscnId: {
    encode(message: IscnId, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IscnId;
    fromJSON(object: any): IscnId;
    toJSON(message: IscnId): unknown;
    fromPartial(object: DeepPartial<IscnId>): IscnId;
};
