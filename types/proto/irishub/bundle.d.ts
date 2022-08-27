import * as _363 from "../iris/guardian/genesis";
import * as _364 from "../iris/guardian/guardian";
import * as _365 from "../iris/guardian/query";
import * as _366 from "../iris/guardian/tx";
import * as _367 from "../iris/mint/genesis";
import * as _368 from "../iris/mint/mint";
import * as _369 from "../iris/mint/query";
export declare namespace irishub {
    const guardian: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                addSuper(value: _366.MsgAddSuper): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteSuper(value: _366.MsgDeleteSuper): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                addSuper(value: _366.MsgAddSuper): {
                    typeUrl: string;
                    value: _366.MsgAddSuper;
                };
                deleteSuper(value: _366.MsgDeleteSuper): {
                    typeUrl: string;
                    value: _366.MsgDeleteSuper;
                };
            };
            toJSON: {
                addSuper(value: _366.MsgAddSuper): {
                    typeUrl: string;
                    value: unknown;
                };
                deleteSuper(value: _366.MsgDeleteSuper): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                addSuper(value: any): {
                    typeUrl: string;
                    value: _366.MsgAddSuper;
                };
                deleteSuper(value: any): {
                    typeUrl: string;
                    value: _366.MsgDeleteSuper;
                };
            };
            fromPartial: {
                addSuper(value: _366.MsgAddSuper): {
                    typeUrl: string;
                    value: _366.MsgAddSuper;
                };
                deleteSuper(value: _366.MsgDeleteSuper): {
                    typeUrl: string;
                    value: _366.MsgDeleteSuper;
                };
            };
        };
        AminoConverter: {
            "/irishub.guardian.MsgAddSuper": {
                aminoType: string;
                toAmino: ({ description, address, addedBy }: _366.MsgAddSuper) => {
                    description: string;
                    address: string;
                    added_by: string;
                };
                fromAmino: ({ description, address, added_by }: {
                    description: string;
                    address: string;
                    added_by: string;
                }) => _366.MsgAddSuper;
            };
            "/irishub.guardian.MsgDeleteSuper": {
                aminoType: string;
                toAmino: ({ address, deletedBy }: _366.MsgDeleteSuper) => {
                    address: string;
                    deleted_by: string;
                };
                fromAmino: ({ address, deleted_by }: {
                    address: string;
                    deleted_by: string;
                }) => _366.MsgDeleteSuper;
            };
        };
        MsgAddSuper: {
            encode(message: _366.MsgAddSuper, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _366.MsgAddSuper;
            fromJSON(object: any): _366.MsgAddSuper;
            toJSON(message: _366.MsgAddSuper): unknown;
            fromPartial(object: {
                description?: string;
                address?: string;
                addedBy?: string;
            }): _366.MsgAddSuper;
        };
        MsgAddSuperResponse: {
            encode(_: _366.MsgAddSuperResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _366.MsgAddSuperResponse;
            fromJSON(_: any): _366.MsgAddSuperResponse;
            toJSON(_: _366.MsgAddSuperResponse): unknown;
            fromPartial(_: {}): _366.MsgAddSuperResponse;
        };
        MsgDeleteSuper: {
            encode(message: _366.MsgDeleteSuper, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _366.MsgDeleteSuper;
            fromJSON(object: any): _366.MsgDeleteSuper;
            toJSON(message: _366.MsgDeleteSuper): unknown;
            fromPartial(object: {
                address?: string;
                deletedBy?: string;
            }): _366.MsgDeleteSuper;
        };
        MsgDeleteSuperResponse: {
            encode(_: _366.MsgDeleteSuperResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _366.MsgDeleteSuperResponse;
            fromJSON(_: any): _366.MsgDeleteSuperResponse;
            toJSON(_: _366.MsgDeleteSuperResponse): unknown;
            fromPartial(_: {}): _366.MsgDeleteSuperResponse;
        };
        QuerySupersRequest: {
            encode(message: _365.QuerySupersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _365.QuerySupersRequest;
            fromJSON(object: any): _365.QuerySupersRequest;
            toJSON(message: _365.QuerySupersRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _365.QuerySupersRequest;
        };
        QuerySupersResponse: {
            encode(message: _365.QuerySupersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _365.QuerySupersResponse;
            fromJSON(object: any): _365.QuerySupersResponse;
            toJSON(message: _365.QuerySupersResponse): unknown;
            fromPartial(object: {
                supers?: {
                    description?: string;
                    accountType?: _364.AccountType;
                    address?: string;
                    addedBy?: string;
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _365.QuerySupersResponse;
        };
        accountTypeFromJSON(object: any): _364.AccountType;
        accountTypeToJSON(object: _364.AccountType): string;
        AccountType: typeof _364.AccountType;
        Super: {
            encode(message: _364.Super, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _364.Super;
            fromJSON(object: any): _364.Super;
            toJSON(message: _364.Super): unknown;
            fromPartial(object: {
                description?: string;
                accountType?: _364.AccountType;
                address?: string;
                addedBy?: string;
            }): _364.Super;
        };
        GenesisState: {
            encode(message: _363.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _363.GenesisState;
            fromJSON(object: any): _363.GenesisState;
            toJSON(message: _363.GenesisState): unknown;
            fromPartial(object: {
                supers?: {
                    description?: string;
                    accountType?: _364.AccountType;
                    address?: string;
                    addedBy?: string;
                }[];
            }): _363.GenesisState;
        };
    };
    const mint: {
        QueryParamsRequest: {
            encode(_: _369.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _369.QueryParamsRequest;
            fromJSON(_: any): _369.QueryParamsRequest;
            toJSON(_: _369.QueryParamsRequest): unknown;
            fromPartial(_: {}): _369.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _369.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _369.QueryParamsResponse;
            fromJSON(object: any): _369.QueryParamsResponse;
            toJSON(message: _369.QueryParamsResponse): unknown;
            fromPartial(object: {
                params?: {
                    mintDenom?: string;
                    inflation?: string;
                };
                res?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _369.QueryParamsResponse;
        };
        Minter: {
            encode(message: _368.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.Minter;
            fromJSON(object: any): _368.Minter;
            toJSON(message: _368.Minter): unknown;
            fromPartial(object: {
                lastUpdate?: Date;
                inflationBase?: string;
            }): _368.Minter;
        };
        Params: {
            encode(message: _368.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _368.Params;
            fromJSON(object: any): _368.Params;
            toJSON(message: _368.Params): unknown;
            fromPartial(object: {
                mintDenom?: string;
                inflation?: string;
            }): _368.Params;
        };
        GenesisState: {
            encode(message: _367.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _367.GenesisState;
            fromJSON(object: any): _367.GenesisState;
            toJSON(message: _367.GenesisState): unknown;
            fromPartial(object: {
                minter?: {
                    lastUpdate?: Date;
                    inflationBase?: string;
                };
                params?: {
                    mintDenom?: string;
                    inflation?: string;
                };
            }): _367.GenesisState;
        };
    };
}
