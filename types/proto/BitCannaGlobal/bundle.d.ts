import * as _121 from "../bcna/bitcannaid";
import * as _122 from "../bcna/genesis";
import * as _123 from "../bcna/params";
import * as _124 from "../bcna/query";
import * as _125 from "../bcna/supplychain";
import * as _126 from "../bcna/tx";
export declare namespace BitCannaGlobal {
    namespace bcna {
        const bcna: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createBitcannaid(value: _126.MsgCreateBitcannaid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateBitcannaid(value: _126.MsgUpdateBitcannaid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteBitcannaid(value: _126.MsgDeleteBitcannaid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createSupplychain(value: _126.MsgCreateSupplychain): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateSupplychain(value: _126.MsgUpdateSupplychain): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteSupplychain(value: _126.MsgDeleteSupplychain): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createBitcannaid(value: _126.MsgCreateBitcannaid): {
                        typeUrl: string;
                        value: _126.MsgCreateBitcannaid;
                    };
                    updateBitcannaid(value: _126.MsgUpdateBitcannaid): {
                        typeUrl: string;
                        value: _126.MsgUpdateBitcannaid;
                    };
                    deleteBitcannaid(value: _126.MsgDeleteBitcannaid): {
                        typeUrl: string;
                        value: _126.MsgDeleteBitcannaid;
                    };
                    createSupplychain(value: _126.MsgCreateSupplychain): {
                        typeUrl: string;
                        value: _126.MsgCreateSupplychain;
                    };
                    updateSupplychain(value: _126.MsgUpdateSupplychain): {
                        typeUrl: string;
                        value: _126.MsgUpdateSupplychain;
                    };
                    deleteSupplychain(value: _126.MsgDeleteSupplychain): {
                        typeUrl: string;
                        value: _126.MsgDeleteSupplychain;
                    };
                };
                toJSON: {
                    createBitcannaid(value: _126.MsgCreateBitcannaid): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateBitcannaid(value: _126.MsgUpdateBitcannaid): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteBitcannaid(value: _126.MsgDeleteBitcannaid): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createSupplychain(value: _126.MsgCreateSupplychain): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateSupplychain(value: _126.MsgUpdateSupplychain): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteSupplychain(value: _126.MsgDeleteSupplychain): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createBitcannaid(value: any): {
                        typeUrl: string;
                        value: _126.MsgCreateBitcannaid;
                    };
                    updateBitcannaid(value: any): {
                        typeUrl: string;
                        value: _126.MsgUpdateBitcannaid;
                    };
                    deleteBitcannaid(value: any): {
                        typeUrl: string;
                        value: _126.MsgDeleteBitcannaid;
                    };
                    createSupplychain(value: any): {
                        typeUrl: string;
                        value: _126.MsgCreateSupplychain;
                    };
                    updateSupplychain(value: any): {
                        typeUrl: string;
                        value: _126.MsgUpdateSupplychain;
                    };
                    deleteSupplychain(value: any): {
                        typeUrl: string;
                        value: _126.MsgDeleteSupplychain;
                    };
                };
                fromPartial: {
                    createBitcannaid(value: _126.MsgCreateBitcannaid): {
                        typeUrl: string;
                        value: _126.MsgCreateBitcannaid;
                    };
                    updateBitcannaid(value: _126.MsgUpdateBitcannaid): {
                        typeUrl: string;
                        value: _126.MsgUpdateBitcannaid;
                    };
                    deleteBitcannaid(value: _126.MsgDeleteBitcannaid): {
                        typeUrl: string;
                        value: _126.MsgDeleteBitcannaid;
                    };
                    createSupplychain(value: _126.MsgCreateSupplychain): {
                        typeUrl: string;
                        value: _126.MsgCreateSupplychain;
                    };
                    updateSupplychain(value: _126.MsgUpdateSupplychain): {
                        typeUrl: string;
                        value: _126.MsgUpdateSupplychain;
                    };
                    deleteSupplychain(value: _126.MsgDeleteSupplychain): {
                        typeUrl: string;
                        value: _126.MsgDeleteSupplychain;
                    };
                };
            };
            AminoConverter: {
                "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid": {
                    aminoType: string;
                    toAmino: ({ creator, bcnaid, address }: _126.MsgCreateBitcannaid) => {
                        creator: string;
                        bcnaid: string;
                        address: string;
                    };
                    fromAmino: ({ creator, bcnaid, address }: {
                        creator: string;
                        bcnaid: string;
                        address: string;
                    }) => _126.MsgCreateBitcannaid;
                };
                "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid": {
                    aminoType: string;
                    toAmino: ({ creator, id, bcnaid, address }: _126.MsgUpdateBitcannaid) => {
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
                    }) => _126.MsgUpdateBitcannaid;
                };
                "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid": {
                    aminoType: string;
                    toAmino: ({ creator, id }: _126.MsgDeleteBitcannaid) => {
                        creator: string;
                        id: string;
                    };
                    fromAmino: ({ creator, id }: {
                        creator: string;
                        id: string;
                    }) => _126.MsgDeleteBitcannaid;
                };
                "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain": {
                    aminoType: string;
                    toAmino: ({ creator, product, info, supplyinfo }: _126.MsgCreateSupplychain) => {
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
                    }) => _126.MsgCreateSupplychain;
                };
                "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain": {
                    aminoType: string;
                    toAmino: ({ creator, id, product, info, supplyinfo }: _126.MsgUpdateSupplychain) => {
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
                    }) => _126.MsgUpdateSupplychain;
                };
                "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain": {
                    aminoType: string;
                    toAmino: ({ creator, id }: _126.MsgDeleteSupplychain) => {
                        creator: string;
                        id: string;
                    };
                    fromAmino: ({ creator, id }: {
                        creator: string;
                        id: string;
                    }) => _126.MsgDeleteSupplychain;
                };
            };
            MsgCreateBitcannaid: {
                encode(message: _126.MsgCreateBitcannaid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgCreateBitcannaid;
                fromJSON(object: any): _126.MsgCreateBitcannaid;
                toJSON(message: _126.MsgCreateBitcannaid): unknown;
                fromPartial(object: {
                    creator?: string;
                    bcnaid?: string;
                    address?: string;
                }): _126.MsgCreateBitcannaid;
            };
            MsgCreateBitcannaidResponse: {
                encode(message: _126.MsgCreateBitcannaidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgCreateBitcannaidResponse;
                fromJSON(object: any): _126.MsgCreateBitcannaidResponse;
                toJSON(message: _126.MsgCreateBitcannaidResponse): unknown;
                fromPartial(object: {
                    id?: any;
                }): _126.MsgCreateBitcannaidResponse;
            };
            MsgUpdateBitcannaid: {
                encode(message: _126.MsgUpdateBitcannaid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgUpdateBitcannaid;
                fromJSON(object: any): _126.MsgUpdateBitcannaid;
                toJSON(message: _126.MsgUpdateBitcannaid): unknown;
                fromPartial(object: {
                    creator?: string;
                    id?: any;
                    bcnaid?: string;
                    address?: string;
                }): _126.MsgUpdateBitcannaid;
            };
            MsgUpdateBitcannaidResponse: {
                encode(_: _126.MsgUpdateBitcannaidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgUpdateBitcannaidResponse;
                fromJSON(_: any): _126.MsgUpdateBitcannaidResponse;
                toJSON(_: _126.MsgUpdateBitcannaidResponse): unknown;
                fromPartial(_: {}): _126.MsgUpdateBitcannaidResponse;
            };
            MsgDeleteBitcannaid: {
                encode(message: _126.MsgDeleteBitcannaid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgDeleteBitcannaid;
                fromJSON(object: any): _126.MsgDeleteBitcannaid;
                toJSON(message: _126.MsgDeleteBitcannaid): unknown;
                fromPartial(object: {
                    creator?: string;
                    id?: any;
                }): _126.MsgDeleteBitcannaid;
            };
            MsgDeleteBitcannaidResponse: {
                encode(_: _126.MsgDeleteBitcannaidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgDeleteBitcannaidResponse;
                fromJSON(_: any): _126.MsgDeleteBitcannaidResponse;
                toJSON(_: _126.MsgDeleteBitcannaidResponse): unknown;
                fromPartial(_: {}): _126.MsgDeleteBitcannaidResponse;
            };
            MsgCreateSupplychain: {
                encode(message: _126.MsgCreateSupplychain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgCreateSupplychain;
                fromJSON(object: any): _126.MsgCreateSupplychain;
                toJSON(message: _126.MsgCreateSupplychain): unknown;
                fromPartial(object: {
                    creator?: string;
                    product?: string;
                    info?: string;
                    supplyinfo?: string;
                }): _126.MsgCreateSupplychain;
            };
            MsgCreateSupplychainResponse: {
                encode(message: _126.MsgCreateSupplychainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgCreateSupplychainResponse;
                fromJSON(object: any): _126.MsgCreateSupplychainResponse;
                toJSON(message: _126.MsgCreateSupplychainResponse): unknown;
                fromPartial(object: {
                    id?: any;
                }): _126.MsgCreateSupplychainResponse;
            };
            MsgUpdateSupplychain: {
                encode(message: _126.MsgUpdateSupplychain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgUpdateSupplychain;
                fromJSON(object: any): _126.MsgUpdateSupplychain;
                toJSON(message: _126.MsgUpdateSupplychain): unknown;
                fromPartial(object: {
                    creator?: string;
                    id?: any;
                    product?: string;
                    info?: string;
                    supplyinfo?: string;
                }): _126.MsgUpdateSupplychain;
            };
            MsgUpdateSupplychainResponse: {
                encode(_: _126.MsgUpdateSupplychainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgUpdateSupplychainResponse;
                fromJSON(_: any): _126.MsgUpdateSupplychainResponse;
                toJSON(_: _126.MsgUpdateSupplychainResponse): unknown;
                fromPartial(_: {}): _126.MsgUpdateSupplychainResponse;
            };
            MsgDeleteSupplychain: {
                encode(message: _126.MsgDeleteSupplychain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgDeleteSupplychain;
                fromJSON(object: any): _126.MsgDeleteSupplychain;
                toJSON(message: _126.MsgDeleteSupplychain): unknown;
                fromPartial(object: {
                    creator?: string;
                    id?: any;
                }): _126.MsgDeleteSupplychain;
            };
            MsgDeleteSupplychainResponse: {
                encode(_: _126.MsgDeleteSupplychainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgDeleteSupplychainResponse;
                fromJSON(_: any): _126.MsgDeleteSupplychainResponse;
                toJSON(_: _126.MsgDeleteSupplychainResponse): unknown;
                fromPartial(_: {}): _126.MsgDeleteSupplychainResponse;
            };
            Supplychain: {
                encode(message: _125.Supplychain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Supplychain;
                fromJSON(object: any): _125.Supplychain;
                toJSON(message: _125.Supplychain): unknown;
                fromPartial(object: {
                    id?: any;
                    product?: string;
                    info?: string;
                    supplyinfo?: string;
                    creator?: string;
                }): _125.Supplychain;
            };
            QueryParamsRequest: {
                encode(_: _124.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryParamsRequest;
                fromJSON(_: any): _124.QueryParamsRequest;
                toJSON(_: _124.QueryParamsRequest): unknown;
                fromPartial(_: {}): _124.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _124.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryParamsResponse;
                fromJSON(object: any): _124.QueryParamsResponse;
                toJSON(message: _124.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {};
                }): _124.QueryParamsResponse;
            };
            QueryGetBitcannaidRequest: {
                encode(message: _124.QueryGetBitcannaidRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryGetBitcannaidRequest;
                fromJSON(object: any): _124.QueryGetBitcannaidRequest;
                toJSON(message: _124.QueryGetBitcannaidRequest): unknown;
                fromPartial(object: {
                    id?: any;
                }): _124.QueryGetBitcannaidRequest;
            };
            QueryGetBitcannaidResponse: {
                encode(message: _124.QueryGetBitcannaidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryGetBitcannaidResponse;
                fromJSON(object: any): _124.QueryGetBitcannaidResponse;
                toJSON(message: _124.QueryGetBitcannaidResponse): unknown;
                fromPartial(object: {
                    Bitcannaid?: {
                        id?: any;
                        bcnaid?: string;
                        address?: string;
                        creator?: string;
                    };
                }): _124.QueryGetBitcannaidResponse;
            };
            QueryAllBitcannaidRequest: {
                encode(message: _124.QueryAllBitcannaidRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryAllBitcannaidRequest;
                fromJSON(object: any): _124.QueryAllBitcannaidRequest;
                toJSON(message: _124.QueryAllBitcannaidRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _124.QueryAllBitcannaidRequest;
            };
            QueryAllBitcannaidResponse: {
                encode(message: _124.QueryAllBitcannaidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryAllBitcannaidResponse;
                fromJSON(object: any): _124.QueryAllBitcannaidResponse;
                toJSON(message: _124.QueryAllBitcannaidResponse): unknown;
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
                }): _124.QueryAllBitcannaidResponse;
            };
            QueryGetSupplychainRequest: {
                encode(message: _124.QueryGetSupplychainRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryGetSupplychainRequest;
                fromJSON(object: any): _124.QueryGetSupplychainRequest;
                toJSON(message: _124.QueryGetSupplychainRequest): unknown;
                fromPartial(object: {
                    id?: any;
                }): _124.QueryGetSupplychainRequest;
            };
            QueryGetSupplychainResponse: {
                encode(message: _124.QueryGetSupplychainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryGetSupplychainResponse;
                fromJSON(object: any): _124.QueryGetSupplychainResponse;
                toJSON(message: _124.QueryGetSupplychainResponse): unknown;
                fromPartial(object: {
                    Supplychain?: {
                        id?: any;
                        product?: string;
                        info?: string;
                        supplyinfo?: string;
                        creator?: string;
                    };
                }): _124.QueryGetSupplychainResponse;
            };
            QueryAllSupplychainRequest: {
                encode(message: _124.QueryAllSupplychainRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryAllSupplychainRequest;
                fromJSON(object: any): _124.QueryAllSupplychainRequest;
                toJSON(message: _124.QueryAllSupplychainRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _124.QueryAllSupplychainRequest;
            };
            QueryAllSupplychainResponse: {
                encode(message: _124.QueryAllSupplychainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryAllSupplychainResponse;
                fromJSON(object: any): _124.QueryAllSupplychainResponse;
                toJSON(message: _124.QueryAllSupplychainResponse): unknown;
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
                }): _124.QueryAllSupplychainResponse;
            };
            Params: {
                encode(_: _123.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Params;
                fromJSON(_: any): _123.Params;
                toJSON(_: _123.Params): unknown;
                fromPartial(_: {}): _123.Params;
            };
            GenesisState: {
                encode(message: _122.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.GenesisState;
                fromJSON(object: any): _122.GenesisState;
                toJSON(message: _122.GenesisState): unknown;
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
                }): _122.GenesisState;
            };
            Bitcannaid: {
                encode(message: _121.Bitcannaid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.Bitcannaid;
                fromJSON(object: any): _121.Bitcannaid;
                toJSON(message: _121.Bitcannaid): unknown;
                fromPartial(object: {
                    id?: any;
                    bcnaid?: string;
                    address?: string;
                    creator?: string;
                }): _121.Bitcannaid;
            };
        };
    }
}
