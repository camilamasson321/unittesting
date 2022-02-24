const { fromEuroToDollar, fromDollarToYen, fromYentoPound } = require('./app.js')

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
test ("100 dollar should be ~10658 yens", ()=>{
    const yens = fromDollarToYen(100)

    const expected =(100/1.2)*127.9
    expect(yens).toBe(expected)
})
test ("100 yen should be ~.6255 pounds", ()=>{
    const pounds = fromYentoPound(100)

    const expected =(100/127.9)*0.8
    expect(pounds).toBe(expected)
})