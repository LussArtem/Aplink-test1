import $ from "jquery";
import incrementDecrement from "./incrementDecrement";
export default function customCalcl() {
    $(document).ready(function () {
        // price
        var basePricePvhWhite = 1390;
        var basePricePvhColored = 1600;
        var basePriceTextileWhite = 2250;
        var cornerPrice = 100;

        var $form = $("form");
        var $corners = $form.find('[data-name="corner"]');
        var $squares = $form.find('[data-name="square"]');
        var $resultPrint = $form.find(".js-sum");

        var $inputs = $form.find("input");
        var $selects = $form.find("select");

        function updateValue($selectors) {
            $selectors.on("input", function () {
                setTimeout(calculatePrice, 1);
            });
        }
        incrementDecrement();
        updateValue($inputs);
        updateValue($selects);

        function calculatePrice() {
            var cornerTotal = 0;
            var squarePrice = 1;
            var arr = [];

            $corners.each(function () {
                $(this).val()
                    ? (cornerTotal += cornerPrice * parseInt($(this).val()))
                    : (cornerTotal = 0);
            });

            var basePrice = 0;
            $selects.each(function () {
                arr.unshift($(this).val());
                if (arr.join() === "white,PVH") {
                    basePrice = basePricePvhWhite;
                } else if (arr.join() === "colored,PVH") {
                    basePrice = basePricePvhColored;
                } else if (arr.join() === "white,textile") {
                    basePrice = basePriceTextileWhite;
                }
            });

            $squares.each(function () {
                $(this).val()
                    ? (squarePrice = basePrice * parseInt($(this).val()))
                    : (squarePrice = basePricePvhWhite * 10);
            });

            var totalPrice = cornerTotal + squarePrice;
            var formatter = new Intl.NumberFormat("ru");
            $resultPrint.html(formatter.format(totalPrice));
        }
    });
}

// export default function customCalcl() {
//     // price
//     const basePricePvhWhite = 1390;
//     const basePricePvhColored = 1600;
//     const basePriceTextileWhite = 2250;
//     const cornerPrice = 100;

//     const form = document.querySelector("form");
//     const corners = form.querySelectorAll("[data-name=corner]");
//     const squares = form.querySelectorAll("[data-name=square]");
//     const resultPrint = form.querySelector(".js-sum");

//     const inputs = form.querySelectorAll("input");
//     const selects = form.querySelectorAll("select");

//     function updateValue(selectors) {
//         selectors.forEach(function (selector) {
//             selector.addEventListener("input", function () {
//                 setTimeout(calculatePrice, 1);
//             });
//         });
//     }
//     incrementDecrement();
//     updateValue(inputs);
//     updateValue(selects);

//     function calculatePrice() {
//         let cornerTotal = 0;
//         let squarePrice = 1;
//         const arr = [];
//         // console.log(isNaN(parseInt(corner.value)));

//         for (const corner of corners) {
//             isNaN(parseInt(corner.value))
//                 ? (cornerTotal = cornerPrice * 1)
//                 : (cornerTotal = cornerPrice * parseInt(corner.value));
//         }
//         // console.log(cornerTotal);
//         // for (const corner of corners) {
//         //     corner.value
//         //         ? (cornerTotal = cornerPrice * parseInt(corner.value))
//         //         : (cornerTotal = 0);
//         // }
//         let basePrice = 0;

//         for (const select of selects) {
//             arr.unshift(select.value);
//             if (arr.join() === "white,PVH") {
//                 basePrice = basePricePvhWhite;
//             } else if (arr.join() === "colored,PVH") {
//                 basePrice = basePricePvhColored;
//             } else if (arr.join() === "white,textile") {
//                 basePrice = basePriceTextileWhite;
//             }
//         }
//         for (const square of squares) {
//             square.value
//                 ? (squarePrice = basePrice * parseInt(square.value))
//                 : (squarePrice = basePricePvhWhite * 1);
//         }
//         console.log(corner.value);

//         let totalPrice = cornerTotal + squarePrice;
//         const formatter = new Intl.NumberFormat("ru");
//         resultPrint.innerText = formatter.format(totalPrice);
//     }
// }
