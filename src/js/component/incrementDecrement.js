import customCalc from "./customCalc";

export default function increment() {
    const inputElement = document
        .querySelector("[data-plus]")
        .closest(".custom-input")
        .querySelector("input");

    const buttons = document.querySelectorAll("[data-plus], [data-minus]");

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault(); // Добавлено предотвращение стандартного поведения формы
            console.log(
                e.target.closest(".custom-input"),
                e.currentTarget.closest(".custom-input")
            );
            if (e.currentTarget.matches("[data-plus]")) {
                // Используем matches вместо closest для проверки тега
                inputElement.dispatchEvent(new Event("input"));
                e.target
                    .closest(".custom-input")
                    .querySelector("input")
                    .stepUp(1);
                console.log(inputElement.value);
            }
            if (e.currentTarget.matches("[data-minus]")) {
                inputElement.dispatchEvent(new Event("input"));
                e.target
                    .closest(".custom-input")
                    .querySelector("input")
                    .stepDown(1);
                console.log(inputElement.value);
            }
        });
    });
}
