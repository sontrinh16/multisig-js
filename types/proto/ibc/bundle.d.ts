import * as _339 from "./applications/transfer/v1/genesis";
import * as _340 from "./applications/transfer/v1/query";
import * as _341 from "./applications/transfer/v1/transfer";
import * as _342 from "./applications/transfer/v1/tx";
import * as _343 from "./applications/transfer/v2/packet";
import * as _344 from "./core/channel/v1/channel";
import * as _345 from "./core/channel/v1/genesis";
import * as _346 from "./core/channel/v1/query";
import * as _347 from "./core/channel/v1/tx";
import * as _348 from "./core/client/v1/client";
import * as _349 from "./core/client/v1/genesis";
import * as _350 from "./core/client/v1/query";
import * as _351 from "./core/client/v1/tx";
import * as _352 from "./core/commitment/v1/commitment";
import * as _353 from "./core/connection/v1/connection";
import * as _354 from "./core/connection/v1/genesis";
import * as _355 from "./core/connection/v1/query";
import * as _356 from "./core/connection/v1/tx";
import * as _357 from "./core/port/v1/query";
import * as _358 from "./core/types/v1/genesis";
import * as _359 from "./lightclients/localhost/v1/localhost";
import * as _360 from "./lightclients/solomachine/v1/solomachine";
import * as _361 from "./lightclients/solomachine/v2/solomachine";
import * as _362 from "./lightclients/tendermint/v1/tendermint";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _342.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _342.MsgTransfer): {
                            typeUrl: string;
                            value: _342.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _342.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _342.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _342.MsgTransfer): {
                            typeUrl: string;
                            value: _342.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _342.MsgTransfer) => {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("@osmonauts/helpers").AminoHeight;
                            timeout_timestamp: string;
                        };
                        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp }: {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("@osmonauts/helpers").AminoHeight;
                            timeout_timestamp: string;
                        }) => _342.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _342.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _342.MsgTransfer;
                    fromJSON(object: any): _342.MsgTransfer;
                    toJSON(message: _342.MsgTransfer): unknown;
                    fromPartial(object: {
                        sourcePort?: string;
                        sourceChannel?: string;
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        sender?: string;
                        receiver?: string;
                        timeoutHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        timeoutTimestamp?: any;
                    }): _342.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _342.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _342.MsgTransferResponse;
                    fromJSON(_: any): _342.MsgTransferResponse;
                    toJSON(_: _342.MsgTransferResponse): unknown;
                    fromPartial(_: {}): _342.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _341.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _341.DenomTrace;
                    fromJSON(object: any): _341.DenomTrace;
                    toJSON(message: _341.DenomTrace): unknown;
                    fromPartial(object: {
                        path?: string;
                        baseDenom?: string;
                    }): _341.DenomTrace;
                };
                Params: {
                    encode(message: _341.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _341.Params;
                    fromJSON(object: any): _341.Params;
                    toJSON(message: _341.Params): unknown;
                    fromPartial(object: {
                        sendEnabled?: boolean;
                        receiveEnabled?: boolean;
                    }): _341.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _340.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _340.QueryDenomTraceRequest;
                    fromJSON(object: any): _340.QueryDenomTraceRequest;
                    toJSON(message: _340.QueryDenomTraceRequest): unknown;
                    fromPartial(object: {
                        hash?: string;
                    }): _340.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _340.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _340.QueryDenomTraceResponse;
                    fromJSON(object: any): _340.QueryDenomTraceResponse;
                    toJSON(message: _340.QueryDenomTraceResponse): unknown;
                    fromPartial(object: {
                        denomTrace?: {
                            path?: string;
                            baseDenom?: string;
                        };
                    }): _340.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _340.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _340.QueryDenomTracesRequest;
                    fromJSON(object: any): _340.QueryDenomTracesRequest;
                    toJSON(message: _340.QueryDenomTracesRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _340.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _340.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _340.QueryDenomTracesResponse;
                    fromJSON(object: any): _340.QueryDenomTracesResponse;
                    toJSON(message: _340.QueryDenomTracesResponse): unknown;
                    fromPartial(object: {
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _340.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _340.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _340.QueryParamsRequest;
                    fromJSON(_: any): _340.QueryParamsRequest;
                    toJSON(_: _340.QueryParamsRequest): unknown;
                    fromPartial(_: {}): _340.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _340.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _340.QueryParamsResponse;
                    fromJSON(object: any): _340.QueryParamsResponse;
                    toJSON(message: _340.QueryParamsResponse): unknown;
                    fromPartial(object: {
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    }): _340.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _339.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _339.GenesisState;
                    fromJSON(object: any): _339.GenesisState;
                    toJSON(message: _339.GenesisState): unknown;
                    fromPartial(object: {
                        portId?: string;
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    }): _339.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _343.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _343.FungibleTokenPacketData;
                    fromJSON(object: any): _343.FungibleTokenPacketData;
                    toJSON(message: _343.FungibleTokenPacketData): unknown;
                    fromPartial(object: {
                        denom?: string;
                        amount?: string;
                        sender?: string;
                        receiver?: string;
                    }): _343.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _347.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _347.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _347.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _347.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _347.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _347.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _347.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _347.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _347.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _347.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _347.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _347.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _347.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _347.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _347.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _347.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _347.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _347.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _347.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _347.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _347.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _347.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _347.MsgRecvPacket): {
                            typeUrl: string;
                            value: _347.MsgRecvPacket;
                        };
                        timeout(value: _347.MsgTimeout): {
                            typeUrl: string;
                            value: _347.MsgTimeout;
                        };
                        timeoutOnClose(value: _347.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _347.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _347.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _347.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _347.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _347.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _347.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _347.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _347.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _347.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _347.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _347.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _347.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _347.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _347.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _347.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _347.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _347.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _347.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _347.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _347.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _347.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _347.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _347.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _347.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _347.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _347.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _347.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _347.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _347.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _347.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _347.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _347.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _347.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _347.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _347.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _347.MsgRecvPacket): {
                            typeUrl: string;
                            value: _347.MsgRecvPacket;
                        };
                        timeout(value: _347.MsgTimeout): {
                            typeUrl: string;
                            value: _347.MsgTimeout;
                        };
                        timeoutOnClose(value: _347.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _347.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _347.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _347.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _347.MsgChannelOpenInit) => {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel, signer }: {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        }) => _347.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _347.MsgChannelOpenTry) => {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer }: {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _347.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _347.MsgChannelOpenAck) => {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _347.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _347.MsgChannelOpenConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _347.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _347.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _347.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _347.MsgChannelCloseConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _347.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _347.MsgRecvPacket) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_commitment, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _347.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _347.MsgTimeout) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _347.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _347.MsgTimeoutOnClose) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _347.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _347.MsgAcknowledgement) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _347.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _347.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.MsgChannelOpenInit;
                    fromJSON(object: any): _347.MsgChannelOpenInit;
                    toJSON(message: _347.MsgChannelOpenInit): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channel?: {
                            state?: _344.State;
                            ordering?: _344.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        signer?: string;
                    }): _347.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _347.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _347.MsgChannelOpenInitResponse;
                    toJSON(_: _347.MsgChannelOpenInitResponse): unknown;
                    fromPartial(_: {}): _347.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _347.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.MsgChannelOpenTry;
                    fromJSON(object: any): _347.MsgChannelOpenTry;
                    toJSON(message: _347.MsgChannelOpenTry): unknown;
                    fromPartial(object: {
                        portId?: string;
                        previousChannelId?: string;
                        channel?: {
                            state?: _344.State;
                            ordering?: _344.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        counterpartyVersion?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _347.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _347.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _347.MsgChannelOpenTryResponse;
                    toJSON(_: _347.MsgChannelOpenTryResponse): unknown;
                    fromPartial(_: {}): _347.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _347.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.MsgChannelOpenAck;
                    fromJSON(object: any): _347.MsgChannelOpenAck;
                    toJSON(message: _347.MsgChannelOpenAck): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        counterpartyChannelId?: string;
                        counterpartyVersion?: string;
                        proofTry?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _347.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _347.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _347.MsgChannelOpenAckResponse;
                    toJSON(_: _347.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: {}): _347.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _347.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.MsgChannelOpenConfirm;
                    fromJSON(object: any): _347.MsgChannelOpenConfirm;
                    toJSON(message: _347.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _347.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _347.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _347.MsgChannelOpenConfirmResponse;
                    toJSON(_: _347.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: {}): _347.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _347.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.MsgChannelCloseInit;
                    fromJSON(object: any): _347.MsgChannelCloseInit;
                    toJSON(message: _347.MsgChannelCloseInit): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        signer?: string;
                    }): _347.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _347.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _347.MsgChannelCloseInitResponse;
                    toJSON(_: _347.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: {}): _347.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _347.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.MsgChannelCloseConfirm;
                    fromJSON(object: any): _347.MsgChannelCloseConfirm;
                    toJSON(message: _347.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _347.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _347.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _347.MsgChannelCloseConfirmResponse;
                    toJSON(_: _347.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: {}): _347.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _347.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.MsgRecvPacket;
                    fromJSON(object: any): _347.MsgRecvPacket;
                    toJSON(message: _347.MsgRecvPacket): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        };
                        proofCommitment?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _347.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _347.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.MsgRecvPacketResponse;
                    fromJSON(_: any): _347.MsgRecvPacketResponse;
                    toJSON(_: _347.MsgRecvPacketResponse): unknown;
                    fromPartial(_: {}): _347.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _347.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.MsgTimeout;
                    fromJSON(object: any): _347.MsgTimeout;
                    toJSON(message: _347.MsgTimeout): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        };
                        proofUnreceived?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        nextSequenceRecv?: any;
                        signer?: string;
                    }): _347.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _347.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.MsgTimeoutResponse;
                    fromJSON(_: any): _347.MsgTimeoutResponse;
                    toJSON(_: _347.MsgTimeoutResponse): unknown;
                    fromPartial(_: {}): _347.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _347.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.MsgTimeoutOnClose;
                    fromJSON(object: any): _347.MsgTimeoutOnClose;
                    toJSON(message: _347.MsgTimeoutOnClose): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        };
                        proofUnreceived?: Uint8Array;
                        proofClose?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        nextSequenceRecv?: any;
                        signer?: string;
                    }): _347.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _347.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _347.MsgTimeoutOnCloseResponse;
                    toJSON(_: _347.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(_: {}): _347.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _347.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.MsgAcknowledgement;
                    fromJSON(object: any): _347.MsgAcknowledgement;
                    toJSON(message: _347.MsgAcknowledgement): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        };
                        acknowledgement?: Uint8Array;
                        proofAcked?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _347.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _347.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _347.MsgAcknowledgementResponse;
                    fromJSON(_: any): _347.MsgAcknowledgementResponse;
                    toJSON(_: _347.MsgAcknowledgementResponse): unknown;
                    fromPartial(_: {}): _347.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _346.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryChannelRequest;
                    fromJSON(object: any): _346.QueryChannelRequest;
                    toJSON(message: _346.QueryChannelRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _346.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _346.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryChannelResponse;
                    fromJSON(object: any): _346.QueryChannelResponse;
                    toJSON(message: _346.QueryChannelResponse): unknown;
                    fromPartial(object: {
                        channel?: {
                            state?: _344.State;
                            ordering?: _344.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _346.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _346.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryChannelsRequest;
                    fromJSON(object: any): _346.QueryChannelsRequest;
                    toJSON(message: _346.QueryChannelsRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _346.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _346.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryChannelsResponse;
                    fromJSON(object: any): _346.QueryChannelsResponse;
                    toJSON(message: _346.QueryChannelsResponse): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _344.State;
                            ordering?: _344.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _346.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _346.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _346.QueryConnectionChannelsRequest;
                    toJSON(message: _346.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: {
                        connection?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _346.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _346.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _346.QueryConnectionChannelsResponse;
                    toJSON(message: _346.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _344.State;
                            ordering?: _344.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _346.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _346.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryChannelClientStateRequest;
                    fromJSON(object: any): _346.QueryChannelClientStateRequest;
                    toJSON(message: _346.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _346.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _346.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryChannelClientStateResponse;
                    fromJSON(object: any): _346.QueryChannelClientStateResponse;
                    toJSON(message: _346.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _346.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _346.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _346.QueryChannelConsensusStateRequest;
                    toJSON(message: _346.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                    }): _346.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _346.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _346.QueryChannelConsensusStateResponse;
                    toJSON(message: _346.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _346.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _346.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _346.QueryPacketCommitmentRequest;
                    toJSON(message: _346.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    }): _346.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _346.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _346.QueryPacketCommitmentResponse;
                    toJSON(message: _346.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: {
                        commitment?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _346.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _346.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _346.QueryPacketCommitmentsRequest;
                    toJSON(message: _346.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _346.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _346.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _346.QueryPacketCommitmentsResponse;
                    toJSON(message: _346.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: {
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _346.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _346.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryPacketReceiptRequest;
                    fromJSON(object: any): _346.QueryPacketReceiptRequest;
                    toJSON(message: _346.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    }): _346.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _346.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryPacketReceiptResponse;
                    fromJSON(object: any): _346.QueryPacketReceiptResponse;
                    toJSON(message: _346.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: {
                        received?: boolean;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _346.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _346.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _346.QueryPacketAcknowledgementRequest;
                    toJSON(message: _346.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    }): _346.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _346.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _346.QueryPacketAcknowledgementResponse;
                    toJSON(message: _346.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: {
                        acknowledgement?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _346.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _346.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _346.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _346.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                        packetCommitmentSequences?: any[];
                    }): _346.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _346.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _346.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _346.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: {
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _346.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _346.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _346.QueryUnreceivedPacketsRequest;
                    toJSON(message: _346.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetCommitmentSequences?: any[];
                    }): _346.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _346.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _346.QueryUnreceivedPacketsResponse;
                    toJSON(message: _346.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: {
                        sequences?: any[];
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _346.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _346.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _346.QueryUnreceivedAcksRequest;
                    toJSON(message: _346.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetAckSequences?: any[];
                    }): _346.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _346.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _346.QueryUnreceivedAcksResponse;
                    toJSON(message: _346.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: {
                        sequences?: any[];
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _346.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _346.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _346.QueryNextSequenceReceiveRequest;
                    toJSON(message: _346.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _346.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _346.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _346.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _346.QueryNextSequenceReceiveResponse;
                    toJSON(message: _346.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: {
                        nextSequenceReceive?: any;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _346.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _345.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _345.GenesisState;
                    fromJSON(object: any): _345.GenesisState;
                    toJSON(message: _345.GenesisState): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _344.State;
                            ordering?: _344.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        receipts?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        sendSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[];
                        recvSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[];
                        ackSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[];
                        nextChannelSequence?: any;
                    }): _345.GenesisState;
                };
                PacketSequence: {
                    encode(message: _345.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _345.PacketSequence;
                    fromJSON(object: any): _345.PacketSequence;
                    toJSON(message: _345.PacketSequence): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    }): _345.PacketSequence;
                };
                stateFromJSON(object: any): _344.State;
                stateToJSON(object: _344.State): string;
                orderFromJSON(object: any): _344.Order;
                orderToJSON(object: _344.Order): string;
                State: typeof _344.State;
                Order: typeof _344.Order;
                Channel: {
                    encode(message: _344.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _344.Channel;
                    fromJSON(object: any): _344.Channel;
                    toJSON(message: _344.Channel): unknown;
                    fromPartial(object: {
                        state?: _344.State;
                        ordering?: _344.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                    }): _344.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _344.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _344.IdentifiedChannel;
                    fromJSON(object: any): _344.IdentifiedChannel;
                    toJSON(message: _344.IdentifiedChannel): unknown;
                    fromPartial(object: {
                        state?: _344.State;
                        ordering?: _344.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                        portId?: string;
                        channelId?: string;
                    }): _344.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _344.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _344.Counterparty;
                    fromJSON(object: any): _344.Counterparty;
                    toJSON(message: _344.Counterparty): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _344.Counterparty;
                };
                Packet: {
                    encode(message: _344.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _344.Packet;
                    fromJSON(object: any): _344.Packet;
                    toJSON(message: _344.Packet): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        sourcePort?: string;
                        sourceChannel?: string;
                        destinationPort?: string;
                        destinationChannel?: string;
                        data?: Uint8Array;
                        timeoutHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        timeoutTimestamp?: any;
                    }): _344.Packet;
                };
                PacketState: {
                    encode(message: _344.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _344.PacketState;
                    fromJSON(object: any): _344.PacketState;
                    toJSON(message: _344.PacketState): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                        data?: Uint8Array;
                    }): _344.PacketState;
                };
                Acknowledgement: {
                    encode(message: _344.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _344.Acknowledgement;
                    fromJSON(object: any): _344.Acknowledgement;
                    toJSON(message: _344.Acknowledgement): unknown;
                    fromPartial(object: {
                        result?: Uint8Array;
                        error?: string;
                    }): _344.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _351.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _351.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _351.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _351.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _351.MsgCreateClient): {
                            typeUrl: string;
                            value: _351.MsgCreateClient;
                        };
                        updateClient(value: _351.MsgUpdateClient): {
                            typeUrl: string;
                            value: _351.MsgUpdateClient;
                        };
                        upgradeClient(value: _351.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _351.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _351.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _351.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _351.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _351.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _351.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _351.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _351.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _351.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _351.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _351.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _351.MsgCreateClient): {
                            typeUrl: string;
                            value: _351.MsgCreateClient;
                        };
                        updateClient(value: _351.MsgUpdateClient): {
                            typeUrl: string;
                            value: _351.MsgUpdateClient;
                        };
                        upgradeClient(value: _351.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _351.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _351.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _351.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _351.MsgCreateClient) => {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_state, consensus_state, signer }: {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _351.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _351.MsgUpdateClient) => {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, header, signer }: {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _351.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _351.MsgUpgradeClient) => {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        };
                        fromAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer }: {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        }) => _351.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _351.MsgSubmitMisbehaviour) => {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, misbehaviour, signer }: {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _351.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _351.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.MsgCreateClient;
                    fromJSON(object: any): _351.MsgCreateClient;
                    toJSON(message: _351.MsgCreateClient): unknown;
                    fromPartial(object: {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _351.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _351.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.MsgCreateClientResponse;
                    fromJSON(_: any): _351.MsgCreateClientResponse;
                    toJSON(_: _351.MsgCreateClientResponse): unknown;
                    fromPartial(_: {}): _351.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _351.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.MsgUpdateClient;
                    fromJSON(object: any): _351.MsgUpdateClient;
                    toJSON(message: _351.MsgUpdateClient): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        header?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _351.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _351.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.MsgUpdateClientResponse;
                    fromJSON(_: any): _351.MsgUpdateClientResponse;
                    toJSON(_: _351.MsgUpdateClientResponse): unknown;
                    fromPartial(_: {}): _351.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _351.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.MsgUpgradeClient;
                    fromJSON(object: any): _351.MsgUpgradeClient;
                    toJSON(message: _351.MsgUpgradeClient): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofUpgradeClient?: Uint8Array;
                        proofUpgradeConsensusState?: Uint8Array;
                        signer?: string;
                    }): _351.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _351.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.MsgUpgradeClientResponse;
                    fromJSON(_: any): _351.MsgUpgradeClientResponse;
                    toJSON(_: _351.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: {}): _351.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _351.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _351.MsgSubmitMisbehaviour;
                    toJSON(message: _351.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        misbehaviour?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _351.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _351.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _351.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _351.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _351.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: {}): _351.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _350.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryClientStateRequest;
                    fromJSON(object: any): _350.QueryClientStateRequest;
                    toJSON(message: _350.QueryClientStateRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                    }): _350.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _350.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryClientStateResponse;
                    fromJSON(object: any): _350.QueryClientStateResponse;
                    toJSON(message: _350.QueryClientStateResponse): unknown;
                    fromPartial(object: {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _350.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _350.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryClientStatesRequest;
                    fromJSON(object: any): _350.QueryClientStatesRequest;
                    toJSON(message: _350.QueryClientStatesRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _350.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _350.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryClientStatesResponse;
                    fromJSON(object: any): _350.QueryClientStatesResponse;
                    toJSON(message: _350.QueryClientStatesResponse): unknown;
                    fromPartial(object: {
                        clientStates?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _350.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _350.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryConsensusStateRequest;
                    fromJSON(object: any): _350.QueryConsensusStateRequest;
                    toJSON(message: _350.QueryConsensusStateRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                        latestHeight?: boolean;
                    }): _350.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _350.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryConsensusStateResponse;
                    fromJSON(object: any): _350.QueryConsensusStateResponse;
                    toJSON(message: _350.QueryConsensusStateResponse): unknown;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _350.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _350.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryConsensusStatesRequest;
                    fromJSON(object: any): _350.QueryConsensusStatesRequest;
                    toJSON(message: _350.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _350.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _350.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryConsensusStatesResponse;
                    fromJSON(object: any): _350.QueryConsensusStatesResponse;
                    toJSON(message: _350.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: {
                        consensusStates?: {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _350.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _350.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryClientStatusRequest;
                    fromJSON(object: any): _350.QueryClientStatusRequest;
                    toJSON(message: _350.QueryClientStatusRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                    }): _350.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _350.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryClientStatusResponse;
                    fromJSON(object: any): _350.QueryClientStatusResponse;
                    toJSON(message: _350.QueryClientStatusResponse): unknown;
                    fromPartial(object: {
                        status?: string;
                    }): _350.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _350.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryClientParamsRequest;
                    fromJSON(_: any): _350.QueryClientParamsRequest;
                    toJSON(_: _350.QueryClientParamsRequest): unknown;
                    fromPartial(_: {}): _350.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _350.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryClientParamsResponse;
                    fromJSON(object: any): _350.QueryClientParamsResponse;
                    toJSON(message: _350.QueryClientParamsResponse): unknown;
                    fromPartial(object: {
                        params?: {
                            allowedClients?: string[];
                        };
                    }): _350.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _350.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _350.QueryUpgradedClientStateRequest;
                    toJSON(_: _350.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: {}): _350.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _350.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _350.QueryUpgradedClientStateResponse;
                    toJSON(message: _350.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: {
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _350.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _350.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _350.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _350.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: {}): _350.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _350.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _350.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _350.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _350.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: {
                        upgradedConsensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _350.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _349.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _349.GenesisState;
                    fromJSON(object: any): _349.GenesisState;
                    toJSON(message: _349.GenesisState): unknown;
                    fromPartial(object: {
                        clients?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        clientsConsensus?: {
                            clientId?: string;
                            consensusStates?: {
                                height?: {
                                    revisionNumber?: any;
                                    revisionHeight?: any;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                        }[];
                        clientsMetadata?: {
                            clientId?: string;
                            clientMetadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        }[];
                        params?: {
                            allowedClients?: string[];
                        };
                        createLocalhost?: boolean;
                        nextClientSequence?: any;
                    }): _349.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _349.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _349.GenesisMetadata;
                    fromJSON(object: any): _349.GenesisMetadata;
                    toJSON(message: _349.GenesisMetadata): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _349.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _349.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _349.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _349.IdentifiedGenesisMetadata;
                    toJSON(message: _349.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        clientMetadata?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _349.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _348.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _348.IdentifiedClientState;
                    fromJSON(object: any): _348.IdentifiedClientState;
                    toJSON(message: _348.IdentifiedClientState): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _348.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _348.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _348.ConsensusStateWithHeight;
                    fromJSON(object: any): _348.ConsensusStateWithHeight;
                    toJSON(message: _348.ConsensusStateWithHeight): unknown;
                    fromPartial(object: {
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _348.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _348.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _348.ClientConsensusStates;
                    fromJSON(object: any): _348.ClientConsensusStates;
                    toJSON(message: _348.ClientConsensusStates): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        consensusStates?: {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }): _348.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _348.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _348.ClientUpdateProposal;
                    fromJSON(object: any): _348.ClientUpdateProposal;
                    toJSON(message: _348.ClientUpdateProposal): unknown;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        subjectClientId?: string;
                        substituteClientId?: string;
                    }): _348.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _348.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _348.UpgradeProposal;
                    fromJSON(object: any): _348.UpgradeProposal;
                    toJSON(message: _348.UpgradeProposal): unknown;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        plan?: {
                            name?: string;
                            time?: Date;
                            height?: any;
                            info?: string;
                            upgradedClientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _348.UpgradeProposal;
                };
                Height: {
                    encode(message: _348.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _348.Height;
                    fromJSON(object: any): _348.Height;
                    toJSON(message: _348.Height): unknown;
                    fromPartial(object: {
                        revisionNumber?: any;
                        revisionHeight?: any;
                    }): _348.Height;
                };
                Params: {
                    encode(message: _348.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _348.Params;
                    fromJSON(object: any): _348.Params;
                    toJSON(message: _348.Params): unknown;
                    fromPartial(object: {
                        allowedClients?: string[];
                    }): _348.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _352.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _352.MerkleRoot;
                    fromJSON(object: any): _352.MerkleRoot;
                    toJSON(message: _352.MerkleRoot): unknown;
                    fromPartial(object: {
                        hash?: Uint8Array;
                    }): _352.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _352.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _352.MerklePrefix;
                    fromJSON(object: any): _352.MerklePrefix;
                    toJSON(message: _352.MerklePrefix): unknown;
                    fromPartial(object: {
                        keyPrefix?: Uint8Array;
                    }): _352.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _352.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _352.MerklePath;
                    fromJSON(object: any): _352.MerklePath;
                    toJSON(message: _352.MerklePath): unknown;
                    fromPartial(object: {
                        keyPath?: string[];
                    }): _352.MerklePath;
                };
                MerkleProof: {
                    encode(message: _352.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _352.MerkleProof;
                    fromJSON(object: any): _352.MerkleProof;
                    toJSON(message: _352.MerkleProof): unknown;
                    fromPartial(object: {
                        proofs?: {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            };
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            };
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookupInners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        }[];
                    }): _352.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _356.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _356.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _356.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _356.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _356.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _356.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _356.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _356.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _356.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _356.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _356.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _356.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _356.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _356.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _356.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _356.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _356.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _356.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _356.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _356.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _356.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _356.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _356.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _356.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _356.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _356.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _356.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _356.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _356.MsgConnectionOpenInit) => {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        };
                        fromAmino: ({ client_id, counterparty, version, delay_period, signer }: {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        }) => _356.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _356.MsgConnectionOpenTry) => {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ client_id, previous_connection_id, client_state, counterparty, delay_period, counterparty_versions, proof_height, proof_init, proof_client, proof_consensus, consensus_height, signer }: {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _356.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _356.MsgConnectionOpenAck) => {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, counterparty_connection_id, version, client_state, proof_height, proof_try, proof_client, proof_consensus, consensus_height, signer }: {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _356.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _356.MsgConnectionOpenConfirm) => {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, proof_ack, proof_height, signer }: {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _356.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _356.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _356.MsgConnectionOpenInit;
                    fromJSON(object: any): _356.MsgConnectionOpenInit;
                    toJSON(message: _356.MsgConnectionOpenInit): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        delayPeriod?: any;
                        signer?: string;
                    }): _356.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _356.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _356.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _356.MsgConnectionOpenInitResponse;
                    toJSON(_: _356.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: {}): _356.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _356.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _356.MsgConnectionOpenTry;
                    fromJSON(object: any): _356.MsgConnectionOpenTry;
                    toJSON(message: _356.MsgConnectionOpenTry): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        previousConnectionId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: any;
                        counterpartyVersions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        proofInit?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _356.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _356.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _356.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _356.MsgConnectionOpenTryResponse;
                    toJSON(_: _356.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: {}): _356.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _356.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _356.MsgConnectionOpenAck;
                    fromJSON(object: any): _356.MsgConnectionOpenAck;
                    toJSON(message: _356.MsgConnectionOpenAck): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                        counterpartyConnectionId?: string;
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        proofTry?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _356.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _356.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _356.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _356.MsgConnectionOpenAckResponse;
                    toJSON(_: _356.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: {}): _356.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _356.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _356.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _356.MsgConnectionOpenConfirm;
                    toJSON(message: _356.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    }): _356.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _356.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _356.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _356.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _356.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: {}): _356.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _355.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _355.QueryConnectionRequest;
                    fromJSON(object: any): _355.QueryConnectionRequest;
                    toJSON(message: _355.QueryConnectionRequest): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                    }): _355.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _355.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _355.QueryConnectionResponse;
                    fromJSON(object: any): _355.QueryConnectionResponse;
                    toJSON(message: _355.QueryConnectionResponse): unknown;
                    fromPartial(object: {
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _353.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _355.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _355.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _355.QueryConnectionsRequest;
                    fromJSON(object: any): _355.QueryConnectionsRequest;
                    toJSON(message: _355.QueryConnectionsRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _355.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _355.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _355.QueryConnectionsResponse;
                    fromJSON(object: any): _355.QueryConnectionsResponse;
                    toJSON(message: _355.QueryConnectionsResponse): unknown;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _353.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _355.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _355.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _355.QueryClientConnectionsRequest;
                    fromJSON(object: any): _355.QueryClientConnectionsRequest;
                    toJSON(message: _355.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                    }): _355.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _355.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _355.QueryClientConnectionsResponse;
                    fromJSON(object: any): _355.QueryClientConnectionsResponse;
                    toJSON(message: _355.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: {
                        connectionPaths?: string[];
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _355.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _355.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _355.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _355.QueryConnectionClientStateRequest;
                    toJSON(message: _355.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                    }): _355.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _355.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _355.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _355.QueryConnectionClientStateResponse;
                    toJSON(message: _355.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _355.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _355.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _355.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _355.QueryConnectionConsensusStateRequest;
                    toJSON(message: _355.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                    }): _355.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _355.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _355.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _355.QueryConnectionConsensusStateResponse;
                    toJSON(message: _355.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _355.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _354.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _354.GenesisState;
                    fromJSON(object: any): _354.GenesisState;
                    toJSON(message: _354.GenesisState): unknown;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _353.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        }[];
                        clientConnectionPaths?: {
                            clientId?: string;
                            paths?: string[];
                        }[];
                        nextConnectionSequence?: any;
                        params?: {
                            maxExpectedTimePerBlock?: any;
                        };
                    }): _354.GenesisState;
                };
                stateFromJSON(object: any): _353.State;
                stateToJSON(object: _353.State): string;
                State: typeof _353.State;
                ConnectionEnd: {
                    encode(message: _353.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _353.ConnectionEnd;
                    fromJSON(object: any): _353.ConnectionEnd;
                    toJSON(message: _353.ConnectionEnd): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _353.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: any;
                    }): _353.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _353.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _353.IdentifiedConnection;
                    fromJSON(object: any): _353.IdentifiedConnection;
                    toJSON(message: _353.IdentifiedConnection): unknown;
                    fromPartial(object: {
                        id?: string;
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _353.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: any;
                    }): _353.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _353.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _353.Counterparty;
                    fromJSON(object: any): _353.Counterparty;
                    toJSON(message: _353.Counterparty): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        connectionId?: string;
                        prefix?: {
                            keyPrefix?: Uint8Array;
                        };
                    }): _353.Counterparty;
                };
                ClientPaths: {
                    encode(message: _353.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _353.ClientPaths;
                    fromJSON(object: any): _353.ClientPaths;
                    toJSON(message: _353.ClientPaths): unknown;
                    fromPartial(object: {
                        paths?: string[];
                    }): _353.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _353.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _353.ConnectionPaths;
                    fromJSON(object: any): _353.ConnectionPaths;
                    toJSON(message: _353.ConnectionPaths): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        paths?: string[];
                    }): _353.ConnectionPaths;
                };
                Version: {
                    encode(message: _353.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _353.Version;
                    fromJSON(object: any): _353.Version;
                    toJSON(message: _353.Version): unknown;
                    fromPartial(object: {
                        identifier?: string;
                        features?: string[];
                    }): _353.Version;
                };
                Params: {
                    encode(message: _353.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _353.Params;
                    fromJSON(object: any): _353.Params;
                    toJSON(message: _353.Params): unknown;
                    fromPartial(object: {
                        maxExpectedTimePerBlock?: any;
                    }): _353.Params;
                };
            };
        }
        namespace port {
            const v1: {
                QueryAppVersionRequest: {
                    encode(message: _357.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _357.QueryAppVersionRequest;
                    fromJSON(object: any): _357.QueryAppVersionRequest;
                    toJSON(message: _357.QueryAppVersionRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        connectionId?: string;
                        ordering?: _344.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        proposedVersion?: string;
                    }): _357.QueryAppVersionRequest;
                };
                QueryAppVersionResponse: {
                    encode(message: _357.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _357.QueryAppVersionResponse;
                    fromJSON(object: any): _357.QueryAppVersionResponse;
                    toJSON(message: _357.QueryAppVersionResponse): unknown;
                    fromPartial(object: {
                        portId?: string;
                        version?: string;
                    }): _357.QueryAppVersionResponse;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _358.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _358.GenesisState;
                    fromJSON(object: any): _358.GenesisState;
                    toJSON(message: _358.GenesisState): unknown;
                    fromPartial(object: {
                        clientGenesis?: {
                            clients?: {
                                clientId?: string;
                                clientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                            clientsConsensus?: {
                                clientId?: string;
                                consensusStates?: {
                                    height?: {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[];
                            }[];
                            clientsMetadata?: {
                                clientId?: string;
                                clientMetadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[];
                            }[];
                            params?: {
                                allowedClients?: string[];
                            };
                            createLocalhost?: boolean;
                            nextClientSequence?: any;
                        };
                        connectionGenesis?: {
                            connections?: {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _353.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: any;
                            }[];
                            clientConnectionPaths?: {
                                clientId?: string;
                                paths?: string[];
                            }[];
                            nextConnectionSequence?: any;
                            params?: {
                                maxExpectedTimePerBlock?: any;
                            };
                        };
                        channelGenesis?: {
                            channels?: {
                                state?: _344.State;
                                ordering?: _344.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                };
                                connectionHops?: string[];
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            }[];
                            acknowledgements?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            commitments?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            receipts?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            sendSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            recvSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            ackSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            nextChannelSequence?: any;
                        };
                    }): _358.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _359.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _359.ClientState;
                    fromJSON(object: any): _359.ClientState;
                    toJSON(message: _359.ClientState): unknown;
                    fromPartial(object: {
                        chainId?: string;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    }): _359.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _360.DataType;
                dataTypeToJSON(object: _360.DataType): string;
                DataType: typeof _360.DataType;
                ClientState: {
                    encode(message: _360.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.ClientState;
                    fromJSON(object: any): _360.ClientState;
                    toJSON(message: _360.ClientState): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        frozenSequence?: any;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: any;
                        };
                        allowUpdateAfterProposal?: boolean;
                    }): _360.ClientState;
                };
                ConsensusState: {
                    encode(message: _360.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.ConsensusState;
                    fromJSON(object: any): _360.ConsensusState;
                    toJSON(message: _360.ConsensusState): unknown;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: any;
                    }): _360.ConsensusState;
                };
                Header: {
                    encode(message: _360.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.Header;
                    fromJSON(object: any): _360.Header;
                    toJSON(message: _360.Header): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _360.Header;
                };
                Misbehaviour: {
                    encode(message: _360.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.Misbehaviour;
                    fromJSON(object: any): _360.Misbehaviour;
                    toJSON(message: _360.Misbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: any;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _360.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _360.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                    }): _360.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _360.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.SignatureAndData;
                    fromJSON(object: any): _360.SignatureAndData;
                    toJSON(message: _360.SignatureAndData): unknown;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _360.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    }): _360.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _360.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.TimestampedSignatureData;
                    fromJSON(object: any): _360.TimestampedSignatureData;
                    toJSON(message: _360.TimestampedSignatureData): unknown;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: any;
                    }): _360.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _360.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.SignBytes;
                    fromJSON(object: any): _360.SignBytes;
                    toJSON(message: _360.SignBytes): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        dataType?: _360.DataType;
                        data?: Uint8Array;
                    }): _360.SignBytes;
                };
                HeaderData: {
                    encode(message: _360.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.HeaderData;
                    fromJSON(object: any): _360.HeaderData;
                    toJSON(message: _360.HeaderData): unknown;
                    fromPartial(object: {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _360.HeaderData;
                };
                ClientStateData: {
                    encode(message: _360.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.ClientStateData;
                    fromJSON(object: any): _360.ClientStateData;
                    toJSON(message: _360.ClientStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _360.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _360.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.ConsensusStateData;
                    fromJSON(object: any): _360.ConsensusStateData;
                    toJSON(message: _360.ConsensusStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _360.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _360.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.ConnectionStateData;
                    fromJSON(object: any): _360.ConnectionStateData;
                    toJSON(message: _360.ConnectionStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _353.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        };
                    }): _360.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _360.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.ChannelStateData;
                    fromJSON(object: any): _360.ChannelStateData;
                    toJSON(message: _360.ChannelStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _344.State;
                            ordering?: _344.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _360.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _360.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.PacketCommitmentData;
                    fromJSON(object: any): _360.PacketCommitmentData;
                    toJSON(message: _360.PacketCommitmentData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _360.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _360.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.PacketAcknowledgementData;
                    fromJSON(object: any): _360.PacketAcknowledgementData;
                    toJSON(message: _360.PacketAcknowledgementData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _360.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _360.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.PacketReceiptAbsenceData;
                    fromJSON(object: any): _360.PacketReceiptAbsenceData;
                    toJSON(message: _360.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _360.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _360.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _360.NextSequenceRecvData;
                    fromJSON(object: any): _360.NextSequenceRecvData;
                    toJSON(message: _360.NextSequenceRecvData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: any;
                    }): _360.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _361.DataType;
                dataTypeToJSON(object: _361.DataType): string;
                DataType: typeof _361.DataType;
                ClientState: {
                    encode(message: _361.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _361.ClientState;
                    fromJSON(object: any): _361.ClientState;
                    toJSON(message: _361.ClientState): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        isFrozen?: boolean;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: any;
                        };
                        allowUpdateAfterProposal?: boolean;
                    }): _361.ClientState;
                };
                ConsensusState: {
                    encode(message: _361.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _361.ConsensusState;
                    fromJSON(object: any): _361.ConsensusState;
                    toJSON(message: _361.ConsensusState): unknown;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: any;
                    }): _361.ConsensusState;
                };
                Header: {
                    encode(message: _361.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _361.Header;
                    fromJSON(object: any): _361.Header;
                    toJSON(message: _361.Header): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _361.Header;
                };
                Misbehaviour: {
                    encode(message: _361.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _361.Misbehaviour;
                    fromJSON(object: any): _361.Misbehaviour;
                    toJSON(message: _361.Misbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: any;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _361.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _361.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                    }): _361.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _361.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _361.SignatureAndData;
                    fromJSON(object: any): _361.SignatureAndData;
                    toJSON(message: _361.SignatureAndData): unknown;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _361.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    }): _361.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _361.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _361.TimestampedSignatureData;
                    fromJSON(object: any): _361.TimestampedSignatureData;
                    toJSON(message: _361.TimestampedSignatureData): unknown;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: any;
                    }): _361.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _361.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _361.SignBytes;
                    fromJSON(object: any): _361.SignBytes;
                    toJSON(message: _361.SignBytes): unknown;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        dataType?: _361.DataType;
                        data?: Uint8Array;
                    }): _361.SignBytes;
                };
                HeaderData: {
                    encode(message: _361.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _361.HeaderData;
                    fromJSON(object: any): _361.HeaderData;
                    toJSON(message: _361.HeaderData): unknown;
                    fromPartial(object: {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _361.HeaderData;
                };
                ClientStateData: {
                    encode(message: _361.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _361.ClientStateData;
                    fromJSON(object: any): _361.ClientStateData;
                    toJSON(message: _361.ClientStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _361.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _361.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _361.ConsensusStateData;
                    fromJSON(object: any): _361.ConsensusStateData;
                    toJSON(message: _361.ConsensusStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _361.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _361.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _361.ConnectionStateData;
                    fromJSON(object: any): _361.ConnectionStateData;
                    toJSON(message: _361.ConnectionStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _353.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        };
                    }): _361.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _361.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _361.ChannelStateData;
                    fromJSON(object: any): _361.ChannelStateData;
                    toJSON(message: _361.ChannelStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _344.State;
                            ordering?: _344.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _361.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _361.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _361.PacketCommitmentData;
                    fromJSON(object: any): _361.PacketCommitmentData;
                    toJSON(message: _361.PacketCommitmentData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _361.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _361.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _361.PacketAcknowledgementData;
                    fromJSON(object: any): _361.PacketAcknowledgementData;
                    toJSON(message: _361.PacketAcknowledgementData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _361.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _361.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _361.PacketReceiptAbsenceData;
                    fromJSON(object: any): _361.PacketReceiptAbsenceData;
                    toJSON(message: _361.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _361.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _361.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _361.NextSequenceRecvData;
                    fromJSON(object: any): _361.NextSequenceRecvData;
                    toJSON(message: _361.NextSequenceRecvData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: any;
                    }): _361.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _362.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _362.ClientState;
                    fromJSON(object: any): _362.ClientState;
                    toJSON(message: _362.ClientState): unknown;
                    fromPartial(object: {
                        chainId?: string;
                        trustLevel?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        trustingPeriod?: string;
                        unbondingPeriod?: string;
                        maxClockDrift?: string;
                        frozenHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        latestHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        proofSpecs?: {
                            leafSpec?: {
                                hash?: import("../confio/proofs").HashOp;
                                prehashKey?: import("../confio/proofs").HashOp;
                                prehashValue?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            innerSpec?: {
                                childOrder?: number[];
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            };
                            maxDepth?: number;
                            minDepth?: number;
                        }[];
                        upgradePath?: string[];
                        allowUpdateAfterExpiry?: boolean;
                        allowUpdateAfterMisbehaviour?: boolean;
                    }): _362.ClientState;
                };
                ConsensusState: {
                    encode(message: _362.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _362.ConsensusState;
                    fromJSON(object: any): _362.ConsensusState;
                    toJSON(message: _362.ConsensusState): unknown;
                    fromPartial(object: {
                        timestamp?: Date;
                        root?: {
                            hash?: Uint8Array;
                        };
                        nextValidatorsHash?: Uint8Array;
                    }): _362.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _362.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _362.Misbehaviour;
                    fromJSON(object: any): _362.Misbehaviour;
                    toJSON(message: _362.Misbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        header_1?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                            trustedHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                        header_2?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                            trustedHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                    }): _362.Misbehaviour;
                };
                Header: {
                    encode(message: _362.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _362.Header;
                    fromJSON(object: any): _362.Header;
                    toJSON(message: _362.Header): unknown;
                    fromPartial(object: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            };
                            totalVotingPower?: any;
                        };
                        trustedHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        trustedValidators?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            };
                            totalVotingPower?: any;
                        };
                    }): _362.Header;
                };
                Fraction: {
                    encode(message: _362.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _362.Fraction;
                    fromJSON(object: any): _362.Fraction;
                    toJSON(message: _362.Fraction): unknown;
                    fromPartial(object: {
                        numerator?: any;
                        denominator?: any;
                    }): _362.Fraction;
                };
            };
        }
    }
}
