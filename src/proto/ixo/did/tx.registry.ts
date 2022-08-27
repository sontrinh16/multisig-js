import { DidCredential } from "./did";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddDid, MsgAddCredential } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/did.MsgAddDid", MsgAddDid], ["/did.MsgAddCredential", MsgAddCredential]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    addDid(value: MsgAddDid) {
      return {
        typeUrl: "/did.MsgAddDid",
        value: MsgAddDid.encode(value).finish()
      };
    },

    addCredential(value: MsgAddCredential) {
      return {
        typeUrl: "/did.MsgAddCredential",
        value: MsgAddCredential.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    addDid(value: MsgAddDid) {
      return {
        typeUrl: "/did.MsgAddDid",
        value
      };
    },

    addCredential(value: MsgAddCredential) {
      return {
        typeUrl: "/did.MsgAddCredential",
        value
      };
    }

  },
  toJSON: {
    addDid(value: MsgAddDid) {
      return {
        typeUrl: "/did.MsgAddDid",
        value: MsgAddDid.toJSON(value)
      };
    },

    addCredential(value: MsgAddCredential) {
      return {
        typeUrl: "/did.MsgAddCredential",
        value: MsgAddCredential.toJSON(value)
      };
    }

  },
  fromJSON: {
    addDid(value: any) {
      return {
        typeUrl: "/did.MsgAddDid",
        value: MsgAddDid.fromJSON(value)
      };
    },

    addCredential(value: any) {
      return {
        typeUrl: "/did.MsgAddCredential",
        value: MsgAddCredential.fromJSON(value)
      };
    }

  },
  fromPartial: {
    addDid(value: MsgAddDid) {
      return {
        typeUrl: "/did.MsgAddDid",
        value: MsgAddDid.fromPartial(value)
      };
    },

    addCredential(value: MsgAddCredential) {
      return {
        typeUrl: "/did.MsgAddCredential",
        value: MsgAddCredential.fromPartial(value)
      };
    }

  }
};