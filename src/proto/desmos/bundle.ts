import * as _286 from "./fees/v1/genesis";
import * as _287 from "./fees/v1/min_fee";
import * as _288 from "./fees/v1/params";
import * as _289 from "./fees/v1/query";
import * as _290 from "./posts/v1/models";
import * as _291 from "./posts/v2/genesis";
import * as _292 from "./posts/v2/models";
import * as _293 from "./posts/v2/msgs";
import * as _294 from "./posts/v2/query";
import * as _295 from "./profiles/v1beta1/models_app_links";
import * as _296 from "./profiles/v1beta1/models_chain_links";
import * as _297 from "./profiles/v1beta1/models_dtag_requests";
import * as _298 from "./profiles/v1beta1/models_profile";
import * as _299 from "./profiles/v1beta1/models_relationships";
import * as _300 from "./profiles/v2/models_app_links";
import * as _301 from "./profiles/v2/models_chain_links";
import * as _302 from "./profiles/v2/models_dtag_requests";
import * as _303 from "./profiles/v2/models_params";
import * as _304 from "./profiles/v2/models_profile";
import * as _305 from "./profiles/v3/genesis";
import * as _306 from "./profiles/v3/models_app_links";
import * as _307 from "./profiles/v3/models_chain_links";
import * as _308 from "./profiles/v3/models_dtag_requests";
import * as _309 from "./profiles/v3/models_packets";
import * as _310 from "./profiles/v3/models_params";
import * as _311 from "./profiles/v3/models_profile";
import * as _312 from "./profiles/v3/msg_server";
import * as _313 from "./profiles/v3/msgs_app_links";
import * as _314 from "./profiles/v3/msgs_chain_links";
import * as _315 from "./profiles/v3/msgs_dtag_requests";
import * as _316 from "./profiles/v3/msgs_profile";
import * as _317 from "./profiles/v3/query_app_links";
import * as _318 from "./profiles/v3/query_chain_links";
import * as _319 from "./profiles/v3/query_dtag_requests";
import * as _320 from "./profiles/v3/query_params";
import * as _321 from "./profiles/v3/query_profile";
import * as _322 from "./profiles/v3/query";
import * as _323 from "./reactions/v1/genesis";
import * as _324 from "./reactions/v1/models";
import * as _325 from "./reactions/v1/msgs";
import * as _326 from "./reactions/v1/query";
import * as _327 from "./relationships/v1/genesis";
import * as _328 from "./relationships/v1/models";
import * as _329 from "./relationships/v1/msgs";
import * as _330 from "./relationships/v1/query";
import * as _331 from "./reports/v1/genesis";
import * as _332 from "./reports/v1/models";
import * as _333 from "./reports/v1/msgs";
import * as _334 from "./reports/v1/query";
import * as _335 from "./subspaces/v1/models";
import * as _336 from "./subspaces/v2/authz/authz";
import * as _337 from "./subspaces/v3/genesis";
import * as _338 from "./subspaces/v3/models";
import * as _339 from "./subspaces/v3/msgs";
import * as _340 from "./subspaces/v3/query";
import * as _341 from "./supply/v1/query";
import * as _856 from "./posts/v2/msgs.amino";
import * as _857 from "./profiles/v3/msg_server.amino";
import * as _858 from "./reactions/v1/msgs.amino";
import * as _859 from "./relationships/v1/msgs.amino";
import * as _860 from "./reports/v1/msgs.amino";
import * as _861 from "./subspaces/v3/msgs.amino";
import * as _862 from "./posts/v2/msgs.registry";
import * as _863 from "./profiles/v3/msg_server.registry";
import * as _864 from "./reactions/v1/msgs.registry";
import * as _865 from "./relationships/v1/msgs.registry";
import * as _866 from "./reports/v1/msgs.registry";
import * as _867 from "./subspaces/v3/msgs.registry";
export namespace desmos {
  export namespace fees {
    export const v1 = { ..._286,
      ..._287,
      ..._288,
      ..._289
    };
  }
  export namespace posts {
    export const v1 = { ..._290
    };
    export const v2 = { ..._291,
      ..._292,
      ..._293,
      ..._294,
      ..._856,
      ..._862
    };
  }
  export namespace profiles {
    export const v1beta1 = { ..._295,
      ..._296,
      ..._297,
      ..._298,
      ..._299
    };
    export const v2 = { ..._300,
      ..._301,
      ..._302,
      ..._303,
      ..._304
    };
    export const v3 = { ..._305,
      ..._306,
      ..._307,
      ..._308,
      ..._309,
      ..._310,
      ..._311,
      ..._312,
      ..._313,
      ..._314,
      ..._315,
      ..._316,
      ..._317,
      ..._318,
      ..._319,
      ..._320,
      ..._321,
      ..._322,
      ..._857,
      ..._863
    };
  }
  export namespace reactions {
    export const v1 = { ..._323,
      ..._324,
      ..._325,
      ..._326,
      ..._858,
      ..._864
    };
  }
  export namespace relationships {
    export const v1 = { ..._327,
      ..._328,
      ..._329,
      ..._330,
      ..._859,
      ..._865
    };
  }
  export namespace reports {
    export const v1 = { ..._331,
      ..._332,
      ..._333,
      ..._334,
      ..._860,
      ..._866
    };
  }
  export namespace subspaces {
    export const v1 = { ..._335
    };
    export namespace v2 {
      export const authz = { ..._336
      };
    }
    export const v3 = { ..._337,
      ..._338,
      ..._339,
      ..._340,
      ..._861,
      ..._867
    };
  }
  export namespace supply {
    export const v1 = { ..._341
    };
  }
}