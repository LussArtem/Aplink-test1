import customCalc from "./customCalc";
export default function increment() {
    const inputElement = document
        .querySelector("[data-plus]")
        .closest(".custom-input")
        .querySelector("input");

    document.querySelector("form").addEventListener("click", (e) => {
        if (e.target.closest("[data-plus]")) {
            inputElement.dispatchEvent(new Event("input"));
            e.target.closest(".custom-input").querySelector("input").stepUp();
        }
        if (e.target.closest("[data-minus]")) {
            inputElement.dispatchEvent(new Event("input"));
            e.target.closest(".custom-input").querySelector("input").stepDown();
        }
    });

    // inp.dispatchEvent(new Event("input"));

    // inp.dispatchEvent(new Event("change"));
}
