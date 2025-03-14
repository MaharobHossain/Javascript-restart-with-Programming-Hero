//  Arrayr moddhe same valu thakle akta niaa baki gulo bade diaa dewa.

const biriyaniKhor = ['Bati', 'Daimul', 'Kasem', 'Kiminal', 'Alaa', 'Kasem', 'Bati', 'Daimul'];
const seriulNumber = [33, 45, 67, 94, 33, 67, 45];

function noDuplicate(array){

    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(biriyaniKhor);
console.log(uniqueArray);
const uniqueArray2 = noDuplicate(seriulNumber);
console.log(uniqueArray2);