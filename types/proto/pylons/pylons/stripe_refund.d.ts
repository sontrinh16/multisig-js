import { PaymentInfo } from "./payment_info";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface StripeRefund {
    payment: PaymentInfo;
    settled: boolean;
}
export declare const StripeRefund: {
    encode(message: StripeRefund, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StripeRefund;
    fromJSON(object: any): StripeRefund;
    toJSON(message: StripeRefund): unknown;
    fromPartial(object: DeepPartial<StripeRefund>): StripeRefund;
};
