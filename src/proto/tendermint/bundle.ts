import * as _766 from "./abci/types";
import * as _767 from "./crypto/keys";
import * as _768 from "./crypto/proof";
import * as _769 from "./libs/bits/types";
import * as _770 from "./p2p/types";
import * as _771 from "./types/block";
import * as _772 from "./types/evidence";
import * as _773 from "./types/params";
import * as _774 from "./types/types";
import * as _775 from "./types/validator";
import * as _776 from "./version/types";
export namespace tendermint {
  export const abci = { ..._766
  };
  export const crypto = { ..._767,
    ..._768
  };
  export namespace libs {
    export const bits = { ..._769
    };
  }
  export const p2p = { ..._770
  };
  export const types = { ..._771,
    ..._772,
    ..._773,
    ..._774,
    ..._775
  };
  export const version = { ..._776
  };
}