const wrapper = document.getElementById("wrapper");
const wrapperOut = document.getElementById("wrapperOut");
let mouseover = 0;
wrapper.addEventListener("mouseover", (event) => {
    mouseover = 1;
});
wrapper.addEventListener("mouseout", (event) => {
    mouseover = 0;
});
const uniqueRand = (min, max, prev) => {
    let next = prev;
    if(mouseover === 1) {
        return prev;
    }
    while(prev === next) next = rand(min, max);
    
    return next;
  }

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const combinations = [
    { config : 1, roundness : 1 },
    { config : 1, roundness : 2 },
    { config : 1, roundness : 4 },
    { config : 2, roundness : 2 },
    { config : 2, roundness : 3 },
    { config : 3, roundness : 3 }
];

let prev = 0;



setInterval(() => {
    const index = uniqueRand(0, combinations.length - 1, prev),
        combination = combinations[index];

    

    wrapper.dataset.config = combination.config;
    wrapper.dataset.roundness = combination.roundness;
    wrapperOut.dataset.config = wrapperOut.dataset.config === "2" ? "1" : "2"

    prev = index;

}, 3000);