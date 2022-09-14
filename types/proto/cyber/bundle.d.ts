import * as _254 from "./bandwidth/v1beta1/genesis";
import * as _255 from "./bandwidth/v1beta1/query";
import * as _256 from "./bandwidth/v1beta1/types";
import * as _257 from "./base/query/v1beta1/pagination";
import * as _258 from "./dmn/v1beta1/genesis";
import * as _259 from "./dmn/v1beta1/query";
import * as _260 from "./dmn/v1beta1/tx";
import * as _261 from "./dmn/v1beta1/types";
import * as _262 from "./graph/v1beta1/query";
import * as _263 from "./graph/v1beta1/tx";
import * as _264 from "./graph/v1beta1/types";
import * as _265 from "./grid/v1beta1/genesis";
import * as _266 from "./grid/v1beta1/query";
import * as _267 from "./grid/v1beta1/tx";
import * as _268 from "./grid/v1beta1/types";
import * as _269 from "./rank/v1beta1/genesis";
import * as _270 from "./rank/v1beta1/query";
import * as _271 from "./rank/v1beta1/types";
import * as _272 from "./resources/v1beta1/genesis";
import * as _273 from "./resources/v1beta1/query";
import * as _274 from "./resources/v1beta1/tx";
import * as _275 from "./resources/v1beta1/types";
export declare namespace cyber {
    namespace bandwidth {
        const v1beta1: {
            Params: {
                encode(message: _256.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.Params;
                fromJSON(object: any): _256.Params;
                toJSON(message: _256.Params): unknown;
                fromPartial(object: {
                    recoveryPeriod?: any;
                    adjustPricePeriod?: any;
                    basePrice?: string;
                    baseLoad?: string;
                    maxBlockBandwidth?: any;
                }): _256.Params;
            };
            NeuronBandwidth: {
                encode(message: _256.NeuronBandwidth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.NeuronBandwidth;
                fromJSON(object: any): _256.NeuronBandwidth;
                toJSON(message: _256.NeuronBandwidth): unknown;
                fromPartial(object: {
                    neuron?: string;
                    remainedValue?: any;
                    lastUpdatedBlock?: any;
                    maxValue?: any;
                }): _256.NeuronBandwidth;
            };
            Price: {
                encode(message: _256.Price, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.Price;
                fromJSON(object: any): _256.Price;
                toJSON(message: _256.Price): unknown;
                fromPartial(object: {
                    price?: string;
                }): _256.Price;
            };
            QueryLoadRequest: {
                encode(_: _255.QueryLoadRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.QueryLoadRequest;
                fromJSON(_: any): _255.QueryLoadRequest;
                toJSON(_: _255.QueryLoadRequest): unknown;
                fromPartial(_: {}): _255.QueryLoadRequest;
            };
            QueryLoadResponse: {
                encode(message: _255.QueryLoadResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.QueryLoadResponse;
                fromJSON(object: any): _255.QueryLoadResponse;
                toJSON(message: _255.QueryLoadResponse): unknown;
                fromPartial(object: {
                    load?: {
                        dec?: string;
                    };
                }): _255.QueryLoadResponse;
            };
            QueryPriceRequest: {
                encode(_: _255.QueryPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.QueryPriceRequest;
                fromJSON(_: any): _255.QueryPriceRequest;
                toJSON(_: _255.QueryPriceRequest): unknown;
                fromPartial(_: {}): _255.QueryPriceRequest;
            };
            QueryPriceResponse: {
                encode(message: _255.QueryPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.QueryPriceResponse;
                fromJSON(object: any): _255.QueryPriceResponse;
                toJSON(message: _255.QueryPriceResponse): unknown;
                fromPartial(object: {
                    price?: {
                        dec?: string;
                    };
                }): _255.QueryPriceResponse;
            };
            QueryTotalBandwidthRequest: {
                encode(_: _255.QueryTotalBandwidthRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.QueryTotalBandwidthRequest;
                fromJSON(_: any): _255.QueryTotalBandwidthRequest;
                toJSON(_: _255.QueryTotalBandwidthRequest): unknown;
                fromPartial(_: {}): _255.QueryTotalBandwidthRequest;
            };
            QueryTotalBandwidthResponse: {
                encode(message: _255.QueryTotalBandwidthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.QueryTotalBandwidthResponse;
                fromJSON(object: any): _255.QueryTotalBandwidthResponse;
                toJSON(message: _255.QueryTotalBandwidthResponse): unknown;
                fromPartial(object: {
                    totalBandwidth?: any;
                }): _255.QueryTotalBandwidthResponse;
            };
            QueryNeuronBandwidthRequest: {
                encode(message: _255.QueryNeuronBandwidthRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.QueryNeuronBandwidthRequest;
                fromJSON(object: any): _255.QueryNeuronBandwidthRequest;
                toJSON(message: _255.QueryNeuronBandwidthRequest): unknown;
                fromPartial(object: {
                    neuron?: string;
                }): _255.QueryNeuronBandwidthRequest;
            };
            QueryNeuronBandwidthResponse: {
                encode(message: _255.QueryNeuronBandwidthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.QueryNeuronBandwidthResponse;
                fromJSON(object: any): _255.QueryNeuronBandwidthResponse;
                toJSON(message: _255.QueryNeuronBandwidthResponse): unknown;
                fromPartial(object: {
                    neuronBandwidth?: {
                        neuron?: string;
                        remainedValue?: any;
                        lastUpdatedBlock?: any;
                        maxValue?: any;
                    };
                }): _255.QueryNeuronBandwidthResponse;
            };
            QueryParamsRequest: {
                encode(_: _255.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.QueryParamsRequest;
                fromJSON(_: any): _255.QueryParamsRequest;
                toJSON(_: _255.QueryParamsRequest): unknown;
                fromPartial(_: {}): _255.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _255.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.QueryParamsResponse;
                fromJSON(object: any): _255.QueryParamsResponse;
                toJSON(message: _255.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        recoveryPeriod?: any;
                        adjustPricePeriod?: any;
                        basePrice?: string;
                        baseLoad?: string;
                        maxBlockBandwidth?: any;
                    };
                }): _255.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _254.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.GenesisState;
                fromJSON(object: any): _254.GenesisState;
                toJSON(message: _254.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        recoveryPeriod?: any;
                        adjustPricePeriod?: any;
                        basePrice?: string;
                        baseLoad?: string;
                        maxBlockBandwidth?: any;
                    };
                }): _254.GenesisState;
            };
        };
    }
    namespace base {
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _257.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.PageRequest;
                    fromJSON(object: any): _257.PageRequest;
                    toJSON(message: _257.PageRequest): unknown;
                    fromPartial(object: {
                        page?: number;
                        perPage?: number;
                    }): _257.PageRequest;
                };
                PageResponse: {
                    encode(message: _257.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.PageResponse;
                    fromJSON(object: any): _257.PageResponse;
                    toJSON(message: _257.PageResponse): unknown;
                    fromPartial(object: {
                        total?: number;
                    }): _257.PageResponse;
                };
            };
        }
    }
    namespace dmn {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createThought(value: _260.MsgCreateThought): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    forgetThought(value: _260.MsgForgetThought): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeThoughtParticle(value: _260.MsgChangeThoughtParticle): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeThoughtName(value: _260.MsgChangeThoughtName): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeThoughtInput(value: _260.MsgChangeThoughtInput): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeThoughtGasPrice(value: _260.MsgChangeThoughtGasPrice): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeThoughtPeriod(value: _260.MsgChangeThoughtPeriod): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeThoughtBlock(value: _260.MsgChangeThoughtBlock): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createThought(value: _260.MsgCreateThought): {
                        typeUrl: string;
                        value: _260.MsgCreateThought;
                    };
                    forgetThought(value: _260.MsgForgetThought): {
                        typeUrl: string;
                        value: _260.MsgForgetThought;
                    };
                    changeThoughtParticle(value: _260.MsgChangeThoughtParticle): {
                        typeUrl: string;
                        value: _260.MsgChangeThoughtParticle;
                    };
                    changeThoughtName(value: _260.MsgChangeThoughtName): {
                        typeUrl: string;
                        value: _260.MsgChangeThoughtName;
                    };
                    changeThoughtInput(value: _260.MsgChangeThoughtInput): {
                        typeUrl: string;
                        value: _260.MsgChangeThoughtInput;
                    };
                    changeThoughtGasPrice(value: _260.MsgChangeThoughtGasPrice): {
                        typeUrl: string;
                        value: _260.MsgChangeThoughtGasPrice;
                    };
                    changeThoughtPeriod(value: _260.MsgChangeThoughtPeriod): {
                        typeUrl: string;
                        value: _260.MsgChangeThoughtPeriod;
                    };
                    changeThoughtBlock(value: _260.MsgChangeThoughtBlock): {
                        typeUrl: string;
                        value: _260.MsgChangeThoughtBlock;
                    };
                };
                toJSON: {
                    createThought(value: _260.MsgCreateThought): {
                        typeUrl: string;
                        value: unknown;
                    };
                    forgetThought(value: _260.MsgForgetThought): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeThoughtParticle(value: _260.MsgChangeThoughtParticle): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeThoughtName(value: _260.MsgChangeThoughtName): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeThoughtInput(value: _260.MsgChangeThoughtInput): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeThoughtGasPrice(value: _260.MsgChangeThoughtGasPrice): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeThoughtPeriod(value: _260.MsgChangeThoughtPeriod): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeThoughtBlock(value: _260.MsgChangeThoughtBlock): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createThought(value: any): {
                        typeUrl: string;
                        value: _260.MsgCreateThought;
                    };
                    forgetThought(value: any): {
                        typeUrl: string;
                        value: _260.MsgForgetThought;
                    };
                    changeThoughtParticle(value: any): {
                        typeUrl: string;
                        value: _260.MsgChangeThoughtParticle;
                    };
                    changeThoughtName(value: any): {
                        typeUrl: string;
                        value: _260.MsgChangeThoughtName;
                    };
                    changeThoughtInput(value: any): {
                        typeUrl: string;
                        value: _260.MsgChangeThoughtInput;
                    };
                    changeThoughtGasPrice(value: any): {
                        typeUrl: string;
                        value: _260.MsgChangeThoughtGasPrice;
                    };
                    changeThoughtPeriod(value: any): {
                        typeUrl: string;
                        value: _260.MsgChangeThoughtPeriod;
                    };
                    changeThoughtBlock(value: any): {
                        typeUrl: string;
                        value: _260.MsgChangeThoughtBlock;
                    };
                };
                fromPartial: {
                    createThought(value: _260.MsgCreateThought): {
                        typeUrl: string;
                        value: _260.MsgCreateThought;
                    };
                    forgetThought(value: _260.MsgForgetThought): {
                        typeUrl: string;
                        value: _260.MsgForgetThought;
                    };
                    changeThoughtParticle(value: _260.MsgChangeThoughtParticle): {
                        typeUrl: string;
                        value: _260.MsgChangeThoughtParticle;
                    };
                    changeThoughtName(value: _260.MsgChangeThoughtName): {
                        typeUrl: string;
                        value: _260.MsgChangeThoughtName;
                    };
                    changeThoughtInput(value: _260.MsgChangeThoughtInput): {
                        typeUrl: string;
                        value: _260.MsgChangeThoughtInput;
                    };
                    changeThoughtGasPrice(value: _260.MsgChangeThoughtGasPrice): {
                        typeUrl: string;
                        value: _260.MsgChangeThoughtGasPrice;
                    };
                    changeThoughtPeriod(value: _260.MsgChangeThoughtPeriod): {
                        typeUrl: string;
                        value: _260.MsgChangeThoughtPeriod;
                    };
                    changeThoughtBlock(value: _260.MsgChangeThoughtBlock): {
                        typeUrl: string;
                        value: _260.MsgChangeThoughtBlock;
                    };
                };
            };
            AminoConverter: {
                "/cyber.dmn.v1beta1.MsgCreateThought": {
                    aminoType: string;
                    toAmino: ({ program, trigger, load, name, particle }: _260.MsgCreateThought) => {
                        program: string;
                        trigger: {
                            period: string;
                            block: string;
                        };
                        load: {
                            input: string;
                            gas_price: {
                                denom: string;
                                amount: string;
                            };
                        };
                        name: string;
                        particle: string;
                    };
                    fromAmino: ({ program, trigger, load, name, particle }: {
                        program: string;
                        trigger: {
                            period: string;
                            block: string;
                        };
                        load: {
                            input: string;
                            gas_price: {
                                denom: string;
                                amount: string;
                            };
                        };
                        name: string;
                        particle: string;
                    }) => _260.MsgCreateThought;
                };
                "/cyber.dmn.v1beta1.MsgForgetThought": {
                    aminoType: string;
                    toAmino: ({ program, name }: _260.MsgForgetThought) => {
                        program: string;
                        name: string;
                    };
                    fromAmino: ({ program, name }: {
                        program: string;
                        name: string;
                    }) => _260.MsgForgetThought;
                };
                "/cyber.dmn.v1beta1.MsgChangeThoughtParticle": {
                    aminoType: string;
                    toAmino: ({ program, name, particle }: _260.MsgChangeThoughtParticle) => {
                        program: string;
                        name: string;
                        particle: string;
                    };
                    fromAmino: ({ program, name, particle }: {
                        program: string;
                        name: string;
                        particle: string;
                    }) => _260.MsgChangeThoughtParticle;
                };
                "/cyber.dmn.v1beta1.MsgChangeThoughtName": {
                    aminoType: string;
                    toAmino: ({ program, name, newName }: _260.MsgChangeThoughtName) => {
                        program: string;
                        name: string;
                        new_name: string;
                    };
                    fromAmino: ({ program, name, new_name }: {
                        program: string;
                        name: string;
                        new_name: string;
                    }) => _260.MsgChangeThoughtName;
                };
                "/cyber.dmn.v1beta1.MsgChangeThoughtInput": {
                    aminoType: string;
                    toAmino: ({ program, name, input }: _260.MsgChangeThoughtInput) => {
                        program: string;
                        name: string;
                        input: string;
                    };
                    fromAmino: ({ program, name, input }: {
                        program: string;
                        name: string;
                        input: string;
                    }) => _260.MsgChangeThoughtInput;
                };
                "/cyber.dmn.v1beta1.MsgChangeThoughtGasPrice": {
                    aminoType: string;
                    toAmino: ({ program, name, gasPrice }: _260.MsgChangeThoughtGasPrice) => {
                        program: string;
                        name: string;
                        gas_price: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ program, name, gas_price }: {
                        program: string;
                        name: string;
                        gas_price: {
                            denom: string;
                            amount: string;
                        };
                    }) => _260.MsgChangeThoughtGasPrice;
                };
                "/cyber.dmn.v1beta1.MsgChangeThoughtPeriod": {
                    aminoType: string;
                    toAmino: ({ program, name, period }: _260.MsgChangeThoughtPeriod) => {
                        program: string;
                        name: string;
                        period: string;
                    };
                    fromAmino: ({ program, name, period }: {
                        program: string;
                        name: string;
                        period: string;
                    }) => _260.MsgChangeThoughtPeriod;
                };
                "/cyber.dmn.v1beta1.MsgChangeThoughtBlock": {
                    aminoType: string;
                    toAmino: ({ program, name, block }: _260.MsgChangeThoughtBlock) => {
                        program: string;
                        name: string;
                        block: string;
                    };
                    fromAmino: ({ program, name, block }: {
                        program: string;
                        name: string;
                        block: string;
                    }) => _260.MsgChangeThoughtBlock;
                };
            };
            Params: {
                encode(message: _261.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.Params;
                fromJSON(object: any): _261.Params;
                toJSON(message: _261.Params): unknown;
                fromPartial(object: {
                    maxSlots?: number;
                    maxGas?: number;
                    feeTtl?: number;
                }): _261.Params;
            };
            Thought: {
                encode(message: _261.Thought, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.Thought;
                fromJSON(object: any): _261.Thought;
                toJSON(message: _261.Thought): unknown;
                fromPartial(object: {
                    program?: string;
                    trigger?: {
                        period?: any;
                        block?: any;
                    };
                    load?: {
                        input?: string;
                        gasPrice?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                    name?: string;
                    particle?: string;
                }): _261.Thought;
            };
            Trigger: {
                encode(message: _261.Trigger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.Trigger;
                fromJSON(object: any): _261.Trigger;
                toJSON(message: _261.Trigger): unknown;
                fromPartial(object: {
                    period?: any;
                    block?: any;
                }): _261.Trigger;
            };
            Load: {
                encode(message: _261.Load, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.Load;
                fromJSON(object: any): _261.Load;
                toJSON(message: _261.Load): unknown;
                fromPartial(object: {
                    input?: string;
                    gasPrice?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _261.Load;
            };
            ThoughtStats: {
                encode(message: _261.ThoughtStats, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.ThoughtStats;
                fromJSON(object: any): _261.ThoughtStats;
                toJSON(message: _261.ThoughtStats): unknown;
                fromPartial(object: {
                    program?: string;
                    name?: string;
                    calls?: any;
                    fees?: any;
                    gas?: any;
                    lastBlock?: any;
                }): _261.ThoughtStats;
            };
            MsgCreateThought: {
                encode(message: _260.MsgCreateThought, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.MsgCreateThought;
                fromJSON(object: any): _260.MsgCreateThought;
                toJSON(message: _260.MsgCreateThought): unknown;
                fromPartial(object: {
                    program?: string;
                    trigger?: {
                        period?: any;
                        block?: any;
                    };
                    load?: {
                        input?: string;
                        gasPrice?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                    name?: string;
                    particle?: string;
                }): _260.MsgCreateThought;
            };
            MsgForgetThought: {
                encode(message: _260.MsgForgetThought, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.MsgForgetThought;
                fromJSON(object: any): _260.MsgForgetThought;
                toJSON(message: _260.MsgForgetThought): unknown;
                fromPartial(object: {
                    program?: string;
                    name?: string;
                }): _260.MsgForgetThought;
            };
            MsgChangeThoughtParticle: {
                encode(message: _260.MsgChangeThoughtParticle, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.MsgChangeThoughtParticle;
                fromJSON(object: any): _260.MsgChangeThoughtParticle;
                toJSON(message: _260.MsgChangeThoughtParticle): unknown;
                fromPartial(object: {
                    program?: string;
                    name?: string;
                    particle?: string;
                }): _260.MsgChangeThoughtParticle;
            };
            MsgChangeThoughtName: {
                encode(message: _260.MsgChangeThoughtName, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.MsgChangeThoughtName;
                fromJSON(object: any): _260.MsgChangeThoughtName;
                toJSON(message: _260.MsgChangeThoughtName): unknown;
                fromPartial(object: {
                    program?: string;
                    name?: string;
                    newName?: string;
                }): _260.MsgChangeThoughtName;
            };
            MsgChangeThoughtInput: {
                encode(message: _260.MsgChangeThoughtInput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.MsgChangeThoughtInput;
                fromJSON(object: any): _260.MsgChangeThoughtInput;
                toJSON(message: _260.MsgChangeThoughtInput): unknown;
                fromPartial(object: {
                    program?: string;
                    name?: string;
                    input?: string;
                }): _260.MsgChangeThoughtInput;
            };
            MsgChangeThoughtGasPrice: {
                encode(message: _260.MsgChangeThoughtGasPrice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.MsgChangeThoughtGasPrice;
                fromJSON(object: any): _260.MsgChangeThoughtGasPrice;
                toJSON(message: _260.MsgChangeThoughtGasPrice): unknown;
                fromPartial(object: {
                    program?: string;
                    name?: string;
                    gasPrice?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _260.MsgChangeThoughtGasPrice;
            };
            MsgChangeThoughtPeriod: {
                encode(message: _260.MsgChangeThoughtPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.MsgChangeThoughtPeriod;
                fromJSON(object: any): _260.MsgChangeThoughtPeriod;
                toJSON(message: _260.MsgChangeThoughtPeriod): unknown;
                fromPartial(object: {
                    program?: string;
                    name?: string;
                    period?: any;
                }): _260.MsgChangeThoughtPeriod;
            };
            MsgChangeThoughtBlock: {
                encode(message: _260.MsgChangeThoughtBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.MsgChangeThoughtBlock;
                fromJSON(object: any): _260.MsgChangeThoughtBlock;
                toJSON(message: _260.MsgChangeThoughtBlock): unknown;
                fromPartial(object: {
                    program?: string;
                    name?: string;
                    block?: any;
                }): _260.MsgChangeThoughtBlock;
            };
            MsgCreateThoughtResponse: {
                encode(_: _260.MsgCreateThoughtResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.MsgCreateThoughtResponse;
                fromJSON(_: any): _260.MsgCreateThoughtResponse;
                toJSON(_: _260.MsgCreateThoughtResponse): unknown;
                fromPartial(_: {}): _260.MsgCreateThoughtResponse;
            };
            MsgForgetThoughtResponse: {
                encode(_: _260.MsgForgetThoughtResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.MsgForgetThoughtResponse;
                fromJSON(_: any): _260.MsgForgetThoughtResponse;
                toJSON(_: _260.MsgForgetThoughtResponse): unknown;
                fromPartial(_: {}): _260.MsgForgetThoughtResponse;
            };
            MsgChangeThoughtParticleResponse: {
                encode(_: _260.MsgChangeThoughtParticleResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.MsgChangeThoughtParticleResponse;
                fromJSON(_: any): _260.MsgChangeThoughtParticleResponse;
                toJSON(_: _260.MsgChangeThoughtParticleResponse): unknown;
                fromPartial(_: {}): _260.MsgChangeThoughtParticleResponse;
            };
            MsgChangeThoughtNameResponse: {
                encode(_: _260.MsgChangeThoughtNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.MsgChangeThoughtNameResponse;
                fromJSON(_: any): _260.MsgChangeThoughtNameResponse;
                toJSON(_: _260.MsgChangeThoughtNameResponse): unknown;
                fromPartial(_: {}): _260.MsgChangeThoughtNameResponse;
            };
            MsgChangeThoughtInputResponse: {
                encode(_: _260.MsgChangeThoughtInputResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.MsgChangeThoughtInputResponse;
                fromJSON(_: any): _260.MsgChangeThoughtInputResponse;
                toJSON(_: _260.MsgChangeThoughtInputResponse): unknown;
                fromPartial(_: {}): _260.MsgChangeThoughtInputResponse;
            };
            MsgChangeThoughtGasPriceResponse: {
                encode(_: _260.MsgChangeThoughtGasPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.MsgChangeThoughtGasPriceResponse;
                fromJSON(_: any): _260.MsgChangeThoughtGasPriceResponse;
                toJSON(_: _260.MsgChangeThoughtGasPriceResponse): unknown;
                fromPartial(_: {}): _260.MsgChangeThoughtGasPriceResponse;
            };
            MsgChangeThoughtPeriodResponse: {
                encode(_: _260.MsgChangeThoughtPeriodResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.MsgChangeThoughtPeriodResponse;
                fromJSON(_: any): _260.MsgChangeThoughtPeriodResponse;
                toJSON(_: _260.MsgChangeThoughtPeriodResponse): unknown;
                fromPartial(_: {}): _260.MsgChangeThoughtPeriodResponse;
            };
            MsgChangeThoughtBlockResponse: {
                encode(_: _260.MsgChangeThoughtBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.MsgChangeThoughtBlockResponse;
                fromJSON(_: any): _260.MsgChangeThoughtBlockResponse;
                toJSON(_: _260.MsgChangeThoughtBlockResponse): unknown;
                fromPartial(_: {}): _260.MsgChangeThoughtBlockResponse;
            };
            QueryParamsRequest: {
                encode(_: _259.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.QueryParamsRequest;
                fromJSON(_: any): _259.QueryParamsRequest;
                toJSON(_: _259.QueryParamsRequest): unknown;
                fromPartial(_: {}): _259.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _259.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.QueryParamsResponse;
                fromJSON(object: any): _259.QueryParamsResponse;
                toJSON(message: _259.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        maxSlots?: number;
                        maxGas?: number;
                        feeTtl?: number;
                    };
                }): _259.QueryParamsResponse;
            };
            QueryThoughtParamsRequest: {
                encode(message: _259.QueryThoughtParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.QueryThoughtParamsRequest;
                fromJSON(object: any): _259.QueryThoughtParamsRequest;
                toJSON(message: _259.QueryThoughtParamsRequest): unknown;
                fromPartial(object: {
                    program?: string;
                    name?: string;
                }): _259.QueryThoughtParamsRequest;
            };
            QueryThoughtResponse: {
                encode(message: _259.QueryThoughtResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.QueryThoughtResponse;
                fromJSON(object: any): _259.QueryThoughtResponse;
                toJSON(message: _259.QueryThoughtResponse): unknown;
                fromPartial(object: {
                    thought?: {
                        program?: string;
                        trigger?: {
                            period?: any;
                            block?: any;
                        };
                        load?: {
                            input?: string;
                            gasPrice?: {
                                denom?: string;
                                amount?: string;
                            };
                        };
                        name?: string;
                        particle?: string;
                    };
                }): _259.QueryThoughtResponse;
            };
            QueryThoughtStatsResponse: {
                encode(message: _259.QueryThoughtStatsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.QueryThoughtStatsResponse;
                fromJSON(object: any): _259.QueryThoughtStatsResponse;
                toJSON(message: _259.QueryThoughtStatsResponse): unknown;
                fromPartial(object: {
                    thoughtStats?: {
                        program?: string;
                        name?: string;
                        calls?: any;
                        fees?: any;
                        gas?: any;
                        lastBlock?: any;
                    };
                }): _259.QueryThoughtStatsResponse;
            };
            QueryThoughtsRequest: {
                encode(_: _259.QueryThoughtsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.QueryThoughtsRequest;
                fromJSON(_: any): _259.QueryThoughtsRequest;
                toJSON(_: _259.QueryThoughtsRequest): unknown;
                fromPartial(_: {}): _259.QueryThoughtsRequest;
            };
            QueryThoughtsResponse: {
                encode(message: _259.QueryThoughtsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.QueryThoughtsResponse;
                fromJSON(object: any): _259.QueryThoughtsResponse;
                toJSON(message: _259.QueryThoughtsResponse): unknown;
                fromPartial(object: {
                    thoughts?: {
                        program?: string;
                        trigger?: {
                            period?: any;
                            block?: any;
                        };
                        load?: {
                            input?: string;
                            gasPrice?: {
                                denom?: string;
                                amount?: string;
                            };
                        };
                        name?: string;
                        particle?: string;
                    }[];
                }): _259.QueryThoughtsResponse;
            };
            QueryThoughtsStatsRequest: {
                encode(_: _259.QueryThoughtsStatsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.QueryThoughtsStatsRequest;
                fromJSON(_: any): _259.QueryThoughtsStatsRequest;
                toJSON(_: _259.QueryThoughtsStatsRequest): unknown;
                fromPartial(_: {}): _259.QueryThoughtsStatsRequest;
            };
            QueryThoughtsStatsResponse: {
                encode(message: _259.QueryThoughtsStatsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.QueryThoughtsStatsResponse;
                fromJSON(object: any): _259.QueryThoughtsStatsResponse;
                toJSON(message: _259.QueryThoughtsStatsResponse): unknown;
                fromPartial(object: {
                    thoughtsStats?: {
                        program?: string;
                        name?: string;
                        calls?: any;
                        fees?: any;
                        gas?: any;
                        lastBlock?: any;
                    }[];
                }): _259.QueryThoughtsStatsResponse;
            };
            GenesisState: {
                encode(message: _258.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.GenesisState;
                fromJSON(object: any): _258.GenesisState;
                toJSON(message: _258.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        maxSlots?: number;
                        maxGas?: number;
                        feeTtl?: number;
                    };
                }): _258.GenesisState;
            };
        };
    }
    namespace graph {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    cyberlink(value: _263.MsgCyberlink): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    cyberlink(value: _263.MsgCyberlink): {
                        typeUrl: string;
                        value: _263.MsgCyberlink;
                    };
                };
                toJSON: {
                    cyberlink(value: _263.MsgCyberlink): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    cyberlink(value: any): {
                        typeUrl: string;
                        value: _263.MsgCyberlink;
                    };
                };
                fromPartial: {
                    cyberlink(value: _263.MsgCyberlink): {
                        typeUrl: string;
                        value: _263.MsgCyberlink;
                    };
                };
            };
            AminoConverter: {
                "/cyber.graph.v1beta1.MsgCyberlink": {
                    aminoType: string;
                    toAmino: ({ neuron, links }: _263.MsgCyberlink) => {
                        neuron: string;
                        links: {
                            from: string;
                            to: string;
                        }[];
                    };
                    fromAmino: ({ neuron, links }: {
                        neuron: string;
                        links: {
                            from: string;
                            to: string;
                        }[];
                    }) => _263.MsgCyberlink;
                };
            };
            Link: {
                encode(message: _264.Link, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _264.Link;
                fromJSON(object: any): _264.Link;
                toJSON(message: _264.Link): unknown;
                fromPartial(object: {
                    from?: string;
                    to?: string;
                }): _264.Link;
            };
            MsgCyberlink: {
                encode(message: _263.MsgCyberlink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.MsgCyberlink;
                fromJSON(object: any): _263.MsgCyberlink;
                toJSON(message: _263.MsgCyberlink): unknown;
                fromPartial(object: {
                    neuron?: string;
                    links?: {
                        from?: string;
                        to?: string;
                    }[];
                }): _263.MsgCyberlink;
            };
            MsgCyberlinkResponse: {
                encode(_: _263.MsgCyberlinkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.MsgCyberlinkResponse;
                fromJSON(_: any): _263.MsgCyberlinkResponse;
                toJSON(_: _263.MsgCyberlinkResponse): unknown;
                fromPartial(_: {}): _263.MsgCyberlinkResponse;
            };
            QueryGraphStatsRequest: {
                encode(_: _262.QueryGraphStatsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.QueryGraphStatsRequest;
                fromJSON(_: any): _262.QueryGraphStatsRequest;
                toJSON(_: _262.QueryGraphStatsRequest): unknown;
                fromPartial(_: {}): _262.QueryGraphStatsRequest;
            };
            QueryGraphStatsResponse: {
                encode(message: _262.QueryGraphStatsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.QueryGraphStatsResponse;
                fromJSON(object: any): _262.QueryGraphStatsResponse;
                toJSON(message: _262.QueryGraphStatsResponse): unknown;
                fromPartial(object: {
                    cyberlinks?: any;
                    particles?: any;
                }): _262.QueryGraphStatsResponse;
            };
        };
    }
    namespace grid {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createRoute(value: _267.MsgCreateRoute): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editRoute(value: _267.MsgEditRoute): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteRoute(value: _267.MsgDeleteRoute): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editRouteName(value: _267.MsgEditRouteName): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createRoute(value: _267.MsgCreateRoute): {
                        typeUrl: string;
                        value: _267.MsgCreateRoute;
                    };
                    editRoute(value: _267.MsgEditRoute): {
                        typeUrl: string;
                        value: _267.MsgEditRoute;
                    };
                    deleteRoute(value: _267.MsgDeleteRoute): {
                        typeUrl: string;
                        value: _267.MsgDeleteRoute;
                    };
                    editRouteName(value: _267.MsgEditRouteName): {
                        typeUrl: string;
                        value: _267.MsgEditRouteName;
                    };
                };
                toJSON: {
                    createRoute(value: _267.MsgCreateRoute): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editRoute(value: _267.MsgEditRoute): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteRoute(value: _267.MsgDeleteRoute): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editRouteName(value: _267.MsgEditRouteName): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createRoute(value: any): {
                        typeUrl: string;
                        value: _267.MsgCreateRoute;
                    };
                    editRoute(value: any): {
                        typeUrl: string;
                        value: _267.MsgEditRoute;
                    };
                    deleteRoute(value: any): {
                        typeUrl: string;
                        value: _267.MsgDeleteRoute;
                    };
                    editRouteName(value: any): {
                        typeUrl: string;
                        value: _267.MsgEditRouteName;
                    };
                };
                fromPartial: {
                    createRoute(value: _267.MsgCreateRoute): {
                        typeUrl: string;
                        value: _267.MsgCreateRoute;
                    };
                    editRoute(value: _267.MsgEditRoute): {
                        typeUrl: string;
                        value: _267.MsgEditRoute;
                    };
                    deleteRoute(value: _267.MsgDeleteRoute): {
                        typeUrl: string;
                        value: _267.MsgDeleteRoute;
                    };
                    editRouteName(value: _267.MsgEditRouteName): {
                        typeUrl: string;
                        value: _267.MsgEditRouteName;
                    };
                };
            };
            AminoConverter: {
                "/cyber.grid.v1beta1.MsgCreateRoute": {
                    aminoType: string;
                    toAmino: ({ source, destination, name }: _267.MsgCreateRoute) => {
                        source: string;
                        destination: string;
                        name: string;
                    };
                    fromAmino: ({ source, destination, name }: {
                        source: string;
                        destination: string;
                        name: string;
                    }) => _267.MsgCreateRoute;
                };
                "/cyber.grid.v1beta1.MsgEditRoute": {
                    aminoType: string;
                    toAmino: ({ source, destination, value }: _267.MsgEditRoute) => {
                        source: string;
                        destination: string;
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ source, destination, value }: {
                        source: string;
                        destination: string;
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _267.MsgEditRoute;
                };
                "/cyber.grid.v1beta1.MsgDeleteRoute": {
                    aminoType: string;
                    toAmino: ({ source, destination }: _267.MsgDeleteRoute) => {
                        source: string;
                        destination: string;
                    };
                    fromAmino: ({ source, destination }: {
                        source: string;
                        destination: string;
                    }) => _267.MsgDeleteRoute;
                };
                "/cyber.grid.v1beta1.MsgEditRouteName": {
                    aminoType: string;
                    toAmino: ({ source, destination, name }: _267.MsgEditRouteName) => {
                        source: string;
                        destination: string;
                        name: string;
                    };
                    fromAmino: ({ source, destination, name }: {
                        source: string;
                        destination: string;
                        name: string;
                    }) => _267.MsgEditRouteName;
                };
            };
            Params: {
                encode(message: _268.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.Params;
                fromJSON(object: any): _268.Params;
                toJSON(message: _268.Params): unknown;
                fromPartial(object: {
                    maxRoutes?: number;
                }): _268.Params;
            };
            Route: {
                encode(message: _268.Route, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.Route;
                fromJSON(object: any): _268.Route;
                toJSON(message: _268.Route): unknown;
                fromPartial(object: {
                    source?: string;
                    destination?: string;
                    name?: string;
                    value?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _268.Route;
            };
            Value: {
                encode(message: _268.Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.Value;
                fromJSON(object: any): _268.Value;
                toJSON(message: _268.Value): unknown;
                fromPartial(object: {
                    value?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _268.Value;
            };
            MsgCreateRoute: {
                encode(message: _267.MsgCreateRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.MsgCreateRoute;
                fromJSON(object: any): _267.MsgCreateRoute;
                toJSON(message: _267.MsgCreateRoute): unknown;
                fromPartial(object: {
                    source?: string;
                    destination?: string;
                    name?: string;
                }): _267.MsgCreateRoute;
            };
            MsgEditRoute: {
                encode(message: _267.MsgEditRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.MsgEditRoute;
                fromJSON(object: any): _267.MsgEditRoute;
                toJSON(message: _267.MsgEditRoute): unknown;
                fromPartial(object: {
                    source?: string;
                    destination?: string;
                    value?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _267.MsgEditRoute;
            };
            MsgDeleteRoute: {
                encode(message: _267.MsgDeleteRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.MsgDeleteRoute;
                fromJSON(object: any): _267.MsgDeleteRoute;
                toJSON(message: _267.MsgDeleteRoute): unknown;
                fromPartial(object: {
                    source?: string;
                    destination?: string;
                }): _267.MsgDeleteRoute;
            };
            MsgEditRouteName: {
                encode(message: _267.MsgEditRouteName, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.MsgEditRouteName;
                fromJSON(object: any): _267.MsgEditRouteName;
                toJSON(message: _267.MsgEditRouteName): unknown;
                fromPartial(object: {
                    source?: string;
                    destination?: string;
                    name?: string;
                }): _267.MsgEditRouteName;
            };
            MsgCreateRouteResponse: {
                encode(_: _267.MsgCreateRouteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.MsgCreateRouteResponse;
                fromJSON(_: any): _267.MsgCreateRouteResponse;
                toJSON(_: _267.MsgCreateRouteResponse): unknown;
                fromPartial(_: {}): _267.MsgCreateRouteResponse;
            };
            MsgEditRouteResponse: {
                encode(_: _267.MsgEditRouteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.MsgEditRouteResponse;
                fromJSON(_: any): _267.MsgEditRouteResponse;
                toJSON(_: _267.MsgEditRouteResponse): unknown;
                fromPartial(_: {}): _267.MsgEditRouteResponse;
            };
            MsgDeleteRouteResponse: {
                encode(_: _267.MsgDeleteRouteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.MsgDeleteRouteResponse;
                fromJSON(_: any): _267.MsgDeleteRouteResponse;
                toJSON(_: _267.MsgDeleteRouteResponse): unknown;
                fromPartial(_: {}): _267.MsgDeleteRouteResponse;
            };
            MsgEditRouteNameResponse: {
                encode(_: _267.MsgEditRouteNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.MsgEditRouteNameResponse;
                fromJSON(_: any): _267.MsgEditRouteNameResponse;
                toJSON(_: _267.MsgEditRouteNameResponse): unknown;
                fromPartial(_: {}): _267.MsgEditRouteNameResponse;
            };
            QueryParamsRequest: {
                encode(_: _266.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryParamsRequest;
                fromJSON(_: any): _266.QueryParamsRequest;
                toJSON(_: _266.QueryParamsRequest): unknown;
                fromPartial(_: {}): _266.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _266.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryParamsResponse;
                fromJSON(object: any): _266.QueryParamsResponse;
                toJSON(message: _266.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        maxRoutes?: number;
                    };
                }): _266.QueryParamsResponse;
            };
            QuerySourceRequest: {
                encode(message: _266.QuerySourceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QuerySourceRequest;
                fromJSON(object: any): _266.QuerySourceRequest;
                toJSON(message: _266.QuerySourceRequest): unknown;
                fromPartial(object: {
                    source?: string;
                }): _266.QuerySourceRequest;
            };
            QueryDestinationRequest: {
                encode(message: _266.QueryDestinationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryDestinationRequest;
                fromJSON(object: any): _266.QueryDestinationRequest;
                toJSON(message: _266.QueryDestinationRequest): unknown;
                fromPartial(object: {
                    destination?: string;
                }): _266.QueryDestinationRequest;
            };
            QueryRoutedEnergyResponse: {
                encode(message: _266.QueryRoutedEnergyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryRoutedEnergyResponse;
                fromJSON(object: any): _266.QueryRoutedEnergyResponse;
                toJSON(message: _266.QueryRoutedEnergyResponse): unknown;
                fromPartial(object: {
                    value?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _266.QueryRoutedEnergyResponse;
            };
            QueryRouteRequest: {
                encode(message: _266.QueryRouteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryRouteRequest;
                fromJSON(object: any): _266.QueryRouteRequest;
                toJSON(message: _266.QueryRouteRequest): unknown;
                fromPartial(object: {
                    source?: string;
                    destination?: string;
                }): _266.QueryRouteRequest;
            };
            QueryRouteResponse: {
                encode(message: _266.QueryRouteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryRouteResponse;
                fromJSON(object: any): _266.QueryRouteResponse;
                toJSON(message: _266.QueryRouteResponse): unknown;
                fromPartial(object: {
                    route?: {
                        source?: string;
                        destination?: string;
                        name?: string;
                        value?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _266.QueryRouteResponse;
            };
            QueryRoutesRequest: {
                encode(message: _266.QueryRoutesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryRoutesRequest;
                fromJSON(object: any): _266.QueryRoutesRequest;
                toJSON(message: _266.QueryRoutesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _266.QueryRoutesRequest;
            };
            QueryRoutesResponse: {
                encode(message: _266.QueryRoutesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryRoutesResponse;
                fromJSON(object: any): _266.QueryRoutesResponse;
                toJSON(message: _266.QueryRoutesResponse): unknown;
                fromPartial(object: {
                    routes?: {
                        source?: string;
                        destination?: string;
                        name?: string;
                        value?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _266.QueryRoutesResponse;
            };
            GenesisState: {
                encode(message: _265.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.GenesisState;
                fromJSON(object: any): _265.GenesisState;
                toJSON(message: _265.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        maxRoutes?: number;
                    };
                    routes?: {
                        source?: string;
                        destination?: string;
                        name?: string;
                        value?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _265.GenesisState;
            };
        };
    }
    namespace rank {
        const v1beta1: {
            Params: {
                encode(message: _271.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.Params;
                fromJSON(object: any): _271.Params;
                toJSON(message: _271.Params): unknown;
                fromPartial(object: {
                    calculationPeriod?: any;
                    dampingFactor?: string;
                    tolerance?: string;
                }): _271.Params;
            };
            RankedParticle: {
                encode(message: _271.RankedParticle, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.RankedParticle;
                fromJSON(object: any): _271.RankedParticle;
                toJSON(message: _271.RankedParticle): unknown;
                fromPartial(object: {
                    particle?: string;
                    rank?: any;
                }): _271.RankedParticle;
            };
            QueryParamsRequest: {
                encode(_: _270.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.QueryParamsRequest;
                fromJSON(_: any): _270.QueryParamsRequest;
                toJSON(_: _270.QueryParamsRequest): unknown;
                fromPartial(_: {}): _270.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _270.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.QueryParamsResponse;
                fromJSON(object: any): _270.QueryParamsResponse;
                toJSON(message: _270.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        calculationPeriod?: any;
                        dampingFactor?: string;
                        tolerance?: string;
                    };
                }): _270.QueryParamsResponse;
            };
            QueryRankRequest: {
                encode(message: _270.QueryRankRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.QueryRankRequest;
                fromJSON(object: any): _270.QueryRankRequest;
                toJSON(message: _270.QueryRankRequest): unknown;
                fromPartial(object: {
                    particle?: string;
                }): _270.QueryRankRequest;
            };
            QueryRankResponse: {
                encode(message: _270.QueryRankResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.QueryRankResponse;
                fromJSON(object: any): _270.QueryRankResponse;
                toJSON(message: _270.QueryRankResponse): unknown;
                fromPartial(object: {
                    rank?: any;
                }): _270.QueryRankResponse;
            };
            QuerySearchRequest: {
                encode(message: _270.QuerySearchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.QuerySearchRequest;
                fromJSON(object: any): _270.QuerySearchRequest;
                toJSON(message: _270.QuerySearchRequest): unknown;
                fromPartial(object: {
                    particle?: string;
                    pagination?: {
                        page?: number;
                        perPage?: number;
                    };
                }): _270.QuerySearchRequest;
            };
            QuerySearchResponse: {
                encode(message: _270.QuerySearchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.QuerySearchResponse;
                fromJSON(object: any): _270.QuerySearchResponse;
                toJSON(message: _270.QuerySearchResponse): unknown;
                fromPartial(object: {
                    result?: {
                        particle?: string;
                        rank?: any;
                    }[];
                    pagination?: {
                        total?: number;
                    };
                }): _270.QuerySearchResponse;
            };
            QueryTopRequest: {
                encode(_: _270.QueryTopRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.QueryTopRequest;
                fromJSON(_: any): _270.QueryTopRequest;
                toJSON(_: _270.QueryTopRequest): unknown;
                fromPartial(_: {}): _270.QueryTopRequest;
            };
            QueryIsLinkExistRequest: {
                encode(message: _270.QueryIsLinkExistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.QueryIsLinkExistRequest;
                fromJSON(object: any): _270.QueryIsLinkExistRequest;
                toJSON(message: _270.QueryIsLinkExistRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    to?: string;
                    address?: string;
                }): _270.QueryIsLinkExistRequest;
            };
            QueryIsAnyLinkExistRequest: {
                encode(message: _270.QueryIsAnyLinkExistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.QueryIsAnyLinkExistRequest;
                fromJSON(object: any): _270.QueryIsAnyLinkExistRequest;
                toJSON(message: _270.QueryIsAnyLinkExistRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    to?: string;
                }): _270.QueryIsAnyLinkExistRequest;
            };
            QueryLinkExistResponse: {
                encode(message: _270.QueryLinkExistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.QueryLinkExistResponse;
                fromJSON(object: any): _270.QueryLinkExistResponse;
                toJSON(message: _270.QueryLinkExistResponse): unknown;
                fromPartial(object: {
                    exist?: boolean;
                }): _270.QueryLinkExistResponse;
            };
            QueryNegentropyPartilceRequest: {
                encode(message: _270.QueryNegentropyPartilceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.QueryNegentropyPartilceRequest;
                fromJSON(object: any): _270.QueryNegentropyPartilceRequest;
                toJSON(message: _270.QueryNegentropyPartilceRequest): unknown;
                fromPartial(object: {
                    particle?: string;
                }): _270.QueryNegentropyPartilceRequest;
            };
            QueryNegentropyParticleResponse: {
                encode(message: _270.QueryNegentropyParticleResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.QueryNegentropyParticleResponse;
                fromJSON(object: any): _270.QueryNegentropyParticleResponse;
                toJSON(message: _270.QueryNegentropyParticleResponse): unknown;
                fromPartial(object: {
                    entropy?: any;
                }): _270.QueryNegentropyParticleResponse;
            };
            QueryNegentropyRequest: {
                encode(_: _270.QueryNegentropyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.QueryNegentropyRequest;
                fromJSON(_: any): _270.QueryNegentropyRequest;
                toJSON(_: _270.QueryNegentropyRequest): unknown;
                fromPartial(_: {}): _270.QueryNegentropyRequest;
            };
            QueryNegentropyResponse: {
                encode(message: _270.QueryNegentropyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.QueryNegentropyResponse;
                fromJSON(object: any): _270.QueryNegentropyResponse;
                toJSON(message: _270.QueryNegentropyResponse): unknown;
                fromPartial(object: {
                    negentropy?: any;
                }): _270.QueryNegentropyResponse;
            };
            QueryKarmaRequest: {
                encode(message: _270.QueryKarmaRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.QueryKarmaRequest;
                fromJSON(object: any): _270.QueryKarmaRequest;
                toJSON(message: _270.QueryKarmaRequest): unknown;
                fromPartial(object: {
                    neuron?: string;
                }): _270.QueryKarmaRequest;
            };
            QueryKarmaResponse: {
                encode(message: _270.QueryKarmaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.QueryKarmaResponse;
                fromJSON(object: any): _270.QueryKarmaResponse;
                toJSON(message: _270.QueryKarmaResponse): unknown;
                fromPartial(object: {
                    karma?: any;
                }): _270.QueryKarmaResponse;
            };
            GenesisState: {
                encode(message: _269.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.GenesisState;
                fromJSON(object: any): _269.GenesisState;
                toJSON(message: _269.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        calculationPeriod?: any;
                        dampingFactor?: string;
                        tolerance?: string;
                    };
                }): _269.GenesisState;
            };
        };
    }
    namespace resources {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    investmint(value: _274.MsgInvestmint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    investmint(value: _274.MsgInvestmint): {
                        typeUrl: string;
                        value: _274.MsgInvestmint;
                    };
                };
                toJSON: {
                    investmint(value: _274.MsgInvestmint): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    investmint(value: any): {
                        typeUrl: string;
                        value: _274.MsgInvestmint;
                    };
                };
                fromPartial: {
                    investmint(value: _274.MsgInvestmint): {
                        typeUrl: string;
                        value: _274.MsgInvestmint;
                    };
                };
            };
            AminoConverter: {
                "/cyber.resources.v1beta1.MsgInvestmint": {
                    aminoType: string;
                    toAmino: ({ neuron, amount, resource, length }: _274.MsgInvestmint) => {
                        neuron: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        resource: string;
                        length: string;
                    };
                    fromAmino: ({ neuron, amount, resource, length }: {
                        neuron: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        resource: string;
                        length: string;
                    }) => _274.MsgInvestmint;
                };
            };
            Params: {
                encode(message: _275.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.Params;
                fromJSON(object: any): _275.Params;
                toJSON(message: _275.Params): unknown;
                fromPartial(object: {
                    maxSlots?: number;
                    halvingPeriodVoltBlocks?: number;
                    halvingPeriodAmpereBlocks?: number;
                    baseInvestmintPeriodVolt?: number;
                    baseInvestmintPeriodAmpere?: number;
                    minInvestmintPeriod?: number;
                    baseInvestmintAmountVolt?: {
                        denom?: string;
                        amount?: string;
                    };
                    baseInvestmintAmountAmpere?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _275.Params;
            };
            MsgInvestmint: {
                encode(message: _274.MsgInvestmint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _274.MsgInvestmint;
                fromJSON(object: any): _274.MsgInvestmint;
                toJSON(message: _274.MsgInvestmint): unknown;
                fromPartial(object: {
                    neuron?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    resource?: string;
                    length?: any;
                }): _274.MsgInvestmint;
            };
            MsgInvestmintResponse: {
                encode(_: _274.MsgInvestmintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _274.MsgInvestmintResponse;
                fromJSON(_: any): _274.MsgInvestmintResponse;
                toJSON(_: _274.MsgInvestmintResponse): unknown;
                fromPartial(_: {}): _274.MsgInvestmintResponse;
            };
            QueryParamsRequest: {
                encode(_: _273.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _273.QueryParamsRequest;
                fromJSON(_: any): _273.QueryParamsRequest;
                toJSON(_: _273.QueryParamsRequest): unknown;
                fromPartial(_: {}): _273.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _273.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _273.QueryParamsResponse;
                fromJSON(object: any): _273.QueryParamsResponse;
                toJSON(message: _273.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        maxSlots?: number;
                        halvingPeriodVoltBlocks?: number;
                        halvingPeriodAmpereBlocks?: number;
                        baseInvestmintPeriodVolt?: number;
                        baseInvestmintPeriodAmpere?: number;
                        minInvestmintPeriod?: number;
                        baseInvestmintAmountVolt?: {
                            denom?: string;
                            amount?: string;
                        };
                        baseInvestmintAmountAmpere?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _273.QueryParamsResponse;
            };
            QueryInvestmintRequest: {
                encode(message: _273.QueryInvestmintRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _273.QueryInvestmintRequest;
                fromJSON(object: any): _273.QueryInvestmintRequest;
                toJSON(message: _273.QueryInvestmintRequest): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    resource?: string;
                    length?: any;
                }): _273.QueryInvestmintRequest;
            };
            QueryInvestmintResponse: {
                encode(message: _273.QueryInvestmintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _273.QueryInvestmintResponse;
                fromJSON(object: any): _273.QueryInvestmintResponse;
                toJSON(message: _273.QueryInvestmintResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _273.QueryInvestmintResponse;
            };
            GenesisState: {
                encode(message: _272.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.GenesisState;
                fromJSON(object: any): _272.GenesisState;
                toJSON(message: _272.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        maxSlots?: number;
                        halvingPeriodVoltBlocks?: number;
                        halvingPeriodAmpereBlocks?: number;
                        baseInvestmintPeriodVolt?: number;
                        baseInvestmintPeriodAmpere?: number;
                        minInvestmintPeriod?: number;
                        baseInvestmintAmountVolt?: {
                            denom?: string;
                            amount?: string;
                        };
                        baseInvestmintAmountAmpere?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _272.GenesisState;
            };
        };
    }
}
