import { Coin, DecProto } from "../../cosmos/base/v1beta1/coin";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDistributeRewards, MsgResetAccount, MsgMint, MsgBurn } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/operations.MsgDistributeRewards", MsgDistributeRewards], ["/operations.MsgResetAccount", MsgResetAccount], ["/operations.MsgMint", MsgMint], ["/operations.MsgBurn", MsgBurn]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    distributeRewards(value: MsgDistributeRewards) {
      return {
        typeUrl: "/operations.MsgDistributeRewards",
        value: MsgDistributeRewards.encode(value).finish()
      };
    },

    resetAccount(value: MsgResetAccount) {
      return {
        typeUrl: "/operations.MsgResetAccount",
        value: MsgResetAccount.encode(value).finish()
      };
    },

    mint(value: MsgMint) {
      return {
        typeUrl: "/operations.MsgMint",
        value: MsgMint.encode(value).finish()
      };
    },

    burn(value: MsgBurn) {
      return {
        typeUrl: "/operations.MsgBurn",
        value: MsgBurn.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    distributeRewards(value: MsgDistributeRewards) {
      return {
        typeUrl: "/operations.MsgDistributeRewards",
        value
      };
    },

    resetAccount(value: MsgResetAccount) {
      return {
        typeUrl: "/operations.MsgResetAccount",
        value
      };
    },

    mint(value: MsgMint) {
      return {
        typeUrl: "/operations.MsgMint",
        value
      };
    },

    burn(value: MsgBurn) {
      return {
        typeUrl: "/operations.MsgBurn",
        value
      };
    }

  },
  toJSON: {
    distributeRewards(value: MsgDistributeRewards) {
      return {
        typeUrl: "/operations.MsgDistributeRewards",
        value: MsgDistributeRewards.toJSON(value)
      };
    },

    resetAccount(value: MsgResetAccount) {
      return {
        typeUrl: "/operations.MsgResetAccount",
        value: MsgResetAccount.toJSON(value)
      };
    },

    mint(value: MsgMint) {
      return {
        typeUrl: "/operations.MsgMint",
        value: MsgMint.toJSON(value)
      };
    },

    burn(value: MsgBurn) {
      return {
        typeUrl: "/operations.MsgBurn",
        value: MsgBurn.toJSON(value)
      };
    }

  },
  fromJSON: {
    distributeRewards(value: any) {
      return {
        typeUrl: "/operations.MsgDistributeRewards",
        value: MsgDistributeRewards.fromJSON(value)
      };
    },

    resetAccount(value: any) {
      return {
        typeUrl: "/operations.MsgResetAccount",
        value: MsgResetAccount.fromJSON(value)
      };
    },

    mint(value: any) {
      return {
        typeUrl: "/operations.MsgMint",
        value: MsgMint.fromJSON(value)
      };
    },

    burn(value: any) {
      return {
        typeUrl: "/operations.MsgBurn",
        value: MsgBurn.fromJSON(value)
      };
    }

  },
  fromPartial: {
    distributeRewards(value: MsgDistributeRewards) {
      return {
        typeUrl: "/operations.MsgDistributeRewards",
        value: MsgDistributeRewards.fromPartial(value)
      };
    },

    resetAccount(value: MsgResetAccount) {
      return {
        typeUrl: "/operations.MsgResetAccount",
        value: MsgResetAccount.fromPartial(value)
      };
    },

    mint(value: MsgMint) {
      return {
        typeUrl: "/operations.MsgMint",
        value: MsgMint.fromPartial(value)
      };
    },

    burn(value: MsgBurn) {
      return {
        typeUrl: "/operations.MsgBurn",
        value: MsgBurn.fromPartial(value)
      };
    }

  }
};