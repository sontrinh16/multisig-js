import * as _724 from "./admin/v1/query";
import * as _725 from "./admin/v1/tx";
import * as _726 from "./admin/v1/types";
import * as _727 from "./clp/v1/genesis";
import * as _728 from "./clp/v1/params";
import * as _729 from "./clp/v1/pool";
import * as _730 from "./clp/v1/querier";
import * as _731 from "./clp/v1/tx";
import * as _732 from "./clp/v1/types";
import * as _733 from "./dispensation/v1/query";
import * as _734 from "./dispensation/v1/tx";
import * as _735 from "./dispensation/v1/types";
import * as _736 from "./ethbridge/v1/query";
import * as _737 from "./ethbridge/v1/tx";
import * as _738 from "./ethbridge/v1/types";
import * as _739 from "./margin/v1/query";
import * as _740 from "./margin/v1/tx";
import * as _741 from "./margin/v1/types";
import * as _742 from "./oracle/v1/types";
import * as _743 from "./tokenregistry/v1/query";
import * as _744 from "./tokenregistry/v1/tx";
import * as _745 from "./tokenregistry/v1/types";
import * as _960 from "./admin/v1/tx.amino";
import * as _961 from "./clp/v1/tx.amino";
import * as _962 from "./dispensation/v1/tx.amino";
import * as _963 from "./ethbridge/v1/tx.amino";
import * as _964 from "./margin/v1/tx.amino";
import * as _965 from "./tokenregistry/v1/tx.amino";
import * as _966 from "./admin/v1/tx.registry";
import * as _967 from "./clp/v1/tx.registry";
import * as _968 from "./dispensation/v1/tx.registry";
import * as _969 from "./ethbridge/v1/tx.registry";
import * as _970 from "./margin/v1/tx.registry";
import * as _971 from "./tokenregistry/v1/tx.registry";
export namespace sifnode {
  export namespace admin {
    export const v1 = { ..._724,
      ..._725,
      ..._726,
      ..._960,
      ..._966
    };
  }
  export namespace clp {
    export const v1 = { ..._727,
      ..._728,
      ..._729,
      ..._730,
      ..._731,
      ..._732,
      ..._961,
      ..._967
    };
  }
  export namespace dispensation {
    export const v1 = { ..._733,
      ..._734,
      ..._735,
      ..._962,
      ..._968
    };
  }
  export namespace ethbridge {
    export const v1 = { ..._736,
      ..._737,
      ..._738,
      ..._963,
      ..._969
    };
  }
  export namespace margin {
    export const v1 = { ..._739,
      ..._740,
      ..._741,
      ..._964,
      ..._970
    };
  }
  export namespace oracle {
    export const v1 = { ..._742
    };
  }
  export namespace tokenregistry {
    export const v1 = { ..._743,
      ..._744,
      ..._745,
      ..._965,
      ..._971
    };
  }
}