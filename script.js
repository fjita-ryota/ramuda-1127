// function greet(name) {
//     console.log('Hello ${name}');
//     console.log('Hello ${name}');
//     console.log('Hello ${name}');
// }

// if (bmi(1.7,50) > 22) {
//     console.log("デブ");
// } else {
//     console.log("ガリ");
// }

function bmi(h,w) {
    const result = w / h**2 ;
    //処理
    return result;
}
function calc() {
    document.querySelector("#step1").classList.add("d-none");
    document.querySelector("#step2").classList.remove("d-none");
}

function back() {
    document.querySelector("#step1").classList.remove("d-none");
    document.querySelector("#step2").classList.add("d-none");
}
