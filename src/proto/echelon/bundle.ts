import * as _274 from "./epochs/v1/genesis";
import * as _275 from "./epochs/v1/query";
import * as _276 from "./erc20/v1/erc20";
import * as _277 from "./erc20/v1/genesis";
import * as _278 from "./erc20/v1/query";
import * as _279 from "./erc20/v1/tx";
import * as _280 from "./incentives/v1/genesis";
import * as _281 from "./incentives/v1/incentives";
import * as _282 from "./incentives/v1/query";
import * as _283 from "./inflation/v1/genesis";
import * as _284 from "./inflation/v1/inflation";
import * as _285 from "./inflation/v1/query";
import * as _286 from "./recovery/v1/genesis";
import * as _287 from "./recovery/v1/query";
import * as _288 from "./vesting/v1/query";
import * as _289 from "./vesting/v1/tx";
import * as _290 from "./vesting/v1/vesting";
import * as _291 from "./vrf/v1/genesis";
import * as _292 from "./vrf/v1/query";
import * as _293 from "./vrf/v1/randomval";
import * as _294 from "./vrf/v1/tx";
import * as _295 from "./vrf/v1/userval";
import * as _779 from "./erc20/v1/tx.amino";
import * as _780 from "./vesting/v1/tx.amino";
import * as _781 from "./vrf/v1/tx.amino";
import * as _782 from "./erc20/v1/tx.registry";
import * as _783 from "./vesting/v1/tx.registry";
import * as _784 from "./vrf/v1/tx.registry";
export namespace echelon {
  export namespace epochs {
    export const v1 = { ..._274,
      ..._275
    };
  }
  export namespace erc20 {
    export const v1 = { ..._276,
      ..._277,
      ..._278,
      ..._279,
      ..._779,
      ..._782
    };
  }
  export namespace incentives {
    export const v1 = { ..._280,
      ..._281,
      ..._282
    };
  }
  export namespace inflation {
    export const v1 = { ..._283,
      ..._284,
      ..._285
    };
  }
  export namespace recovery {
    export const v1 = { ..._286,
      ..._287
    };
  }
  export namespace vesting {
    export const v1 = { ..._288,
      ..._289,
      ..._290,
      ..._780,
      ..._783
    };
  }
  export namespace vrf {
    export const v1 = { ..._291,
      ..._292,
      ..._293,
      ..._294,
      ..._295,
      ..._781,
      ..._784
    };
  }
}