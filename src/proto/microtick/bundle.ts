import * as _534 from "./v1beta1/keeper/CommissionPool";
import * as _535 from "./v1beta1/keeper/DataAccountStatus";
import * as _536 from "./v1beta1/keeper/DataActiveQuote";
import * as _537 from "./v1beta1/keeper/DataActiveTrade";
import * as _538 from "./v1beta1/keeper/DataMarket";
import * as _539 from "./v1beta1/keeper/InternalDuration";
import * as _540 from "./v1beta1/keeper/OrderedList";
import * as _541 from "./v1beta1/msg/GRPC";
import * as _542 from "./v1beta1/msg/Proposal";
import * as _543 from "./v1beta1/msg/QueryAccount";
import * as _544 from "./v1beta1/msg/QueryConsensus";
import * as _545 from "./v1beta1/msg/QueryMarket";
import * as _546 from "./v1beta1/msg/QueryOrderBook";
import * as _547 from "./v1beta1/msg/QueryParams";
import * as _548 from "./v1beta1/msg/QueryQuote";
import * as _549 from "./v1beta1/msg/QuerySynthetic";
import * as _550 from "./v1beta1/msg/QueryTrade";
import * as _551 from "./v1beta1/msg/TxCancel";
import * as _552 from "./v1beta1/msg/TxCreate";
import * as _553 from "./v1beta1/msg/TxDeposit";
import * as _554 from "./v1beta1/msg/TxPick";
import * as _555 from "./v1beta1/msg/TxSettle";
import * as _556 from "./v1beta1/msg/TxTrade";
import * as _557 from "./v1beta1/msg/TxUpdate";
import * as _558 from "./v1beta1/msg/TxWithdraw";
import * as _559 from "./v1beta1/types/Genesis";
import * as _560 from "./v1beta1/types/Params";
export namespace microtick {
  export const keeper = { ..._534,
    ..._535,
    ..._536,
    ..._537,
    ..._538,
    ..._539,
    ..._540
  };
  export namespace v1beta1 {
    export const msg = { ..._541,
      ..._542,
      ..._543,
      ..._544,
      ..._545,
      ..._546,
      ..._547,
      ..._548,
      ..._549,
      ..._550,
      ..._551,
      ..._552,
      ..._553,
      ..._554,
      ..._555,
      ..._556,
      ..._557,
      ..._558
    };
  }
  export const types = { ..._559,
    ..._560
  };
}