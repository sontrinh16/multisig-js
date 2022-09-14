import * as _431 from "../iris/guardian/genesis";
import * as _432 from "../iris/guardian/guardian";
import * as _433 from "../iris/guardian/query";
import * as _434 from "../iris/guardian/tx";
import * as _435 from "../iris/mint/genesis";
import * as _436 from "../iris/mint/mint";
import * as _437 from "../iris/mint/query";
export declare namespace irishub {
    const guardian: {
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                addSuper(value: _434.MsgAddSuper): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteSuper(value: _434.MsgDeleteSuper): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                addSuper(value: _434.MsgAddSuper): {
                    typeUrl: string;
                    value: _434.MsgAddSuper;
                };
                deleteSuper(value: _434.MsgDeleteSuper): {
                    typeUrl: string;
                    value: _434.MsgDeleteSuper;
                };
            };
            toJSON: {
                addSuper(value: _434.MsgAddSuper): {
                    typeUrl: string;
                    value: unknown;
                };
                deleteSuper(value: _434.MsgDeleteSuper): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                addSuper(value: any): {
                    typeUrl: string;
                    value: _434.MsgAddSuper;
                };
                deleteSuper(value: any): {
                    typeUrl: string;
                    value: _434.MsgDeleteSuper;
                };
            };
            fromPartial: {
                addSuper(value: _434.MsgAddSuper): {
                    typeUrl: string;
                    value: _434.MsgAddSuper;
                };
                deleteSuper(value: _434.MsgDeleteSuper): {
                    typeUrl: string;
                    value: _434.MsgDeleteSuper;
                };
            };
        };
        AminoConverter: {
            "/irishub.guardian.MsgAddSuper": {
                aminoType: string;
                toAmino: ({ description, address, addedBy }: _434.MsgAddSuper) => {
                    description: string;
                    address: string;
                    added_by: string;
                };
                fromAmino: ({ description, address, added_by }: {
                    description: string;
                    address: string;
                    added_by: string;
                }) => _434.MsgAddSuper;
            };
            "/irishub.guardian.MsgDeleteSuper": {
                aminoType: string;
                toAmino: ({ address, deletedBy }: _434.MsgDeleteSuper) => {
                    address: string;
                    deleted_by: string;
                };
                fromAmino: ({ address, deleted_by }: {
                    address: string;
                    deleted_by: string;
                }) => _434.MsgDeleteSuper;
            };
        };
        MsgAddSuper: {
            encode(message: _434.MsgAddSuper, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _434.MsgAddSuper;
            fromJSON(object: any): _434.MsgAddSuper;
            toJSON(message: _434.MsgAddSuper): unknown;
            fromPartial(object: {
                description?: string;
                address?: string;
                addedBy?: string;
            }): _434.MsgAddSuper;
        };
        MsgAddSuperResponse: {
            encode(_: _434.MsgAddSuperResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _434.MsgAddSuperResponse;
            fromJSON(_: any): _434.MsgAddSuperResponse;
            toJSON(_: _434.MsgAddSuperResponse): unknown;
            fromPartial(_: {}): _434.MsgAddSuperResponse;
        };
        MsgDeleteSuper: {
            encode(message: _434.MsgDeleteSuper, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _434.MsgDeleteSuper;
            fromJSON(object: any): _434.MsgDeleteSuper;
            toJSON(message: _434.MsgDeleteSuper): unknown;
            fromPartial(object: {
                address?: string;
                deletedBy?: string;
            }): _434.MsgDeleteSuper;
        };
        MsgDeleteSuperResponse: {
            encode(_: _434.MsgDeleteSuperResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _434.MsgDeleteSuperResponse;
            fromJSON(_: any): _434.MsgDeleteSuperResponse;
            toJSON(_: _434.MsgDeleteSuperResponse): unknown;
            fromPartial(_: {}): _434.MsgDeleteSuperResponse;
        };
        QuerySupersRequest: {
            encode(message: _433.QuerySupersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _433.QuerySupersRequest;
            fromJSON(object: any): _433.QuerySupersRequest;
            toJSON(message: _433.QuerySupersRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: any;
                    limit?: any;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _433.QuerySupersRequest;
        };
        QuerySupersResponse: {
            encode(message: _433.QuerySupersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _433.QuerySupersResponse;
            fromJSON(object: any): _433.QuerySupersResponse;
            toJSON(message: _433.QuerySupersResponse): unknown;
            fromPartial(object: {
                supers?: {
                    description?: string;
                    accountType?: _432.AccountType;
                    address?: string;
                    addedBy?: string;
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _433.QuerySupersResponse;
        };
        accountTypeFromJSON(object: any): _432.AccountType;
        accountTypeToJSON(object: _432.AccountType): string;
        AccountType: typeof _432.AccountType;
        Super: {
            encode(message: _432.Super, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _432.Super;
            fromJSON(object: any): _432.Super;
            toJSON(message: _432.Super): unknown;
            fromPartial(object: {
                description?: string;
                accountType?: _432.AccountType;
                address?: string;
                addedBy?: string;
            }): _432.Super;
        };
        GenesisState: {
            encode(message: _431.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _431.GenesisState;
            fromJSON(object: any): _431.GenesisState;
            toJSON(message: _431.GenesisState): unknown;
            fromPartial(object: {
                supers?: {
                    description?: string;
                    accountType?: _432.AccountType;
                    address?: string;
                    addedBy?: string;
                }[];
            }): _431.GenesisState;
        };
    };
    const mint: {
        QueryParamsRequest: {
            encode(_: _437.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _437.QueryParamsRequest;
            fromJSON(_: any): _437.QueryParamsRequest;
            toJSON(_: _437.QueryParamsRequest): unknown;
            fromPartial(_: {}): _437.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _437.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _437.QueryParamsResponse;
            fromJSON(object: any): _437.QueryParamsResponse;
            toJSON(message: _437.QueryParamsResponse): unknown;
            fromPartial(object: {
                params?: {
                    mintDenom?: string;
                    inflation?: string;
                };
                res?: {
                    nextKey?: Uint8Array;
                    total?: any;
                };
            }): _437.QueryParamsResponse;
        };
        Minter: {
            encode(message: _436.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _436.Minter;
            fromJSON(object: any): _436.Minter;
            toJSON(message: _436.Minter): unknown;
            fromPartial(object: {
                lastUpdate?: {
                    seconds?: any;
                    nanos?: number;
                };
                inflationBase?: string;
            }): _436.Minter;
        };
        Params: {
            encode(message: _436.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _436.Params;
            fromJSON(object: any): _436.Params;
            toJSON(message: _436.Params): unknown;
            fromPartial(object: {
                mintDenom?: string;
                inflation?: string;
            }): _436.Params;
        };
        GenesisState: {
            encode(message: _435.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _435.GenesisState;
            fromJSON(object: any): _435.GenesisState;
            toJSON(message: _435.GenesisState): unknown;
            fromPartial(object: {
                minter?: {
                    lastUpdate?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    inflationBase?: string;
                };
                params?: {
                    mintDenom?: string;
                    inflation?: string;
                };
            }): _435.GenesisState;
        };
    };
}
