// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let result = {};

    if (currency > 10000){
        error: "You are rich, my friend! We don't have so much coins for exchange"
    } 

    while(currency > 0){
        if (currency / 50 >= 1){ //H
            
                }

        else if (currency / 25 >= 1){ //Q
                    
                }
                
        else if (currency / 15 >= 1){ //D
                    
                }

        else if (currency / 10 >= 10){ //N
                    
                }

        else {  //P
               result.P = Math.fround(currency / 1);
               currency = currency % 1;     
                }


    }
    return result;
}
