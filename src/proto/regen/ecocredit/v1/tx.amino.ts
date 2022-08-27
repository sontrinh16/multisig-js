import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { OriginTx } from "./types";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { BatchIssuance, SendCredits, RetireCredits, CancelCredits, MsgCreateClass, MsgCreateProject, MsgCreateBatch, MsgMintBatchCredits, MsgSealBatch, MsgSend, MsgRetire, MsgCancel, MsgUpdateClassAdmin, MsgUpdateClassIssuers, MsgUpdateClassMetadata, MsgUpdateProjectAdmin, MsgUpdateProjectMetadata } from "./tx";
export interface AminoMsgCreateClass extends AminoMsg {
  type: "/regen.ecocredit.v1.MsgCreateClass";
  value: {
    admin: string;
    issuers: string[];
    metadata: string;
    credit_type_abbrev: string;
    fee: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgCreateProject extends AminoMsg {
  type: "/regen.ecocredit.v1.MsgCreateProject";
  value: {
    issuer: string;
    class_id: string;
    metadata: string;
    jurisdiction: string;
    reference_id: string;
  };
}
export interface AminoMsgCreateBatch extends AminoMsg {
  type: "/regen.ecocredit.v1.MsgCreateBatch";
  value: {
    issuer: string;
    project_id: string;
    issuance: {
      recipient: string;
      tradable_amount: string;
      retired_amount: string;
      retirement_jurisdiction: string;
    }[];
    metadata: string;
    start_date: {
      seconds: string;
      nanos: number;
    };
    end_date: {
      seconds: string;
      nanos: number;
    };
    open: boolean;
    origin_tx: {
      typ: string;
      id: string;
    };
    note: string;
  };
}
export interface AminoMsgMintBatchCredits extends AminoMsg {
  type: "/regen.ecocredit.v1.MsgMintBatchCredits";
  value: {
    issuer: string;
    batch_denom: string;
    issuance: {
      recipient: string;
      tradable_amount: string;
      retired_amount: string;
      retirement_jurisdiction: string;
    }[];
    origin_tx: {
      typ: string;
      id: string;
    };
    note: string;
  };
}
export interface AminoMsgSealBatch extends AminoMsg {
  type: "/regen.ecocredit.v1.MsgSealBatch";
  value: {
    issuer: string;
    batch_denom: string;
  };
}
export interface AminoMsgSend extends AminoMsg {
  type: "/regen.ecocredit.v1.MsgSend";
  value: {
    sender: string;
    recipient: string;
    credits: {
      batch_denom: string;
      tradable_amount: string;
      retired_amount: string;
      retirement_jurisdiction: string;
    }[];
  };
}
export interface AminoMsgRetire extends AminoMsg {
  type: "/regen.ecocredit.v1.MsgRetire";
  value: {
    holder: string;
    credits: {
      batch_denom: string;
      amount: string;
    }[];
    jurisdiction: string;
  };
}
export interface AminoMsgCancel extends AminoMsg {
  type: "/regen.ecocredit.v1.MsgCancel";
  value: {
    holder: string;
    credits: {
      batch_denom: string;
      amount: string;
    }[];
  };
}
export interface AminoMsgUpdateClassAdmin extends AminoMsg {
  type: "/regen.ecocredit.v1.MsgUpdateClassAdmin";
  value: {
    admin: string;
    class_id: string;
    new_admin: string;
  };
}
export interface AminoMsgUpdateClassIssuers extends AminoMsg {
  type: "/regen.ecocredit.v1.MsgUpdateClassIssuers";
  value: {
    admin: string;
    class_id: string;
    add_issuers: string[];
    remove_issuers: string[];
  };
}
export interface AminoMsgUpdateClassMetadata extends AminoMsg {
  type: "/regen.ecocredit.v1.MsgUpdateClassMetadata";
  value: {
    admin: string;
    class_id: string;
    metadata: string;
  };
}
export interface AminoMsgUpdateProjectAdmin extends AminoMsg {
  type: "/regen.ecocredit.v1.MsgUpdateProjectAdmin";
  value: {
    admin: string;
    new_admin: string;
    project_id: string;
  };
}
export interface AminoMsgUpdateProjectMetadata extends AminoMsg {
  type: "/regen.ecocredit.v1.MsgUpdateProjectMetadata";
  value: {
    admin: string;
    new_metadata: string;
    project_id: string;
  };
}
export const AminoConverter = {
  "/regen.ecocredit.v1.MsgCreateClass": {
    aminoType: "/regen.ecocredit.v1.MsgCreateClass",
    toAmino: ({
      admin,
      issuers,
      metadata,
      creditTypeAbbrev,
      fee
    }: MsgCreateClass): AminoMsgCreateClass["value"] => {
      return {
        admin,
        issuers,
        metadata,
        credit_type_abbrev: creditTypeAbbrev,
        fee: {
          denom: fee.denom,
          amount: Long.fromNumber(fee.amount).toString()
        }
      };
    },
    fromAmino: ({
      admin,
      issuers,
      metadata,
      credit_type_abbrev,
      fee
    }: AminoMsgCreateClass["value"]): MsgCreateClass => {
      return {
        admin,
        issuers,
        metadata,
        creditTypeAbbrev: credit_type_abbrev,
        fee: {
          denom: fee.denom,
          amount: fee.amount
        }
      };
    }
  },
  "/regen.ecocredit.v1.MsgCreateProject": {
    aminoType: "/regen.ecocredit.v1.MsgCreateProject",
    toAmino: ({
      issuer,
      classId,
      metadata,
      jurisdiction,
      referenceId
    }: MsgCreateProject): AminoMsgCreateProject["value"] => {
      return {
        issuer,
        class_id: classId,
        metadata,
        jurisdiction,
        reference_id: referenceId
      };
    },
    fromAmino: ({
      issuer,
      class_id,
      metadata,
      jurisdiction,
      reference_id
    }: AminoMsgCreateProject["value"]): MsgCreateProject => {
      return {
        issuer,
        classId: class_id,
        metadata,
        jurisdiction,
        referenceId: reference_id
      };
    }
  },
  "/regen.ecocredit.v1.MsgCreateBatch": {
    aminoType: "/regen.ecocredit.v1.MsgCreateBatch",
    toAmino: ({
      issuer,
      projectId,
      issuance,
      metadata,
      startDate,
      endDate,
      open,
      originTx,
      note
    }: MsgCreateBatch): AminoMsgCreateBatch["value"] => {
      return {
        issuer,
        project_id: projectId,
        issuance: issuance.map(el0 => ({
          recipient: el0.recipient,
          tradable_amount: el0.tradableAmount,
          retired_amount: el0.retiredAmount,
          retirement_jurisdiction: el0.retirementJurisdiction
        })),
        metadata,
        start_date: startDate,
        end_date: endDate,
        open,
        origin_tx: {
          typ: originTx.typ,
          id: originTx.id
        },
        note
      };
    },
    fromAmino: ({
      issuer,
      project_id,
      issuance,
      metadata,
      start_date,
      end_date,
      open,
      origin_tx,
      note
    }: AminoMsgCreateBatch["value"]): MsgCreateBatch => {
      return {
        issuer,
        projectId: project_id,
        issuance: issuance.map(el0 => ({
          recipient: el0.recipient,
          tradableAmount: el0.tradable_amount,
          retiredAmount: el0.retired_amount,
          retirementJurisdiction: el0.retirement_jurisdiction
        })),
        metadata,
        startDate: start_date,
        endDate: end_date,
        open,
        originTx: {
          typ: origin_tx.typ,
          id: origin_tx.id
        },
        note
      };
    }
  },
  "/regen.ecocredit.v1.MsgMintBatchCredits": {
    aminoType: "/regen.ecocredit.v1.MsgMintBatchCredits",
    toAmino: ({
      issuer,
      batchDenom,
      issuance,
      originTx,
      note
    }: MsgMintBatchCredits): AminoMsgMintBatchCredits["value"] => {
      return {
        issuer,
        batch_denom: batchDenom,
        issuance: issuance.map(el0 => ({
          recipient: el0.recipient,
          tradable_amount: el0.tradableAmount,
          retired_amount: el0.retiredAmount,
          retirement_jurisdiction: el0.retirementJurisdiction
        })),
        origin_tx: {
          typ: originTx.typ,
          id: originTx.id
        },
        note
      };
    },
    fromAmino: ({
      issuer,
      batch_denom,
      issuance,
      origin_tx,
      note
    }: AminoMsgMintBatchCredits["value"]): MsgMintBatchCredits => {
      return {
        issuer,
        batchDenom: batch_denom,
        issuance: issuance.map(el0 => ({
          recipient: el0.recipient,
          tradableAmount: el0.tradable_amount,
          retiredAmount: el0.retired_amount,
          retirementJurisdiction: el0.retirement_jurisdiction
        })),
        originTx: {
          typ: origin_tx.typ,
          id: origin_tx.id
        },
        note
      };
    }
  },
  "/regen.ecocredit.v1.MsgSealBatch": {
    aminoType: "/regen.ecocredit.v1.MsgSealBatch",
    toAmino: ({
      issuer,
      batchDenom
    }: MsgSealBatch): AminoMsgSealBatch["value"] => {
      return {
        issuer,
        batch_denom: batchDenom
      };
    },
    fromAmino: ({
      issuer,
      batch_denom
    }: AminoMsgSealBatch["value"]): MsgSealBatch => {
      return {
        issuer,
        batchDenom: batch_denom
      };
    }
  },
  "/regen.ecocredit.v1.MsgSend": {
    aminoType: "/regen.ecocredit.v1.MsgSend",
    toAmino: ({
      sender,
      recipient,
      credits
    }: MsgSend): AminoMsgSend["value"] => {
      return {
        sender,
        recipient,
        credits: credits.map(el0 => ({
          batch_denom: el0.batchDenom,
          tradable_amount: el0.tradableAmount,
          retired_amount: el0.retiredAmount,
          retirement_jurisdiction: el0.retirementJurisdiction
        }))
      };
    },
    fromAmino: ({
      sender,
      recipient,
      credits
    }: AminoMsgSend["value"]): MsgSend => {
      return {
        sender,
        recipient,
        credits: credits.map(el0 => ({
          batchDenom: el0.batch_denom,
          tradableAmount: el0.tradable_amount,
          retiredAmount: el0.retired_amount,
          retirementJurisdiction: el0.retirement_jurisdiction
        }))
      };
    }
  },
  "/regen.ecocredit.v1.MsgRetire": {
    aminoType: "/regen.ecocredit.v1.MsgRetire",
    toAmino: ({
      holder,
      credits,
      jurisdiction
    }: MsgRetire): AminoMsgRetire["value"] => {
      return {
        holder,
        credits: credits.map(el0 => ({
          batch_denom: el0.batchDenom,
          amount: el0.amount
        })),
        jurisdiction
      };
    },
    fromAmino: ({
      holder,
      credits,
      jurisdiction
    }: AminoMsgRetire["value"]): MsgRetire => {
      return {
        holder,
        credits: credits.map(el0 => ({
          batchDenom: el0.batch_denom,
          amount: el0.amount
        })),
        jurisdiction
      };
    }
  },
  "/regen.ecocredit.v1.MsgCancel": {
    aminoType: "/regen.ecocredit.v1.MsgCancel",
    toAmino: ({
      holder,
      credits
    }: MsgCancel): AminoMsgCancel["value"] => {
      return {
        holder,
        credits: credits.map(el0 => ({
          batch_denom: el0.batchDenom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      holder,
      credits
    }: AminoMsgCancel["value"]): MsgCancel => {
      return {
        holder,
        credits: credits.map(el0 => ({
          batchDenom: el0.batch_denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/regen.ecocredit.v1.MsgUpdateClassAdmin": {
    aminoType: "/regen.ecocredit.v1.MsgUpdateClassAdmin",
    toAmino: ({
      admin,
      classId,
      newAdmin
    }: MsgUpdateClassAdmin): AminoMsgUpdateClassAdmin["value"] => {
      return {
        admin,
        class_id: classId,
        new_admin: newAdmin
      };
    },
    fromAmino: ({
      admin,
      class_id,
      new_admin
    }: AminoMsgUpdateClassAdmin["value"]): MsgUpdateClassAdmin => {
      return {
        admin,
        classId: class_id,
        newAdmin: new_admin
      };
    }
  },
  "/regen.ecocredit.v1.MsgUpdateClassIssuers": {
    aminoType: "/regen.ecocredit.v1.MsgUpdateClassIssuers",
    toAmino: ({
      admin,
      classId,
      addIssuers,
      removeIssuers
    }: MsgUpdateClassIssuers): AminoMsgUpdateClassIssuers["value"] => {
      return {
        admin,
        class_id: classId,
        add_issuers: addIssuers,
        remove_issuers: removeIssuers
      };
    },
    fromAmino: ({
      admin,
      class_id,
      add_issuers,
      remove_issuers
    }: AminoMsgUpdateClassIssuers["value"]): MsgUpdateClassIssuers => {
      return {
        admin,
        classId: class_id,
        addIssuers: add_issuers,
        removeIssuers: remove_issuers
      };
    }
  },
  "/regen.ecocredit.v1.MsgUpdateClassMetadata": {
    aminoType: "/regen.ecocredit.v1.MsgUpdateClassMetadata",
    toAmino: ({
      admin,
      classId,
      metadata
    }: MsgUpdateClassMetadata): AminoMsgUpdateClassMetadata["value"] => {
      return {
        admin,
        class_id: classId,
        metadata
      };
    },
    fromAmino: ({
      admin,
      class_id,
      metadata
    }: AminoMsgUpdateClassMetadata["value"]): MsgUpdateClassMetadata => {
      return {
        admin,
        classId: class_id,
        metadata
      };
    }
  },
  "/regen.ecocredit.v1.MsgUpdateProjectAdmin": {
    aminoType: "/regen.ecocredit.v1.MsgUpdateProjectAdmin",
    toAmino: ({
      admin,
      newAdmin,
      projectId
    }: MsgUpdateProjectAdmin): AminoMsgUpdateProjectAdmin["value"] => {
      return {
        admin,
        new_admin: newAdmin,
        project_id: projectId
      };
    },
    fromAmino: ({
      admin,
      new_admin,
      project_id
    }: AminoMsgUpdateProjectAdmin["value"]): MsgUpdateProjectAdmin => {
      return {
        admin,
        newAdmin: new_admin,
        projectId: project_id
      };
    }
  },
  "/regen.ecocredit.v1.MsgUpdateProjectMetadata": {
    aminoType: "/regen.ecocredit.v1.MsgUpdateProjectMetadata",
    toAmino: ({
      admin,
      newMetadata,
      projectId
    }: MsgUpdateProjectMetadata): AminoMsgUpdateProjectMetadata["value"] => {
      return {
        admin,
        new_metadata: newMetadata,
        project_id: projectId
      };
    },
    fromAmino: ({
      admin,
      new_metadata,
      project_id
    }: AminoMsgUpdateProjectMetadata["value"]): MsgUpdateProjectMetadata => {
      return {
        admin,
        newMetadata: new_metadata,
        projectId: project_id
      };
    }
  }
};