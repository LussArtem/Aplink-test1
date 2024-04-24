import customCalcl from "./customCalc";

export default function increment() {
    const corner1 = document.querySelector("[data-name=corner]");

    const inputElement = document
        .querySelector("[data-plus]")
        .closest(".custom-input")
        .querySelector("input");

    const buttons = document.querySelectorAll("[data-plus], [data-minus]");

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault(); // Добавлено предотвращение стандартного поведения формы

            if (e.currentTarget.matches("[data-plus]")) {
                // Используем matches вместо closest для проверки тега
                inputElement.dispatchEvent(new Event("input"));
                // inputElement.dispatchEvent(new Event("change"));
                e.target
                    .closest(".custom-input")
                    .querySelector("input")
                    .stepUp(1);
            }
            if (e.currentTarget.matches("[data-minus]")) {
                inputElement.dispatchEvent(new Event("input"));
                // inputElement.dispatchEvent(new Event("change"));
                e.target
                    .closest(".custom-input")
                    .querySelector("input")
                    .stepDown(1);
            }
        });
    });
}
