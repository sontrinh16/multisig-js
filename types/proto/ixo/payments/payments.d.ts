import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Any } from "../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** PaymentTemplate contains details about a payment, with no info about the payer or payee. */
export interface PaymentTemplate {
    id: string;
    paymentAmount: Coin[];
    paymentMinimum: Coin[];
    paymentMaximum: Coin[];
    discounts: Discount[];
}
/** Discount contains details about a discount which can be granted to payers. */
export interface Discount {
    id: string;
    percent: string;
}
/** DistributionShare specifies the share of a specific payment an address will receive. */
export interface DistributionShare {
    address: string;
    percentage: string;
}
/**
 * PaymentContract specifies an agreement between a payer and payee/s which can be invoked
 * once or multiple times to effect payment/s.
 */
export interface PaymentContract {
    id: string;
    paymentTemplateId: string;
    creator: string;
    payer: string;
    recipients: DistributionShare[];
    cumulativePay: Coin[];
    currentRemainder: Coin[];
    canDeauthorise: boolean;
    authorised: boolean;
    discountId: string;
}
/** Subscription specifies details of a payment to be effected periodically. */
export interface Subscription {
    id: string;
    paymentContractId: string;
    periodsSoFar: string;
    maxPeriods: string;
    periodsAccumulated: string;
    period: Any;
}
/**
 * BlockPeriod implements the Period interface and specifies a period in terms of number
 * of blocks.
 */
export interface BlockPeriod {
    periodLength: Long;
    periodStartBlock: Long;
}
/** TimePeriod implements the Period interface and specifies a period in terms of time. */
export interface TimePeriod {
    periodDurationNs: string;
    periodStartTime: Date;
}
/**
 * TestPeriod implements the Period interface and is identical to BlockPeriod, except it
 * ignores the context in periodEnded() and periodStarted().
 */
export interface TestPeriod {
    periodLength: Long;
    periodStartBlock: Long;
}
export declare const PaymentTemplate: {
    encode(message: PaymentTemplate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PaymentTemplate;
    fromJSON(object: any): PaymentTemplate;
    toJSON(message: PaymentTemplate): unknown;
    fromPartial(object: DeepPartial<PaymentTemplate>): PaymentTemplate;
};
export declare const Discount: {
    encode(message: Discount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Discount;
    fromJSON(object: any): Discount;
    toJSON(message: Discount): unknown;
    fromPartial(object: DeepPartial<Discount>): Discount;
};
export declare const DistributionShare: {
    encode(message: DistributionShare, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DistributionShare;
    fromJSON(object: any): DistributionShare;
    toJSON(message: DistributionShare): unknown;
    fromPartial(object: DeepPartial<DistributionShare>): DistributionShare;
};
export declare const PaymentContract: {
    encode(message: PaymentContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PaymentContract;
    fromJSON(object: any): PaymentContract;
    toJSON(message: PaymentContract): unknown;
    fromPartial(object: DeepPartial<PaymentContract>): PaymentContract;
};
export declare const Subscription: {
    encode(message: Subscription, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Subscription;
    fromJSON(object: any): Subscription;
    toJSON(message: Subscription): unknown;
    fromPartial(object: DeepPartial<Subscription>): Subscription;
};
export declare const BlockPeriod: {
    encode(message: BlockPeriod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockPeriod;
    fromJSON(object: any): BlockPeriod;
    toJSON(message: BlockPeriod): unknown;
    fromPartial(object: DeepPartial<BlockPeriod>): BlockPeriod;
};
export declare const TimePeriod: {
    encode(message: TimePeriod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TimePeriod;
    fromJSON(object: any): TimePeriod;
    toJSON(message: TimePeriod): unknown;
    fromPartial(object: DeepPartial<TimePeriod>): TimePeriod;
};
export declare const TestPeriod: {
    encode(message: TestPeriod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TestPeriod;
    fromJSON(object: any): TestPeriod;
    toJSON(message: TestPeriod): unknown;
    fromPartial(object: DeepPartial<TestPeriod>): TestPeriod;
};
