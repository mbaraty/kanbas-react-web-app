function FindIndex () {
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2', 'string3'];

const fourIndex = numberArray1.findIndex(a => a === 4);
const string3Index = stringArray1.findIndex(a => a === 'string3');

return <div>
    <h3>Find index</h3>
    fourIndex = {fourIndex} <br />
    string3Index = {string3Index} <br />
</div> 
}

export default FindIndex