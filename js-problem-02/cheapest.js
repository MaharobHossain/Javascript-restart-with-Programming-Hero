// find cheapest prices 

const phones = [
    {name:"Samsung", model:"S25 Ultra", Price:125000, camera: "80-PX", Battery:"7000 AMP"},
    {name:"Vivo", model:"Z20 Ultra", Price:25000, camera: "50-PX", Battery:"5000 AMP"},
    {name:"Iphone", model:"15 Pro Max", Price:155000, camera: "90-PX", Battery:"7000 AMP"},
    {name:"Redmi", model:"GH22 Ultra", Price:29000, camera: "70-PX", Battery:"6000 AMP"},
    {name:"Realme", model:"C25s", Price:20000, camera: "50-PX", Battery:"5000 AMP"}
];

function getCheapestPhone(phones){

    let min = phones[0];
    for(const phone of phones){
        if(phone.Price < min.Price){
            min = phone;
        }
    }
    return min;
}

const cheap = getCheapestPhone(phones);
console.log("The cheapest price phone is:", cheap);
