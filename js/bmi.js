const weightEl = document.querySelector("#weight");
const heightEl = document.querySelector("#height");
const calcEl = document.querySelector("#calc");
const bmiEl = document.querySelector("#result .bmi");

calcEl.addEventListener("click", () => {
    let weight = weightEl.value;
    let height = heightEl.value;

    let bmi = getBmi(height, weight);

    if (bmi == Infinity || isNaN(bmi)) {
        bmiEl.innerText = "輸入錯誤";
        return;
    }

    bmiEl.innerText = bmi;
    bmiEl.classList.remove("has-text-danger");
    bmiEl.classList.remove("has-text-success");
    let comment = "";
    if (bmi < 18.5) {
        comment = "體重過輕!";
    } else if (bmi >= 18.5 && bmi < 24) {
        bmiEl.classList.add("has-text-success");
        comment = "標準身材!";
    } else if (bmi >= 24 && bmi < 27) {
        bmiEl.classList.add("has-text-danger");
        comment = "有點過重囉!";
    } else {
        bmiEl.classList.add("has-text-danger");
        comment = "真的胖!要開始減肥囉!";
    }
    document.querySelector("#result .comment").innerText = comment;
});


function getBmi(height, weight, point = 2) {
    return (weight / (height / 100) ** 2).toFixed(point);
}



