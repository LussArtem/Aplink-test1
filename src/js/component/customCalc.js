import $ from "jquery";
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
                calculatePrice();
            });
        }

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
                    : (squarePrice = basePricePvhWhite * 1);
            });

            var totalPrice = cornerTotal + squarePrice;
            var formatter = new Intl.NumberFormat("ru");
            $resultPrint.html(formatter.format(totalPrice) + " руб.");
        }
    });
}
