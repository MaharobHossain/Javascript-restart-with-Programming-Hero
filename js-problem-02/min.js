// cheap prices find in js logic
const prices = [20000, 50000, 37000, 100000, 26000, 58000, 16000];

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}
const cheap = getMin(prices);
console.log("The cheapest price is:", cheap);
