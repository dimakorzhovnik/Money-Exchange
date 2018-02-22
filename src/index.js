module.exports = function makeExchange(currency) {
    let  value = {
        "H": 50,
        "Q": 25,
        "D": 10,
        "N": 5,
        "P": 1
    }

    let result = {};

    if(currency > 10000 ){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
 
    
    for(let key in  value){
        let tmp = Math.floor(currency /  value[key]);
        if(tmp > 0){
            result[key] = tmp;
        }
        currency = currency %  value[key] ;
    }    
    return result;
 }