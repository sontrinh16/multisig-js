import * as _88 from "./app/v1alpha1/config";
import * as _89 from "./app/v1alpha1/module";
import * as _90 from "./app/v1alpha1/query";
import * as _91 from "./auth/v1beta1/auth";
import * as _92 from "./auth/v1beta1/genesis";
import * as _93 from "./auth/v1beta1/query";
import * as _94 from "./authz/v1beta1/authz";
import * as _95 from "./authz/v1beta1/event";
import * as _96 from "./authz/v1beta1/genesis";
import * as _97 from "./authz/v1beta1/query";
import * as _98 from "./authz/v1beta1/tx";
import * as _99 from "./bank/v1beta1/authz";
import * as _100 from "./bank/v1beta1/bank";
import * as _101 from "./bank/v1beta1/genesis";
import * as _102 from "./bank/v1beta1/query";
import * as _103 from "./bank/v1beta1/tx";
import * as _104 from "./base/abci/v1beta1/abci";
import * as _105 from "./base/kv/v1beta1/kv";
import * as _106 from "./base/query/v1beta1/pagination";
import * as _107 from "./base/reflection/v1beta1/reflection";
import * as _108 from "./base/reflection/v2alpha1/reflection";
import * as _109 from "./base/snapshots/v1beta1/snapshot";
import * as _110 from "./base/store/v1beta1/commit_info";
import * as _111 from "./base/store/v1beta1/listening";
import * as _112 from "./base/tendermint/v1beta1/query";
import * as _113 from "./base/v1beta1/coin";
import * as _114 from "./capability/v1beta1/capability";
import * as _115 from "./capability/v1beta1/genesis";
import * as _116 from "./crisis/v1beta1/genesis";
import * as _117 from "./crisis/v1beta1/tx";
import * as _118 from "./crypto/ed25519/keys";
import * as _119 from "./crypto/hd/v1/hd";
import * as _120 from "./crypto/keyring/v1/record";
import * as _121 from "./crypto/multisig/keys";
import * as _122 from "./crypto/secp256k1/keys";
import * as _123 from "./crypto/secp256r1/keys";
import * as _124 from "./distribution/v1beta1/distribution";
import * as _125 from "./distribution/v1beta1/genesis";
import * as _126 from "./distribution/v1beta1/query";
import * as _127 from "./distribution/v1beta1/tx";
import * as _128 from "./evidence/v1beta1/evidence";
import * as _129 from "./evidence/v1beta1/genesis";
import * as _130 from "./evidence/v1beta1/query";
import * as _131 from "./evidence/v1beta1/tx";
import * as _132 from "./feegrant/v1beta1/feegrant";
import * as _133 from "./feegrant/v1beta1/genesis";
import * as _134 from "./feegrant/v1beta1/query";
import * as _135 from "./feegrant/v1beta1/tx";
import * as _136 from "./genutil/v1beta1/genesis";
import * as _137 from "./gov/v1/genesis";
import * as _138 from "./gov/v1/gov";
import * as _139 from "./gov/v1/query";
import * as _140 from "./gov/v1/tx";
import * as _141 from "./gov/v1beta1/genesis";
import * as _142 from "./gov/v1beta1/gov";
import * as _143 from "./gov/v1beta1/query";
import * as _144 from "./gov/v1beta1/tx";
import * as _145 from "./group/v1/events";
import * as _146 from "./group/v1/genesis";
import * as _147 from "./group/v1/query";
import * as _148 from "./group/v1/tx";
import * as _149 from "./group/v1/types";
import * as _150 from "./mint/v1beta1/genesis";
import * as _151 from "./mint/v1beta1/mint";
import * as _152 from "./mint/v1beta1/query";
import * as _153 from "./msg/v1/msg";
import * as _154 from "./nft/v1beta1/event";
import * as _155 from "./nft/v1beta1/genesis";
import * as _156 from "./nft/v1beta1/nft";
import * as _157 from "./nft/v1beta1/query";
import * as _158 from "./nft/v1beta1/tx";
import * as _159 from "./orm/v1/orm";
import * as _160 from "./orm/v1alpha1/schema";
import * as _161 from "./params/v1beta1/params";
import * as _162 from "./params/v1beta1/query";
import * as _163 from "./slashing/v1beta1/genesis";
import * as _164 from "./slashing/v1beta1/query";
import * as _165 from "./slashing/v1beta1/slashing";
import * as _166 from "./slashing/v1beta1/tx";
import * as _167 from "./staking/v1beta1/authz";
import * as _168 from "./staking/v1beta1/genesis";
import * as _169 from "./staking/v1beta1/query";
import * as _170 from "./staking/v1beta1/staking";
import * as _171 from "./staking/v1beta1/tx";
import * as _172 from "./tx/signing/v1beta1/signing";
import * as _173 from "./tx/v1beta1/service";
import * as _174 from "./tx/v1beta1/tx";
import * as _175 from "./upgrade/v1beta1/query";
import * as _176 from "./upgrade/v1beta1/tx";
import * as _177 from "./upgrade/v1beta1/upgrade";
import * as _178 from "./vesting/v1beta1/tx";
import * as _179 from "./vesting/v1beta1/vesting";
import * as _744 from "./authz/v1beta1/tx.amino";
import * as _745 from "./bank/v1beta1/tx.amino";
import * as _746 from "./crisis/v1beta1/tx.amino";
import * as _747 from "./distribution/v1beta1/tx.amino";
import * as _748 from "./evidence/v1beta1/tx.amino";
import * as _749 from "./feegrant/v1beta1/tx.amino";
import * as _750 from "./gov/v1/tx.amino";
import * as _751 from "./gov/v1beta1/tx.amino";
import * as _752 from "./group/v1/tx.amino";
import * as _753 from "./nft/v1beta1/tx.amino";
import * as _754 from "./slashing/v1beta1/tx.amino";
import * as _755 from "./staking/v1beta1/tx.amino";
import * as _756 from "./upgrade/v1beta1/tx.amino";
import * as _757 from "./vesting/v1beta1/tx.amino";
import * as _758 from "./authz/v1beta1/tx.registry";
import * as _759 from "./bank/v1beta1/tx.registry";
import * as _760 from "./crisis/v1beta1/tx.registry";
import * as _761 from "./distribution/v1beta1/tx.registry";
import * as _762 from "./evidence/v1beta1/tx.registry";
import * as _763 from "./feegrant/v1beta1/tx.registry";
import * as _764 from "./gov/v1/tx.registry";
import * as _765 from "./gov/v1beta1/tx.registry";
import * as _766 from "./group/v1/tx.registry";
import * as _767 from "./nft/v1beta1/tx.registry";
import * as _768 from "./slashing/v1beta1/tx.registry";
import * as _769 from "./staking/v1beta1/tx.registry";
import * as _770 from "./upgrade/v1beta1/tx.registry";
import * as _771 from "./vesting/v1beta1/tx.registry";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = { ..._88,
      ..._89,
      ..._90
    };
  }
  export namespace auth {
    export const v1beta1 = { ..._91,
      ..._92,
      ..._93
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._744,
      ..._758
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._103,
      ..._745,
      ..._759
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._104
      };
    }
    export namespace kv {
      export const v1beta1 = { ..._105
      };
    }
    export namespace query {
      export const v1beta1 = { ..._106
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._107
      };
      export const v2alpha1 = { ..._108
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._109
      };
    }
    export namespace store {
      export const v1beta1 = { ..._110,
        ..._111
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._112
      };
    }
    export const v1beta1 = { ..._113
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._114,
      ..._115
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._116,
      ..._117,
      ..._746,
      ..._760
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._118
    };
    export namespace hd {
      export const v1 = { ..._119
      };
    }
    export namespace keyring {
      export const v1 = { ..._120
      };
    }
    export const multisig = { ..._121
    };
    export const secp256k1 = { ..._122
    };
    export const secp256r1 = { ..._123
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._124,
      ..._125,
      ..._126,
      ..._127,
      ..._747,
      ..._761
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._128,
      ..._129,
      ..._130,
      ..._131,
      ..._748,
      ..._762
    };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._749,
      ..._763
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._136
    };
  }
  export namespace gov {
    export const v1 = { ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._750,
      ..._764
    };
    export const v1beta1 = { ..._141,
      ..._142,
      ..._143,
      ..._144,
      ..._751,
      ..._765
    };
  }
  export namespace group {
    export const v1 = { ..._145,
      ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._752,
      ..._766
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._150,
      ..._151,
      ..._152
    };
  }
  export namespace msg {
    export const v1 = { ..._153
    };
  }
  export namespace nft {
    export const v1beta1 = { ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._753,
      ..._767
    };
  }
  export namespace orm {
    export const v1 = { ..._159
    };
    export const v1alpha1 = { ..._160
    };
  }
  export namespace params {
    export const v1beta1 = { ..._161,
      ..._162
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._163,
      ..._164,
      ..._165,
      ..._166,
      ..._754,
      ..._768
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._167,
      ..._168,
      ..._169,
      ..._170,
      ..._171,
      ..._755,
      ..._769
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._172
      };
    }
    export const v1beta1 = { ..._173,
      ..._174
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._175,
      ..._176,
      ..._177,
      ..._756,
      ..._770
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._178,
      ..._179,
      ..._757,
      ..._771
    };
  }
}