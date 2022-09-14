import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export declare enum Event_Status {
    STATUS_UNSPECIFIED = 0,
    STATUS_CONFIRMED = 1,
    STATUS_COMPLETED = 2,
    STATUS_FAILED = 3,
    UNRECOGNIZED = -1
}
export declare function event_StatusFromJSON(object: any): Event_Status;
export declare function event_StatusToJSON(object: Event_Status): string;
export declare enum Status {
    /**
     * STATUS_UNSPECIFIED - these enum values are used for bitwise operations, therefore they need to
     * be powers of 2
     */
    STATUS_UNSPECIFIED = 0,
    STATUS_INITIALIZED = 1,
    STATUS_PENDING = 2,
    STATUS_CONFIRMED = 4,
    UNRECOGNIZED = -1
}
export declare function statusFromJSON(object: any): Status;
export declare function statusToJSON(object: Status): string;
export declare enum BatchedCommandsStatus {
    BATCHED_COMMANDS_STATUS_UNSPECIFIED = 0,
    BATCHED_COMMANDS_STATUS_SIGNING = 1,
    BATCHED_COMMANDS_STATUS_ABORTED = 2,
    BATCHED_COMMANDS_STATUS_SIGNED = 3,
    UNRECOGNIZED = -1
}
export declare function batchedCommandsStatusFromJSON(object: any): BatchedCommandsStatus;
export declare function batchedCommandsStatusToJSON(object: BatchedCommandsStatus): string;
export declare enum SigType {
    SIG_TYPE_UNSPECIFIED = 0,
    SIG_TYPE_TX = 1,
    SIG_TYPE_COMMAND = 2,
    UNRECOGNIZED = -1
}
export declare function sigTypeFromJSON(object: any): SigType;
export declare function sigTypeToJSON(object: SigType): string;
export declare enum DepositStatus {
    DEPOSIT_STATUS_UNSPECIFIED = 0,
    DEPOSIT_STATUS_PENDING = 1,
    DEPOSIT_STATUS_CONFIRMED = 2,
    DEPOSIT_STATUS_BURNED = 3,
    UNRECOGNIZED = -1
}
export declare function depositStatusFromJSON(object: any): DepositStatus;
export declare function depositStatusToJSON(object: DepositStatus): string;
export declare enum Gateway_Status {
    STATUS_UNSPECIFIED = 0,
    STATUS_PENDING = 1,
    STATUS_CONFIRMED = 2,
    UNRECOGNIZED = -1
}
export declare function gateway_StatusFromJSON(object: any): Gateway_Status;
export declare function gateway_StatusToJSON(object: Gateway_Status): string;
export interface VoteEvents {
    chain: string;
    events: Event[];
}
export interface Event {
    chain: string;
    txId: Uint8Array;
    index: Long;
    status: Event_Status;
    tokenSent?: EventTokenSent;
    contractCall?: EventContractCall;
    contractCallWithToken?: EventContractCallWithToken;
    transfer?: EventTransfer;
    tokenDeployed?: EventTokenDeployed;
    /** @deprecated */
    multisigOwnershipTransferred?: EventMultisigOwnershipTransferred;
    multisigOperatorshipTransferred?: EventMultisigOperatorshipTransferred;
}
export interface EventTokenSent {
    sender: Uint8Array;
    destinationChain: string;
    destinationAddress: string;
    symbol: string;
    amount: Uint8Array;
}
export interface EventContractCall {
    sender: Uint8Array;
    destinationChain: string;
    contractAddress: string;
    payloadHash: Uint8Array;
}
export interface EventContractCallWithToken {
    sender: Uint8Array;
    destinationChain: string;
    contractAddress: string;
    payloadHash: Uint8Array;
    symbol: string;
    amount: Uint8Array;
}
export interface EventTransfer {
    to: Uint8Array;
    amount: Uint8Array;
}
export interface EventTokenDeployed {
    symbol: string;
    tokenAddress: Uint8Array;
}
/** @deprecated */
export interface EventMultisigOwnershipTransferred {
    preOwners: Uint8Array[];
    prevThreshold: Uint8Array;
    newOwners: Uint8Array[];
    newThreshold: Uint8Array;
}
export interface EventMultisigOperatorshipTransferred {
    newOperators: Uint8Array[];
    newThreshold: Uint8Array;
    newWeights: Uint8Array[];
}
/** NetworkInfo describes information about a network */
export interface NetworkInfo {
    name: string;
    id: Uint8Array;
}
/**
 * BurnerInfo describes information required to burn token at an burner address
 * that is deposited by an user
 */
