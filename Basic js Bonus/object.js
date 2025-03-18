
const student = {
    name: "Maharob",
    id: 53789,
    address: "Uttara Dhaka",
    isStudent: true,
    friends: ['Daimul', 'kiminal', 'Bati', 'Kasem', 'Lalaa'],
    movie:[{name:"Tiger", budget:"200Cr Rupe"}, {name:"Dangal", budget:"150Cr Rupe"}],
    car: {
        brand: "Toyota",
        model: 'mark ||',
        price: 1000000,
        year: 1992,
        manufacturer: {
            name:"Toyota",
            CEO: "Maharob Hossain",
            made: "Made in Bangladesh"
        }
    }
}


console.log(student.car.manufacturer.CEO);