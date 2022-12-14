import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface GoogleInAppPurchasePackage {
    packageName: string;
    productId: string;
    amount: string;
}
/** CoinIssuer represents an entity or external blockchain */
export interface CoinIssuer {
    coinDenom: string;
    packages: GoogleInAppPurchasePackage[];
    googleInAppPurchasePubKey: string;
    entityName: string;
}
export interface PaymentProcessor {
    coinDenom: string;
    /** pubKey is assumed to be ed25519 */
    pubKey: string;
    /** Represents the percentage retained by the payment processor when new coins are minted. In the range [0, 1), this amount is burned on-chain, actual fee is retained at the source. */
    processorPercentage: string;
    /** Represents the percentage distributed to stakers. In the range [0, 1). The sum with processingCut cannot exceed 1. */
    validatorsPercentage: string;
    name: string;
}
/** Params represent the parameters used by the pylons module */
export interface Params {
    coinIssuers: CoinIssuer[];
    paymentProcessors: PaymentProcessor[];
    recipeFeePercentage: string;
    itemTransferFeePercentage: string;
    updateItemStringFee: Coin;
    minTransferFee: string;
    maxTransferFee: string;
    updateUsernameFee: Coin;
    distrEpochIdentifier: string;
    engineVersion: Long;
    maxTxsInBlock: Long;
}
export declare const GoogleInAppPurchasePackage: {
    encode(message: GoogleInAppPurchasePackage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GoogleInAppPurchasePackage;
    fromJSON(object: any): GoogleInAppPurchasePackage;
    toJSON(message: GoogleInAppPurchasePackage): unknown;
    fromPartial(object: DeepPartial<GoogleInAppPurchasePackage>): GoogleInAppPurchasePackage;
};
export declare const CoinIssuer: {
    encode(message: CoinIssuer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CoinIssuer;
    fromJSON(object: any): CoinIssuer;
    toJSON(message: CoinIssuer): unknown;
    fromPartial(object: DeepPartial<CoinIssuer>): CoinIssuer;
};
export declare const PaymentProcessor: {
    encode(message: PaymentProcessor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PaymentProcessor;
    fromJSON(object: any): PaymentProcessor;
    toJSON(message: PaymentProcessor): unknown;
    fromPartial(object: DeepPartial<PaymentProcessor>): PaymentProcessor;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
