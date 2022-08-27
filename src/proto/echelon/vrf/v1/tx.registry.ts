import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateRandom } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/echelon.vrf.v1.MsgCreateRandom", MsgCreateRandom]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createRandom(value: MsgCreateRandom) {
      return {
        typeUrl: "/echelon.vrf.v1.MsgCreateRandom",
        value: MsgCreateRandom.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    createRandom(value: MsgCreateRandom) {
      return {
        typeUrl: "/echelon.vrf.v1.MsgCreateRandom",
        value
      };
    }

  },
  toJSON: {
    createRandom(value: MsgCreateRandom) {
      return {
        typeUrl: "/echelon.vrf.v1.MsgCreateRandom",
        value: MsgCreateRandom.toJSON(value)
      };
    }

  },
  fromJSON: {
    createRandom(value: any) {
      return {
        typeUrl: "/echelon.vrf.v1.MsgCreateRandom",
        value: MsgCreateRandom.fromJSON(value)
      };
    }

  },
  fromPartial: {
    createRandom(value: MsgCreateRandom) {
      return {
        typeUrl: "/echelon.vrf.v1.MsgCreateRandom",
        value: MsgCreateRandom.fromPartial(value)
      };
    }

  }
};