import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet } from "@osmonauts/helpers";

/** TgradeContractDetails is a custom extension to the wasmd ContractInfo */
export interface TgradeContractDetails {
  registeredPrivileges: RegisteredPrivilege[];
}

/** RegisteredPrivilege stores position and privilege name */
export interface RegisteredPrivilege {
  position: number;
  privilegeType: string;
}

function createBaseTgradeContractDetails(): TgradeContractDetails {
  return {
    registeredPrivileges: []
  };
}

export const TgradeContractDetails = {
  encode(message: TgradeContractDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.registeredPrivileges) {
      RegisteredPrivilege.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TgradeContractDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTgradeContractDetails();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.registeredPrivileges.push(RegisteredPrivilege.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TgradeContractDetails {
    return {
      registeredPrivileges: Array.isArray(object?.registeredPrivileges) ? object.registeredPrivileges.map((e: any) => RegisteredPrivilege.fromJSON(e)) : []
    };
  },

  toJSON(message: TgradeContractDetails): unknown {
    const obj: any = {};

    if (message.registeredPrivileges) {
      obj.registeredPrivileges = message.registeredPrivileges.map(e => e ? RegisteredPrivilege.toJSON(e) : undefined);
    } else {
      obj.registeredPrivileges = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<TgradeContractDetails>): TgradeContractDetails {
    const message = createBaseTgradeContractDetails();
    message.registeredPrivileges = object.registeredPrivileges?.map(e => RegisteredPrivilege.fromPartial(e)) || [];
    return message;
  }

};

function createBaseRegisteredPrivilege(): RegisteredPrivilege {
  return {
    position: 0,
    privilegeType: ""
  };
}

export const RegisteredPrivilege = {
  encode(message: RegisteredPrivilege, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== 0) {
      writer.uint32(8).uint32(message.position);
    }

    if (message.privilegeType !== "") {
      writer.uint32(18).string(message.privilegeType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredPrivilege {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredPrivilege();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.position = reader.uint32();
          break;

        case 2:
          message.privilegeType = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RegisteredPrivilege {
    return {
      position: isSet(object.position) ? Number(object.position) : 0,
      privilegeType: isSet(object.privilegeType) ? String(object.privilegeType) : ""
    };
  },

  toJSON(message: RegisteredPrivilege): unknown {
    const obj: any = {};
    message.position !== undefined && (obj.position = Math.round(message.position));
    message.privilegeType !== undefined && (obj.privilegeType = message.privilegeType);
    return obj;
  },

  fromPartial(object: DeepPartial<RegisteredPrivilege>): RegisteredPrivilege {
    const message = createBaseRegisteredPrivilege();
    message.position = object.position ?? 0;
    message.privilegeType = object.privilegeType ?? "";
    return message;
  }

};