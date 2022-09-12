import { Duration } from "../../../google/protobuf/duration";
import { Bandwidth } from "../../types/v1/bandwidth";
import { Status } from "../../types/v1/status";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface Session {
    id: Long;
    subscription: Long;
    node: string;
    address: string;
    duration: Duration;
    bandwidth: Bandwidth;
    status: Status;
    statusAt: Timestamp;
}
export declare const Session: {
    encode(message: Session, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Session;
    fromJSON(object: any): Session;
    toJSON(message: Session): unknown;
    fromPartial(object: DeepPartial<Session>): Session;
};
