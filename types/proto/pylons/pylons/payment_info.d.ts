import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface PaymentInfo {
    purchaseId: string;
    processorName: string;
    payerAddr: string;
    amount: string;
    productId: string;
    signature: string;
}
export declare const PaymentInfo: {
    encode(message: PaymentInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PaymentInfo;
    fromJSON(object: any): PaymentInfo;
    toJSON(message: PaymentInfo): unknown;
    fromPartial(object: DeepPartial<PaymentInfo>): PaymentInfo;
};
