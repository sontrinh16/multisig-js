import * as _53 from "../bcna/bitcannaid";
import * as _54 from "../bcna/genesis";
import * as _55 from "../bcna/params";
import * as _56 from "../bcna/query";
import * as _57 from "../bcna/supplychain";
import * as _58 from "../bcna/tx";
export declare namespace BitCannaGlobal {
    namespace bcna {
        const bcna: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createBitcannaid(value: _58.MsgCreateBitcannaid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateBitcannaid(value: _58.MsgUpdateBitcannaid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteBitcannaid(value: _58.MsgDeleteBitcannaid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createSupplychain(value: _58.MsgCreateSupplychain): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateSupplychain(value: _58.MsgUpdateSupplychain): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteSupplychain(value: _58.MsgDeleteSupplychain): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createBitcannaid(value: _58.MsgCreateBitcannaid): {
                        typeUrl: string;
                        value: _58.MsgCreateBitcannaid;
                    };
                    updateBitcannaid(value: _58.MsgUpdateBitcannaid): {
                        typeUrl: string;
                        value: _58.MsgUpdateBitcannaid;
                    };
                    deleteBitcannaid(value: _58.MsgDeleteBitcannaid): {
                        typeUrl: string;
                        value: _58.MsgDeleteBitcannaid;
                    };
                    createSupplychain(value: _58.MsgCreateSupplychain): {
                        typeUrl: string;
                        value: _58.MsgCreateSupplychain;
                    };
                    updateSupplychain(value: _58.MsgUpdateSupplychain): {
                        typeUrl: string;
                        value: _58.MsgUpdateSupplychain;
                    };
                    deleteSupplychain(value: _58.MsgDeleteSupplychain): {
                        typeUrl: string;
                        value: _58.MsgDeleteSupplychain;
                    };
                };
                toJSON: {
                    createBitcannaid(value: _58.MsgCreateBitcannaid): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateBitcannaid(value: _58.MsgUpdateBitcannaid): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteBitcannaid(value: _58.MsgDeleteBitcannaid): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createSupplychain(value: _58.MsgCreateSupplychain): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateSupplychain(value: _58.MsgUpdateSupplychain): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteSupplychain(value: _58.MsgDeleteSupplychain): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createBitcannaid(value: any): {
                        typeUrl: string;
                        value: _58.MsgCreateBitcannaid;
                    };
                    updateBitcannaid(value: any): {
                        typeUrl: string;
                        value: _58.MsgUpdateBitcannaid;
                    };
                    deleteBitcannaid(value: any): {
                        typeUrl: string;
                        value: _58.MsgDeleteBitcannaid;
                    };
                    createSupplychain(value: any): {
                        typeUrl: string;
                        value: _58.MsgCreateSupplychain;
                    };
                    updateSupplychain(value: any): {
                        typeUrl: string;
                        value: _58.MsgUpdateSupplychain;
                    };
                    deleteSupplychain(value: any): {
                        typeUrl: string;
                        value: _58.MsgDeleteSupplychain;
                    };
                };
                fromPartial: {
                    createBitcannaid(value: _58.MsgCreateBitcannaid): {
                        typeUrl: string;
                        value: _58.MsgCreateBitcannaid;
                    };
                    updateBitcannaid(value: _58.MsgUpdateBitcannaid): {
                        typeUrl: string;
                        value: _58.MsgUpdateBitcannaid;
                    };
                    deleteBitcannaid(value: _58.MsgDeleteBitcannaid): {
                        typeUrl: string;
                        value: _58.MsgDeleteBitcannaid;
                    };
                    createSupplychain(value: _58.MsgCreateSupplychain): {
                        typeUrl: string;
                        value: _58.MsgCreateSupplychain;
                    };
                    updateSupplychain(value: _58.MsgUpdateSupplychain): {
                        typeUrl: string;
                        value: _58.MsgUpdateSupplychain;
                    };
                    deleteSupplychain(value: _58.MsgDeleteSupplychain): {
                        typeUrl: string;
                        value: _58.MsgDeleteSupplychain;
                    };
                };
            };
            AminoConverter: {
                "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid": {
                    aminoType: string;
                    toAmino: ({ creator, bcnaid, address }: _58.MsgCreateBitcannaid) => {
                        creator: string;
                        bcnaid: string;
                        address: string;
                    };
                    fromAmino: ({ creator, bcnaid, address }: {
                        creator: string;
                        bcnaid: string;
                        address: string;
                    }) => _58.MsgCreateBitcannaid;
                };
                "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid": {
                    aminoType: string;
                    toAmino: ({ creator, id, bcnaid, address }: _58.MsgUpdateBitcannaid) => {
                        creator: string;
                        id: string;
                        bcnaid: string;
                        address: string;
                    };
                    fromAmino: ({ creator, id, bcnaid, address }: {
                        creator: string;
                        id: string;
                        bcnaid: string;
                        address: string;
                    }) => _58.MsgUpdateBitcannaid;
                };
                "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid": {
                    aminoType: string;
                    toAmino: ({ creator, id }: _58.MsgDeleteBitcannaid) => {
                        creator: string;
                        id: string;
                    };
                    fromAmino: ({ creator, id }: {
                        creator: string;
                        id: string;
                    }) => _58.MsgDeleteBitcannaid;
                };
                "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain": {
                    aminoType: string;
                    toAmino: ({ creator, product, info, supplyinfo }: _58.MsgCreateSupplychain) => {
                        creator: string;
                        product: string;
                        info: string;
                        supplyinfo: string;
                    };
                    fromAmino: ({ creator, product, info, supplyinfo }: {
                        creator: string;
                        product: string;
                        info: string;
                        supplyinfo: string;
                    }) => _58.MsgCreateSupplychain;
                };
                "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain": {
                    aminoType: string;
                    toAmino: ({ creator, id, product, info, supplyinfo }: _58.MsgUpdateSupplychain) => {
                        creator: string;
                        id: string;
                        product: string;
                        info: string;
                        supplyinfo: string;
                    };
                    fromAmino: ({ creator, id, product, info, supplyinfo }: {
                        creator: string;
                        id: string;
                        product: string;
                        info: string;
                        supplyinfo: string;
                    }) => _58.MsgUpdateSupplychain;
                };
                "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain": {
                    aminoType: string;
                    toAmino: ({ creator, id }: _58.MsgDeleteSupplychain) => {
                        creator: string;
                        id: string;
                    };
                    fromAmino: ({ creator, id }: {
                        creator: string;
                        id: string;
                    }) => _58.MsgDeleteSupplychain;
                };
            };
            MsgCreateBitcannaid: {
                encode(message: _58.MsgCreateBitcannaid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgCreateBitcannaid;
                fromJSON(object: any): _58.MsgCreateBitcannaid;
                toJSON(message: _58.MsgCreateBitcannaid): unknown;
                fromPartial(object: {
                    creator?: string;
                    bcnaid?: string;
                    address?: string;
                }): _58.MsgCreateBitcannaid;
            };
            MsgCreateBitcannaidResponse: {
                encode(message: _58.MsgCreateBitcannaidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgCreateBitcannaidResponse;
                fromJSON(object: any): _58.MsgCreateBitcannaidResponse;
                toJSON(message: _58.MsgCreateBitcannaidResponse): unknown;
                fromPartial(object: {
                    id?: any;
                }): _58.MsgCreateBitcannaidResponse;
            };
            MsgUpdateBitcannaid: {
                encode(message: _58.MsgUpdateBitcannaid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgUpdateBitcannaid;
                fromJSON(object: any): _58.MsgUpdateBitcannaid;
                toJSON(message: _58.MsgUpdateBitcannaid): unknown;
                fromPartial(object: {
                    creator?: string;
                    id?: any;
                    bcnaid?: string;
                    address?: string;
                }): _58.MsgUpdateBitcannaid;
            };
            MsgUpdateBitcannaidResponse: {
                encode(_: _58.MsgUpdateBitcannaidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgUpdateBitcannaidResponse;
                fromJSON(_: any): _58.MsgUpdateBitcannaidResponse;
                toJSON(_: _58.MsgUpdateBitcannaidResponse): unknown;
                fromPartial(_: {}): _58.MsgUpdateBitcannaidResponse;
            };
            MsgDeleteBitcannaid: {
                encode(message: _58.MsgDeleteBitcannaid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgDeleteBitcannaid;
                fromJSON(object: any): _58.MsgDeleteBitcannaid;
                toJSON(message: _58.MsgDeleteBitcannaid): unknown;
                fromPartial(object: {
                    creator?: string;
                    id?: any;
                }): _58.MsgDeleteBitcannaid;
            };
            MsgDeleteBitcannaidResponse: {
                encode(_: _58.MsgDeleteBitcannaidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgDeleteBitcannaidResponse;
                fromJSON(_: any): _58.MsgDeleteBitcannaidResponse;
                toJSON(_: _58.MsgDeleteBitcannaidResponse): unknown;
                fromPartial(_: {}): _58.MsgDeleteBitcannaidResponse;
            };
            MsgCreateSupplychain: {
                encode(message: _58.MsgCreateSupplychain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgCreateSupplychain;
                fromJSON(object: any): _58.MsgCreateSupplychain;
                toJSON(message: _58.MsgCreateSupplychain): unknown;
                fromPartial(object: {
                    creator?: string;
                    product?: string;
                    info?: string;
                    supplyinfo?: string;
                }): _58.MsgCreateSupplychain;
            };
            MsgCreateSupplychainResponse: {
                encode(message: _58.MsgCreateSupplychainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgCreateSupplychainResponse;
                fromJSON(object: any): _58.MsgCreateSupplychainResponse;
                toJSON(message: _58.MsgCreateSupplychainResponse): unknown;
                fromPartial(object: {
                    id?: any;
                }): _58.MsgCreateSupplychainResponse;
            };
            MsgUpdateSupplychain: {
                encode(message: _58.MsgUpdateSupplychain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgUpdateSupplychain;
                fromJSON(object: any): _58.MsgUpdateSupplychain;
                toJSON(message: _58.MsgUpdateSupplychain): unknown;
                fromPartial(object: {
                    creator?: string;
                    id?: any;
                    product?: string;
                    info?: string;
                    supplyinfo?: string;
                }): _58.MsgUpdateSupplychain;
            };
            MsgUpdateSupplychainResponse: {
                encode(_: _58.MsgUpdateSupplychainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgUpdateSupplychainResponse;
                fromJSON(_: any): _58.MsgUpdateSupplychainResponse;
                toJSON(_: _58.MsgUpdateSupplychainResponse): unknown;
                fromPartial(_: {}): _58.MsgUpdateSupplychainResponse;
            };
            MsgDeleteSupplychain: {
                encode(message: _58.MsgDeleteSupplychain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgDeleteSupplychain;
                fromJSON(object: any): _58.MsgDeleteSupplychain;
                toJSON(message: _58.MsgDeleteSupplychain): unknown;
                fromPartial(object: {
                    creator?: string;
                    id?: any;
                }): _58.MsgDeleteSupplychain;
            };
            MsgDeleteSupplychainResponse: {
                encode(_: _58.MsgDeleteSupplychainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgDeleteSupplychainResponse;
                fromJSON(_: any): _58.MsgDeleteSupplychainResponse;
                toJSON(_: _58.MsgDeleteSupplychainResponse): unknown;
                fromPartial(_: {}): _58.MsgDeleteSupplychainResponse;
            };
            Supplychain: {
                encode(message: _57.Supplychain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Supplychain;
                fromJSON(object: any): _57.Supplychain;
                toJSON(message: _57.Supplychain): unknown;
                fromPartial(object: {
                    id?: any;
                    product?: string;
                    info?: string;
                    supplyinfo?: string;
                    creator?: string;
                }): _57.Supplychain;
            };
            QueryParamsRequest: {
                encode(_: _56.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryParamsRequest;
                fromJSON(_: any): _56.QueryParamsRequest;
                toJSON(_: _56.QueryParamsRequest): unknown;
                fromPartial(_: {}): _56.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _56.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryParamsResponse;
                fromJSON(object: any): _56.QueryParamsResponse;
                toJSON(message: _56.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {};
                }): _56.QueryParamsResponse;
            };
            QueryGetBitcannaidRequest: {
                encode(message: _56.QueryGetBitcannaidRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryGetBitcannaidRequest;
                fromJSON(object: any): _56.QueryGetBitcannaidRequest;
                toJSON(message: _56.QueryGetBitcannaidRequest): unknown;
                fromPartial(object: {
                    id?: any;
                }): _56.QueryGetBitcannaidRequest;
            };
            QueryGetBitcannaidResponse: {
                encode(message: _56.QueryGetBitcannaidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryGetBitcannaidResponse;
                fromJSON(object: any): _56.QueryGetBitcannaidResponse;
                toJSON(message: _56.QueryGetBitcannaidResponse): unknown;
                fromPartial(object: {
                    Bitcannaid?: {
                        id?: any;
                        bcnaid?: string;
                        address?: string;
                        creator?: string;
                    };
                }): _56.QueryGetBitcannaidResponse;
            };
            QueryAllBitcannaidRequest: {
                encode(message: _56.QueryAllBitcannaidRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryAllBitcannaidRequest;
                fromJSON(object: any): _56.QueryAllBitcannaidRequest;
                toJSON(message: _56.QueryAllBitcannaidRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _56.QueryAllBitcannaidRequest;
            };
            QueryAllBitcannaidResponse: {
                encode(message: _56.QueryAllBitcannaidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryAllBitcannaidResponse;
                fromJSON(object: any): _56.QueryAllBitcannaidResponse;
                toJSON(message: _56.QueryAllBitcannaidResponse): unknown;
                fromPartial(object: {
                    Bitcannaid?: {
                        id?: any;
                        bcnaid?: string;
                        address?: string;
                        creator?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _56.QueryAllBitcannaidResponse;
            };
            QueryGetSupplychainRequest: {
                encode(message: _56.QueryGetSupplychainRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryGetSupplychainRequest;
                fromJSON(object: any): _56.QueryGetSupplychainRequest;
                toJSON(message: _56.QueryGetSupplychainRequest): unknown;
                fromPartial(object: {
                    id?: any;
                }): _56.QueryGetSupplychainRequest;
            };
            QueryGetSupplychainResponse: {
                encode(message: _56.QueryGetSupplychainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryGetSupplychainResponse;
                fromJSON(object: any): _56.QueryGetSupplychainResponse;
                toJSON(message: _56.QueryGetSupplychainResponse): unknown;
                fromPartial(object: {
                    Supplychain?: {
                        id?: any;
                        product?: string;
                        info?: string;
                        supplyinfo?: string;
                        creator?: string;
                    };
                }): _56.QueryGetSupplychainResponse;
            };
            QueryAllSupplychainRequest: {
                encode(message: _56.QueryAllSupplychainRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryAllSupplychainRequest;
                fromJSON(object: any): _56.QueryAllSupplychainRequest;
                toJSON(message: _56.QueryAllSupplychainRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _56.QueryAllSupplychainRequest;
            };
            QueryAllSupplychainResponse: {
                encode(message: _56.QueryAllSupplychainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryAllSupplychainResponse;
                fromJSON(object: any): _56.QueryAllSupplychainResponse;
                toJSON(message: _56.QueryAllSupplychainResponse): unknown;
                fromPartial(object: {
                    Supplychain?: {
                        id?: any;
                        product?: string;
                        info?: string;
                        supplyinfo?: string;
                        creator?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _56.QueryAllSupplychainResponse;
            };
            Params: {
                encode(_: _55.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Params;
                fromJSON(_: any): _55.Params;
                toJSON(_: _55.Params): unknown;
                fromPartial(_: {}): _55.Params;
            };
            GenesisState: {
                encode(message: _54.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.GenesisState;
                fromJSON(object: any): _54.GenesisState;
                toJSON(message: _54.GenesisState): unknown;
                fromPartial(object: {
                    params?: {};
                    bitcannaidList?: {
                        id?: any;
                        bcnaid?: string;
                        address?: string;
                        creator?: string;
                    }[];
                    bitcannaidCount?: any;
                    supplychainList?: {
                        id?: any;
                        product?: string;
                        info?: string;
                        supplyinfo?: string;
                        creator?: string;
                    }[];
                    supplychainCount?: any;
                }): _54.GenesisState;
            };
            Bitcannaid: {
                encode(message: _53.Bitcannaid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Bitcannaid;
                fromJSON(object: any): _53.Bitcannaid;
                toJSON(message: _53.Bitcannaid): unknown;
                fromPartial(object: {
                    id?: any;
                    bcnaid?: string;
                    address?: string;
                    creator?: string;
                }): _53.Bitcannaid;
            };
        };
    }
}
