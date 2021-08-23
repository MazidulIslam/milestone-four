// function declaration 
function startFan() {
    console.log('walk towards the switch');
    console.log('press the switch');

}
// call the function
startFan();

function bringSingara(taka) {
    console.log('singara er jonno dise: ', taka, 'taka');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    console.log('You will get total singara', singaraQuantity, 'pc')
    return singaraQuantity;
}
var money = 250;
var singara = bringSingara(money); //called function value put into singara variable. 
                                    //here money is the variable value which was sent to the parameter.