import { PlacementRequirements } from "../../base/v1beta2/attribute";
import { Resource } from "./resource";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GroupSpec stores group specifications */
export interface GroupSpec {
    name: string;
    requirements: PlacementRequirements;
    resources: Resource[];
}
export declare const GroupSpec: {
    encode(message: GroupSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GroupSpec;
    fromJSON(object: any): GroupSpec;
    toJSON(message: GroupSpec): unknown;
    fromPartial(object: DeepPartial<GroupSpec>): GroupSpec;
};
