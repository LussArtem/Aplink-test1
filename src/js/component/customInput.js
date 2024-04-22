export default function customInput() {
    function blockOptions(selectWithOptionsToBlock, dependentSelect) {
        function isDependentOptionSelected() {
            return dependentSelect.value !== "textile";
        }

        dependentSelect.addEventListener("change", function () {
            if (isDependentOptionSelected()) {
                selectWithOptionsToBlock
                    .querySelectorAll("option")
                    .forEach(function (option) {
                        // console.log(option);
                        option.disabled = false;
                    });
            } else {
                selectWithOptionsToBlock
                    .querySelectorAll("option")
                    .forEach(function (option) {
                        if (option.value === "colored") {
                            option.disabled = true;
                            selectWithOptionsToBlock.value = "white";
                        }
                    });
            }
        });
        if (!isDependentOptionSelected()) {
            selectWithOptionsToBlock
                .querySelectorAll("option")
                .forEach(function (option) {
                    option.disabled = true;
                });
        }
    }
    const select1 = document.getElementById("material");
    const select2 = document.getElementById("color");

    blockOptions(select2, select1);
}
