var Fake_Manish = 'This is a fake version of Manish !';
var Real_Manish = 'This is a real version of Manish !';

[Fake_Manish, Real_Manish] = [Real_Manish, Fake_Manish];

console.log(`After Changing : \n`);
console.log(`Fake Manish : ${Fake_Manish}`);
console.log(`Real Manish : ${Real_Manish}`);


var Both_Manish = [...Real_Manish, ...Fake_Manish]