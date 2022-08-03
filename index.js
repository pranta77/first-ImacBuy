const memoryCost = document.getElementById('extra-memo');
const storageCost = document.getElementById('extra-stor');
const deliveryCost = document.getElementById('deli-charge');

document.getElementById('8gb-memory').addEventListener('click', function(){
    memoryCost.innerText = '0';
    getTotal()
})
document.getElementById('16gb-memory').addEventListener('click', function(){
    memoryCost.innerText = '180';
    getTotal()
})
document.getElementById('256gb-storge').addEventListener('click', function(){
    storageCost.innerText = '0';
    getTotal()
})
document.getElementById('512gb-storge').addEventListener('click', function(){
    storageCost.innerText = '100';
    getTotal()
})
document.getElementById('1tb-storge').addEventListener('click', function(){
    storageCost.innerText = '180';
    getTotal()
})
document.getElementById('free-deliver').addEventListener('click', function(){
    deliveryCost.innerText = '0';
    getTotal()
})
document.getElementById('paid-deliver').addEventListener('click', function(){
    deliveryCost.innerText = '50';
    getTotal()
})

function getTotal(){
    const memoryValue = parseFloat(memoryCost.innerText);
    const storageValue = parseFloat(storageCost.innerText);
    const deliveryValue = parseFloat(deliveryCost.innerText);
    const total = memoryValue + storageValue + deliveryValue +1299;
    document.getElementById('Total-price').innerText = total;
    document.getElementById('total-cost').innerText = total;
     console.log(memoryValue);
     console.log(storageValue );
     console.log( deliveryValue );
}

// let totalPrice = getTotal();


document.getElementById('cupon-apply').addEventListener("click", function() {
    let updatePrice = document.getElementById ("total-cost")
    let finalPrice = parseFloat (updatePrice.innerText);
    let promo = document.getElementById ("cupon-input")
    let promoCode = promo.value
    if (promoCode==="pranta") {
      let finalCost = finalPrice - ((finalPrice*10)/100)
      updatePrice.innerText = finalCost
    }else{
        return 0
    }
})