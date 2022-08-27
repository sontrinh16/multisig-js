import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface IscnRecord {
    /** Using camelCases to make the record JSON in tx more like general JSON documents */
    recordNotes: string;
    contentFingerprints: string[];
    /** Here, `IscnInput` is JSON encoded bytes */
    stakeholders: Uint8Array[];
    contentMetadata: Uint8Array;
}
export interface MsgCreateIscnRecord {
    from: string;
    record: IscnRecord;
}
export interface MsgCreateIscnRecordResponse {
    iscnId: string;
    recordIpld: string;
}
export interface MsgUpdateIscnRecord {
    from: string;
    iscnId: string;
    record: IscnRecord;
}
export interface MsgUpdateIscnRecordResponse {
    iscnId: string;
    recordIpld: string;
}
export interface MsgChangeIscnRecordOwnership {
    from: string;
    iscnId: string;
    newOwner: string;
}
export interface MsgChangeIscnRecordOwnershipResponse {
}
export declare const IscnRecord: {
    encode(message: IscnRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IscnRecord;
    fromJSON(object: any): IscnRecord;
    toJSON(message: IscnRecord): unknown;
    fromPartial(object: DeepPartial<IscnRecord>): IscnRecord;
};
export declare const MsgCreateIscnRecord: {
    encode(message: MsgCreateIscnRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIscnRecord;
    fromJSON(object: any): MsgCreateIscnRecord;
    toJSON(message: MsgCreateIscnRecord): unknown;
    fromPartial(object: DeepPartial<MsgCreateIscnRecord>): MsgCreateIscnRecord;
};
export declare const MsgCreateIscnRecordResponse: {
    encode(message: MsgCreateIscnRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIscnRecordResponse;
    fromJSON(object: any): MsgCreateIscnRecordResponse;
    toJSON(message: MsgCreateIscnRecordResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateIscnRecordResponse>): MsgCreateIscnRecordResponse;
};
export declare const MsgUpdateIscnRecord: {
    encode(message: MsgUpdateIscnRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateIscnRecord;
    fromJSON(object: any): MsgUpdateIscnRecord;
    toJSON(message: MsgUpdateIscnRecord): unknown;
    fromPartial(object: DeepPartial<MsgUpdateIscnRecord>): MsgUpdateIscnRecord;
};
export declare const MsgUpdateIscnRecordResponse: {
    encode(message: MsgUpdateIscnRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateIscnRecordResponse;
    fromJSON(object: any): MsgUpdateIscnRecordResponse;
    toJSON(message: MsgUpdateIscnRecordResponse): unknown;
    fromPartial(object: DeepPartial<MsgUpdateIscnRecordResponse>): MsgUpdateIscnRecordResponse;
};
export declare const MsgChangeIscnRecordOwnership: {
    encode(message: MsgChangeIscnRecordOwnership, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeIscnRecordOwnership;
    fromJSON(object: any): MsgChangeIscnRecordOwnership;
    toJSON(message: MsgChangeIscnRecordOwnership): unknown;
    fromPartial(object: DeepPartial<MsgChangeIscnRecordOwnership>): MsgChangeIscnRecordOwnership;
};
export declare const MsgChangeIscnRecordOwnershipResponse: {
    encode(_: MsgChangeIscnRecordOwnershipResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeIscnRecordOwnershipResponse;
    fromJSON(_: any): MsgChangeIscnRecordOwnershipResponse;
    toJSON(_: MsgChangeIscnRecordOwnershipResponse): unknown;
    fromPartial(_: DeepPartial<MsgChangeIscnRecordOwnershipResponse>): MsgChangeIscnRecordOwnershipResponse;
};
