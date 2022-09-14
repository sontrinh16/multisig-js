import * as _254 from "./bandwidth/v1beta1/genesis";
import * as _255 from "./bandwidth/v1beta1/query";
import * as _256 from "./bandwidth/v1beta1/types";
import * as _257 from "./base/query/v1beta1/pagination";
import * as _258 from "./dmn/v1beta1/genesis";
import * as _259 from "./dmn/v1beta1/query";
import * as _260 from "./dmn/v1beta1/tx";
import * as _261 from "./dmn/v1beta1/types";
import * as _262 from "./graph/v1beta1/query";
import * as _263 from "./graph/v1beta1/tx";
import * as _264 from "./graph/v1beta1/types";
import * as _265 from "./grid/v1beta1/genesis";
import * as _266 from "./grid/v1beta1/query";
import * as _267 from "./grid/v1beta1/tx";
import * as _268 from "./grid/v1beta1/types";
import * as _269 from "./rank/v1beta1/genesis";
import * as _270 from "./rank/v1beta1/query";
import * as _271 from "./rank/v1beta1/types";
import * as _272 from "./resources/v1beta1/genesis";
import * as _273 from "./resources/v1beta1/query";
import * as _274 from "./resources/v1beta1/tx";
import * as _275 from "./resources/v1beta1/types";
import * as _844 from "./dmn/v1beta1/tx.amino";
import * as _845 from "./graph/v1beta1/tx.amino";
import * as _846 from "./grid/v1beta1/tx.amino";
import * as _847 from "./resources/v1beta1/tx.amino";
import * as _848 from "./dmn/v1beta1/tx.registry";
import * as _849 from "./graph/v1beta1/tx.registry";
import * as _850 from "./grid/v1beta1/tx.registry";
import * as _851 from "./resources/v1beta1/tx.registry";
export namespace cyber {
  export namespace bandwidth {
    export const v1beta1 = { ..._254,
      ..._255,
      ..._256
    };
  }
  export namespace base {
    export namespace query {
      export const v1beta1 = { ..._257
      };
    }
  }
  export namespace dmn {
    export const v1beta1 = { ..._258,
      ..._259,
      ..._260,
      ..._261,
      ..._844,
      ..._848
    };
  }
  export namespace graph {
    export const v1beta1 = { ..._262,
      ..._263,
      ..._264,
      ..._845,
      ..._849
    };
  }
  export namespace grid {
    export const v1beta1 = { ..._265,
      ..._266,
      ..._267,
      ..._268,
      ..._846,
      ..._850
    };
  }
  export namespace rank {
    export const v1beta1 = { ..._269,
      ..._270,
      ..._271
    };
  }
  export namespace resources {
    export const v1beta1 = { ..._272,
      ..._273,
      ..._274,
      ..._275,
      ..._847,
      ..._851
    };
  }
}