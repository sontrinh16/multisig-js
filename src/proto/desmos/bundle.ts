import * as _218 from "./fees/v1/genesis";
import * as _219 from "./fees/v1/min_fee";
import * as _220 from "./fees/v1/params";
import * as _221 from "./fees/v1/query";
import * as _222 from "./posts/v1/models";
import * as _223 from "./posts/v2/genesis";
import * as _224 from "./posts/v2/models";
import * as _225 from "./posts/v2/msgs";
import * as _226 from "./posts/v2/query";
import * as _227 from "./profiles/v1beta1/models_app_links";
import * as _228 from "./profiles/v1beta1/models_chain_links";
import * as _229 from "./profiles/v1beta1/models_dtag_requests";
import * as _230 from "./profiles/v1beta1/models_profile";
import * as _231 from "./profiles/v1beta1/models_relationships";
import * as _232 from "./profiles/v2/models_app_links";
import * as _233 from "./profiles/v2/models_chain_links";
import * as _234 from "./profiles/v2/models_dtag_requests";
import * as _235 from "./profiles/v2/models_params";
import * as _236 from "./profiles/v2/models_profile";
import * as _237 from "./profiles/v3/genesis";
import * as _238 from "./profiles/v3/models_app_links";
import * as _239 from "./profiles/v3/models_chain_links";
import * as _240 from "./profiles/v3/models_dtag_requests";
import * as _241 from "./profiles/v3/models_packets";
import * as _242 from "./profiles/v3/models_params";
import * as _243 from "./profiles/v3/models_profile";
import * as _244 from "./profiles/v3/msg_server";
import * as _245 from "./profiles/v3/msgs_app_links";
import * as _246 from "./profiles/v3/msgs_chain_links";
import * as _247 from "./profiles/v3/msgs_dtag_requests";
import * as _248 from "./profiles/v3/msgs_profile";
import * as _249 from "./profiles/v3/query_app_links";
import * as _250 from "./profiles/v3/query_chain_links";
import * as _251 from "./profiles/v3/query_dtag_requests";
import * as _252 from "./profiles/v3/query_params";
import * as _253 from "./profiles/v3/query_profile";
import * as _254 from "./profiles/v3/query";
import * as _255 from "./reactions/v1/genesis";
import * as _256 from "./reactions/v1/models";
import * as _257 from "./reactions/v1/msgs";
import * as _258 from "./reactions/v1/query";
import * as _259 from "./relationships/v1/genesis";
import * as _260 from "./relationships/v1/models";
import * as _261 from "./relationships/v1/msgs";
import * as _262 from "./relationships/v1/query";
import * as _263 from "./reports/v1/genesis";
import * as _264 from "./reports/v1/models";
import * as _265 from "./reports/v1/msgs";
import * as _266 from "./reports/v1/query";
import * as _267 from "./subspaces/v1/models";
import * as _268 from "./subspaces/v2/authz/authz";
import * as _269 from "./subspaces/v3/genesis";
import * as _270 from "./subspaces/v3/models";
import * as _271 from "./subspaces/v3/msgs";
import * as _272 from "./subspaces/v3/query";
import * as _273 from "./supply/v1/query";
import * as _786 from "./posts/v2/msgs.amino";
import * as _787 from "./profiles/v3/msg_server.amino";
import * as _788 from "./reactions/v1/msgs.amino";
import * as _789 from "./relationships/v1/msgs.amino";
import * as _790 from "./reports/v1/msgs.amino";
import * as _791 from "./subspaces/v3/msgs.amino";
import * as _792 from "./posts/v2/msgs.registry";
import * as _793 from "./profiles/v3/msg_server.registry";
import * as _794 from "./reactions/v1/msgs.registry";
import * as _795 from "./relationships/v1/msgs.registry";
import * as _796 from "./reports/v1/msgs.registry";
import * as _797 from "./subspaces/v3/msgs.registry";
export namespace desmos {
  export namespace fees {
    export const v1 = { ..._218,
      ..._219,
      ..._220,
      ..._221
    };
  }
  export namespace posts {
    export const v1 = { ..._222
    };
    export const v2 = { ..._223,
      ..._224,
      ..._225,
      ..._226,
      ..._786,
      ..._792
    };
  }
  export namespace profiles {
    export const v1beta1 = { ..._227,
      ..._228,
      ..._229,
      ..._230,
      ..._231
    };
    export const v2 = { ..._232,
      ..._233,
      ..._234,
      ..._235,
      ..._236
    };
    export const v3 = { ..._237,
      ..._238,
      ..._239,
      ..._240,
      ..._241,
      ..._242,
      ..._243,
      ..._244,
      ..._245,
      ..._246,
      ..._247,
      ..._248,
      ..._249,
      ..._250,
      ..._251,
      ..._252,
      ..._253,
      ..._254,
      ..._787,
      ..._793
    };
  }
  export namespace reactions {
    export const v1 = { ..._255,
      ..._256,
      ..._257,
      ..._258,
      ..._788,
      ..._794
    };
  }
  export namespace relationships {
    export const v1 = { ..._259,
      ..._260,
      ..._261,
      ..._262,
      ..._789,
      ..._795
    };
  }
  export namespace reports {
    export const v1 = { ..._263,
      ..._264,
      ..._265,
      ..._266,
      ..._790,
      ..._796
    };
  }
  export namespace subspaces {
    export const v1 = { ..._267
    };
    export namespace v2 {
      export const authz = { ..._268
      };
    }
    export const v3 = { ..._269,
      ..._270,
      ..._271,
      ..._272,
      ..._791,
      ..._797
    };
  }
  export namespace supply {
    export const v1 = { ..._273
    };
  }
}