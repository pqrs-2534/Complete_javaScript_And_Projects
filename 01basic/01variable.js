const accountId=144;
let accountEmail ="sandeep@gmail.com";
var accountPassword="2005"
accountCity="jaipur" //it is also method of declare variable in javascript but it is not good for best programming
let accountState;
//accountId=2 //not allowed

//constant are not change

//console.log(accountId)
accountEmail="abc@gmail.com"
accountPassword="212121"
accountCity="Bengaluru"
console.log(accountEmail)
/*
prefer not to use var
because of issue in block scope
and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])