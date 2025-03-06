//____________Use of trim & space______________

const pani = " water   ";
const joll = "   water";

// if( pani.trimEnd() === joll.trimStart() ){
    if( pani.trim() === joll.trim() ){
    console.log("ami pani khabo nah");
}
else{
    console.log("ami pani khabo");
}