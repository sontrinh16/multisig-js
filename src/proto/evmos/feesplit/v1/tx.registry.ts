import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterFeeSplit, MsgUpdateFeeSplit, MsgCancelFeeSplit } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/evmos.feesplit.v1.MsgRegisterFeeSplit", MsgRegisterFeeSplit], ["/evmos.feesplit.v1.MsgUpdateFeeSplit", MsgUpdateFeeSplit], ["/evmos.feesplit.v1.MsgCancelFeeSplit", MsgCancelFeeSplit]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerFeeSplit(value: MsgRegisterFeeSplit) {
      return {
        typeUrl: "/evmos.feesplit.v1.MsgRegisterFeeSplit",
        value: MsgRegisterFeeSplit.encode(value).finish()
      };
    },

    updateFeeSplit(value: MsgUpdateFeeSplit) {
      return {
        typeUrl: "/evmos.feesplit.v1.MsgUpdateFeeSplit",
        value: MsgUpdateFeeSplit.encode(value).finish()
      };
    },

    cancelFeeSplit(value: MsgCancelFeeSplit) {
      return {
        typeUrl: "/evmos.feesplit.v1.MsgCancelFeeSplit",
        value: MsgCancelFeeSplit.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    registerFeeSplit(value: MsgRegisterFeeSplit) {
      return {
        typeUrl: "/evmos.feesplit.v1.MsgRegisterFeeSplit",
        value
      };
    },

    updateFeeSplit(value: MsgUpdateFeeSplit) {
      return {
        typeUrl: "/evmos.feesplit.v1.MsgUpdateFeeSplit",
        value
      };
    },

    cancelFeeSplit(value: MsgCancelFeeSplit) {
      return {
        typeUrl: "/evmos.feesplit.v1.MsgCancelFeeSplit",
        value
      };
    }

  },
  toJSON: {
    registerFeeSplit(value: MsgRegisterFeeSplit) {
      return {
        typeUrl: "/evmos.feesplit.v1.MsgRegisterFeeSplit",
        value: MsgRegisterFeeSplit.toJSON(value)
      };
    },

    updateFeeSplit(value: MsgUpdateFeeSplit) {
      return {
        typeUrl: "/evmos.feesplit.v1.MsgUpdateFeeSplit",
        value: MsgUpdateFeeSplit.toJSON(value)
      };
    },

    cancelFeeSplit(value: MsgCancelFeeSplit) {
      return {
        typeUrl: "/evmos.feesplit.v1.MsgCancelFeeSplit",
        value: MsgCancelFeeSplit.toJSON(value)
      };
    }

  },
  fromJSON: {
    registerFeeSplit(value: any) {
      return {
        typeUrl: "/evmos.feesplit.v1.MsgRegisterFeeSplit",
        value: MsgRegisterFeeSplit.fromJSON(value)
      };
    },

    updateFeeSplit(value: any) {
      return {
        typeUrl: "/evmos.feesplit.v1.MsgUpdateFeeSplit",
        value: MsgUpdateFeeSplit.fromJSON(value)
      };
    },

    cancelFeeSplit(value: any) {
      return {
        typeUrl: "/evmos.feesplit.v1.MsgCancelFeeSplit",
        value: MsgCancelFeeSplit.fromJSON(value)
      };
    }

  },
  fromPartial: {
    registerFeeSplit(value: MsgRegisterFeeSplit) {
      return {
        typeUrl: "/evmos.feesplit.v1.MsgRegisterFeeSplit",
        value: MsgRegisterFeeSplit.fromPartial(value)
      };
    },

    updateFeeSplit(value: MsgUpdateFeeSplit) {
      return {
        typeUrl: "/evmos.feesplit.v1.MsgUpdateFeeSplit",
        value: MsgUpdateFeeSplit.fromPartial(value)
      };
    },

    cancelFeeSplit(value: MsgCancelFeeSplit) {
      return {
        typeUrl: "/evmos.feesplit.v1.MsgCancelFeeSplit",
        value: MsgCancelFeeSplit.fromPartial(value)
      };
    }

  }
};