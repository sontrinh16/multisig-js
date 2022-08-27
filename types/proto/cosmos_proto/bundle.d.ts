import * as _87 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _87.ScalarType;
    scalarTypeToJSON(object: _87.ScalarType): string;
    ScalarType: typeof _87.ScalarType;
    InterfaceDescriptor: {
        encode(message: _87.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.InterfaceDescriptor;
        fromJSON(object: any): _87.InterfaceDescriptor;
        toJSON(message: _87.InterfaceDescriptor): unknown;
        fromPartial(object: {
            name?: string;
            description?: string;
        }): _87.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _87.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ScalarDescriptor;
        fromJSON(object: any): _87.ScalarDescriptor;
        toJSON(message: _87.ScalarDescriptor): unknown;
        fromPartial(object: {
            name?: string;
            description?: string;
            fieldType?: _87.ScalarType[];
        }): _87.ScalarDescriptor;
    };
};
