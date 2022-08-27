import { Description } from "../../../../cosmos/staking/v1beta1/staking";
import { Any } from "../../../../google/protobuf/any";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateValidator, MsgUpdateValidator, MsgDelegate, MsgUndelegate } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/confio.poe.v1beta1.MsgCreateValidator", MsgCreateValidator], ["/confio.poe.v1beta1.MsgUpdateValidator", MsgUpdateValidator], ["/confio.poe.v1beta1.MsgDelegate", MsgDelegate], ["/confio.poe.v1beta1.MsgUndelegate", MsgUndelegate]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createValidator(value: MsgCreateValidator) {
      return {
        typeUrl: "/confio.poe.v1beta1.MsgCreateValidator",
        value: MsgCreateValidator.encode(value).finish()
      };
    },

    updateValidator(value: MsgUpdateValidator) {
      return {
        typeUrl: "/confio.poe.v1beta1.MsgUpdateValidator",
        value: MsgUpdateValidator.encode(value).finish()
      };
    },

    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/confio.poe.v1beta1.MsgDelegate",
        value: MsgDelegate.encode(value).finish()
      };
    },

    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: "/confio.poe.v1beta1.MsgUndelegate",
        value: MsgUndelegate.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    createValidator(value: MsgCreateValidator) {
      return {
        typeUrl: "/confio.poe.v1beta1.MsgCreateValidator",
        value
      };
    },

    updateValidator(value: MsgUpdateValidator) {
      return {
        typeUrl: "/confio.poe.v1beta1.MsgUpdateValidator",
        value
      };
    },

    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/confio.poe.v1beta1.MsgDelegate",
        value
      };
    },

    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: "/confio.poe.v1beta1.MsgUndelegate",
        value
      };
    }

  },
  toJSON: {
    createValidator(value: MsgCreateValidator) {
      return {
        typeUrl: "/confio.poe.v1beta1.MsgCreateValidator",
        value: MsgCreateValidator.toJSON(value)
      };
    },

    updateValidator(value: MsgUpdateValidator) {
      return {
        typeUrl: "/confio.poe.v1beta1.MsgUpdateValidator",
        value: MsgUpdateValidator.toJSON(value)
      };
    },

    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/confio.poe.v1beta1.MsgDelegate",
        value: MsgDelegate.toJSON(value)
      };
    },

    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: "/confio.poe.v1beta1.MsgUndelegate",
        value: MsgUndelegate.toJSON(value)
      };
    }

  },
  fromJSON: {
    createValidator(value: any) {
      return {
        typeUrl: "/confio.poe.v1beta1.MsgCreateValidator",
        value: MsgCreateValidator.fromJSON(value)
      };
    },

    updateValidator(value: any) {
      return {
        typeUrl: "/confio.poe.v1beta1.MsgUpdateValidator",
        value: MsgUpdateValidator.fromJSON(value)
      };
    },

    delegate(value: any) {
      return {
        typeUrl: "/confio.poe.v1beta1.MsgDelegate",
        value: MsgDelegate.fromJSON(value)
      };
    },

    undelegate(value: any) {
      return {
        typeUrl: "/confio.poe.v1beta1.MsgUndelegate",
        value: MsgUndelegate.fromJSON(value)
      };
    }

  },
  fromPartial: {
    createValidator(value: MsgCreateValidator) {
      return {
        typeUrl: "/confio.poe.v1beta1.MsgCreateValidator",
        value: MsgCreateValidator.fromPartial(value)
      };
    },

    updateValidator(value: MsgUpdateValidator) {
      return {
        typeUrl: "/confio.poe.v1beta1.MsgUpdateValidator",
        value: MsgUpdateValidator.fromPartial(value)
      };
    },

    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/confio.poe.v1beta1.MsgDelegate",
        value: MsgDelegate.fromPartial(value)
      };
    },

    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: "/confio.poe.v1beta1.MsgUndelegate",
        value: MsgUndelegate.fromPartial(value)
      };
    }

  }
};