import * as _67 from "./asset/v1beta1/asset";
import * as _68 from "./asset/v1beta1/events";
import * as _69 from "./asset/v1beta1/genesis";
import * as _70 from "./asset/v1beta1/gov";
import * as _71 from "./asset/v1beta1/msg";
import * as _72 from "./asset/v1beta1/pair";
import * as _73 from "./asset/v1beta1/params";
import * as _74 from "./asset/v1beta1/querier";
import * as _75 from "./oracle/v1beta1/genesis";
import * as _76 from "./oracle/v1beta1/gov";
import * as _77 from "./oracle/v1beta1/msg";
import * as _78 from "./oracle/v1beta1/oracle";
import * as _79 from "./oracle/v1beta1/params";
import * as _80 from "./oracle/v1beta1/querier";
import * as _81 from "./vault/v1beta1/events";
import * as _82 from "./vault/v1beta1/genesis";
import * as _83 from "./vault/v1beta1/msg";
import * as _84 from "./vault/v1beta1/querier";
import * as _85 from "./vault/v1beta1/vault";
export namespace comdex {
  export namespace asset {
    export const v1beta1 = { ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._74
    };
  }
  export namespace oracle {
    export const v1beta1 = { ..._75,
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._80
    };
  }
  export namespace vault {
    export const v1beta1 = { ..._81,
      ..._82,
      ..._83,
      ..._84,
      ..._85
    };
  }
}