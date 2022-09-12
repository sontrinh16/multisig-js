import * as _186 from "./bandwidth/v1beta1/genesis";
import * as _187 from "./bandwidth/v1beta1/query";
import * as _188 from "./bandwidth/v1beta1/types";
import * as _189 from "./base/query/v1beta1/pagination";
import * as _190 from "./dmn/v1beta1/genesis";
import * as _191 from "./dmn/v1beta1/query";
import * as _192 from "./dmn/v1beta1/tx";
import * as _193 from "./dmn/v1beta1/types";
import * as _194 from "./graph/v1beta1/query";
import * as _195 from "./graph/v1beta1/tx";
import * as _196 from "./graph/v1beta1/types";
import * as _197 from "./grid/v1beta1/genesis";
import * as _198 from "./grid/v1beta1/query";
import * as _199 from "./grid/v1beta1/tx";
import * as _200 from "./grid/v1beta1/types";
import * as _201 from "./rank/v1beta1/genesis";
import * as _202 from "./rank/v1beta1/query";
import * as _203 from "./rank/v1beta1/types";
import * as _204 from "./resources/v1beta1/genesis";
import * as _205 from "./resources/v1beta1/query";
import * as _206 from "./resources/v1beta1/tx";
import * as _207 from "./resources/v1beta1/types";
import * as _774 from "./dmn/v1beta1/tx.amino";
import * as _775 from "./graph/v1beta1/tx.amino";
import * as _776 from "./grid/v1beta1/tx.amino";
import * as _777 from "./resources/v1beta1/tx.amino";
import * as _778 from "./dmn/v1beta1/tx.registry";
import * as _779 from "./graph/v1beta1/tx.registry";
import * as _780 from "./grid/v1beta1/tx.registry";
import * as _781 from "./resources/v1beta1/tx.registry";
export namespace cyber {
  export namespace bandwidth {
    export const v1beta1 = { ..._186,
      ..._187,
      ..._188
    };
  }
  export namespace base {
    export namespace query {
      export const v1beta1 = { ..._189
      };
    }
  }
  export namespace dmn {
    export const v1beta1 = { ..._190,
      ..._191,
      ..._192,
      ..._193,
      ..._774,
      ..._778
    };
  }
  export namespace graph {
    export const v1beta1 = { ..._194,
      ..._195,
      ..._196,
      ..._775,
      ..._779
    };
  }
  export namespace grid {
    export const v1beta1 = { ..._197,
      ..._198,
      ..._199,
      ..._200,
      ..._776,
      ..._780
    };
  }
  export namespace rank {
    export const v1beta1 = { ..._201,
      ..._202,
      ..._203
    };
  }
  export namespace resources {
    export const v1beta1 = { ..._204,
      ..._205,
      ..._206,
      ..._207,
      ..._777,
      ..._781
    };
  }
}