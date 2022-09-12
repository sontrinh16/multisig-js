import * as _611 from "./deposit/v1/deposit";
import * as _612 from "./deposit/v1/events";
import * as _613 from "./deposit/v1/querier";
import * as _614 from "./mint/v1/genesis";
import * as _615 from "./mint/v1/inflation";
import * as _616 from "./node/v1/events";
import * as _617 from "./node/v1/genesis";
import * as _618 from "./node/v1/msg";
import * as _619 from "./node/v1/node";
import * as _620 from "./node/v1/params";
import * as _621 from "./node/v1/querier";
import * as _622 from "./plan/v1/events";
import * as _623 from "./plan/v1/genesis";
import * as _624 from "./plan/v1/msg";
import * as _625 from "./plan/v1/plan";
import * as _626 from "./plan/v1/querier";
import * as _627 from "./provider/v1/events";
import * as _628 from "./provider/v1/genesis";
import * as _629 from "./provider/v1/msg";
import * as _630 from "./provider/v1/params";
import * as _631 from "./provider/v1/provider";
import * as _632 from "./provider/v1/querier";
import * as _633 from "./session/v1/events";
import * as _634 from "./session/v1/genesis";
import * as _635 from "./session/v1/msg";
import * as _636 from "./session/v1/params";
import * as _637 from "./session/v1/proof";
import * as _638 from "./session/v1/querier";
import * as _639 from "./session/v1/session";
import * as _640 from "./subscription/v1/events";
import * as _641 from "./subscription/v1/genesis";
import * as _642 from "./subscription/v1/msg";
import * as _643 from "./subscription/v1/params";
import * as _644 from "./subscription/v1/querier";
import * as _645 from "./subscription/v1/quota";
import * as _646 from "./subscription/v1/subscription";
import * as _647 from "./swap/v1/events";
import * as _648 from "./swap/v1/genesis";
import * as _649 from "./swap/v1/msg";
import * as _650 from "./swap/v1/params";
import * as _651 from "./swap/v1/querier";
import * as _652 from "./swap/v1/swap";
import * as _653 from "./types/v1/bandwidth";
import * as _654 from "./types/v1/status";
import * as _655 from "./vpn/v1/genesis";
export namespace sentinel {
  export namespace deposit {
    export const v1 = { ..._611,
      ..._612,
      ..._613
    };
  }
  export namespace mint {
    export const v1 = { ..._614,
      ..._615
    };
  }
  export namespace node {
    export const v1 = { ..._616,
      ..._617,
      ..._618,
      ..._619,
      ..._620,
      ..._621
    };
  }
  export namespace plan {
    export const v1 = { ..._622,
      ..._623,
      ..._624,
      ..._625,
      ..._626
    };
  }
  export namespace provider {
    export const v1 = { ..._627,
      ..._628,
      ..._629,
      ..._630,
      ..._631,
      ..._632
    };
  }
  export namespace session {
    export const v1 = { ..._633,
      ..._634,
      ..._635,
      ..._636,
      ..._637,
      ..._638,
      ..._639
    };
  }
  export namespace subscription {
    export const v1 = { ..._640,
      ..._641,
      ..._642,
      ..._643,
      ..._644,
      ..._645,
      ..._646
    };
  }
  export namespace swap {
    export const v1 = { ..._647,
      ..._648,
      ..._649,
      ..._650,
      ..._651,
      ..._652
    };
  }
  export namespace types {
    export const v1 = { ..._653,
      ..._654
    };
  }
  export namespace vpn {
    export const v1 = { ..._655
    };
  }
}