export interface BurnerInfo {
    burnerAddress: Uint8Array;
    tokenAddress: Uint8Array;
    destinationChain: string;
    symbol: string;
    asset: string;
    salt: Uint8Array;
}
/** ERC20Deposit contains information for an ERC20 deposit */
export interface ERC20Deposit {
    txId: Uint8Array;
    amount: Uint8Array;
    asset: string;
    destinationChain: string;
    burnerAddress: Uint8Array;
}
/** ERC20TokenMetadata describes information about an ERC20 token */
export interface ERC20TokenMetadata {
    asset: string;
    chainId: Uint8Array;
    details: TokenDetails;
    tokenAddress: string;
    txHash: string;
    status: Status;
    isExternal: boolean;
    burnerCode: Uint8Array;
}
export interface TransactionMetadata {
    rawTx: Uint8Array;
    pubKey: Uint8Array;
}
export interface Command {
    id: Uint8Array;
    command: string;
    params: Uint8Array;
    keyId: string;
    maxGasCost: number;
}
export interface CommandBatchMetadata {
    id: Uint8Array;
    commandIds: Uint8Array[];
    data: Uint8Array;
    sigHash: Uint8Array;
    status: BatchedCommandsStatus;
    keyId: string;
    prevBatchedCommandsId: Uint8Array;
    signature: Any;
}
/**
 * SigMetadata stores necessary information for external apps to map signature
 * results to evm relay transaction types
 */
