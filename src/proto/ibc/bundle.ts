import * as _407 from "./applications/transfer/v1/genesis";
import * as _408 from "./applications/transfer/v1/query";
import * as _409 from "./applications/transfer/v1/transfer";
import * as _410 from "./applications/transfer/v1/tx";
import * as _411 from "./applications/transfer/v2/packet";
import * as _412 from "./core/channel/v1/channel";
import * as _413 from "./core/channel/v1/genesis";
import * as _414 from "./core/channel/v1/query";
import * as _415 from "./core/channel/v1/tx";
import * as _416 from "./core/client/v1/client";
import * as _417 from "./core/client/v1/genesis";
import * as _418 from "./core/client/v1/query";
import * as _419 from "./core/client/v1/tx";
import * as _420 from "./core/commitment/v1/commitment";
import * as _421 from "./core/connection/v1/connection";
import * as _422 from "./core/connection/v1/genesis";
import * as _423 from "./core/connection/v1/query";
import * as _424 from "./core/connection/v1/tx";
import * as _425 from "./core/port/v1/query";
import * as _426 from "./core/types/v1/genesis";
import * as _427 from "./lightclients/localhost/v1/localhost";
import * as _428 from "./lightclients/solomachine/v1/solomachine";
import * as _429 from "./lightclients/solomachine/v2/solomachine";
import * as _430 from "./lightclients/tendermint/v1/tendermint";
import * as _882 from "./applications/transfer/v1/tx.amino";
import * as _883 from "./core/channel/v1/tx.amino";
import * as _884 from "./core/client/v1/tx.amino";
import * as _885 from "./core/connection/v1/tx.amino";
import * as _886 from "./applications/transfer/v1/tx.registry";
import * as _887 from "./core/channel/v1/tx.registry";
import * as _888 from "./core/client/v1/tx.registry";
import * as _889 from "./core/connection/v1/tx.registry";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._407,
        ..._408,
        ..._409,
        ..._410,
        ..._882,
        ..._886
      };
      export const v2 = { ..._411
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._412,
        ..._413,
        ..._414,
        ..._415,
        ..._883,
        ..._887
      };
    }
    export namespace client {
      export const v1 = { ..._416,
        ..._417,
        ..._418,
        ..._419,
        ..._884,
        ..._888
      };
    }
    export namespace commitment {
      export const v1 = { ..._420
      };
    }
    export namespace connection {
      export const v1 = { ..._421,
        ..._422,
        ..._423,
        ..._424,
        ..._885,
        ..._889
      };
    }
    export namespace port {
      export const v1 = { ..._425
      };
    }
    export namespace types {
      export const v1 = { ..._426
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._427
      };
    }
    export namespace solomachine {
      export const v1 = { ..._428
      };
      export const v2 = { ..._429
      };
    }
    export namespace tendermint {
      export const v1 = { ..._430
      };
    }
  }
}