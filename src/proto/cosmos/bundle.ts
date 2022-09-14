import * as _156 from "./app/v1alpha1/config";
import * as _157 from "./app/v1alpha1/module";
import * as _158 from "./app/v1alpha1/query";
import * as _159 from "./auth/v1beta1/auth";
import * as _160 from "./auth/v1beta1/genesis";
import * as _161 from "./auth/v1beta1/query";
import * as _162 from "./authz/v1beta1/authz";
import * as _163 from "./authz/v1beta1/event";
import * as _164 from "./authz/v1beta1/genesis";
import * as _165 from "./authz/v1beta1/query";
import * as _166 from "./authz/v1beta1/tx";
import * as _167 from "./bank/v1beta1/authz";
import * as _168 from "./bank/v1beta1/bank";
import * as _169 from "./bank/v1beta1/genesis";
import * as _170 from "./bank/v1beta1/query";
import * as _171 from "./bank/v1beta1/tx";
import * as _172 from "./base/abci/v1beta1/abci";
import * as _173 from "./base/kv/v1beta1/kv";
import * as _174 from "./base/query/v1beta1/pagination";
import * as _175 from "./base/reflection/v1beta1/reflection";
import * as _176 from "./base/reflection/v2alpha1/reflection";
import * as _177 from "./base/snapshots/v1beta1/snapshot";
import * as _178 from "./base/store/v1beta1/commit_info";
import * as _179 from "./base/store/v1beta1/listening";
import * as _180 from "./base/tendermint/v1beta1/query";
import * as _181 from "./base/v1beta1/coin";
import * as _182 from "./capability/v1beta1/capability";
import * as _183 from "./capability/v1beta1/genesis";
import * as _184 from "./crisis/v1beta1/genesis";
import * as _185 from "./crisis/v1beta1/tx";
import * as _186 from "./crypto/ed25519/keys";
import * as _187 from "./crypto/hd/v1/hd";
import * as _188 from "./crypto/keyring/v1/record";
import * as _189 from "./crypto/multisig/keys";
import * as _190 from "./crypto/secp256k1/keys";
import * as _191 from "./crypto/secp256r1/keys";
import * as _192 from "./distribution/v1beta1/distribution";
import * as _193 from "./distribution/v1beta1/genesis";
import * as _194 from "./distribution/v1beta1/query";
import * as _195 from "./distribution/v1beta1/tx";
import * as _196 from "./evidence/v1beta1/evidence";
import * as _197 from "./evidence/v1beta1/genesis";
import * as _198 from "./evidence/v1beta1/query";
import * as _199 from "./evidence/v1beta1/tx";
import * as _200 from "./feegrant/v1beta1/feegrant";
import * as _201 from "./feegrant/v1beta1/genesis";
import * as _202 from "./feegrant/v1beta1/query";
import * as _203 from "./feegrant/v1beta1/tx";
import * as _204 from "./genutil/v1beta1/genesis";
import * as _205 from "./gov/v1/genesis";
import * as _206 from "./gov/v1/gov";
import * as _207 from "./gov/v1/query";
import * as _208 from "./gov/v1/tx";
import * as _209 from "./gov/v1beta1/genesis";
import * as _210 from "./gov/v1beta1/gov";
import * as _211 from "./gov/v1beta1/query";
import * as _212 from "./gov/v1beta1/tx";
import * as _213 from "./group/v1/events";
import * as _214 from "./group/v1/genesis";
import * as _215 from "./group/v1/query";
import * as _216 from "./group/v1/tx";
import * as _217 from "./group/v1/types";
import * as _218 from "./mint/v1beta1/genesis";
import * as _219 from "./mint/v1beta1/mint";
import * as _220 from "./mint/v1beta1/query";
import * as _221 from "./msg/v1/msg";
import * as _222 from "./nft/v1beta1/event";
import * as _223 from "./nft/v1beta1/genesis";
import * as _224 from "./nft/v1beta1/nft";
import * as _225 from "./nft/v1beta1/query";
import * as _226 from "./nft/v1beta1/tx";
import * as _227 from "./orm/v1/orm";
import * as _228 from "./orm/v1alpha1/schema";
import * as _229 from "./params/v1beta1/params";
import * as _230 from "./params/v1beta1/query";
import * as _231 from "./slashing/v1beta1/genesis";
import * as _232 from "./slashing/v1beta1/query";
import * as _233 from "./slashing/v1beta1/slashing";
import * as _234 from "./slashing/v1beta1/tx";
import * as _235 from "./staking/v1beta1/authz";
import * as _236 from "./staking/v1beta1/genesis";
import * as _237 from "./staking/v1beta1/query";
import * as _238 from "./staking/v1beta1/staking";
import * as _239 from "./staking/v1beta1/tx";
import * as _240 from "./tx/signing/v1beta1/signing";
import * as _241 from "./tx/v1beta1/service";
import * as _242 from "./tx/v1beta1/tx";
import * as _243 from "./upgrade/v1beta1/query";
import * as _244 from "./upgrade/v1beta1/tx";
import * as _245 from "./upgrade/v1beta1/upgrade";
import * as _246 from "./vesting/v1beta1/tx";
import * as _247 from "./vesting/v1beta1/vesting";
import * as _814 from "./authz/v1beta1/tx.amino";
import * as _815 from "./bank/v1beta1/tx.amino";
import * as _816 from "./crisis/v1beta1/tx.amino";
import * as _817 from "./distribution/v1beta1/tx.amino";
import * as _818 from "./evidence/v1beta1/tx.amino";
import * as _819 from "./feegrant/v1beta1/tx.amino";
import * as _820 from "./gov/v1/tx.amino";
import * as _821 from "./gov/v1beta1/tx.amino";
import * as _822 from "./group/v1/tx.amino";
import * as _823 from "./nft/v1beta1/tx.amino";
import * as _824 from "./slashing/v1beta1/tx.amino";
import * as _825 from "./staking/v1beta1/tx.amino";
import * as _826 from "./upgrade/v1beta1/tx.amino";
import * as _827 from "./vesting/v1beta1/tx.amino";
import * as _828 from "./authz/v1beta1/tx.registry";
import * as _829 from "./bank/v1beta1/tx.registry";
import * as _830 from "./crisis/v1beta1/tx.registry";
import * as _831 from "./distribution/v1beta1/tx.registry";
import * as _832 from "./evidence/v1beta1/tx.registry";
import * as _833 from "./feegrant/v1beta1/tx.registry";
import * as _834 from "./gov/v1/tx.registry";
import * as _835 from "./gov/v1beta1/tx.registry";
import * as _836 from "./group/v1/tx.registry";
import * as _837 from "./nft/v1beta1/tx.registry";
import * as _838 from "./slashing/v1beta1/tx.registry";
import * as _839 from "./staking/v1beta1/tx.registry";
import * as _840 from "./upgrade/v1beta1/tx.registry";
import * as _841 from "./vesting/v1beta1/tx.registry";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = { ..._156,
      ..._157,
      ..._158
    };
  }
  export namespace auth {
    export const v1beta1 = { ..._159,
      ..._160,
      ..._161
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._166,
      ..._814,
      ..._828
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._167,
      ..._168,
      ..._169,
      ..._170,
      ..._171,
      ..._815,
      ..._829
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._172
      };
    }
    export namespace kv {
      export const v1beta1 = { ..._173
      };
    }
    export namespace query {
      export const v1beta1 = { ..._174
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._175
      };
      export const v2alpha1 = { ..._176
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._177
      };
    }
    export namespace store {
      export const v1beta1 = { ..._178,
        ..._179
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._180
      };
    }
    export const v1beta1 = { ..._181
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._182,
      ..._183
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._184,
      ..._185,
      ..._816,
      ..._830
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._186
    };
    export namespace hd {
      export const v1 = { ..._187
      };
    }
    export namespace keyring {
      export const v1 = { ..._188
      };
    }
    export const multisig = { ..._189
    };
    export const secp256k1 = { ..._190
    };
    export const secp256r1 = { ..._191
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._192,
      ..._193,
      ..._194,
      ..._195,
      ..._817,
      ..._831
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._196,
      ..._197,
      ..._198,
      ..._199,
      ..._818,
      ..._832
    };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._200,
      ..._201,
      ..._202,
      ..._203,
      ..._819,
      ..._833
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._204
    };
  }
  export namespace gov {
    export const v1 = { ..._205,
      ..._206,
      ..._207,
      ..._208,
      ..._820,
      ..._834
    };
    export const v1beta1 = { ..._209,
      ..._210,
      ..._211,
      ..._212,
      ..._821,
      ..._835
    };
  }
  export namespace group {
    export const v1 = { ..._213,
      ..._214,
      ..._215,
      ..._216,
      ..._217,
      ..._822,
      ..._836
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._218,
      ..._219,
      ..._220
    };
  }
  export namespace msg {
    export const v1 = { ..._221
    };
  }
  export namespace nft {
    export const v1beta1 = { ..._222,
      ..._223,
      ..._224,
      ..._225,
      ..._226,
      ..._823,
      ..._837
    };
  }
  export namespace orm {
    export const v1 = { ..._227
    };
    export const v1alpha1 = { ..._228
    };
  }
  export namespace params {
    export const v1beta1 = { ..._229,
      ..._230
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._231,
      ..._232,
      ..._233,
      ..._234,
      ..._824,
      ..._838
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._235,
      ..._236,
      ..._237,
      ..._238,
      ..._239,
      ..._825,
      ..._839
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._240
      };
    }
    export const v1beta1 = { ..._241,
      ..._242
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._243,
      ..._244,
      ..._245,
      ..._826,
      ..._840
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._246,
      ..._247,
      ..._827,
      ..._841
    };
  }
}