import { ContentHash, ContentHash_Graph, AttestorEntry } from "./types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** MsgAnchor is the Msg/Anchor request type. */
export interface MsgAnchor {
    /**
     * sender is the address of the sender of the transaction. The sender in
     * Anchor is not attesting to the veracity of the underlying data. They
     * can simply be an intermediary providing services.
     */
    sender: string;
    /** content_hash is the content hash for the data to anchor. */
    contentHash: ContentHash;
}
/** MsgAnchor is the Msg/Anchor response type. */
export interface MsgAnchorResponse {
    /** iri is the IRI of the data that was anchored. */
    iri: string;
    /** timestamp is the timestamp at which the data was anchored. */
    timestamp: Timestamp;
}
/** MsgAttest is the Msg/Attest request type. */
export interface MsgAttest {
    /**
     * attestor is the addresses of the account attesting to the veracity of the
     * data. By making an Attest request, the attestor is attesting to the
     * veracity of the data referenced by the IRI. The precise meaning of this may
     * vary depending on the underlying data.
     */
    attestor: string;
    /**
     * content_hashes are the content hashes for anchored data. Only RDF graph
     * data can be signed as its data model is intended to specifically convey
     * semantic meaning.
     */
    contentHashes: ContentHash_Graph[];
}
/** MsgAttestResponse is the Msg/Attest response type. */
export interface MsgAttestResponse {
    /**
     * new_entries are the new attestor entries including the attestor, the IRI,
     * and the timestamp. If the attestor attests to the same piece of data, the
     * entry will not be updated and not included in the response.
     */
    newEntries: AttestorEntry[];
}
/** MsgDefineResolver is the Msg/DefineResolver request type. */
export interface MsgDefineResolver {
    /**
     * manager is the address of the resolver manager. The manager is able
     * to make future calls using the ID returned by this operation with
     * Msg/RegisterResolver. To authorize other accounts to register resolvers,
     * the manager should make use of cosmos.authz.
     */
    manager: string;
    /**
     * resolver_url is a resolver URL which should refer to an HTTP service
     * which will respond to a GET request with the IRI of a ContentHash
     * and return the content if it exists or a 404. For graph data, resolvers
     * should use the HTTP Accept header to negotiate the RDF serialization
     * format.
     */
    resolverUrl: string;
}
/** MsgDefineResolverResponse is the Msg/DefineResolver response type. */
export interface MsgDefineResolverResponse {
    /**
     * resolver_id is the integer ID of the resolver to be used in
     * MsgRegisterResolver.
     */
    resolverId: Long;
}
/** MsgRegisterResolver is the Msg/RegisterResolver request type. */
export interface MsgRegisterResolver {
    /**
     * manager is the address of the resolver manager who registered this
     * resolver with Msg/DefinedResolver.
     */
    manager: string;
    /** resolver_id is the ID of a resolver defined with Msg/DefineResolver. */
    resolverId: Long;
    /**
     * content_hashes is a list of content hashes which the resolver claims to
     * serve.
     */
    contentHashes: ContentHash[];
}
/** MsgRegisterResolverResponse is the Msg/RegisterResolver response type. */
export interface MsgRegisterResolverResponse {
}
export declare const MsgAnchor: {
    encode(message: MsgAnchor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAnchor;
    fromJSON(object: any): MsgAnchor;
    toJSON(message: MsgAnchor): unknown;
    fromPartial(object: DeepPartial<MsgAnchor>): MsgAnchor;
};
export declare const MsgAnchorResponse: {
    encode(message: MsgAnchorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAnchorResponse;
    fromJSON(object: any): MsgAnchorResponse;
    toJSON(message: MsgAnchorResponse): unknown;
    fromPartial(object: DeepPartial<MsgAnchorResponse>): MsgAnchorResponse;
};
export declare const MsgAttest: {
    encode(message: MsgAttest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAttest;
    fromJSON(object: any): MsgAttest;
    toJSON(message: MsgAttest): unknown;
    fromPartial(object: DeepPartial<MsgAttest>): MsgAttest;
};
export declare const MsgAttestResponse: {
    encode(message: MsgAttestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAttestResponse;
    fromJSON(object: any): MsgAttestResponse;
    toJSON(message: MsgAttestResponse): unknown;
    fromPartial(object: DeepPartial<MsgAttestResponse>): MsgAttestResponse;
};
export declare const MsgDefineResolver: {
    encode(message: MsgDefineResolver, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDefineResolver;
    fromJSON(object: any): MsgDefineResolver;
    toJSON(message: MsgDefineResolver): unknown;
    fromPartial(object: DeepPartial<MsgDefineResolver>): MsgDefineResolver;
};
export declare const MsgDefineResolverResponse: {
    encode(message: MsgDefineResolverResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDefineResolverResponse;
    fromJSON(object: any): MsgDefineResolverResponse;
    toJSON(message: MsgDefineResolverResponse): unknown;
    fromPartial(object: DeepPartial<MsgDefineResolverResponse>): MsgDefineResolverResponse;
};
export declare const MsgRegisterResolver: {
    encode(message: MsgRegisterResolver, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterResolver;
    fromJSON(object: any): MsgRegisterResolver;
    toJSON(message: MsgRegisterResolver): unknown;
    fromPartial(object: DeepPartial<MsgRegisterResolver>): MsgRegisterResolver;
};
export declare const MsgRegisterResolverResponse: {
    encode(_: MsgRegisterResolverResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterResolverResponse;
    fromJSON(_: any): MsgRegisterResolverResponse;
    toJSON(_: MsgRegisterResolverResponse): unknown;
    fromPartial(_: DeepPartial<MsgRegisterResolverResponse>): MsgRegisterResolverResponse;
};
