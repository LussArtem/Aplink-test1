import $ from "jquery";

import customInput from "./component/customInput";
import customCalc from "./component/customCalc";
import incrementDecrement from "./component/incrementDecrement";

addEventListener("DOMContentLoaded", () => {
    customInput();
    customCalc();
    incrementDecrement();
});
