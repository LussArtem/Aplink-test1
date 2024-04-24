import $ from "jquery";

import customInput from "./component/customInput";
import customCalc from "./component/customCalc";
import fancyboxModal from "./lib/fancyboxModal";

addEventListener("DOMContentLoaded", () => {
    customInput();
    customCalc();
    fancyboxModal();
});
