import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function fancyboxModal() {
    Fancybox.bind("[data-fancybox]", {
        dragToClose: false,
    });
}
