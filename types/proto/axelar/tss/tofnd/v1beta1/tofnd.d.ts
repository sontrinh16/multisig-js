import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export declare enum RecoverResponse_Response {
    RESPONSE_UNSPECIFIED = 0,
    RESPONSE_SUCCESS = 1,
    RESPONSE_FAIL = 2,
    UNRECOGNIZED = -1
}
export declare function recoverResponse_ResponseFromJSON(object: any): RecoverResponse_Response;
export declare function recoverResponse_ResponseToJSON(object: RecoverResponse_Response): string;
export declare enum MessageOut_CriminalList_Criminal_CrimeType {
    CRIME_TYPE_UNSPECIFIED = 0,
    CRIME_TYPE_NON_MALICIOUS = 1,
    CRIME_TYPE_MALICIOUS = 2,
    UNRECOGNIZED = -1
}
export declare function messageOut_CriminalList_Criminal_CrimeTypeFromJSON(object: any): MessageOut_CriminalList_Criminal_CrimeType;
export declare function messageOut_CriminalList_Criminal_CrimeTypeToJSON(object: MessageOut_CriminalList_Criminal_CrimeType): string;
export interface RecoverRequest {
    keygenInit: KeygenInit;
    keygenOutput: KeygenOutput;
}
export interface RecoverResponse {
    response: RecoverResponse_Response;
}
/** Keygen's success response */
export interface KeygenOutput {
    /** pub_key; common for all parties */
    pubKey: Uint8Array;
    /** recover info of all parties' shares; common for all parties */
    groupRecoverInfo: Uint8Array;
    /** private recover info of this party's shares; unique for each party */
    privateRecoverInfo: Uint8Array;
}
export interface MessageIn {
    /** first message only, Keygen */
    keygenInit?: KeygenInit;
    /** first message only, Sign */
    signInit?: SignInit;
    /** all subsequent messages */
    traffic?: TrafficIn;
    /** abort the protocol, ignore the bool value */
    abort?: boolean;
}
export interface MessageOut {
    /** all but final message */
    traffic?: TrafficOut;
    /** final message only, Keygen */
    keygenResult?: MessageOut_KeygenResult;
    /** final message only, Sign */
    signResult?: MessageOut_SignResult;
    /** issue recover from client */
    needRecover?: boolean;
}
/** Keygen's response types */
export interface MessageOut_KeygenResult {
    /** Success response */
    data?: KeygenOutput;
    /** Faiilure response */
    criminals?: MessageOut_CriminalList;
}
/** Sign's response types */
export interface MessageOut_SignResult {
    /** Success response */
    signature?: Uint8Array;
    /** Failure response */
    criminals?: MessageOut_CriminalList;
}
/** Keygen/Sign failure response message */
export interface MessageOut_CriminalList {
    criminals: MessageOut_CriminalList_Criminal[];
}
export interface MessageOut_CriminalList_Criminal {
    partyUid: string;
    crimeType: MessageOut_CriminalList_Criminal_CrimeType;
}
export interface TrafficIn {
    fromPartyUid: string;
    payload: Uint8Array;
    isBroadcast: boolean;
}
export interface TrafficOut {
    toPartyUid: string;
    payload: Uint8Array;
    isBroadcast: boolean;
}
export interface KeygenInit {
    newKeyUid: string;
    partyUids: string[];
    partyShareCounts: number[];
    /** parties[my_party_index] belongs to the server */
    myPartyIndex: number;
    threshold: number;
}
export interface SignInit {
    newSigUid: string;
    keyUid: string;
    /** TODO replace this with a subset of indices? */
    partyUids: string[];
    messageToSign: Uint8Array;
}
export declare const RecoverRequest: {
    encode(message: RecoverRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RecoverRequest;
    fromJSON(object: any): RecoverRequest;
    toJSON(message: RecoverRequest): unknown;
    fromPartial(object: DeepPartial<RecoverRequest>): RecoverRequest;
};
export declare const RecoverResponse: {
    encode(message: RecoverResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RecoverResponse;
    fromJSON(object: any): RecoverResponse;
    toJSON(message: RecoverResponse): unknown;
    fromPartial(object: DeepPartial<RecoverResponse>): RecoverResponse;
};
export declare const KeygenOutput: {
    encode(message: KeygenOutput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenOutput;
    fromJSON(object: any): KeygenOutput;
    toJSON(message: KeygenOutput): unknown;
    fromPartial(object: DeepPartial<KeygenOutput>): KeygenOutput;
};
export declare const MessageIn: {
    encode(message: MessageIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageIn;
    fromJSON(object: any): MessageIn;
    toJSON(message: MessageIn): unknown;
    fromPartial(object: DeepPartial<MessageIn>): MessageIn;
};
export declare const MessageOut: {
    encode(message: MessageOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageOut;
    fromJSON(object: any): MessageOut;
    toJSON(message: MessageOut): unknown;
    fromPartial(object: DeepPartial<MessageOut>): MessageOut;
};
export declare const MessageOut_KeygenResult: {
    encode(message: MessageOut_KeygenResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageOut_KeygenResult;
    fromJSON(object: any): MessageOut_KeygenResult;
    toJSON(message: MessageOut_KeygenResult): unknown;
    fromPartial(object: DeepPartial<MessageOut_KeygenResult>): MessageOut_KeygenResult;
};
export declare const MessageOut_SignResult: {
    encode(message: MessageOut_SignResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageOut_SignResult;
    fromJSON(object: any): MessageOut_SignResult;
    toJSON(message: MessageOut_SignResult): unknown;
    fromPartial(object: DeepPartial<MessageOut_SignResult>): MessageOut_SignResult;
};
export declare const MessageOut_CriminalList: {
    encode(message: MessageOut_CriminalList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageOut_CriminalList;
    fromJSON(object: any): MessageOut_CriminalList;
    toJSON(message: MessageOut_CriminalList): unknown;
    fromPartial(object: DeepPartial<MessageOut_CriminalList>): MessageOut_CriminalList;
};
export declare const MessageOut_CriminalList_Criminal: {
    encode(message: MessageOut_CriminalList_Criminal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageOut_CriminalList_Criminal;
    fromJSON(object: any): MessageOut_CriminalList_Criminal;
    toJSON(message: MessageOut_CriminalList_Criminal): unknown;
    fromPartial(object: DeepPartial<MessageOut_CriminalList_Criminal>): MessageOut_CriminalList_Criminal;
};
export declare const TrafficIn: {
    encode(message: TrafficIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TrafficIn;
    fromJSON(object: any): TrafficIn;
    toJSON(message: TrafficIn): unknown;
    fromPartial(object: DeepPartial<TrafficIn>): TrafficIn;
};
export declare const TrafficOut: {
    encode(message: TrafficOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TrafficOut;
    fromJSON(object: any): TrafficOut;
    toJSON(message: TrafficOut): unknown;
    fromPartial(object: DeepPartial<TrafficOut>): TrafficOut;
};
export declare const KeygenInit: {
    encode(message: KeygenInit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenInit;
    fromJSON(object: any): KeygenInit;
    toJSON(message: KeygenInit): unknown;
    fromPartial(object: DeepPartial<KeygenInit>): KeygenInit;
};
export declare const SignInit: {
    encode(message: SignInit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignInit;
    fromJSON(object: any): SignInit;
    toJSON(message: SignInit): unknown;
    fromPartial(object: DeepPartial<SignInit>): SignInit;
};
