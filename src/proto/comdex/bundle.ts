import * as _135 from "./asset/v1beta1/asset";
import * as _136 from "./asset/v1beta1/events";
import * as _137 from "./asset/v1beta1/genesis";
import * as _138 from "./asset/v1beta1/gov";
import * as _139 from "./asset/v1beta1/msg";
import * as _140 from "./asset/v1beta1/pair";
import * as _141 from "./asset/v1beta1/params";
import * as _142 from "./asset/v1beta1/querier";
import * as _143 from "./oracle/v1beta1/genesis";
import * as _144 from "./oracle/v1beta1/gov";
import * as _145 from "./oracle/v1beta1/msg";
import * as _146 from "./oracle/v1beta1/oracle";
import * as _147 from "./oracle/v1beta1/params";
import * as _148 from "./oracle/v1beta1/querier";
import * as _149 from "./vault/v1beta1/events";
import * as _150 from "./vault/v1beta1/genesis";
import * as _151 from "./vault/v1beta1/msg";
import * as _152 from "./vault/v1beta1/querier";
import * as _153 from "./vault/v1beta1/vault";
export namespace comdex {
  export namespace asset {
    export const v1beta1 = { ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._142
    };
  }
  export namespace oracle {
    export const v1beta1 = { ..._143,
      ..._144,
      ..._145,
      ..._146,
      ..._147,
      ..._148
    };
  }
  export namespace vault {
    export const v1beta1 = { ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._153
    };
  }
}