const nametEl = document.querySelector("#name");
const weightEl = document.querySelector("#weight");
const heightEl = document.querySelector("#height");
const calcEl = document.querySelector("#calc");
const bmiEl = document.querySelector("#result .bmi");

console.log(nametEl, weightEl, heightEl, calcEl);

calcEl.addEventListener("click", () => {
    let name = nametEl.value;
    let weight = weightEl.value;
    let height = heightEl.value;


    let bmi = getBmi(height, weight);
    if (bmi == Infinity || isNaN(bmi)) {
        bmiEl.innerText = "輸入錯誤";

        return;
    }

    // alert(`${name} bmi=${bmi}`);
    console.log(bmi);
    bmiEl.innerText = bmi;
});


function getBmi(height, weight, point = 2) {
    return (weight / (height / 100) ** 2).toFixed(point);
}



