const submitBtn = document.querySelector("#btn");
const rateBtn1 = document.querySelector("#rateBtn1");
const rateBtn2 = document.querySelector("#rateBtn2");

const rateBtn3 = document.querySelector("#rateBtn3");

const rateBtn4 = document.querySelector("#rateBtn4");
const rateBtn5 = document.querySelector("#rateBtn5");

const container = document.querySelector("#container");
let rating = 0;

console.log(container);

console.log(submitBtn);

rateBtn1.addEventListener("click", function chooseRating() {
    rating = rateBtn1.value;
    console.log(rating);
});

rateBtn2.addEventListener("click", function chooseRating() {
    rating = rateBtn2.value;
    console.log(rating);
});

rateBtn3.addEventListener("click", function chooseRating() {
    rating = rateBtn3.value;
    console.log(rating);
});

rateBtn4.addEventListener("click", function chooseRating() {
    rating = rateBtn4.value;
    console.log(rating);
});

rateBtn5.addEventListener("click", function chooseRating() {
    rating = rateBtn5.value;
    console.log(rating);
});

function showRatingPage() {
    console.log("Something");
    if (rating == 0) {
        alert("Please Click Rating Value");
    } else {
        container.innerHTML = `<div class="bg-gray-800 w-2/5 h-1/2 flex flex-col justify-center items-center py-1 px-9 gap-7 rounded-3xl">
    <div class="star-div w-fit flex justify-center items-center">
        <img src="../assets/illustration-thank-you.svg" alt="" />
    </div>
    <div class="msg rounded-full text-[#FC7613] bg-gray-700 px-4 py-1">You Selected ${rating} out of 5</div>
    <h1 class="text-slate-50 text-2xl text-center">Thank You!</h1>
    <p class="text-slate-400 text-base text-center">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
</div>
}`;
    }
}