import * as _698 from "./abci/types";
import * as _699 from "./crypto/keys";
import * as _700 from "./crypto/proof";
import * as _701 from "./libs/bits/types";
import * as _702 from "./p2p/types";
import * as _703 from "./types/block";
import * as _704 from "./types/evidence";
import * as _705 from "./types/params";
import * as _706 from "./types/types";
import * as _707 from "./types/validator";
import * as _708 from "./version/types";
export namespace tendermint {
  export const abci = { ..._698
  };
  export const crypto = { ..._699,
    ..._700
  };
  export namespace libs {
    export const bits = { ..._701
    };
  }
  export const p2p = { ..._702
  };
  export const types = { ..._703,
    ..._704,
    ..._705,
    ..._706,
    ..._707
  };
  export const version = { ..._708
  };
}