let celsius = document.querySelector('.celsius > input')
let fahrenheit = document.querySelector('.fahrenheit > input')

let bt = document.querySelector('.button button')
function roundNumber(number){
    return Math.round(number*100)/100
}

celsius.addEventListener('input',function(){
    let ct=parseFloat(celsius.value)
    let ft=(ct*(9/5)) + 32

    fahrenheit.value = roundNumber(ft)
})

fahrenheit.addEventListener('input',function(){
    let ft = parseFloat(fahrenheit.value)
    let ct = (ft-32) * (5/9)
    
    

    celsius.value = roundNumber(ct)
})

bt.addEventListener('click',()=>{
    celsius.value=""
    fahrenheit.value=""
})