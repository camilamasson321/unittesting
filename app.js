const sum = (a,b)=> {
    return a + b
}

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar (euro) {
    return euro * oneEuroIs['USD']
}

function fromDollarToYen(dollar){
    return dollar / oneEuroIs['USD']* oneEuroIs['JPY']
}


function fromYentoPound(yen){
    return yen /oneEuroIs['JPY'] * oneEuroIs ['GBP']
}

module.exports = { 
    sum:sum,
    fromEuroToDollar:fromEuroToDollar,
    fromDollarToYen:fromDollarToYen,
    fromYentoPound:fromYentoPound,
};

