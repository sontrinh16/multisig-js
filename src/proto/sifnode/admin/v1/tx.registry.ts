import { AdminAccount } from "./types";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddAccount, MsgRemoveAccount } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/sifnode.admin.v1.MsgAddAccount", MsgAddAccount], ["/sifnode.admin.v1.MsgRemoveAccount", MsgRemoveAccount]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    addAccount(value: MsgAddAccount) {
      return {
        typeUrl: "/sifnode.admin.v1.MsgAddAccount",
        value: MsgAddAccount.encode(value).finish()
      };
    },

    removeAccount(value: MsgRemoveAccount) {
      return {
        typeUrl: "/sifnode.admin.v1.MsgRemoveAccount",
        value: MsgRemoveAccount.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    addAccount(value: MsgAddAccount) {
      return {
        typeUrl: "/sifnode.admin.v1.MsgAddAccount",
        value
      };
    },

    removeAccount(value: MsgRemoveAccount) {
      return {
        typeUrl: "/sifnode.admin.v1.MsgRemoveAccount",
        value
      };
    }

  },
  toJSON: {
    addAccount(value: MsgAddAccount) {
      return {
        typeUrl: "/sifnode.admin.v1.MsgAddAccount",
        value: MsgAddAccount.toJSON(value)
      };
    },

    removeAccount(value: MsgRemoveAccount) {
      return {
        typeUrl: "/sifnode.admin.v1.MsgRemoveAccount",
        value: MsgRemoveAccount.toJSON(value)
      };
    }

  },
  fromJSON: {
    addAccount(value: any) {
      return {
        typeUrl: "/sifnode.admin.v1.MsgAddAccount",
        value: MsgAddAccount.fromJSON(value)
      };
    },

    removeAccount(value: any) {
      return {
        typeUrl: "/sifnode.admin.v1.MsgRemoveAccount",
        value: MsgRemoveAccount.fromJSON(value)
      };
    }

  },
  fromPartial: {
    addAccount(value: MsgAddAccount) {
      return {
        typeUrl: "/sifnode.admin.v1.MsgAddAccount",
        value: MsgAddAccount.fromPartial(value)
      };
    },

    removeAccount(value: MsgRemoveAccount) {
      return {
        typeUrl: "/sifnode.admin.v1.MsgRemoveAccount",
        value: MsgRemoveAccount.fromPartial(value)
      };
    }

  }
};