import * as _339 from "./applications/transfer/v1/genesis";
import * as _340 from "./applications/transfer/v1/query";
import * as _341 from "./applications/transfer/v1/transfer";
import * as _342 from "./applications/transfer/v1/tx";
import * as _343 from "./applications/transfer/v2/packet";
import * as _344 from "./core/channel/v1/channel";
import * as _345 from "./core/channel/v1/genesis";
import * as _346 from "./core/channel/v1/query";
import * as _347 from "./core/channel/v1/tx";
import * as _348 from "./core/client/v1/client";
import * as _349 from "./core/client/v1/genesis";
import * as _350 from "./core/client/v1/query";
import * as _351 from "./core/client/v1/tx";
import * as _352 from "./core/commitment/v1/commitment";
import * as _353 from "./core/connection/v1/connection";
import * as _354 from "./core/connection/v1/genesis";
import * as _355 from "./core/connection/v1/query";
import * as _356 from "./core/connection/v1/tx";
import * as _357 from "./core/port/v1/query";
import * as _358 from "./core/types/v1/genesis";
import * as _359 from "./lightclients/localhost/v1/localhost";
import * as _360 from "./lightclients/solomachine/v1/solomachine";
import * as _361 from "./lightclients/solomachine/v2/solomachine";
import * as _362 from "./lightclients/tendermint/v1/tendermint";
import * as _793 from "./applications/transfer/v1/tx.amino";
import * as _794 from "./core/channel/v1/tx.amino";
import * as _795 from "./core/client/v1/tx.amino";
import * as _796 from "./core/connection/v1/tx.amino";
import * as _797 from "./applications/transfer/v1/tx.registry";
import * as _798 from "./core/channel/v1/tx.registry";
import * as _799 from "./core/client/v1/tx.registry";
import * as _800 from "./core/connection/v1/tx.registry";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._339,
        ..._340,
        ..._341,
        ..._342,
        ..._793,
        ..._797
      };
      export const v2 = { ..._343
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._344,
        ..._345,
        ..._346,
        ..._347,
        ..._794,
        ..._798
      };
    }
    export namespace client {
      export const v1 = { ..._348,
        ..._349,
        ..._350,
        ..._351,
        ..._795,
        ..._799
      };
    }
    export namespace commitment {
      export const v1 = { ..._352
      };
    }
    export namespace connection {
      export const v1 = { ..._353,
        ..._354,
        ..._355,
        ..._356,
        ..._796,
        ..._800
      };
    }
    export namespace port {
      export const v1 = { ..._357
      };
    }
    export namespace types {
      export const v1 = { ..._358
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._359
      };
    }
    export namespace solomachine {
      export const v1 = { ..._360
      };
      export const v2 = { ..._361
      };
    }
    export namespace tendermint {
      export const v1 = { ..._362
      };
    }
  }
}