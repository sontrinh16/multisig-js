import * as _679 from "./abci/types";
import * as _680 from "./crypto/keys";
import * as _681 from "./crypto/proof";
import * as _682 from "./libs/bits/types";
import * as _683 from "./p2p/types";
import * as _684 from "./types/block";
import * as _685 from "./types/evidence";
import * as _686 from "./types/params";
import * as _687 from "./types/types";
import * as _688 from "./types/validator";
import * as _689 from "./version/types";
export namespace tendermint {
  export const abci = { ..._679
  };
  export const crypto = { ..._680,
    ..._681
  };
  export namespace libs {
    export const bits = { ..._682
    };
  }
  export const p2p = { ..._683
  };
  export const types = { ..._684,
    ..._685,
    ..._686,
    ..._687,
    ..._688
  };
  export const version = { ..._689
  };
}