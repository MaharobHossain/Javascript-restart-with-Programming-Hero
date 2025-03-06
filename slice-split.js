//_________Slice mane kono akta part variable theke newa_________

const school = "Bahadurpur High School ";
const part = school.slice(16,23);
console.log(part);




//_________Split use in js_________

const nam = "Maharob Hossain";
console.log(nam.split(' '));
console.log(nam.split("a"));

const friendsStr = "Kiminal,kasem,alaa,bati,daimul";
const friends = friendsStr.split(",");
console.log(friends);

//_________joint use in js_________

const realFriend = [ 'Kiminal', 'kasem', 'alaa', 'bati', 'daimul' ];
console.log(realFriend.join());
console.log(realFriend.join(' ! '));
console.log(realFriend.join('-'));