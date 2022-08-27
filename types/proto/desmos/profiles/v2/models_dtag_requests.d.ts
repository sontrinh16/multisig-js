import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** DTagTransferRequest represent a DTag transfer request between two users */
export interface DTagTransferRequest {
    /**
     * DTagToTrade contains the value of the DTag that should be transferred from
     * the receiver of the request to the sender
     */
    dtagToTrade: string;
    /** Sender represents the address of the account that sent the request */
    sender: string;
    /**
     * Receiver represents the receiver of the request that, if accepted, will
     * give to the sender their DTag
     */
    receiver: string;
}
export declare const DTagTransferRequest: {
    encode(message: DTagTransferRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DTagTransferRequest;
    fromJSON(object: any): DTagTransferRequest;
    toJSON(message: DTagTransferRequest): unknown;
    fromPartial(object: DeepPartial<DTagTransferRequest>): DTagTransferRequest;
};
