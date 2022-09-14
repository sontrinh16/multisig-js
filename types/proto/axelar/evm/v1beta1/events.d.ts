import { PollParticipants } from "../../vote/exported/v1beta1/types";
import { TokenDetails } from "./types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface PollFailed {
    txId: Uint8Array;
    chain: string;
    pollId: Long;
}
export interface PollExpired {
    txId: Uint8Array;
    chain: string;
    pollId: Long;
}
export interface PollCompleted {
    txId: Uint8Array;
    chain: string;
    pollId: Long;
}
export interface NoEventsConfirmed {
    txId: Uint8Array;
    chain: string;
    pollId: Long;
}
export interface ConfirmKeyTransferStarted {
    chain: string;
    txId: Uint8Array;
    gatewayAddress: Uint8Array;
    confirmationHeight: Long;
    participants: PollParticipants;
}
export interface ConfirmGatewayTxStarted {
    txId: Uint8Array;
    chain: string;
    gatewayAddress: Uint8Array;
    confirmationHeight: Long;
    participants: PollParticipants;
}
export interface ConfirmDepositStarted {
    txId: Uint8Array;
    chain: string;
    depositAddress: Uint8Array;
    tokenAddress: Uint8Array;
    confirmationHeight: Long;
    participants: PollParticipants;
    asset: string;
}
export interface ConfirmTokenStarted {
    txId: Uint8Array;
    chain: string;
    gatewayAddress: Uint8Array;
    tokenAddress: Uint8Array;
    tokenDetails: TokenDetails;
    confirmationHeight: Long;
    participants: PollParticipants;
}
export interface ChainAdded {
    chain: string;
}
export interface CommandBatchSigned {
    chain: string;
    commandBatchId: Uint8Array;
}
export interface CommandBatchAborted {
    chain: string;
    commandBatchId: Uint8Array;
}
export interface EVMEventConfirmed {
    chain: string;
    eventId: string;
    type: string;
}
export interface EVMEventCompleted {
    chain: string;
    eventId: string;
    type: string;
}
export interface EVMEventFailed {
    chain: string;
    eventId: string;
    type: string;
}
export interface EVMEventRetryFailed {
    chain: string;
    eventId: string;
    type: string;
}
export interface ContractCallApproved {
    chain: string;
    eventId: string;
    commandId: Uint8Array;
    sender: string;
    destinationChain: string;
    contractAddress: string;
    payloadHash: Uint8Array;
}
export interface ContractCallWithMintApproved {
    chain: string;
    eventId: string;
    commandId: Uint8Array;
    sender: string;
    destinationChain: string;
    contractAddress: string;
    payloadHash: Uint8Array;
    asset: Coin;
}
export interface TokenSent {
    chain: string;
    eventId: string;
    transferId: Long;
    sender: string;
    destinationChain: string;
    destinationAddress: string;
    asset: Coin;
}
export interface MintCommand {
    chain: string;
    transferId: Long;
    commandId: Uint8Array;
    destinationChain: string;
    destinationAddress: string;
    asset: Coin;
}
export interface BurnCommand {
    chain: string;
    commandId: Uint8Array;
    destinationChain: string;
    depositAddress: string;
    asset: string;
}
export declare const PollFailed: {
    encode(message: PollFailed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PollFailed;
    fromJSON(object: any): PollFailed;
    toJSON(message: PollFailed): unknown;
    fromPartial(object: DeepPartial<PollFailed>): PollFailed;
};
export declare const PollExpired: {
    encode(message: PollExpired, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PollExpired;
    fromJSON(object: any): PollExpired;
    toJSON(message: PollExpired): unknown;
    fromPartial(object: DeepPartial<PollExpired>): PollExpired;
};
export declare const PollCompleted: {
    encode(message: PollCompleted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PollCompleted;
    fromJSON(object: any): PollCompleted;
    toJSON(message: PollCompleted): unknown;
    fromPartial(object: DeepPartial<PollCompleted>): PollCompleted;
};
export declare const NoEventsConfirmed: {
    encode(message: NoEventsConfirmed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NoEventsConfirmed;
    fromJSON(object: any): NoEventsConfirmed;
    toJSON(message: NoEventsConfirmed): unknown;
    fromPartial(object: DeepPartial<NoEventsConfirmed>): NoEventsConfirmed;
};
export declare const ConfirmKeyTransferStarted: {
    encode(message: ConfirmKeyTransferStarted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmKeyTransferStarted;
    fromJSON(object: any): ConfirmKeyTransferStarted;
    toJSON(message: ConfirmKeyTransferStarted): unknown;
    fromPartial(object: DeepPartial<ConfirmKeyTransferStarted>): ConfirmKeyTransferStarted;
};
export declare const ConfirmGatewayTxStarted: {
    encode(message: ConfirmGatewayTxStarted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmGatewayTxStarted;
    fromJSON(object: any): ConfirmGatewayTxStarted;
    toJSON(message: ConfirmGatewayTxStarted): unknown;
    fromPartial(object: DeepPartial<ConfirmGatewayTxStarted>): ConfirmGatewayTxStarted;
};
export declare const ConfirmDepositStarted: {
    encode(message: ConfirmDepositStarted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmDepositStarted;
    fromJSON(object: any): ConfirmDepositStarted;
    toJSON(message: ConfirmDepositStarted): unknown;
    fromPartial(object: DeepPartial<ConfirmDepositStarted>): ConfirmDepositStarted;
};
export declare const ConfirmTokenStarted: {
    encode(message: ConfirmTokenStarted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmTokenStarted;
    fromJSON(object: any): ConfirmTokenStarted;
    toJSON(message: ConfirmTokenStarted): unknown;
    fromPartial(object: DeepPartial<ConfirmTokenStarted>): ConfirmTokenStarted;
};
export declare const ChainAdded: {
    encode(message: ChainAdded, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainAdded;
    fromJSON(object: any): ChainAdded;
    toJSON(message: ChainAdded): unknown;
    fromPartial(object: DeepPartial<ChainAdded>): ChainAdded;
};
export declare const CommandBatchSigned: {
    encode(message: CommandBatchSigned, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommandBatchSigned;
    fromJSON(object: any): CommandBatchSigned;
    toJSON(message: CommandBatchSigned): unknown;
    fromPartial(object: DeepPartial<CommandBatchSigned>): CommandBatchSigned;
};
export declare const CommandBatchAborted: {
    encode(message: CommandBatchAborted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommandBatchAborted;
    fromJSON(object: any): CommandBatchAborted;
    toJSON(message: CommandBatchAborted): unknown;
    fromPartial(object: DeepPartial<CommandBatchAborted>): CommandBatchAborted;
};
export declare const EVMEventConfirmed: {
    encode(message: EVMEventConfirmed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EVMEventConfirmed;
    fromJSON(object: any): EVMEventConfirmed;
    toJSON(message: EVMEventConfirmed): unknown;
    fromPartial(object: DeepPartial<EVMEventConfirmed>): EVMEventConfirmed;
};
export declare const EVMEventCompleted: {
    encode(message: EVMEventCompleted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EVMEventCompleted;
    fromJSON(object: any): EVMEventCompleted;
    toJSON(message: EVMEventCompleted): unknown;
    fromPartial(object: DeepPartial<EVMEventCompleted>): EVMEventCompleted;
};
export declare const EVMEventFailed: {
    encode(message: EVMEventFailed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EVMEventFailed;
    fromJSON(object: any): EVMEventFailed;
    toJSON(message: EVMEventFailed): unknown;
    fromPartial(object: DeepPartial<EVMEventFailed>): EVMEventFailed;
};
export declare const EVMEventRetryFailed: {
    encode(message: EVMEventRetryFailed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EVMEventRetryFailed;
    fromJSON(object: any): EVMEventRetryFailed;
    toJSON(message: EVMEventRetryFailed): unknown;
    fromPartial(object: DeepPartial<EVMEventRetryFailed>): EVMEventRetryFailed;
};
export declare const ContractCallApproved: {
    encode(message: ContractCallApproved, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractCallApproved;
    fromJSON(object: any): ContractCallApproved;
    toJSON(message: ContractCallApproved): unknown;
    fromPartial(object: DeepPartial<ContractCallApproved>): ContractCallApproved;
};
export declare const ContractCallWithMintApproved: {
    encode(message: ContractCallWithMintApproved, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractCallWithMintApproved;
    fromJSON(object: any): ContractCallWithMintApproved;
    toJSON(message: ContractCallWithMintApproved): unknown;
    fromPartial(object: DeepPartial<ContractCallWithMintApproved>): ContractCallWithMintApproved;
};
export declare const TokenSent: {
    encode(message: TokenSent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenSent;
    fromJSON(object: any): TokenSent;
    toJSON(message: TokenSent): unknown;
    fromPartial(object: DeepPartial<TokenSent>): TokenSent;
};
export declare const MintCommand: {
    encode(message: MintCommand, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MintCommand;
    fromJSON(object: any): MintCommand;
    toJSON(message: MintCommand): unknown;
    fromPartial(object: DeepPartial<MintCommand>): MintCommand;
};
export declare const BurnCommand: {
    encode(message: BurnCommand, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BurnCommand;
    fromJSON(object: any): BurnCommand;
    toJSON(message: BurnCommand): unknown;
    fromPartial(object: DeepPartial<BurnCommand>): BurnCommand;
};
