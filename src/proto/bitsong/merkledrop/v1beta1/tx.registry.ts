import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreate, MsgClaim } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/bitsong.merkledrop.v1beta1.MsgCreate", MsgCreate], ["/bitsong.merkledrop.v1beta1.MsgClaim", MsgClaim]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    create(value: MsgCreate) {
      return {
        typeUrl: "/bitsong.merkledrop.v1beta1.MsgCreate",
        value: MsgCreate.encode(value).finish()
      };
    },

    claim(value: MsgClaim) {
      return {
        typeUrl: "/bitsong.merkledrop.v1beta1.MsgClaim",
        value: MsgClaim.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    create(value: MsgCreate) {
      return {
        typeUrl: "/bitsong.merkledrop.v1beta1.MsgCreate",
        value
      };
    },

    claim(value: MsgClaim) {
      return {
        typeUrl: "/bitsong.merkledrop.v1beta1.MsgClaim",
        value
      };
    }

  },
  toJSON: {
    create(value: MsgCreate) {
      return {
        typeUrl: "/bitsong.merkledrop.v1beta1.MsgCreate",
        value: MsgCreate.toJSON(value)
      };
    },

    claim(value: MsgClaim) {
      return {
        typeUrl: "/bitsong.merkledrop.v1beta1.MsgClaim",
        value: MsgClaim.toJSON(value)
      };
    }

  },
  fromJSON: {
    create(value: any) {
      return {
        typeUrl: "/bitsong.merkledrop.v1beta1.MsgCreate",
        value: MsgCreate.fromJSON(value)
      };
    },

    claim(value: any) {
      return {
        typeUrl: "/bitsong.merkledrop.v1beta1.MsgClaim",
        value: MsgClaim.fromJSON(value)
      };
    }

  },
  fromPartial: {
    create(value: MsgCreate) {
      return {
        typeUrl: "/bitsong.merkledrop.v1beta1.MsgCreate",
        value: MsgCreate.fromPartial(value)
      };
    },

    claim(value: MsgClaim) {
      return {
        typeUrl: "/bitsong.merkledrop.v1beta1.MsgClaim",
        value: MsgClaim.fromPartial(value)
      };
    }

  }
};