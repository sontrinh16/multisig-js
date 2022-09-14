import * as _53 from "./axelarnet/v1beta1/events";
import * as _54 from "./axelarnet/v1beta1/genesis";
import * as _55 from "./axelarnet/v1beta1/params";
import * as _56 from "./axelarnet/v1beta1/query";
import * as _57 from "./axelarnet/v1beta1/service";
import * as _58 from "./axelarnet/v1beta1/tx";
import * as _59 from "./axelarnet/v1beta1/types";
import * as _60 from "./evm/v1beta1/events";
import * as _61 from "./evm/v1beta1/genesis";
import * as _62 from "./evm/v1beta1/params";
import * as _63 from "./evm/v1beta1/query";
import * as _64 from "./evm/v1beta1/service";
import * as _65 from "./evm/v1beta1/tx";
import * as _66 from "./evm/v1beta1/types";
import * as _67 from "./multisig/exported/v1beta1/types";
import * as _68 from "./multisig/v1beta1/events";
import * as _69 from "./multisig/v1beta1/genesis";
import * as _70 from "./multisig/v1beta1/params";
import * as _71 from "./multisig/v1beta1/query";
import * as _72 from "./multisig/v1beta1/service";
import * as _73 from "./multisig/v1beta1/tx";
import * as _74 from "./multisig/v1beta1/types";
import * as _75 from "./nexus/exported/v1beta1/types";
import * as _76 from "./nexus/v1beta1/events";
import * as _77 from "./nexus/v1beta1/genesis";
import * as _78 from "./nexus/v1beta1/params";
import * as _79 from "./nexus/v1beta1/query";
import * as _80 from "./nexus/v1beta1/service";
import * as _81 from "./nexus/v1beta1/tx";
import * as _82 from "./nexus/v1beta1/types";
import * as _83 from "./permission/exported/v1beta1/types";
import * as _84 from "./permission/v1beta1/genesis";
import * as _85 from "./permission/v1beta1/params";
import * as _86 from "./permission/v1beta1/query";
import * as _87 from "./permission/v1beta1/service";
import * as _88 from "./permission/v1beta1/tx";
import * as _89 from "./permission/v1beta1/types";
import * as _90 from "./reward/v1beta1/genesis";
import * as _91 from "./reward/v1beta1/params";
import * as _92 from "./reward/v1beta1/service";
import * as _93 from "./reward/v1beta1/tx";
import * as _94 from "./reward/v1beta1/types";
import * as _95 from "./snapshot/exported/v1beta1/types";
import * as _96 from "./snapshot/v1beta1/genesis";
import * as _97 from "./snapshot/v1beta1/params";
import * as _98 from "./snapshot/v1beta1/query";
import * as _99 from "./snapshot/v1beta1/service";
import * as _100 from "./snapshot/v1beta1/tx";
import * as _101 from "./snapshot/v1beta1/types";
import * as _102 from "./tss/exported/v1beta1/types";
import * as _103 from "./tss/tofnd/v1beta1/common";
import * as _104 from "./tss/tofnd/v1beta1/multisig";
import * as _105 from "./tss/tofnd/v1beta1/tofnd";
import * as _106 from "./tss/v1beta1/genesis";
import * as _107 from "./tss/v1beta1/params";
import * as _108 from "./tss/v1beta1/service";
import * as _109 from "./tss/v1beta1/tx";
import * as _110 from "./tss/v1beta1/types";
import * as _111 from "./utils/v1beta1/bitmap";
import * as _112 from "./utils/v1beta1/queuer";
import * as _113 from "./utils/v1beta1/threshold";
import * as _114 from "./vote/exported/v1beta1/types";
import * as _115 from "./vote/v1beta1/events";
import * as _116 from "./vote/v1beta1/genesis";
import * as _117 from "./vote/v1beta1/params";
import * as _118 from "./vote/v1beta1/service";
import * as _119 from "./vote/v1beta1/tx";
import * as _120 from "./vote/v1beta1/types";
import * as _806 from "./permission/v1beta1/service.amino";
import * as _807 from "./permission/v1beta1/service.registry";
export namespace axelar {
  export namespace axelarnet {
    export const v1beta1 = { ..._53,
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._59
    };
  }
  export namespace evm {
    export const v1beta1 = { ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._66
    };
  }
  export namespace multisig {
    export namespace exported {
      export const v1beta1 = { ..._67
      };
    }
    export const v1beta1 = { ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._74
    };
  }
  export namespace nexus {
    export namespace exported {
      export const v1beta1 = { ..._75
      };
    }
    export const v1beta1 = { ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._82
    };
  }
  export namespace permission {
    export namespace exported {
      export const v1beta1 = { ..._83
      };
    }
    export const v1beta1 = { ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._806,
      ..._807
    };
  }
  export namespace reward {
    export const v1beta1 = { ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._94
    };
  }
  export namespace snapshot {
    export namespace exported {
      export const v1beta1 = { ..._95
      };
    }
    export const v1beta1 = { ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._101
    };
  }
  export namespace tss {
    export namespace exported {
      export const v1beta1 = { ..._102
      };
    }
    export namespace tofnd {
      export const v1beta1 = { ..._103,
        ..._104,
        ..._105
      };
    }
    export const v1beta1 = { ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._110
    };
  }
  export namespace utils {
    export const v1beta1 = { ..._111,
      ..._112,
      ..._113
    };
  }
  export namespace vote {
    export namespace exported {
      export const v1beta1 = { ..._114
      };
    }
    export const v1beta1 = { ..._115,
      ..._116,
      ..._117,
      ..._118,
      ..._119,
      ..._120
    };
  }
}