import * as _155 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _155.ScalarType;
    scalarTypeToJSON(object: _155.ScalarType): string;
    ScalarType: typeof _155.ScalarType;
    InterfaceDescriptor: {
        encode(message: _155.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.InterfaceDescriptor;
        fromJSON(object: any): _155.InterfaceDescriptor;
        toJSON(message: _155.InterfaceDescriptor): unknown;
        fromPartial(object: {
            name?: string;
            description?: string;
        }): _155.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _155.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.ScalarDescriptor;
        fromJSON(object: any): _155.ScalarDescriptor;
        toJSON(message: _155.ScalarDescriptor): unknown;
        fromPartial(object: {
            name?: string;
            description?: string;
            fieldType?: _155.ScalarType[];
        }): _155.ScalarDescriptor;
    };
};
