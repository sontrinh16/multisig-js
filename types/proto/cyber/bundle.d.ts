import * as _186 from "./bandwidth/v1beta1/genesis";
import * as _187 from "./bandwidth/v1beta1/query";
import * as _188 from "./bandwidth/v1beta1/types";
import * as _189 from "./base/query/v1beta1/pagination";
import * as _190 from "./dmn/v1beta1/genesis";
import * as _191 from "./dmn/v1beta1/query";
import * as _192 from "./dmn/v1beta1/tx";
import * as _193 from "./dmn/v1beta1/types";
import * as _194 from "./graph/v1beta1/query";
import * as _195 from "./graph/v1beta1/tx";
import * as _196 from "./graph/v1beta1/types";
import * as _197 from "./grid/v1beta1/genesis";
import * as _198 from "./grid/v1beta1/query";
import * as _199 from "./grid/v1beta1/tx";
import * as _200 from "./grid/v1beta1/types";
import * as _201 from "./rank/v1beta1/genesis";
import * as _202 from "./rank/v1beta1/query";
import * as _203 from "./rank/v1beta1/types";
import * as _204 from "./resources/v1beta1/genesis";
import * as _205 from "./resources/v1beta1/query";
import * as _206 from "./resources/v1beta1/tx";
import * as _207 from "./resources/v1beta1/types";
export declare namespace cyber {
    namespace bandwidth {
        const v1beta1: {
            Params: {
                encode(message: _188.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.Params;
                fromJSON(object: any): _188.Params;
                toJSON(message: _188.Params): unknown;
                fromPartial(object: {
                    recoveryPeriod?: any;
                    adjustPricePeriod?: any;
                    basePrice?: string;
                    baseLoad?: string;
                    maxBlockBandwidth?: any;
                }): _188.Params;
            };
            NeuronBandwidth: {
                encode(message: _188.NeuronBandwidth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.NeuronBandwidth;
                fromJSON(object: any): _188.NeuronBandwidth;
                toJSON(message: _188.NeuronBandwidth): unknown;
                fromPartial(object: {
                    neuron?: string;
                    remainedValue?: any;
                    lastUpdatedBlock?: any;
                    maxValue?: any;
                }): _188.NeuronBandwidth;
            };
            Price: {
                encode(message: _188.Price, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.Price;
                fromJSON(object: any): _188.Price;
                toJSON(message: _188.Price): unknown;
                fromPartial(object: {
                    price?: string;
                }): _188.Price;
            };
            QueryLoadRequest: {
                encode(_: _187.QueryLoadRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryLoadRequest;
                fromJSON(_: any): _187.QueryLoadRequest;
                toJSON(_: _187.QueryLoadRequest): unknown;
                fromPartial(_: {}): _187.QueryLoadRequest;
            };
            QueryLoadResponse: {
                encode(message: _187.QueryLoadResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryLoadResponse;
                fromJSON(object: any): _187.QueryLoadResponse;
                toJSON(message: _187.QueryLoadResponse): unknown;
                fromPartial(object: {
                    load?: {
                        dec?: string;
                    };
                }): _187.QueryLoadResponse;
            };
            QueryPriceRequest: {
                encode(_: _187.QueryPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryPriceRequest;
                fromJSON(_: any): _187.QueryPriceRequest;
                toJSON(_: _187.QueryPriceRequest): unknown;
                fromPartial(_: {}): _187.QueryPriceRequest;
            };
            QueryPriceResponse: {
                encode(message: _187.QueryPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryPriceResponse;
                fromJSON(object: any): _187.QueryPriceResponse;
                toJSON(message: _187.QueryPriceResponse): unknown;
                fromPartial(object: {
                    price?: {
                        dec?: string;
                    };
                }): _187.QueryPriceResponse;
            };
            QueryTotalBandwidthRequest: {
                encode(_: _187.QueryTotalBandwidthRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryTotalBandwidthRequest;
                fromJSON(_: any): _187.QueryTotalBandwidthRequest;
                toJSON(_: _187.QueryTotalBandwidthRequest): unknown;
                fromPartial(_: {}): _187.QueryTotalBandwidthRequest;
            };
            QueryTotalBandwidthResponse: {
                encode(message: _187.QueryTotalBandwidthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryTotalBandwidthResponse;
                fromJSON(object: any): _187.QueryTotalBandwidthResponse;
                toJSON(message: _187.QueryTotalBandwidthResponse): unknown;
                fromPartial(object: {
                    totalBandwidth?: any;
                }): _187.QueryTotalBandwidthResponse;
            };
            QueryNeuronBandwidthRequest: {
                encode(message: _187.QueryNeuronBandwidthRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryNeuronBandwidthRequest;
                fromJSON(object: any): _187.QueryNeuronBandwidthRequest;
                toJSON(message: _187.QueryNeuronBandwidthRequest): unknown;
                fromPartial(object: {
                    neuron?: string;
                }): _187.QueryNeuronBandwidthRequest;
            };
            QueryNeuronBandwidthResponse: {
                encode(message: _187.QueryNeuronBandwidthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryNeuronBandwidthResponse;
                fromJSON(object: any): _187.QueryNeuronBandwidthResponse;
                toJSON(message: _187.QueryNeuronBandwidthResponse): unknown;
                fromPartial(object: {
                    neuronBandwidth?: {
                        neuron?: string;
                        remainedValue?: any;
                        lastUpdatedBlock?: any;
                        maxValue?: any;
                    };
                }): _187.QueryNeuronBandwidthResponse;
            };
            QueryParamsRequest: {
                encode(_: _187.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryParamsRequest;
                fromJSON(_: any): _187.QueryParamsRequest;
                toJSON(_: _187.QueryParamsRequest): unknown;
                fromPartial(_: {}): _187.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _187.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryParamsResponse;
                fromJSON(object: any): _187.QueryParamsResponse;
                toJSON(message: _187.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        recoveryPeriod?: any;
                        adjustPricePeriod?: any;
                        basePrice?: string;
                        baseLoad?: string;
                        maxBlockBandwidth?: any;
                    };
                }): _187.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _186.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.GenesisState;
                fromJSON(object: any): _186.GenesisState;
                toJSON(message: _186.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        recoveryPeriod?: any;
                        adjustPricePeriod?: any;
                        basePrice?: string;
                        baseLoad?: string;
                        maxBlockBandwidth?: any;
                    };
                }): _186.GenesisState;
            };
        };
    }
    namespace base {
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _189.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.PageRequest;
                    fromJSON(object: any): _189.PageRequest;
                    toJSON(message: _189.PageRequest): unknown;
                    fromPartial(object: {
                        page?: number;
                        perPage?: number;
                    }): _189.PageRequest;
                };
                PageResponse: {
                    encode(message: _189.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.PageResponse;
                    fromJSON(object: any): _189.PageResponse;
                    toJSON(message: _189.PageResponse): unknown;
                    fromPartial(object: {
                        total?: number;
                    }): _189.PageResponse;
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
                    createThought(value: _192.MsgCreateThought): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    forgetThought(value: _192.MsgForgetThought): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeThoughtParticle(value: _192.MsgChangeThoughtParticle): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeThoughtName(value: _192.MsgChangeThoughtName): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeThoughtInput(value: _192.MsgChangeThoughtInput): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeThoughtGasPrice(value: _192.MsgChangeThoughtGasPrice): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeThoughtPeriod(value: _192.MsgChangeThoughtPeriod): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeThoughtBlock(value: _192.MsgChangeThoughtBlock): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createThought(value: _192.MsgCreateThought): {
                        typeUrl: string;
                        value: _192.MsgCreateThought;
                    };
                    forgetThought(value: _192.MsgForgetThought): {
                        typeUrl: string;
                        value: _192.MsgForgetThought;
                    };
                    changeThoughtParticle(value: _192.MsgChangeThoughtParticle): {
                        typeUrl: string;
                        value: _192.MsgChangeThoughtParticle;
                    };
                    changeThoughtName(value: _192.MsgChangeThoughtName): {
                        typeUrl: string;
                        value: _192.MsgChangeThoughtName;
                    };
                    changeThoughtInput(value: _192.MsgChangeThoughtInput): {
                        typeUrl: string;
                        value: _192.MsgChangeThoughtInput;
                    };
                    changeThoughtGasPrice(value: _192.MsgChangeThoughtGasPrice): {
                        typeUrl: string;
                        value: _192.MsgChangeThoughtGasPrice;
                    };
                    changeThoughtPeriod(value: _192.MsgChangeThoughtPeriod): {
                        typeUrl: string;
                        value: _192.MsgChangeThoughtPeriod;
                    };
                    changeThoughtBlock(value: _192.MsgChangeThoughtBlock): {
                        typeUrl: string;
                        value: _192.MsgChangeThoughtBlock;
                    };
                };
                toJSON: {
                    createThought(value: _192.MsgCreateThought): {
                        typeUrl: string;
                        value: unknown;
                    };
                    forgetThought(value: _192.MsgForgetThought): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeThoughtParticle(value: _192.MsgChangeThoughtParticle): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeThoughtName(value: _192.MsgChangeThoughtName): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeThoughtInput(value: _192.MsgChangeThoughtInput): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeThoughtGasPrice(value: _192.MsgChangeThoughtGasPrice): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeThoughtPeriod(value: _192.MsgChangeThoughtPeriod): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeThoughtBlock(value: _192.MsgChangeThoughtBlock): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createThought(value: any): {
                        typeUrl: string;
                        value: _192.MsgCreateThought;
                    };
                    forgetThought(value: any): {
                        typeUrl: string;
                        value: _192.MsgForgetThought;
                    };
                    changeThoughtParticle(value: any): {
                        typeUrl: string;
                        value: _192.MsgChangeThoughtParticle;
                    };
                    changeThoughtName(value: any): {
                        typeUrl: string;
                        value: _192.MsgChangeThoughtName;
                    };
                    changeThoughtInput(value: any): {
                        typeUrl: string;
                        value: _192.MsgChangeThoughtInput;
                    };
                    changeThoughtGasPrice(value: any): {
                        typeUrl: string;
                        value: _192.MsgChangeThoughtGasPrice;
                    };
                    changeThoughtPeriod(value: any): {
                        typeUrl: string;
                        value: _192.MsgChangeThoughtPeriod;
                    };
                    changeThoughtBlock(value: any): {
                        typeUrl: string;
                        value: _192.MsgChangeThoughtBlock;
                    };
                };
                fromPartial: {
                    createThought(value: _192.MsgCreateThought): {
                        typeUrl: string;
                        value: _192.MsgCreateThought;
                    };
                    forgetThought(value: _192.MsgForgetThought): {
                        typeUrl: string;
                        value: _192.MsgForgetThought;
                    };
                    changeThoughtParticle(value: _192.MsgChangeThoughtParticle): {
                        typeUrl: string;
                        value: _192.MsgChangeThoughtParticle;
                    };
                    changeThoughtName(value: _192.MsgChangeThoughtName): {
                        typeUrl: string;
                        value: _192.MsgChangeThoughtName;
                    };
                    changeThoughtInput(value: _192.MsgChangeThoughtInput): {
                        typeUrl: string;
                        value: _192.MsgChangeThoughtInput;
                    };
                    changeThoughtGasPrice(value: _192.MsgChangeThoughtGasPrice): {
                        typeUrl: string;
                        value: _192.MsgChangeThoughtGasPrice;
                    };
                    changeThoughtPeriod(value: _192.MsgChangeThoughtPeriod): {
                        typeUrl: string;
                        value: _192.MsgChangeThoughtPeriod;
                    };
                    changeThoughtBlock(value: _192.MsgChangeThoughtBlock): {
                        typeUrl: string;
                        value: _192.MsgChangeThoughtBlock;
                    };
                };
            };
            AminoConverter: {
                "/cyber.dmn.v1beta1.MsgCreateThought": {
                    aminoType: string;
                    toAmino: ({ program, trigger, load, name, particle }: _192.MsgCreateThought) => {
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
                    }) => _192.MsgCreateThought;
                };
                "/cyber.dmn.v1beta1.MsgForgetThought": {
                    aminoType: string;
                    toAmino: ({ program, name }: _192.MsgForgetThought) => {
                        program: string;
                        name: string;
                    };
                    fromAmino: ({ program, name }: {
                        program: string;
                        name: string;
                    }) => _192.MsgForgetThought;
                };
                "/cyber.dmn.v1beta1.MsgChangeThoughtParticle": {
                    aminoType: string;
                    toAmino: ({ program, name, particle }: _192.MsgChangeThoughtParticle) => {
                        program: string;
                        name: string;
                        particle: string;
                    };
                    fromAmino: ({ program, name, particle }: {
                        program: string;
                        name: string;
                        particle: string;
                    }) => _192.MsgChangeThoughtParticle;
                };
                "/cyber.dmn.v1beta1.MsgChangeThoughtName": {
                    aminoType: string;
                    toAmino: ({ program, name, newName }: _192.MsgChangeThoughtName) => {
                        program: string;
                        name: string;
                        new_name: string;
                    };
                    fromAmino: ({ program, name, new_name }: {
                        program: string;
                        name: string;
                        new_name: string;
                    }) => _192.MsgChangeThoughtName;
                };
                "/cyber.dmn.v1beta1.MsgChangeThoughtInput": {
                    aminoType: string;
                    toAmino: ({ program, name, input }: _192.MsgChangeThoughtInput) => {
                        program: string;
                        name: string;
                        input: string;
                    };
                    fromAmino: ({ program, name, input }: {
                        program: string;
                        name: string;
                        input: string;
                    }) => _192.MsgChangeThoughtInput;
                };
                "/cyber.dmn.v1beta1.MsgChangeThoughtGasPrice": {
                    aminoType: string;
                    toAmino: ({ program, name, gasPrice }: _192.MsgChangeThoughtGasPrice) => {
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
                    }) => _192.MsgChangeThoughtGasPrice;
                };
                "/cyber.dmn.v1beta1.MsgChangeThoughtPeriod": {
                    aminoType: string;
                    toAmino: ({ program, name, period }: _192.MsgChangeThoughtPeriod) => {
                        program: string;
                        name: string;
                        period: string;
                    };
                    fromAmino: ({ program, name, period }: {
                        program: string;
                        name: string;
                        period: string;
                    }) => _192.MsgChangeThoughtPeriod;
                };
                "/cyber.dmn.v1beta1.MsgChangeThoughtBlock": {
                    aminoType: string;
                    toAmino: ({ program, name, block }: _192.MsgChangeThoughtBlock) => {
                        program: string;
                        name: string;
                        block: string;
                    };
                    fromAmino: ({ program, name, block }: {
                        program: string;
                        name: string;
                        block: string;
                    }) => _192.MsgChangeThoughtBlock;
                };
            };
            Params: {
                encode(message: _193.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.Params;
                fromJSON(object: any): _193.Params;
                toJSON(message: _193.Params): unknown;
                fromPartial(object: {
                    maxSlots?: number;
                    maxGas?: number;
                    feeTtl?: number;
                }): _193.Params;
            };
            Thought: {
                encode(message: _193.Thought, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.Thought;
                fromJSON(object: any): _193.Thought;
                toJSON(message: _193.Thought): unknown;
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
                }): _193.Thought;
            };
            Trigger: {
                encode(message: _193.Trigger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.Trigger;
                fromJSON(object: any): _193.Trigger;
                toJSON(message: _193.Trigger): unknown;
                fromPartial(object: {
                    period?: any;
                    block?: any;
                }): _193.Trigger;
            };
            Load: {
                encode(message: _193.Load, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.Load;
                fromJSON(object: any): _193.Load;
                toJSON(message: _193.Load): unknown;
                fromPartial(object: {
                    input?: string;
                    gasPrice?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _193.Load;
            };
            ThoughtStats: {
                encode(message: _193.ThoughtStats, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.ThoughtStats;
                fromJSON(object: any): _193.ThoughtStats;
                toJSON(message: _193.ThoughtStats): unknown;
                fromPartial(object: {
                    program?: string;
                    name?: string;
                    calls?: any;
                    fees?: any;
                    gas?: any;
                    lastBlock?: any;
                }): _193.ThoughtStats;
            };
            MsgCreateThought: {
                encode(message: _192.MsgCreateThought, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.MsgCreateThought;
                fromJSON(object: any): _192.MsgCreateThought;
                toJSON(message: _192.MsgCreateThought): unknown;
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
                }): _192.MsgCreateThought;
            };
            MsgForgetThought: {
                encode(message: _192.MsgForgetThought, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.MsgForgetThought;
                fromJSON(object: any): _192.MsgForgetThought;
                toJSON(message: _192.MsgForgetThought): unknown;
                fromPartial(object: {
                    program?: string;
                    name?: string;
                }): _192.MsgForgetThought;
            };
            MsgChangeThoughtParticle: {
                encode(message: _192.MsgChangeThoughtParticle, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.MsgChangeThoughtParticle;
                fromJSON(object: any): _192.MsgChangeThoughtParticle;
                toJSON(message: _192.MsgChangeThoughtParticle): unknown;
                fromPartial(object: {
                    program?: string;
                    name?: string;
                    particle?: string;
                }): _192.MsgChangeThoughtParticle;
            };
            MsgChangeThoughtName: {
                encode(message: _192.MsgChangeThoughtName, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.MsgChangeThoughtName;
                fromJSON(object: any): _192.MsgChangeThoughtName;
                toJSON(message: _192.MsgChangeThoughtName): unknown;
                fromPartial(object: {
                    program?: string;
                    name?: string;
                    newName?: string;
                }): _192.MsgChangeThoughtName;
            };
            MsgChangeThoughtInput: {
                encode(message: _192.MsgChangeThoughtInput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.MsgChangeThoughtInput;
                fromJSON(object: any): _192.MsgChangeThoughtInput;
                toJSON(message: _192.MsgChangeThoughtInput): unknown;
                fromPartial(object: {
                    program?: string;
                    name?: string;
                    input?: string;
                }): _192.MsgChangeThoughtInput;
            };
            MsgChangeThoughtGasPrice: {
                encode(message: _192.MsgChangeThoughtGasPrice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.MsgChangeThoughtGasPrice;
                fromJSON(object: any): _192.MsgChangeThoughtGasPrice;
                toJSON(message: _192.MsgChangeThoughtGasPrice): unknown;
                fromPartial(object: {
                    program?: string;
                    name?: string;
                    gasPrice?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _192.MsgChangeThoughtGasPrice;
            };
            MsgChangeThoughtPeriod: {
                encode(message: _192.MsgChangeThoughtPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.MsgChangeThoughtPeriod;
                fromJSON(object: any): _192.MsgChangeThoughtPeriod;
                toJSON(message: _192.MsgChangeThoughtPeriod): unknown;
                fromPartial(object: {
                    program?: string;
                    name?: string;
                    period?: any;
                }): _192.MsgChangeThoughtPeriod;
            };
            MsgChangeThoughtBlock: {
                encode(message: _192.MsgChangeThoughtBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.MsgChangeThoughtBlock;
                fromJSON(object: any): _192.MsgChangeThoughtBlock;
                toJSON(message: _192.MsgChangeThoughtBlock): unknown;
                fromPartial(object: {
                    program?: string;
                    name?: string;
                    block?: any;
                }): _192.MsgChangeThoughtBlock;
            };
            MsgCreateThoughtResponse: {
                encode(_: _192.MsgCreateThoughtResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.MsgCreateThoughtResponse;
                fromJSON(_: any): _192.MsgCreateThoughtResponse;
                toJSON(_: _192.MsgCreateThoughtResponse): unknown;
                fromPartial(_: {}): _192.MsgCreateThoughtResponse;
            };
            MsgForgetThoughtResponse: {
                encode(_: _192.MsgForgetThoughtResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.MsgForgetThoughtResponse;
                fromJSON(_: any): _192.MsgForgetThoughtResponse;
                toJSON(_: _192.MsgForgetThoughtResponse): unknown;
                fromPartial(_: {}): _192.MsgForgetThoughtResponse;
            };
            MsgChangeThoughtParticleResponse: {
                encode(_: _192.MsgChangeThoughtParticleResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.MsgChangeThoughtParticleResponse;
                fromJSON(_: any): _192.MsgChangeThoughtParticleResponse;
                toJSON(_: _192.MsgChangeThoughtParticleResponse): unknown;
                fromPartial(_: {}): _192.MsgChangeThoughtParticleResponse;
            };
            MsgChangeThoughtNameResponse: {
                encode(_: _192.MsgChangeThoughtNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.MsgChangeThoughtNameResponse;
                fromJSON(_: any): _192.MsgChangeThoughtNameResponse;
                toJSON(_: _192.MsgChangeThoughtNameResponse): unknown;
                fromPartial(_: {}): _192.MsgChangeThoughtNameResponse;
            };
            MsgChangeThoughtInputResponse: {
                encode(_: _192.MsgChangeThoughtInputResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.MsgChangeThoughtInputResponse;
                fromJSON(_: any): _192.MsgChangeThoughtInputResponse;
                toJSON(_: _192.MsgChangeThoughtInputResponse): unknown;
                fromPartial(_: {}): _192.MsgChangeThoughtInputResponse;
            };
            MsgChangeThoughtGasPriceResponse: {
                encode(_: _192.MsgChangeThoughtGasPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.MsgChangeThoughtGasPriceResponse;
                fromJSON(_: any): _192.MsgChangeThoughtGasPriceResponse;
                toJSON(_: _192.MsgChangeThoughtGasPriceResponse): unknown;
                fromPartial(_: {}): _192.MsgChangeThoughtGasPriceResponse;
            };
            MsgChangeThoughtPeriodResponse: {
                encode(_: _192.MsgChangeThoughtPeriodResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.MsgChangeThoughtPeriodResponse;
                fromJSON(_: any): _192.MsgChangeThoughtPeriodResponse;
                toJSON(_: _192.MsgChangeThoughtPeriodResponse): unknown;
                fromPartial(_: {}): _192.MsgChangeThoughtPeriodResponse;
            };
            MsgChangeThoughtBlockResponse: {
                encode(_: _192.MsgChangeThoughtBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.MsgChangeThoughtBlockResponse;
                fromJSON(_: any): _192.MsgChangeThoughtBlockResponse;
                toJSON(_: _192.MsgChangeThoughtBlockResponse): unknown;
                fromPartial(_: {}): _192.MsgChangeThoughtBlockResponse;
            };
            QueryParamsRequest: {
                encode(_: _191.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.QueryParamsRequest;
                fromJSON(_: any): _191.QueryParamsRequest;
                toJSON(_: _191.QueryParamsRequest): unknown;
                fromPartial(_: {}): _191.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _191.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.QueryParamsResponse;
                fromJSON(object: any): _191.QueryParamsResponse;
                toJSON(message: _191.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        maxSlots?: number;
                        maxGas?: number;
                        feeTtl?: number;
                    };
                }): _191.QueryParamsResponse;
            };
            QueryThoughtParamsRequest: {
                encode(message: _191.QueryThoughtParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.QueryThoughtParamsRequest;
                fromJSON(object: any): _191.QueryThoughtParamsRequest;
                toJSON(message: _191.QueryThoughtParamsRequest): unknown;
                fromPartial(object: {
                    program?: string;
                    name?: string;
                }): _191.QueryThoughtParamsRequest;
            };
            QueryThoughtResponse: {
                encode(message: _191.QueryThoughtResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.QueryThoughtResponse;
                fromJSON(object: any): _191.QueryThoughtResponse;
                toJSON(message: _191.QueryThoughtResponse): unknown;
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
                }): _191.QueryThoughtResponse;
            };
            QueryThoughtStatsResponse: {
                encode(message: _191.QueryThoughtStatsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.QueryThoughtStatsResponse;
                fromJSON(object: any): _191.QueryThoughtStatsResponse;
                toJSON(message: _191.QueryThoughtStatsResponse): unknown;
                fromPartial(object: {
                    thoughtStats?: {
                        program?: string;
                        name?: string;
                        calls?: any;
                        fees?: any;
                        gas?: any;
                        lastBlock?: any;
                    };
                }): _191.QueryThoughtStatsResponse;
            };
            QueryThoughtsRequest: {
                encode(_: _191.QueryThoughtsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.QueryThoughtsRequest;
                fromJSON(_: any): _191.QueryThoughtsRequest;
                toJSON(_: _191.QueryThoughtsRequest): unknown;
                fromPartial(_: {}): _191.QueryThoughtsRequest;
            };
            QueryThoughtsResponse: {
                encode(message: _191.QueryThoughtsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.QueryThoughtsResponse;
                fromJSON(object: any): _191.QueryThoughtsResponse;
                toJSON(message: _191.QueryThoughtsResponse): unknown;
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
                }): _191.QueryThoughtsResponse;
            };
            QueryThoughtsStatsRequest: {
                encode(_: _191.QueryThoughtsStatsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.QueryThoughtsStatsRequest;
                fromJSON(_: any): _191.QueryThoughtsStatsRequest;
                toJSON(_: _191.QueryThoughtsStatsRequest): unknown;
                fromPartial(_: {}): _191.QueryThoughtsStatsRequest;
            };
            QueryThoughtsStatsResponse: {
                encode(message: _191.QueryThoughtsStatsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.QueryThoughtsStatsResponse;
                fromJSON(object: any): _191.QueryThoughtsStatsResponse;
                toJSON(message: _191.QueryThoughtsStatsResponse): unknown;
                fromPartial(object: {
                    thoughtsStats?: {
                        program?: string;
                        name?: string;
                        calls?: any;
                        fees?: any;
                        gas?: any;
                        lastBlock?: any;
                    }[];
                }): _191.QueryThoughtsStatsResponse;
            };
            GenesisState: {
                encode(message: _190.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.GenesisState;
                fromJSON(object: any): _190.GenesisState;
                toJSON(message: _190.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        maxSlots?: number;
                        maxGas?: number;
                        feeTtl?: number;
                    };
                }): _190.GenesisState;
            };
        };
    }
    namespace graph {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    cyberlink(value: _195.MsgCyberlink): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    cyberlink(value: _195.MsgCyberlink): {
                        typeUrl: string;
                        value: _195.MsgCyberlink;
                    };
                };
                toJSON: {
                    cyberlink(value: _195.MsgCyberlink): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    cyberlink(value: any): {
                        typeUrl: string;
                        value: _195.MsgCyberlink;
                    };
                };
                fromPartial: {
                    cyberlink(value: _195.MsgCyberlink): {
                        typeUrl: string;
                        value: _195.MsgCyberlink;
                    };
                };
            };
            AminoConverter: {
                "/cyber.graph.v1beta1.MsgCyberlink": {
                    aminoType: string;
                    toAmino: ({ neuron, links }: _195.MsgCyberlink) => {
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
                    }) => _195.MsgCyberlink;
                };
            };
            Link: {
                encode(message: _196.Link, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.Link;
                fromJSON(object: any): _196.Link;
                toJSON(message: _196.Link): unknown;
                fromPartial(object: {
                    from?: string;
                    to?: string;
                }): _196.Link;
            };
            MsgCyberlink: {
                encode(message: _195.MsgCyberlink, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.MsgCyberlink;
                fromJSON(object: any): _195.MsgCyberlink;
                toJSON(message: _195.MsgCyberlink): unknown;
                fromPartial(object: {
                    neuron?: string;
                    links?: {
                        from?: string;
                        to?: string;
                    }[];
                }): _195.MsgCyberlink;
            };
            MsgCyberlinkResponse: {
                encode(_: _195.MsgCyberlinkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.MsgCyberlinkResponse;
                fromJSON(_: any): _195.MsgCyberlinkResponse;
                toJSON(_: _195.MsgCyberlinkResponse): unknown;
                fromPartial(_: {}): _195.MsgCyberlinkResponse;
            };
            QueryGraphStatsRequest: {
                encode(_: _194.QueryGraphStatsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryGraphStatsRequest;
                fromJSON(_: any): _194.QueryGraphStatsRequest;
                toJSON(_: _194.QueryGraphStatsRequest): unknown;
                fromPartial(_: {}): _194.QueryGraphStatsRequest;
            };
            QueryGraphStatsResponse: {
                encode(message: _194.QueryGraphStatsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryGraphStatsResponse;
                fromJSON(object: any): _194.QueryGraphStatsResponse;
                toJSON(message: _194.QueryGraphStatsResponse): unknown;
                fromPartial(object: {
                    cyberlinks?: any;
                    particles?: any;
                }): _194.QueryGraphStatsResponse;
            };
        };
    }
    namespace grid {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createRoute(value: _199.MsgCreateRoute): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editRoute(value: _199.MsgEditRoute): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteRoute(value: _199.MsgDeleteRoute): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editRouteName(value: _199.MsgEditRouteName): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createRoute(value: _199.MsgCreateRoute): {
                        typeUrl: string;
                        value: _199.MsgCreateRoute;
                    };
                    editRoute(value: _199.MsgEditRoute): {
                        typeUrl: string;
                        value: _199.MsgEditRoute;
                    };
                    deleteRoute(value: _199.MsgDeleteRoute): {
                        typeUrl: string;
                        value: _199.MsgDeleteRoute;
                    };
                    editRouteName(value: _199.MsgEditRouteName): {
                        typeUrl: string;
                        value: _199.MsgEditRouteName;
                    };
                };
                toJSON: {
                    createRoute(value: _199.MsgCreateRoute): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editRoute(value: _199.MsgEditRoute): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteRoute(value: _199.MsgDeleteRoute): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editRouteName(value: _199.MsgEditRouteName): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createRoute(value: any): {
                        typeUrl: string;
                        value: _199.MsgCreateRoute;
                    };
                    editRoute(value: any): {
                        typeUrl: string;
                        value: _199.MsgEditRoute;
                    };
                    deleteRoute(value: any): {
                        typeUrl: string;
                        value: _199.MsgDeleteRoute;
                    };
                    editRouteName(value: any): {
                        typeUrl: string;
                        value: _199.MsgEditRouteName;
                    };
                };
                fromPartial: {
                    createRoute(value: _199.MsgCreateRoute): {
                        typeUrl: string;
                        value: _199.MsgCreateRoute;
                    };
                    editRoute(value: _199.MsgEditRoute): {
                        typeUrl: string;
                        value: _199.MsgEditRoute;
                    };
                    deleteRoute(value: _199.MsgDeleteRoute): {
                        typeUrl: string;
                        value: _199.MsgDeleteRoute;
                    };
                    editRouteName(value: _199.MsgEditRouteName): {
                        typeUrl: string;
                        value: _199.MsgEditRouteName;
                    };
                };
            };
            AminoConverter: {
                "/cyber.grid.v1beta1.MsgCreateRoute": {
                    aminoType: string;
                    toAmino: ({ source, destination, name }: _199.MsgCreateRoute) => {
                        source: string;
                        destination: string;
                        name: string;
                    };
                    fromAmino: ({ source, destination, name }: {
                        source: string;
                        destination: string;
                        name: string;
                    }) => _199.MsgCreateRoute;
                };
                "/cyber.grid.v1beta1.MsgEditRoute": {
                    aminoType: string;
                    toAmino: ({ source, destination, value }: _199.MsgEditRoute) => {
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
                    }) => _199.MsgEditRoute;
                };
                "/cyber.grid.v1beta1.MsgDeleteRoute": {
                    aminoType: string;
                    toAmino: ({ source, destination }: _199.MsgDeleteRoute) => {
                        source: string;
                        destination: string;
                    };
                    fromAmino: ({ source, destination }: {
                        source: string;
                        destination: string;
                    }) => _199.MsgDeleteRoute;
                };
                "/cyber.grid.v1beta1.MsgEditRouteName": {
                    aminoType: string;
                    toAmino: ({ source, destination, name }: _199.MsgEditRouteName) => {
                        source: string;
                        destination: string;
                        name: string;
                    };
                    fromAmino: ({ source, destination, name }: {
                        source: string;
                        destination: string;
                        name: string;
                    }) => _199.MsgEditRouteName;
                };
            };
            Params: {
                encode(message: _200.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.Params;
                fromJSON(object: any): _200.Params;
                toJSON(message: _200.Params): unknown;
                fromPartial(object: {
                    maxRoutes?: number;
                }): _200.Params;
            };
            Route: {
                encode(message: _200.Route, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.Route;
                fromJSON(object: any): _200.Route;
                toJSON(message: _200.Route): unknown;
                fromPartial(object: {
                    source?: string;
                    destination?: string;
                    name?: string;
                    value?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _200.Route;
            };
            Value: {
                encode(message: _200.Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.Value;
                fromJSON(object: any): _200.Value;
                toJSON(message: _200.Value): unknown;
                fromPartial(object: {
                    value?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _200.Value;
            };
            MsgCreateRoute: {
                encode(message: _199.MsgCreateRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgCreateRoute;
                fromJSON(object: any): _199.MsgCreateRoute;
                toJSON(message: _199.MsgCreateRoute): unknown;
                fromPartial(object: {
                    source?: string;
                    destination?: string;
                    name?: string;
                }): _199.MsgCreateRoute;
            };
            MsgEditRoute: {
                encode(message: _199.MsgEditRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgEditRoute;
                fromJSON(object: any): _199.MsgEditRoute;
                toJSON(message: _199.MsgEditRoute): unknown;
                fromPartial(object: {
                    source?: string;
                    destination?: string;
                    value?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _199.MsgEditRoute;
            };
            MsgDeleteRoute: {
                encode(message: _199.MsgDeleteRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgDeleteRoute;
                fromJSON(object: any): _199.MsgDeleteRoute;
                toJSON(message: _199.MsgDeleteRoute): unknown;
                fromPartial(object: {
                    source?: string;
                    destination?: string;
                }): _199.MsgDeleteRoute;
            };
            MsgEditRouteName: {
                encode(message: _199.MsgEditRouteName, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgEditRouteName;
                fromJSON(object: any): _199.MsgEditRouteName;
                toJSON(message: _199.MsgEditRouteName): unknown;
                fromPartial(object: {
                    source?: string;
                    destination?: string;
                    name?: string;
                }): _199.MsgEditRouteName;
            };
            MsgCreateRouteResponse: {
                encode(_: _199.MsgCreateRouteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgCreateRouteResponse;
                fromJSON(_: any): _199.MsgCreateRouteResponse;
                toJSON(_: _199.MsgCreateRouteResponse): unknown;
                fromPartial(_: {}): _199.MsgCreateRouteResponse;
            };
            MsgEditRouteResponse: {
                encode(_: _199.MsgEditRouteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgEditRouteResponse;
                fromJSON(_: any): _199.MsgEditRouteResponse;
                toJSON(_: _199.MsgEditRouteResponse): unknown;
                fromPartial(_: {}): _199.MsgEditRouteResponse;
            };
            MsgDeleteRouteResponse: {
                encode(_: _199.MsgDeleteRouteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgDeleteRouteResponse;
                fromJSON(_: any): _199.MsgDeleteRouteResponse;
                toJSON(_: _199.MsgDeleteRouteResponse): unknown;
                fromPartial(_: {}): _199.MsgDeleteRouteResponse;
            };
            MsgEditRouteNameResponse: {
                encode(_: _199.MsgEditRouteNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgEditRouteNameResponse;
                fromJSON(_: any): _199.MsgEditRouteNameResponse;
                toJSON(_: _199.MsgEditRouteNameResponse): unknown;
                fromPartial(_: {}): _199.MsgEditRouteNameResponse;
            };
            QueryParamsRequest: {
                encode(_: _198.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryParamsRequest;
                fromJSON(_: any): _198.QueryParamsRequest;
                toJSON(_: _198.QueryParamsRequest): unknown;
                fromPartial(_: {}): _198.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _198.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryParamsResponse;
                fromJSON(object: any): _198.QueryParamsResponse;
                toJSON(message: _198.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        maxRoutes?: number;
                    };
                }): _198.QueryParamsResponse;
            };
            QuerySourceRequest: {
                encode(message: _198.QuerySourceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QuerySourceRequest;
                fromJSON(object: any): _198.QuerySourceRequest;
                toJSON(message: _198.QuerySourceRequest): unknown;
                fromPartial(object: {
                    source?: string;
                }): _198.QuerySourceRequest;
            };
            QueryDestinationRequest: {
                encode(message: _198.QueryDestinationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryDestinationRequest;
                fromJSON(object: any): _198.QueryDestinationRequest;
                toJSON(message: _198.QueryDestinationRequest): unknown;
                fromPartial(object: {
                    destination?: string;
                }): _198.QueryDestinationRequest;
            };
            QueryRoutedEnergyResponse: {
                encode(message: _198.QueryRoutedEnergyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryRoutedEnergyResponse;
                fromJSON(object: any): _198.QueryRoutedEnergyResponse;
                toJSON(message: _198.QueryRoutedEnergyResponse): unknown;
                fromPartial(object: {
                    value?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _198.QueryRoutedEnergyResponse;
            };
            QueryRouteRequest: {
                encode(message: _198.QueryRouteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryRouteRequest;
                fromJSON(object: any): _198.QueryRouteRequest;
                toJSON(message: _198.QueryRouteRequest): unknown;
                fromPartial(object: {
                    source?: string;
                    destination?: string;
                }): _198.QueryRouteRequest;
            };
            QueryRouteResponse: {
                encode(message: _198.QueryRouteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryRouteResponse;
                fromJSON(object: any): _198.QueryRouteResponse;
                toJSON(message: _198.QueryRouteResponse): unknown;
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
                }): _198.QueryRouteResponse;
            };
            QueryRoutesRequest: {
                encode(message: _198.QueryRoutesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryRoutesRequest;
                fromJSON(object: any): _198.QueryRoutesRequest;
                toJSON(message: _198.QueryRoutesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _198.QueryRoutesRequest;
            };
            QueryRoutesResponse: {
                encode(message: _198.QueryRoutesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryRoutesResponse;
                fromJSON(object: any): _198.QueryRoutesResponse;
                toJSON(message: _198.QueryRoutesResponse): unknown;
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
                }): _198.QueryRoutesResponse;
            };
            GenesisState: {
                encode(message: _197.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.GenesisState;
                fromJSON(object: any): _197.GenesisState;
                toJSON(message: _197.GenesisState): unknown;
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
                }): _197.GenesisState;
            };
        };
    }
    namespace rank {
        const v1beta1: {
            Params: {
                encode(message: _203.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.Params;
                fromJSON(object: any): _203.Params;
                toJSON(message: _203.Params): unknown;
                fromPartial(object: {
                    calculationPeriod?: any;
                    dampingFactor?: string;
                    tolerance?: string;
                }): _203.Params;
            };
            RankedParticle: {
                encode(message: _203.RankedParticle, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.RankedParticle;
                fromJSON(object: any): _203.RankedParticle;
                toJSON(message: _203.RankedParticle): unknown;
                fromPartial(object: {
                    particle?: string;
                    rank?: any;
                }): _203.RankedParticle;
            };
            QueryParamsRequest: {
                encode(_: _202.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryParamsRequest;
                fromJSON(_: any): _202.QueryParamsRequest;
                toJSON(_: _202.QueryParamsRequest): unknown;
                fromPartial(_: {}): _202.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _202.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryParamsResponse;
                fromJSON(object: any): _202.QueryParamsResponse;
                toJSON(message: _202.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        calculationPeriod?: any;
                        dampingFactor?: string;
                        tolerance?: string;
                    };
                }): _202.QueryParamsResponse;
            };
            QueryRankRequest: {
                encode(message: _202.QueryRankRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryRankRequest;
                fromJSON(object: any): _202.QueryRankRequest;
                toJSON(message: _202.QueryRankRequest): unknown;
                fromPartial(object: {
                    particle?: string;
                }): _202.QueryRankRequest;
            };
            QueryRankResponse: {
                encode(message: _202.QueryRankResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryRankResponse;
                fromJSON(object: any): _202.QueryRankResponse;
                toJSON(message: _202.QueryRankResponse): unknown;
                fromPartial(object: {
                    rank?: any;
                }): _202.QueryRankResponse;
            };
            QuerySearchRequest: {
                encode(message: _202.QuerySearchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QuerySearchRequest;
                fromJSON(object: any): _202.QuerySearchRequest;
                toJSON(message: _202.QuerySearchRequest): unknown;
                fromPartial(object: {
                    particle?: string;
                    pagination?: {
                        page?: number;
                        perPage?: number;
                    };
                }): _202.QuerySearchRequest;
            };
            QuerySearchResponse: {
                encode(message: _202.QuerySearchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QuerySearchResponse;
                fromJSON(object: any): _202.QuerySearchResponse;
                toJSON(message: _202.QuerySearchResponse): unknown;
                fromPartial(object: {
                    result?: {
                        particle?: string;
                        rank?: any;
                    }[];
                    pagination?: {
                        total?: number;
                    };
                }): _202.QuerySearchResponse;
            };
            QueryTopRequest: {
                encode(_: _202.QueryTopRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryTopRequest;
                fromJSON(_: any): _202.QueryTopRequest;
                toJSON(_: _202.QueryTopRequest): unknown;
                fromPartial(_: {}): _202.QueryTopRequest;
            };
            QueryIsLinkExistRequest: {
                encode(message: _202.QueryIsLinkExistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryIsLinkExistRequest;
                fromJSON(object: any): _202.QueryIsLinkExistRequest;
                toJSON(message: _202.QueryIsLinkExistRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    to?: string;
                    address?: string;
                }): _202.QueryIsLinkExistRequest;
            };
            QueryIsAnyLinkExistRequest: {
                encode(message: _202.QueryIsAnyLinkExistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryIsAnyLinkExistRequest;
                fromJSON(object: any): _202.QueryIsAnyLinkExistRequest;
                toJSON(message: _202.QueryIsAnyLinkExistRequest): unknown;
                fromPartial(object: {
                    from?: string;
                    to?: string;
                }): _202.QueryIsAnyLinkExistRequest;
            };
            QueryLinkExistResponse: {
                encode(message: _202.QueryLinkExistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryLinkExistResponse;
                fromJSON(object: any): _202.QueryLinkExistResponse;
                toJSON(message: _202.QueryLinkExistResponse): unknown;
                fromPartial(object: {
                    exist?: boolean;
                }): _202.QueryLinkExistResponse;
            };
            QueryNegentropyPartilceRequest: {
                encode(message: _202.QueryNegentropyPartilceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryNegentropyPartilceRequest;
                fromJSON(object: any): _202.QueryNegentropyPartilceRequest;
                toJSON(message: _202.QueryNegentropyPartilceRequest): unknown;
                fromPartial(object: {
                    particle?: string;
                }): _202.QueryNegentropyPartilceRequest;
            };
            QueryNegentropyParticleResponse: {
                encode(message: _202.QueryNegentropyParticleResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryNegentropyParticleResponse;
                fromJSON(object: any): _202.QueryNegentropyParticleResponse;
                toJSON(message: _202.QueryNegentropyParticleResponse): unknown;
                fromPartial(object: {
                    entropy?: any;
                }): _202.QueryNegentropyParticleResponse;
            };
            QueryNegentropyRequest: {
                encode(_: _202.QueryNegentropyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryNegentropyRequest;
                fromJSON(_: any): _202.QueryNegentropyRequest;
                toJSON(_: _202.QueryNegentropyRequest): unknown;
                fromPartial(_: {}): _202.QueryNegentropyRequest;
            };
            QueryNegentropyResponse: {
                encode(message: _202.QueryNegentropyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryNegentropyResponse;
                fromJSON(object: any): _202.QueryNegentropyResponse;
                toJSON(message: _202.QueryNegentropyResponse): unknown;
                fromPartial(object: {
                    negentropy?: any;
                }): _202.QueryNegentropyResponse;
            };
            QueryKarmaRequest: {
                encode(message: _202.QueryKarmaRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryKarmaRequest;
                fromJSON(object: any): _202.QueryKarmaRequest;
                toJSON(message: _202.QueryKarmaRequest): unknown;
                fromPartial(object: {
                    neuron?: string;
                }): _202.QueryKarmaRequest;
            };
            QueryKarmaResponse: {
                encode(message: _202.QueryKarmaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryKarmaResponse;
                fromJSON(object: any): _202.QueryKarmaResponse;
                toJSON(message: _202.QueryKarmaResponse): unknown;
                fromPartial(object: {
                    karma?: any;
                }): _202.QueryKarmaResponse;
            };
            GenesisState: {
                encode(message: _201.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.GenesisState;
                fromJSON(object: any): _201.GenesisState;
                toJSON(message: _201.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        calculationPeriod?: any;
                        dampingFactor?: string;
                        tolerance?: string;
                    };
                }): _201.GenesisState;
            };
        };
    }
    namespace resources {
        const v1beta1: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    investmint(value: _206.MsgInvestmint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    investmint(value: _206.MsgInvestmint): {
                        typeUrl: string;
                        value: _206.MsgInvestmint;
                    };
                };
                toJSON: {
                    investmint(value: _206.MsgInvestmint): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    investmint(value: any): {
                        typeUrl: string;
                        value: _206.MsgInvestmint;
                    };
                };
                fromPartial: {
                    investmint(value: _206.MsgInvestmint): {
                        typeUrl: string;
                        value: _206.MsgInvestmint;
                    };
                };
            };
            AminoConverter: {
                "/cyber.resources.v1beta1.MsgInvestmint": {
                    aminoType: string;
                    toAmino: ({ neuron, amount, resource, length }: _206.MsgInvestmint) => {
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
                    }) => _206.MsgInvestmint;
                };
            };
            Params: {
                encode(message: _207.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.Params;
                fromJSON(object: any): _207.Params;
                toJSON(message: _207.Params): unknown;
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
                }): _207.Params;
            };
            MsgInvestmint: {
                encode(message: _206.MsgInvestmint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.MsgInvestmint;
                fromJSON(object: any): _206.MsgInvestmint;
                toJSON(message: _206.MsgInvestmint): unknown;
                fromPartial(object: {
                    neuron?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    resource?: string;
                    length?: any;
                }): _206.MsgInvestmint;
            };
            MsgInvestmintResponse: {
                encode(_: _206.MsgInvestmintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.MsgInvestmintResponse;
                fromJSON(_: any): _206.MsgInvestmintResponse;
                toJSON(_: _206.MsgInvestmintResponse): unknown;
                fromPartial(_: {}): _206.MsgInvestmintResponse;
            };
            QueryParamsRequest: {
                encode(_: _205.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.QueryParamsRequest;
                fromJSON(_: any): _205.QueryParamsRequest;
                toJSON(_: _205.QueryParamsRequest): unknown;
                fromPartial(_: {}): _205.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _205.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.QueryParamsResponse;
                fromJSON(object: any): _205.QueryParamsResponse;
                toJSON(message: _205.QueryParamsResponse): unknown;
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
                }): _205.QueryParamsResponse;
            };
            QueryInvestmintRequest: {
                encode(message: _205.QueryInvestmintRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.QueryInvestmintRequest;
                fromJSON(object: any): _205.QueryInvestmintRequest;
                toJSON(message: _205.QueryInvestmintRequest): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    resource?: string;
                    length?: any;
                }): _205.QueryInvestmintRequest;
            };
            QueryInvestmintResponse: {
                encode(message: _205.QueryInvestmintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.QueryInvestmintResponse;
                fromJSON(object: any): _205.QueryInvestmintResponse;
                toJSON(message: _205.QueryInvestmintResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _205.QueryInvestmintResponse;
            };
            GenesisState: {
                encode(message: _204.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.GenesisState;
                fromJSON(object: any): _204.GenesisState;
                toJSON(message: _204.GenesisState): unknown;
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
                }): _204.GenesisState;
            };
        };
    }
}