export interface SigMetadata {
    type: SigType;
    chain: string;
    commandBatchId: Uint8Array;
}
/** TransferKey contains information for a transfer operatorship */
export interface TransferKey {
    txId: Uint8Array;
    nextKeyId: string;
}
export interface Asset {
    chain: string;
    name: string;
}
export interface TokenDetails {
    tokenName: string;
    symbol: string;
    decimals: number;
    capacity: Uint8Array;
}
export interface Gateway {
    address: Uint8Array;
    /** @deprecated */
    status: Gateway_Status;
}
export interface PollMetadata {
    chain: string;
    txId: Uint8Array;
}
export declare const VoteEvents: {
    encode(message: VoteEvents, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoteEvents;
    fromJSON(object: any): VoteEvents;
    toJSON(message: VoteEvents): unknown;
    fromPartial(object: DeepPartial<VoteEvents>): VoteEvents;
};
export declare const Event: {
    encode(message: Event, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Event;
    fromJSON(object: any): Event;
    toJSON(message: Event): unknown;
    fromPartial(object: DeepPartial<Event>): Event;
};
export declare const EventTokenSent: {
    encode(message: EventTokenSent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTokenSent;
    fromJSON(object: any): EventTokenSent;
    toJSON(message: EventTokenSent): unknown;
    fromPartial(object: DeepPartial<EventTokenSent>): EventTokenSent;
};
export declare const EventContractCall: {
    encode(message: EventContractCall, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventContractCall;
    fromJSON(object: any): EventContractCall;
    toJSON(message: EventContractCall): unknown;
    fromPartial(object: DeepPartial<EventContractCall>): EventContractCall;
};
export declare const EventContractCallWithToken: {
    encode(message: EventContractCallWithToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventContractCallWithToken;
    fromJSON(object: any): EventContractCallWithToken;
    toJSON(message: EventContractCallWithToken): unknown;
    fromPartial(object: DeepPartial<EventContractCallWithToken>): EventContractCallWithToken;
};
export declare const EventTransfer: {
    encode(message: EventTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTransfer;
    fromJSON(object: any): EventTransfer;
    toJSON(message: EventTransfer): unknown;
    fromPartial(object: DeepPartial<EventTransfer>): EventTransfer;
};
export declare const EventTokenDeployed: {
    encode(message: EventTokenDeployed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTokenDeployed;
    fromJSON(object: any): EventTokenDeployed;
    toJSON(message: EventTokenDeployed): unknown;
    fromPartial(object: DeepPartial<EventTokenDeployed>): EventTokenDeployed;
};
export declare const EventMultisigOwnershipTransferred: {
    encode(message: EventMultisigOwnershipTransferred, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventMultisigOwnershipTransferred;
    fromJSON(object: any): EventMultisigOwnershipTransferred;
    toJSON(message: EventMultisigOwnershipTransferred): unknown;
    fromPartial(object: DeepPartial<EventMultisigOwnershipTransferred>): EventMultisigOwnershipTransferred;
};
export declare const EventMultisigOperatorshipTransferred: {
    encode(message: EventMultisigOperatorshipTransferred, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventMultisigOperatorshipTransferred;
    fromJSON(object: any): EventMultisigOperatorshipTransferred;
    toJSON(message: EventMultisigOperatorshipTransferred): unknown;
    fromPartial(object: DeepPartial<EventMultisigOperatorshipTransferred>): EventMultisigOperatorshipTransferred;
};
export declare const NetworkInfo: {
    encode(message: NetworkInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NetworkInfo;
    fromJSON(object: any): NetworkInfo;
    toJSON(message: NetworkInfo): unknown;
    fromPartial(object: DeepPartial<NetworkInfo>): NetworkInfo;
};
export declare const BurnerInfo: {
    encode(message: BurnerInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BurnerInfo;
    fromJSON(object: any): BurnerInfo;
    toJSON(message: BurnerInfo): unknown;
    fromPartial(object: DeepPartial<BurnerInfo>): BurnerInfo;
};
export declare const ERC20Deposit: {
    encode(message: ERC20Deposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ERC20Deposit;
    fromJSON(object: any): ERC20Deposit;
    toJSON(message: ERC20Deposit): unknown;
    fromPartial(object: DeepPartial<ERC20Deposit>): ERC20Deposit;
};
export declare const ERC20TokenMetadata: {
    encode(message: ERC20TokenMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ERC20TokenMetadata;
    fromJSON(object: any): ERC20TokenMetadata;
    toJSON(message: ERC20TokenMetadata): unknown;
    fromPartial(object: DeepPartial<ERC20TokenMetadata>): ERC20TokenMetadata;
};
export declare const TransactionMetadata: {
    encode(message: TransactionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransactionMetadata;
    fromJSON(object: any): TransactionMetadata;
    toJSON(message: TransactionMetadata): unknown;
    fromPartial(object: DeepPartial<TransactionMetadata>): TransactionMetadata;
};
export declare const Command: {
    encode(message: Command, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Command;
    fromJSON(object: any): Command;
    toJSON(message: Command): unknown;
    fromPartial(object: DeepPartial<Command>): Command;
};
export declare const CommandBatchMetadata: {
    encode(message: CommandBatchMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommandBatchMetadata;
    fromJSON(object: any): CommandBatchMetadata;
    toJSON(message: CommandBatchMetadata): unknown;
    fromPartial(object: DeepPartial<CommandBatchMetadata>): CommandBatchMetadata;
};
export declare const SigMetadata: {
    encode(message: SigMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SigMetadata;
    fromJSON(object: any): SigMetadata;
    toJSON(message: SigMetadata): unknown;
    fromPartial(object: DeepPartial<SigMetadata>): SigMetadata;
};
export declare const TransferKey: {
    encode(message: TransferKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransferKey;
    fromJSON(object: any): TransferKey;
    toJSON(message: TransferKey): unknown;
    fromPartial(object: DeepPartial<TransferKey>): TransferKey;
};
export declare const Asset: {
    encode(message: Asset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Asset;
    fromJSON(object: any): Asset;
    toJSON(message: Asset): unknown;
    fromPartial(object: DeepPartial<Asset>): Asset;
};
export declare const TokenDetails: {
    encode(message: TokenDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenDetails;
    fromJSON(object: any): TokenDetails;
    toJSON(message: TokenDetails): unknown;
    fromPartial(object: DeepPartial<TokenDetails>): TokenDetails;
};
export declare const Gateway: {
    encode(message: Gateway, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Gateway;
    fromJSON(object: any): Gateway;
    toJSON(message: Gateway): unknown;
    fromPartial(object: DeepPartial<Gateway>): Gateway;
};
export declare const PollMetadata: {
    encode(message: PollMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PollMetadata;
    fromJSON(object: any): PollMetadata;
    toJSON(message: PollMetadata): unknown;
    fromPartial(object: DeepPartial<PollMetadata>): PollMetadata;
};
